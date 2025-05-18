import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-quick-view-button",
  template: `
    <button 
      (click)="quickView()" 
      class="w-9 h-9 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors shadow-md"
      title="Quick View"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </button>
  `,
})
export class QuickViewButtonComponent {
  @Input () id!: String
  constructor(private router : Router) {}
  quickView(): void {
    this.router.navigate(['/product-detail', this.id]);
  }
}
