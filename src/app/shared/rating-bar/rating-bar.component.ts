import { Component, Input } from "@angular/core"

@Component({
  selector: "app-rating-bar",
  template: `
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 w-12">
        <span class="text-xs text-gray-600">{{ stars }}</span>
        <svg class="w-3 h-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      
      <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          class="h-full bg-yellow-400" 
          [style.width.%]="percentage"
        ></div>
      </div>
      
      <div class="w-8 text-xs text-gray-500 text-right">{{ count }}</div>
    </div>
  `,
})
export class RatingBarComponent {
  @Input() stars = 5
  @Input() count = 0
  @Input() total = 0

  get percentage(): number {
    return this.total > 0 ? (this.count / this.total) * 100 : 0
  }
}
