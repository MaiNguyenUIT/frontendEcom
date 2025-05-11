import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListingPageComponent } from './pages/product-listing-page/product-listing-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main-page', component: ProductListingPageComponent },
    { path: 'product-detail', component: ProductDetailPageComponent },
    { path: '**', redirectTo: '' }
];
