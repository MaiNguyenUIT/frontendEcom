import { Component, Input, Output, EventEmitter } from "@angular/core"
import type { Category } from "../../models/entity/Product"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-category-sidebar",
  templateUrl: "./category-sidebar.component.html",
  imports: [CommonModule],
})
export class CategorySidebarComponent {
  @Input() categories: Category[] = []
  @Output() categorySelect = new EventEmitter<number>()

  selectCategory(categoryId: number): void {
    this.categorySelect.emit(categoryId)
  }
}
