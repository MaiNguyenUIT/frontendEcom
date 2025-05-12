import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import type { Product, Category, SortOption, Review, RelatedProduct } from "../../models/entity/Product"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphone",
      price: 29.99,
      image: "assets/products/tozo-earbuds.jpg",
      rating: 5,
      reviewCount: 736,
      category: "Headphone",
      isHot: true,
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      price: 799.99,
      originalPrice: 899.99,
      image: "assets/products/samsung-s21.jpg",
      rating: 4.5,
      reviewCount: 356,
      category: "SmartPhone",
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable (8 Gbps, 4K/60Hz)",
      price: 9.99,
      image: "assets/products/hdmi-cable.jpg",
      rating: 4.5,
      reviewCount: 423,
      category: "Computer Accessories",
      isBestSeller: true,
    },
    {
      id: 4,
      name: "Portable Welding Machine, 11lbs capacity Model HNMF-1000A",
      price: 89.99,
      image: "assets/products/welding-machine.jpg",
      rating: 4,
      reviewCount: 265,
      category: "Electronics Devices",
    },
    {
      id: 5,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 59.99,
      originalPrice: 79.99,
      image: "assets/products/gaming-headphones.jpg",
      rating: 4.5,
      reviewCount: 647,
      category: "Headphone",
    },
    {
      id: 6,
      name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Case",
      price: 24.99,
      originalPrice: 39.99,
      image: "assets/products/tripod.jpg",
      rating: 4,
      reviewCount: 877,
      category: "Camera & Photo",
      badge: "25% OFF",
    },
    {
      id: 7,
      name: "Dell Optiplex 7000x2480 All-in-One Computer Monitor",
      price: 599.99,
      image: "assets/products/dell-monitor.jpg",
      rating: 4.5,
      reviewCount: 426,
      category: "Computer & Laptop",
      isHot: true,
    },
    {
      id: 8,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 329.99,
      originalPrice: 399.99,
      image: "assets/products/smart-tv.jpg",
      rating: 4.5,
      reviewCount: 563,
      category: "TV & Homes Appliances",
      isSale: true,
    },
    {
      id: 9,
      name: "Amazon Basics High-Speed HDMI Cable (8 Gbps, 4K/60Hz)",
      price: 9.99,
      image: "assets/products/hdmi-cable.jpg",
      rating: 4.5,
      reviewCount: 994,
      category: "Computer Accessories",
      isBestSeller: true,
    },
    {
      id: 10,
      name: "Portable Welding Machine, 11lbs capacity Model HNMF-1000A",
      price: 89.99,
      image: "assets/products/welding-machine.jpg",
      rating: 4,
      reviewCount: 265,
      category: "Electronics Devices",
    },
    {
      id: 11,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphone",
      price: 29.99,
      image: "assets/products/tozo-earbuds.jpg",
      rating: 5,
      reviewCount: 736,
      category: "Headphone",
      isHot: true,
    },
    {
      id: 12,
      name: "Dell Optiplex 7000x2480 All-in-One Computer Monitor",
      price: 599.99,
      image: "assets/products/dell-monitor.jpg",
      rating: 4.5,
      reviewCount: 426,
      category: "Computer & Laptop",
    },
  ]

  private categories: Category[] = [
    { id: 1, name: "Electronics Devices", icon: "chip", count: 15, selected: true },
    { id: 2, name: "Computer & Laptop", icon: "desktop", count: 23 },
    { id: 3, name: "Computer Accessories", icon: "keyboard", count: 45 },
    { id: 4, name: "SmartPhone", icon: "device-mobile", count: 18 },
    { id: 5, name: "Headphone", icon: "headphones", count: 12 },
    { id: 6, name: "Mobile Accessories", icon: "device-mobile-charger", count: 30 },
    { id: 7, name: "Gaming Console", icon: "gamepad-2", count: 8 },
    { id: 8, name: "Camera & Photo", icon: "camera", count: 14 },
    { id: 9, name: "TV & Homes Appliances", icon: "device-tv", count: 22 },
    { id: 10, name: "Watchs & Accessories", icon: "watch", count: 16 },
    { id: 11, name: "GPS & Navigation", icon: "map-pin", count: 7 },
    { id: 12, name: "Wearable Technology", icon: "device-watch", count: 11 },
  ]

  private sortOptions: SortOption[] = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ]

  private reviews: Review[] = [
    {
      id: 1,
      productId: 1,
      userName: "Anh Kiệt",
      userInitials: "AK",
      date: "Jan 20, 2023",
      rating: 5,
      comment: "sản phẩm chất lượng đáng cấp vũ trụ",
    },
    {
      id: 2,
      productId: 1,
      userName: "Emily R.",
      userInitials: "ER",
      date: "Nov 13, 2023",
      rating: 4,
      comment: "sản phẩm chất lượng đáng cấp vũ trụ",
    },
  ]

  private relatedProducts: RelatedProduct[] = [
    {
      id: 2,
      name: "Arduino",
      image: "assets/products/arduino-uno.jpg",
      category: "Arduino",
      price: 950000,
    },
    {
      id: 3,
      name: "Cảm biến",
      image: "assets/products/sensor.jpg",
      category: "Sensors",
      price: 120000,
    },
    {
      id: 4,
      name: "Module, mạch điện",
      image: "assets/products/module.jpg",
      category: "Modules",
      price: 75000,
    },
    {
      id: 5,
      name: "Điều khiển LED",
      image: "assets/products/led-controller.jpg",
      category: "Controllers",
      price: 150000,
    },
    {
      id: 6,
      name: "Đồng hồ vạn năng",
      image: "assets/products/multimeter.jpg",
      category: "Tools",
      price: 350000,
    },
    {
      id: 7,
      name: "Máy in 3D công nghệ",
      image: "assets/products/3d-printer.jpg",
      category: "Printers",
      price: 7500000,
    },
  ]



  getProduct(id: number): Observable<Product | null> {
  const product = this.products.find(p => p.id === id) ?? null;
  return of(product);
}


  getReviews(productId: number): Observable<Review[]> {
    return of(this.reviews.filter((review) => review.productId === productId))
  }

  getRelatedProducts(productId: number): Observable<RelatedProduct[]> {
    return of(this.relatedProducts.filter((product) => product.id !== productId))
  }

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products)
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories)
  }

  getSortOptions(): Observable<SortOption[]> {
    return of(this.sortOptions)
  }

  getProductCount(): Observable<number> {
    return of(65867) // Hardcoded from the screenshot
  }
}
