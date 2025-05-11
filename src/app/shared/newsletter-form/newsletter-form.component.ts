import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-newsletter-form",
  templateUrl: "./newsletter-form.component.html",
  styleUrls: ["./newsletter-form.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class NewsletterFormComponent {
  newsletterForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      console.log("Subscribing with email:", this.newsletterForm.value.email)
      // Here you would typically call a service to handle the subscription
      this.newsletterForm.reset()
    }
  }
}
