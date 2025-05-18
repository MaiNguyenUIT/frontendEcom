// order-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderDataService {
  private shippingAddressSubject = new BehaviorSubject<any>(null);
  shippingAddress$ = this.shippingAddressSubject.asObservable();

  setShippingAddress(data: any): void {
    this.shippingAddressSubject.next(data);
  }

  getShippingAddress(): any {
    return this.shippingAddressSubject.getValue();
  }

  clear(): void {
    this.shippingAddressSubject.next(null);
  }
}
