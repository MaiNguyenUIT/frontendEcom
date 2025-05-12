import { Component, Input, Output, EventEmitter } from "@angular/core"
import type { SortOption } from "../../models/entity/Product"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-sort-selector",
  template: `
    <div class="relative">
      <select 
        [value]="selected" 
        (change)="onSortChange($event)" 
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg appearance-none bg-white"
      >
        <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  `,
  imports: [CommonModule],
})
export class SortSelectorComponent {
  @Input() options: SortOption[] = []
  @Input() selected = ""
  @Output() sortChange = new EventEmitter<string>()

  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    this.sortChange.emit(select.value)
  }
}
