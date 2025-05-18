import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { Router, RouterModule } from "@angular/router"
import { StarRatingComponent } from "../star-rating/star-rating.component"
import { Product } from "../../models/entity/Product"
import { WishlistButtonComponent } from "../wishlist-button/wishlist-button.component"
import { CartButtonComponent } from "../cart-button/cart-button.component"
import { ProductBadgeComponent } from "../product-badge/product-badge.component"
import { QuickViewButtonComponent } from "../quick-view-button/quick-view-button.component"
import { ProductDetailPageComponent } from "../../pages/product-detail-page/product-detail-page.component"

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, StarRatingComponent, 
    WishlistButtonComponent, CartButtonComponent, ProductBadgeComponent, QuickViewButtonComponent, ProductDetailPageComponent],
})
export class ProductCardComponent {
  @Input() product!: Product
  isHovered = false

  constructor(private router: Router) {}

  get formattedPrice(): string {
    return `$${this.product.price.toFixed(2)}`
  }

  get formattedOriginalPrice(): string {
    return `$${this.product.regularPrice.toFixed(2)}`
  }

  get discountPercentage(): number | null {
    if (this.product.regularPrice) {
      return Math.round(((this.product.regularPrice - this.product.price) / this.product.regularPrice) * 100)
    }
    return null
  }

  goToProductDetail(id : String): void {
    this.router.navigate(['/product-detail', id]);
  }

  // get badgeText(): string {
  //   if (this.product.isHot) return "HOT"
  //   if (this.product.isBestSeller) return "BEST SELLER"
  //   if (this.product.isSale) return "SALE"
  //   if (this.product.badge) return this.product.badge
  //   return ""
  // }

  // get badgeType(): string {
  //   if (this.product.isHot) return "hot"
  //   if (this.product.isBestSeller) return "best-seller"
  //   if (this.product.isSale) return "sale"
  //   if (this.product.badge && this.product.badge.includes("OFF")) return "discount"
  //   return ""
  // }
}
