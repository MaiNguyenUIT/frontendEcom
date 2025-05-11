import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-star-rating",
  template: `
    <div class="flex items-center mt-2">
      <ng-container *ngFor="let star of stars; let i = index">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          [ngClass]="i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </ng-container>
    </div>
  `,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class StarRatingComponent {
  @Input() rating = 0
  stars = Array(5)
}
