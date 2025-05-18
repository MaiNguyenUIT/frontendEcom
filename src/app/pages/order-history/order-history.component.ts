import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { OrderService } from "../../services/orderService/order.service"
import { OrderResponse } from "../../models/response/OrderResponse"

interface Order {
  id: string
  status: "ĐANG TIẾN HÀNH" | "HOÀN THÀNH" | "THẤT BẠI" | "COMPLETED"
  date: string
  price: string
  itemCount: number
}

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"],
  imports: [FormsModule, CommonModule, RouterModule],
})
export class OrderHistoryComponent {
  constructor(private orderService : OrderService) {}

  orders: OrderResponse[] = []

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getUserOrder().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Failed to fetch orders:', err)
    });
  }

  viewOrderDetails(orderId: number): void {
    console.log(`Viewing details for order: ${orderId}`)
  }
}
