export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CartSummary {
  subtotal: number
  discount: number
  total: number
}

export interface PaymentMethod {
  id: string
  name: string
}