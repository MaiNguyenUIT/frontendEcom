import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CategoryCardComponent } from "../../shared/category-card/category-card.component"
import { NewsletterFormComponent } from "../../shared/newsletter-form/newsletter-form.component"
import { PromoBannerComponent } from "../../shared/promo-banner/promo-banner.component"
import { ProductCardComponent } from "../../shared/product-card/product-card.component"
import { ProductService } from "../../services/productService/product.service"
import type { Product, Category } from "../../models/entity/Product"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, CategoryCardComponent, NewsletterFormComponent, PromoBannerComponent, ProductCardComponent],
})
export class HomeComponent {
  products: Product[] = []
  categories: Category[] = []
  
  constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.loadProducts()
      this.loadCategories()
      // this.loadProductCount()
    }
  
    loadProducts(): void {
      this.productService.getAllProducts().subscribe((products) => {
        this.products = products
      })
    }
  
    loadCategories(): void {
      this.productService.getCategories().subscribe((categories) => {
        this.categories = categories
      })
    }

  featuredProducts = [
  {
    id: 1,
    image: "/assets/placeholder.svg",
    name: "Đồng hồ đo vạn năng",
    price: 450000,
    originalPrice: 550000,
    isNew: false,
    isHot: true,
    reviewCount: 10,
    category: "Đồng hồ đo",
    rating: 0,
  },
  {
    id: 2,
    image: "/assets/placeholder.svg",
    name: "Mạch điều khiển",
    price: 320000,
    originalPrice: 400000,
    isNew: true,
    isHot: false,
    reviewCount: 5,
    category: "Mạch điều khiển",
    rating: 0,
  },
  {
    id: 3,
    image: "/assets/placeholder.svg",
    name: "Đèn nút nhấn",
    price: 120000,
    originalPrice: 200000,
    isNew: true,
    isHot: false,
    reviewCount: 3,
    category: "Thiết bị chiếu sáng",
    rating: 0,
  },
  {
    id: 4,
    image: "/assets/placeholder.svg",
    name: "Cảm biến áp suất",
    price: 280000,
    originalPrice: 200000,
    isNew: false,
    isHot: false,
    reviewCount: 7,
    category: "Cảm biến",
    rating: 0,
  },
  {
    id: 5,
    image: "/assets/placeholder.svg",
    name: "Mạch USB-Serial",
    price: 180000,
    originalPrice: 200000,
    isNew: true,
    isHot: false,
    reviewCount: 2,
    category: "Giao tiếp máy tính",
    rating: 0,
  },
];


  hotProducts = [
  {
    id: 1,
    image: "/assets/placeholder.svg",
    name: "Cáp USB-Serial",
    price: 180000,
    originalPrice: 180000,
    isNew: false,
    isHot: false,
    rating: 5,
    reviewCount: 12,
    category: "Giao tiếp máy tính",
  },
  {
    id: 2,
    image: "/assets/placeholder.svg",
    name: "Module mạch điện",
    price: 180000,
    originalPrice: 180000,
    isNew: false,
    isHot: false,
    rating: 4,
    reviewCount: 8,
    category: "Điện tử cơ bản",
  },
  {
    id: 3,
    image: "/assets/placeholder.svg",
    name: "Cảm biến áp suất",
    price: 180000,
    originalPrice:180000,
    isNew: true,
    isHot: false,
    rating: 5,
    reviewCount: 10,
    category: "Cảm biến",
  },
  {
    id: 4,
    image: "/assets/placeholder.svg",
    name: "Arduino Uno R3",
    price: 180000,
    originalPrice: 180000,
    isNew: false,
    isHot: false,
    rating: 4,
    reviewCount: 15,
    category: "Vi điều khiển",
  },
  {
    id: 5,
    image: "/assets/placeholder.svg",
    name: "Cáp kết nối",
    price: 180000,
    originalPrice: 180000,
    isNew: true,
    isHot: false,
    rating: 5,
    reviewCount: 7,
    category: "Phụ kiện điện tử",
  },
  {
    id: 6,
    image: "/assets/placeholder.svg",
    name: "Cảm biến nhiệt độ",
    price: 180000,
    originalPrice: 180000,
    isNew: false,
    isHot: false,
    rating: 4,
    reviewCount: 9,
    category: "Cảm biến",
  },
  {
    id: 7,
    image: "/assets/placeholder.svg",
    name: "Arduino Nano",
    price: 180000,
    originalPrice: 180000,
    isNew: false,
    isHot: false,
    rating: 5,
    reviewCount: 13,
    category: "Vi điều khiển",
  },
  {
    id: 8,
    image: "/assets/placeholder.svg",
    name: "Màn hình LCD",
    price: 180000,
    originalPrice: 180000,
    isNew: true,
    isHot: false,
    rating: 4,
    reviewCount: 6,
    category: "Hiển thị",
  },
];
}
