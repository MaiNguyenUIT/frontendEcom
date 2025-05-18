import { ShippingAddress } from "../entity/ShippingAddress";

export interface OrderDTO {
  coupon: string;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
}

export type PaymentMethod = 'OFFLINE' | 'ONLINE';