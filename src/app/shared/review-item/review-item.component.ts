import { Component, Input } from "@angular/core"
import type { Review } from "../../models/Product"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-review-item",
  template: `
    <div class="border-b border-gray-200 pb-6">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-sm font-medium">
          {{ review.userInitials }}
        </div>
        <div>
          <div class="font-medium text-gray-800">{{ review.userName }}</div>
          <div class="text-xs text-gray-500">{{ review.date }}</div>
        </div>
      </div>
      
      <div class="flex mb-2">
        <svg *ngFor="let i of [1, 2, 3, 4, 5]" 
             [ngClass]="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
             class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      
      <p class="text-gray-600">{{ review.comment }}</p>
    </div>
  `,
  imports: [CommonModule],
})
export class ReviewItemComponent {
  @Input() review!: Review
}
