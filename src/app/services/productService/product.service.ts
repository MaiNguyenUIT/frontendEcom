import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import type { Product, Category, SortOption, RelatedProduct } from "../../models/entity/Product"
import { environment } from "../../../../environment"
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http"
import { HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/product`;
  private categoryUrl = `${environment.apiUrl}/category`;
  constructor(private http : HttpClient) {}


  private sortOptions: SortOption[] = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ]

  
  private relatedProducts: RelatedProduct[] = [
    {
      id: 2,
      name: "Arduino",
      image: "assets/products/arduino-uno.jpg",
      category: "Arduino",
      price: 950000,
    }
  ]

  getProductById(id: String): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
  }
  getAllProducts(): Observable<any> {

    return this.http.get(`${this.apiUrl}`);
  }

  getAllProductsByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${categoryId}`);
  }

  getSortOptions(): Observable<SortOption[]> {
    return of(this.sortOptions);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.categoryUrl}`);  
  }
}
