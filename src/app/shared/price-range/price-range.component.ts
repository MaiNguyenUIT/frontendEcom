import { CommonModule } from "@angular/common"
import { Component, Input, Output, EventEmitter, type OnInit } from "@angular/core"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { debounceTime } from "rxjs/operators"

@Component({
  selector: "app-price-range",
  templateUrl: "./price-range.component.html",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PriceRangeComponent implements OnInit {
  @Input() min = 0
  @Input() max = 1000
  @Output() rangeChange = new EventEmitter<{ min: number; max: number }>()

  priceForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.priceForm = this.fb.group({
      minPrice: [this.min],
      maxPrice: [this.max],
    })
  }

  ngOnInit(): void {
    this.priceForm.patchValue({
      minPrice: this.min,
      maxPrice: this.max,
    })

    this.priceForm.valueChanges.pipe(debounceTime(500)).subscribe((values) => {
      if (values.minPrice <= values.maxPrice) {
        this.rangeChange.emit({
          min: values.minPrice,
          max: values.maxPrice,
        })
      }
    })
  }
}
