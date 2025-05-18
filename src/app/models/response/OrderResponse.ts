import { ShippingAddress } from "../entity/ShippingAddress";

export interface OrderResponse {
  id: number;
  userId: string;
  orderDateTime: string; // hoặc Date nếu bạn sẽ parse sang Date
  orderAmount: number;
  sellerId: string;
  orderGroupId: string | null;
  orderStatus: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'PAID' | 'FAIL'; // thêm enum nếu có
  coupon?: string;
  shippingAddress: ShippingAddress;
  paymentMethod: 'OFFLINE' | 'ONLINE'; // nếu chỉ có 2 giá trị
  orderItems: OrderItem[];
}

export interface OrderItem {
  id: number;
  productId: string;
  quantity: number;
}