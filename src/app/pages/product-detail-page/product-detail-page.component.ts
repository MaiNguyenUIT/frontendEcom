import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, RouterModule } from "@angular/router"
import { ProductService } from "../../services/productService/product.service"
import { Product, RelatedProduct } from "../../models/entity/Product"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { CartService } from "../../services/cartService/cart.service"
import { CartItemDTO } from "../../models/request/CartItemDTO"

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.css"],
  imports: [CommonModule, RouterModule, FormsModule],
  standalone: true,
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | null = null
  relatedProducts: RelatedProduct[] = []
  selectedImage = 0
  quantity = 1
  activeTab = "description"

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: RouterModule,
    private cartService: CartService,

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = String(params.get("id"))
      this.loadProduct(productId)

    })
  }

  loadProduct(productId: String): void {
    this.productService.getProductById(productId).subscribe((product) => {
      console.log(product)
      this.product = product
      this.selectedImage = 0
    })
  }


  selectImage(index: number): void {
    this.selectedImage = index
  }

  onQuantityChange(quantity: number): void {
    this.quantity = quantity
  }

  addToCart(productId : string): void {
      const cartItem: CartItemDTO = {
        productId: productId,
      }
      this.cartService.addItemToCart(cartItem).subscribe((response) => {
        console.log("Added to cart:", response)
        alert('✅ Sản phẩm đã được thêm vào giỏ hàng!');
      })
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

  decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }

}
  increaseQuantity() {
  // if (this.quantity < this.product.quantity) {
  //   this.quantity++;
  // }
}

}
