import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListingPageComponent } from './pages/product-listing-page/product-listing-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutInformationComponent } from './pages/checkout-information/checkout-information.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main-page', component: ProductListingPageComponent },
    { path: 'product-detail/:id', component: ProductDetailPageComponent },
    { path: 'cart', component:  CartPageComponent},
    { path: 'checkout', component:  CheckoutComponent},
    { path: 'checkout-information', component:  CheckoutInformationComponent},
    { path: 'order-history', component:  OrderHistoryComponent},
    { path: '**', redirectTo: '' }
];
