import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartSummaryDataService {
  private cartSummarySubject = new BehaviorSubject<any>(null);
  cartSummarySubject$ = this.cartSummarySubject.asObservable();

  setCartSummary(data: any): void {
    this.cartSummarySubject.next(data);
  }

  getCartSummary(): any {
    return this.cartSummarySubject.getValue();
  }

  clear(): void {
    this.cartSummarySubject.next(null);
  }
}