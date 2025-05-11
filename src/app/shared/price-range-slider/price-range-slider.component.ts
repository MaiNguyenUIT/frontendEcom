import { Component, Input, Output, EventEmitter, type OnInit } from "@angular/core"

@Component({
  selector: "app-price-range-slider",
  templateUrl: "./price-range-slider.component.html",
})
export class PriceRangeSliderComponent implements OnInit {
  @Input() initialMin = 0
  @Input() initialMax = 1000
  @Input() min = 0
  @Input() max = 1000
  @Output() rangeChange = new EventEmitter<{ min: number; max: number }>()

  currentMin = 0
  currentMax = 1000

  ngOnInit(): void {
    this.currentMin = this.initialMin
    this.currentMax = this.initialMax
  }

  onMinChange(event: Event): void {
    const value = +(event.target as HTMLInputElement).value
    this.currentMin = value > this.currentMax ? this.currentMax : value
    this.emitChange()
  }

  onMaxChange(event: Event): void {
    const value = +(event.target as HTMLInputElement).value
    this.currentMax = value < this.currentMin ? this.currentMin : value
    this.emitChange()
  }

  emitChange(): void {
    this.rangeChange.emit({
      min: this.currentMin,
      max: this.currentMax,
    })
  }

  get minPercentage(): number {
    return (this.currentMin / this.max) * 100
  }

  get maxPercentage(): number {
    return (this.currentMax / this.max) * 100
  }

  get rangeWidth(): number {
    return this.maxPercentage - this.minPercentage
  }
}
