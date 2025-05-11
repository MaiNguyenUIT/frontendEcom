import { CommonModule } from "@angular/common"
import { Component, Input, Output, EventEmitter } from "@angular/core"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-quantity-input",
  template: `
    <div class="flex items-center">
      <button 
        (click)="decrement()" 
        [disabled]="value <= min"
        [ngClass]="value <= min ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'"
        class="w-9 h-9 flex items-center justify-center rounded-l-lg focus:outline-none transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
      </button>
      
      <input 
        type="number" 
        [min]="min" 
        [max]="max" 
        [(ngModel)]="value" 
        (change)="onInputChange()"
        class="w-14 h-9 text-center border-y border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
      >
      
      <button 
        (click)="increment()" 
        [disabled]="value >= max"
        [ngClass]="value >= max ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'"
        class="w-9 h-9 flex items-center justify-center rounded-r-lg focus:outline-none transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  `,
  imports: [CommonModule, FormsModule],
})
export class QuantityInputComponent {
  @Input() min = 1
  @Input() max = 100
  @Input() value = 1
  @Output() valueChange = new EventEmitter<number>()

  increment(): void {
    if (this.value < this.max) {
      this.value++
      this.emitChange()
    }
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value--
      this.emitChange()
    }
  }

  onInputChange(): void {
    // Ensure value is within bounds
    if (this.value < this.min) {
      this.value = this.min
    } else if (this.value > this.max) {
      this.value = this.max
    }

    this.emitChange()
  }

  private emitChange(): void {
    this.valueChange.emit(this.value)
  }
}
