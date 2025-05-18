import { CommonModule } from "@angular/common"
import { Component, type OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { Router, RouterModule } from "@angular/router"
import { CartSummary } from "../../models/entity/Cart"
import { CartSummaryDataService } from "../../services/dataService/CartSummaryDataService"
import { CartItemResponse } from "../../models/response/CartItemResponse"
import { CartDataService } from "../../services/dataService/CartData"
import { OrderDTO } from "../../models/request/OrderDTO"
import { OrderService } from "../../services/orderService/order.service"
import { OrderDataService } from "../../services/dataService/OrderDataService"



@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItemResponse[] = []

  constructor(private router : Router, private cartSummaryDataService : CartSummaryDataService, private cartDataService : CartDataService, 
    private orderService : OrderService, private orderDataService : OrderDataService) {}

  cartSummary: CartSummary = {
      subtotal: 0,
      discount: 0,
      total: 0
    };
  
  orderDTO : OrderDTO = {
    coupon : "",
    shippingAddress : {
      name: "",
      street: "",
      district: "",
      province: "",
      phone: "",
    },
    paymentMethod: "OFFLINE"
  }
  
  totalProduct : number = 0
  ngOnInit(): void {
    // Initialize cart items
    this.cartItems = this.cartDataService.getCart().cartItems || []
    this.totalProduct = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartSummary = this.cartSummaryDataService.getCartSummary()

  }

  placeOrder(): void {
    this.orderDTO.shippingAddress = this.orderDataService.getShippingAddress()
    this.orderDTO.coupon = "Not used"
    console.log("Order DTO:", this.orderDTO)
    this.orderService.createOrder(this.orderDTO).subscribe({
      next: (response) => {
        console.log("Order placed successfully:", response)
        // Handle successful order placement (e.g., navigate to order confirmation page)
      alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
      this.router.navigate(['/order-history']);
      }
      , error: (error) => {
        console.error("Error placing order:", error)
        // Handle error (e.g., show error message to user)
      }

      
    // Implement order placement logic
  })}
}
