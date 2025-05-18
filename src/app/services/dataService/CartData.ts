import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartDataService {
  private cartSubject = new BehaviorSubject<any>(null);
  cartSubject$ = this.cartSubject.asObservable();

  setCart(data: any): void {
    this.cartSubject.next(data);
  }

  getCart(): any {
    return this.cartSubject.getValue();
  }

  clear(): void {
    this.cartSubject.next(null);
  }
}