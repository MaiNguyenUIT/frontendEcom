import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-promo-banner",
  templateUrl: "./promo-banner.component.html",
  styleUrls: ["./promo-banner.component.css"],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class PromoBannerComponent {
  @Input() title = ""
  @Input() subtitle = ""
  @Input() description = ""
  @Input() bgColor = ""
  @Input() textColor = ""
  @Input() buttonText = ""
  @Input() showCircleButton = false
}
