import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, RouterModule } from "@angular/router"
import { ProductService } from "../../services/product.service"
import { Product, Review, RelatedProduct } from "../../models/Product"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.css"],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | null = null
  reviews: Review[] = []
  relatedProducts: RelatedProduct[] = []
  selectedImage = 0
  quantity = 1
  activeTab = "description"

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get("id"))
      this.loadProduct(productId)
      this.loadReviews(productId)
      this.loadRelatedProducts(productId)
    })
  }

  loadProduct(productId: number): void {
    this.productService.getProduct(0).subscribe((product) => {
      this.product = product
      this.selectedImage = 0
    })
  }

  loadReviews(productId: number): void {
    this.productService.getReviews(productId).subscribe((reviews) => {
      this.reviews = reviews
    })
  }

  loadRelatedProducts(productId: number): void {
    this.productService.getRelatedProducts(productId).subscribe((products) => {
      this.relatedProducts = products
    })
  }

  selectImage(index: number): void {
    this.selectedImage = index
  }

  onQuantityChange(quantity: number): void {
    this.quantity = quantity
  }

  addToCart(): void {
    if (this.product) {
      console.log(`Added ${this.quantity} of ${this.product.name} to cart`)
      // Implement actual cart functionality here
    }
  }

  buyNow(): void {
    if (this.product) {
      console.log(`Buy now: ${this.quantity} of ${this.product.name}`)
      // Implement actual buy now functionality here
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  getRatingPercentage(rating: number): number {
    return (rating / 5) * 100
  }
}
