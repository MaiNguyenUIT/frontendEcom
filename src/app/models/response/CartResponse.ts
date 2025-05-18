import { CartItemResponse } from "./CartItemResponse"; // hoặc định nghĩa trực tiếp trong file nếu cần

export interface CartResponse {
  id: string;
  totalPrice: number;
  cartItems: CartItemResponse[];
  totalItem: number;
  userId: string;
}
