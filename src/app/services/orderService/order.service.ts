import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../models/request/OrderDTO';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiAdminUrl = `${environment.apiUrl}/admin/order`;
  private apiSellerUrl = `${environment.apiUrl}/seller/order`;
  private apiUserUrl = `${environment.apiUrl}/order`;
  constructor(private http : HttpClient) { }

  createOrder(orderDTO : OrderDTO): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUserUrl}`, orderDTO, {headers}).pipe();
  }

  getUserOrder(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUserUrl}`, {headers}).pipe();
  }

  getOrderById(id : number): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    return this.http.get(`${this.apiUserUrl}/${id}`, {headers}).pipe();
  }

  cancelOrder(orderId : number): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(`${this.apiUserUrl}/${orderId}`, {headers}).pipe();
  }

  getAllOrder(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiAdminUrl}`, {headers}).pipe();
  }

  getAllOrderBySeller(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiSellerUrl}`, {headers}).pipe();
  }

  updateOrderStatus(orderId : number, status : string): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const params = new HttpParams().set('orderId', orderId.toString()).set('status', status);

    return this.http.put(`${this.apiSellerUrl}/${orderId}`, {}, {headers, params}).pipe();
  }
}
