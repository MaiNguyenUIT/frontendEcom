import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-product-badge",
  template: `
    <div [ngClass]="badgeClasses">
      {{ text }}
    </div>
  `,
  imports: [CommonModule],
})
export class ProductBadgeComponent {
  @Input() type = ""
  @Input() text = ""

  get badgeClasses(): string {
    const baseClasses = "inline-block px-2 py-1 text-xs font-semibold rounded"

    switch (this.type) {
      case "hot":
        return `${baseClasses} bg-red-500 text-white`
      case "sale":
        return `${baseClasses} bg-green-500 text-white`
      case "best-seller":
        return `${baseClasses} bg-amber-500 text-white`
      case "discount":
        return `${baseClasses} bg-purple-600 text-white`
      default:
        return `${baseClasses} bg-gray-500 text-white`
    }
  }
}
