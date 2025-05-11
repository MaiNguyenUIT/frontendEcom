import { Component } from "@angular/core"

@Component({
  selector: "app-wishlist-button",
  template: `
    <button 
      (click)="addToWishlist($event)" 
      class="w-9 h-9 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors shadow-md"
      title="Add to Wishlist"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  `,
})
export class WishlistButtonComponent {
  addToWishlist(event: Event): void {
    event.stopPropagation()
    console.log("Added to wishlist")
  }
}
