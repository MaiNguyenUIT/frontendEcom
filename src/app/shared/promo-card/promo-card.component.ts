import { Component } from "@angular/core"

@Component({
  selector: "app-promo-card",
  templateUrl: "./promo-card.component.html",
})
export class PromoCardComponent {
  addToCart(): void {
    console.log("Added Apple Watch to cart")
  }

  viewDetails(): void {
    console.log("View Apple Watch details")
  }
}
