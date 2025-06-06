import { CommonModule } from "@angular/common"
import { Component, Input, Output, EventEmitter } from "@angular/core"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-search-bar",
  template: `
    <div class="relative w-full max-w-md">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input 
        type="text" 
        [(ngModel)]="searchValue" 
        (input)="onInput()"
        placeholder="Tìm kiếm sản phẩm" 
        class="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
      <button 
        *ngIf="searchValue" 
        (click)="clearSearch()" 
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  `,
  imports: [CommonModule, FormsModule]
})
export class SearchBarComponent {
  @Input() set query(value: string) {
    this.searchValue = value
  }

  @Output() searchChange = new EventEmitter<string>()

  searchValue = ""

  onInput(): void {
    this.searchChange.emit(this.searchValue)
  }

  clearSearch(): void {
    this.searchValue = ""
    this.searchChange.emit("")
  }
}
