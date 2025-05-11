import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-product-thumbnail",
  template: `
    <div 
      [ngClass]="isSelected ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200 hover:border-gray-300'"
      class="w-16 h-16 rounded-lg border overflow-hidden cursor-pointer transition-all flex-shrink-0"
    >
      <img [src]="image" alt="Product thumbnail" class="w-full h-full object-contain p-1">
    </div>
  `,
  imports: [CommonModule],
})
export class ProductThumbnailComponent {
  @Input() image = ""
  @Input() isSelected = false
}
