export interface CartItemResponse {
  productId: string;
  productName: string;
  productCategory: string;
  regularPrice: number;
  price: number;
  description: string;
  image: string[];
  quantity: number;
  addedAt: string; // hoặc: Date nếu bạn muốn parse sang Date
  ownerId: string;
}
