import { Component, type OnInit } from "@angular/core"
import { CartService } from "../../services/cartService/cart.service"
import { CartItem, CartSummary, PaymentMethod } from "../../models/entity/Cart"
import { Observable } from "rxjs"
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { CartResponse } from "../../models/response/CartResponse"
import { CartItemResponse } from "../../models/response/CartItemResponse"
import { Router, RouterModule } from "@angular/router"
import { OrderDataService } from "../../services/dataService/OrderDataService"
import { CartSummaryDataService } from "../../services/dataService/CartSummaryDataService"
import { CartDataService } from "../../services/dataService/CartData"

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
})
export class CartPageComponent implements OnInit {
  cartSummary: CartSummary = {
  subtotal: 0,
  discount: 0,
  total: 0
};

  cart : CartResponse | undefined
  cartItem: CartItemResponse | undefined

  selectedPaymentMethod = "cod"

  // dit me may
  paymentMethods: PaymentMethod[] = [
    { id: "cod", name: "Thanh toán khi nhận hàng" },
    { id: "vnpay", name: "Thanh toán qua Vnpay" },
  ]

  constructor(private cartService: CartService, private router : Router, private cartSummaryDataService : CartSummaryDataService, private cartDataService : CartDataService) {
    
  }

  ngOnInit(): void {
  this.cartService.getCartItems().subscribe({
    next: (cart) => {
      this.cart = cart;

      // Initialize cartSummary with default values
      this.cartSummary = {
        subtotal: 0,
        discount: 0,
        total: 0
      };

      if (cart?.cartItems?.length) {
        this.cartSummary.subtotal = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
          const price = item.price ?? 0;
          const quantity = item.quantity ?? 0;
          return acc + price * quantity;
        }, 0); // Initial value of 0 ensures acc is number
        
        this.cartSummary.discount = 0;
        this.cartSummary.total = this.cartSummary.subtotal - this.cartSummary.discount;

        this.cartSummaryDataService.setCartSummary(this.cartSummary);
        this.cartDataService.setCart(cart);

      }
    },
    error: (error) => {
      console.error('Failed to fetch cart items:', error);
      this.cartSummary = {
        subtotal: 0,
        discount: 0,
        total: 0
      };
    }
  });
}

  onQuantityChange(productId: string, quantity: number): void {
    this.cartService.updateCartItemQuantity(productId, quantity).subscribe((response) => {
      console.log("Quantity updated successfully:", response)
      this.cartService.getCartItems().subscribe((cart) => {
        this.cart = cart
        if (cart?.cartItems?.length) {
        this.cartSummary.subtotal = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
          const price = item.price ?? 0;
          const quantity = item.quantity ?? 0;
          return acc + price * quantity;
        }, 0); // Initial value of 0 ensures acc is number
        
        this.cartSummary.discount = 0;
        this.cartSummary.total = this.cartSummary.subtotal - this.cartSummary.discount;
      }
      })
    })
  }

  onIncreaseQuantity(productId: string): void {
    this.cartService.increaseCartItemQuantity(productId).subscribe((response) => {
      console.log("Quantity increased successfully:", response)
      this.cartService.getCartItems().subscribe((cart) => { this.cart = cart
        if (cart?.cartItems?.length) {
        this.cartSummary.subtotal = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
          const price = item.price ?? 0;
          const quantity = item.quantity ?? 0;
          return acc + price * quantity;
        }, 0); // Initial value of 0 ensures acc is number
        
        this.cartSummary.discount = 0;
        this.cartSummary.total = this.cartSummary.subtotal - this.cartSummary.discount;
      }
      })
    })
  }

  onDecreaseQuantity(productId: string): void {
    this.cartService.decreaseCartItemQuantity(productId).subscribe((response) => {
      console.log("Quantity decrease successfully:", response)
      this.cartService.getCartItems().subscribe((cart) => { this.cart = cart
        if (cart?.cartItems?.length) {
        this.cartSummary.subtotal = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
          const price = item.price ?? 0;
          const quantity = item.quantity ?? 0;
          return acc + price * quantity;
        }, 0); // Initial value of 0 ensures acc is number
        
        this.cartSummary.discount = 0;
        this.cartSummary.total = this.cartSummary.subtotal - this.cartSummary.discount;
      }
      })
    })
  }

  onRemoveItem(itemId: string): void {
    console.log("Removing item with ID:", itemId)
    this.cartService.deleteCartItem(itemId)
  }

  onPaymentMethodChange(methodId: string): void {
    this.selectedPaymentMethod = methodId
  }

  onCheckout(): void {
    this.router.navigate(['/checkout-information']);
    // Implement checkout logic
  }

  formatPrice(price: number): string {
    return price.toString()
  }

  formatCurrency(price: number): string {
    return new Intl.NumberFormat("vi-VN").format(price)
  }

}
