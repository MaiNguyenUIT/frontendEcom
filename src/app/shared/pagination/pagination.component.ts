import { CommonModule } from "@angular/common"
import { Component, Input, Output, EventEmitter, type OnChanges, type SimpleChanges } from "@angular/core"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  imports: [CommonModule, RouterModule],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 1
  @Input() totalPages = 1
  @Output() pageChange = new EventEmitter<number>()

  pages: (number | string)[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this.generatePagination()
  }

  generatePagination(): void {
    this.pages = []

    if (this.totalPages <= 7) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i)
      }
    } else {
      if (this.currentPage <= 3) {
        // Near the start
        this.pages = [1, 2, 3, 4, 5, "...", this.totalPages]
      } else if (this.currentPage >= this.totalPages - 2) {
        // Near the end
        this.pages = [
          1,
          "...",
          this.totalPages - 4,
          this.totalPages - 3,
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages,
        ]
      } else {
        // Middle
        this.pages = [1, "...", this.currentPage - 1, this.currentPage, this.currentPage + 1, "...", this.totalPages]
      }
    }
  }

  goToPage(page: number | string): void {
    if (typeof page === "number" && page !== this.currentPage) {
      this.pageChange.emit(page)
    }
  }

  goToPrevious(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1)
    }
  }

  goToNext(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1)
    }
  }
}
