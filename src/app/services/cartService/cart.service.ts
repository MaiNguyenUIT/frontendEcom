import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { CartItemDTO } from '../../models/request/CartItemDTO';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { CartItemResponse } from '../../models/response/CartItemResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  private apiUrl = `${environment.apiUrl}/cart`;
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  updateCartCount(count: number) {
    this.cartItemCount.next(count);
  }

  addItemToCart(cartItem: CartItemDTO): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}`, cartItem, {headers}).pipe(
      tap(() => {
        this.getCartItems().subscribe(cart => {
          const total = cart.cartItems.reduce((sum : number, item : CartItemResponse) => sum + item.quantity, 0);
          this.updateCartCount(total);
        });
      }));
  }

  getCartItems(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  deleteUserCart(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.delete(`${this.apiUrl}/user`, { headers });
  }

  deleteCartItem(cartItemId: string): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log("cartItemId", cartItemId)
    console.log("apiUrl", `${this.apiUrl}/${cartItemId}`)
  
    return this.http.delete(`${this.apiUrl}/${cartItemId}`, { headers }).pipe(tap(() => {
        this.getCartItems().subscribe(cart => {
          const total = cart.cartItems.reduce((sum : number, item : CartItemResponse) => sum + item.quantity, 0);
          this.updateCartCount(total);
        });
      }));
  }

  updateCartItemQuantity(productId: string, quantity: number): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
     const body = { productId, quantity };
  
    return this.http.put(`${this.apiUrl}/quantity`, body, { headers }).pipe(tap(() => {
        this.getCartItems().subscribe(cart => {
          const total = cart.cartItems.reduce((sum : number, item : CartItemResponse) => sum + item.quantity, 0);
          this.updateCartCount(total);
        });
      }));
  }

  increaseCartItemQuantity(productId: string): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const params = new HttpParams()
      .set('productId', productId)
  
    return this.http.put(`${this.apiUrl}/increase`, null ,{ headers, params }).pipe(tap(() => {
        this.getCartItems().subscribe(cart => {
          const total = cart.cartItems.reduce((sum : number, item : CartItemResponse) => sum + item.quantity, 0);
          this.updateCartCount(total);
        });
      }));
  }

  decreaseCartItemQuantity(productId: string): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const params = new HttpParams()
      .set('productId', productId)
  
    return this.http.put(`${this.apiUrl}/decrease`, null, { headers, params }).pipe(tap(() => {
        this.getCartItems().subscribe(cart => {
          const total = cart.cartItems.reduce((sum : number, item : CartItemResponse) => sum + item.quantity, 0);
          this.updateCartCount(total);
        });
      }));
  }

  getSummaryCart(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}/summary`, { headers });
  }
}
