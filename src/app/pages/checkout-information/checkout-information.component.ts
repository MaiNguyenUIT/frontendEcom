import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms"
import { Router, RouterModule } from "@angular/router"
import { CartSummary } from "../../models/entity/Cart"
import { CartService } from "../../services/cartService/cart.service"
import { CartItemResponse } from "../../models/response/CartItemResponse"
import { CartResponse } from "../../models/response/CartResponse"
import { OrderDataService } from "../../services/dataService/OrderDataService"
import { CartSummaryDataService } from "../../services/dataService/CartSummaryDataService"
import { CartDataService } from "../../services/dataService/CartData"

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout-information.component.html",
  styleUrls: ["./checkout-information.component.css"],
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
})
export class CheckoutInformationComponent {
  checkoutForm: FormGroup

  // Order summary data
  cartSummary: CartSummary = {
    subtotal: 0,
    discount: 0,
    total: 0
  };
  cart : CartResponse | undefined
  totalProduct : number = 0
  cartItems: CartItemResponse[] = []

  constructor(private fb: FormBuilder, private cartService : CartService, private router : Router, private orderDataService : OrderDataService, 
    private cartSummaryDataService : CartSummaryDataService, private cartDataService : CartDataService) {
    this.checkoutForm = this.fb.group({
      name: ["", Validators.required],
      street: ["", Validators.required],
      district: ["", Validators.required],
      province: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
  }

  ngOnInit(): void {
    this.cartSummary = this.cartSummaryDataService.getCartSummary()
    this.cartItems = this.cartDataService.getCart().cartItems || []
    this.totalProduct = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    // this.cartService.getCartItems().subscribe({
    //   next: (cart) => {
    //     this.cart = cart;
  
    //     // Initialize cartSummary with default values
    //     this.cartSummary = {
    //       subtotal: 0,
    //       discount: 0,
    //       total: 0
    //     };
  
    //     if (cart?.cartItems?.length) {
    //       this.cartSummary.subtotal = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
    //         const price = item.price ?? 0;
    //         const quantity = item.quantity ?? 0;
    //         return acc + price * quantity;
    //       }, 0); // Initial value of 0 ensures acc is number
          
    //       this.cartSummary.discount = 0;
    //       this.cartSummary.total = this.cartSummary.subtotal - this.cartSummary.discount;
    //       this.totalProduct = cart.cartItems.reduce((acc: number, item : CartItemResponse) => {
    //         const quantity = item.quantity ?? 0;
    //         return acc + quantity;
    //       }, 0); // Initial value of 0 ensures acc is number
    //     }
    //   },
    //   error: (error) => {
    //     console.error('Failed to fetch cart items:', error);
    //     this.cartSummary = {
    //       subtotal: 0,
    //       discount: 0,
    //       total: 0
    //     };
    //   }
    // });
    
  }

  placeOrder(): void {
    if (this.checkoutForm.valid) {
    const shippingAddress = this.checkoutForm.value;

    this.orderDataService.setShippingAddress(shippingAddress);

    this.router.navigate(['/checkout']);
  } else {
    this.checkoutForm.markAllAsTouched();
  }
  }
}
