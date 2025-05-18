import { Component, type OnInit } from "@angular/core"
import { ProductService } from "../../services/productService/product.service"
import type { Product, Category, SortOption } from "../../models/entity/Product"
import { CommonModule } from "@angular/common"
import { PaginationComponent } from "../../shared/pagination/pagination.component"
import { CategorySidebarComponent } from "../../shared/category-sidebar/category-sidebar.component"
import { ProductCardComponent } from "../../shared/product-card/product-card.component"
import { SortSelectorComponent } from "../../shared/sort-selector/sort-selector.component"
import { PriceRangeSliderComponent } from "../../shared/price-range-slider/price-range-slider.component"
import { SearchBarComponent } from "../../shared/search-bar/search-bar.component"
import { PromoCardComponent } from "../../shared/promo-card/promo-card.component"

@Component({
  selector: "app-product-listing-page",
  templateUrl: "./product-listing-page.component.html",
  styleUrls: ["./product-listing-page.component.css"],
  imports: [CommonModule, PaginationComponent, CategorySidebarComponent, ProductCardComponent, SortSelectorComponent, PriceRangeSliderComponent, SearchBarComponent, PromoCardComponent],
})
export class ProductListingPageComponent implements OnInit {
  products: Product[] = []
  categories: Category[] = []
  sortOptions: SortOption[] = []
  selectedSort = "popular"
  totalProducts = 0
  currentPage = 1
  searchQuery = ""
  priceRange = { min: 0, max: 1000 }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
    this.loadSortOptions()
    // this.loadProductCount()
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products
      this.totalProducts = products.length
    })
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories
    })
  }

  loadSortOptions(): void {
    this.productService.getSortOptions().subscribe((options) => {
      this.sortOptions = options
    })
  }

  // loadProductCount(): void {
  //   this.productService.getProductCount().subscribe((count) => {
  //     this.totalProducts = count
  //   })
  // }

  onSortChange(sort: string): void {
    this.selectedSort = sort
    // In a real app, you would reload products with the new sort
  }

  onPageChange(page: number): void {
    this.currentPage = page
    // In a real app, you would load products for the new page
  }

  onCategoryChange(categoryId: number): void {
    this.categories = this.categories.map((cat) => ({
      ...cat,
      selected: cat.id === categoryId,
    }))
    // In a real app, you would filter products by category
  }

  onSearchChange(query: string): void {
    this.searchQuery = query
    // In a real app, you would filter products by search query
  }

  onPriceRangeChange(range: { min: number; max: number }): void {
    this.priceRange = range
    // In a real app, you would filter products by price range
  }
}
