import { Component, Input } from "@angular/core"
import { RelatedProduct } from "../../models/Product"
import { CommonModule } from "@angular/common"
import { RelatedProductCardComponent } from "../related-product-card/related-product-card.component"

@Component({
  selector: "app-related-products",
  template: `
    <div class="mt-12">
      <h2 class="text-xl font-bold text-gray-800 mb-6">CÓ THỂ BẠN SẼ THÍCH</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <app-related-product-card 
          *ngFor="let product of products" 
          [product]="product"
        ></app-related-product-card>
      </div>
    </div>
  `,
  imports:[CommonModule, RelatedProductCardComponent]
})
export class RelatedProductsComponent {
  @Input() products: RelatedProduct[] = []
}
