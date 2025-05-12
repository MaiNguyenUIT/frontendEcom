import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { StarRatingComponent } from "../star-rating/star-rating.component"
import { Product } from "../../models/entity/Product"
import { WishlistButtonComponent } from "../wishlist-button/wishlist-button.component"
import { CartButtonComponent } from "../cart-button/cart-button.component"
import { ProductBadgeComponent } from "../product-badge/product-badge.component"
import { QuickViewButtonComponent } from "../quick-view-button/quick-view-button.component"

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, StarRatingComponent, 
    WishlistButtonComponent, CartButtonComponent, ProductBadgeComponent, QuickViewButtonComponent],
})
export class ProductCardComponent {
  @Input() product!: Product
  isHovered = false

  get formattedPrice(): string {
    return `$${this.product.price.toFixed(2)}`
  }

  get formattedOriginalPrice(): string {
    return this.product.originalPrice ? `$${this.product.originalPrice.toFixed(2)}` : ""
  }

  get discountPercentage(): number | null {
    if (this.product.originalPrice) {
      return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100)
    }
    return null
  }

  get badgeText(): string {
    if (this.product.isHot) return "HOT"
    if (this.product.isBestSeller) return "BEST SELLER"
    if (this.product.isSale) return "SALE"
    if (this.product.badge) return this.product.badge
    return ""
  }

  get badgeType(): string {
    if (this.product.isHot) return "hot"
    if (this.product.isBestSeller) return "best-seller"
    if (this.product.isSale) return "sale"
    if (this.product.badge && this.product.badge.includes("OFF")) return "discount"
    return ""
  }
}
