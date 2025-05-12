import { Component, Input } from "@angular/core"
import type { RelatedProduct } from "../../models/entity/Product"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-related-product-card",
  template: `
    <a [routerLink]="['/product', product.id]" class="block group">
      <div class="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
        <div class="aspect-square p-4 bg-gray-50">
          <img [src]="product.image" [alt]="product.name" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105">
        </div>
        
        <div class="p-3">
          <h3 class="text-sm font-medium text-gray-800 mb-1 line-clamp-1">{{ product.name }}</h3>
          <p class="text-xs text-gray-500 mb-2">{{ product.category }}</p>
          <p class="text-sm font-semibold text-indigo-600">{{ formatPrice(product.price) }}</p>
        </div>
      </div>
    </a>
  `,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class RelatedProductCardComponent {
  @Input() product!: RelatedProduct

  formatPrice(price: number): string {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }
}
