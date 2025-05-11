import { Component } from "@angular/core"

@Component({
  selector: "app-cart-button",
  template: `
    <button 
      (click)="addToCart($event)" 
      class="w-9 h-9 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors shadow-md"
      title="Add to Cart"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </button>
  `,
})
export class CartButtonComponent {
  addToCart(event: Event): void {
    event.stopPropagation()
    console.log("Added to cart")
  }
}
