export interface Product {
  id: string
  name: string
  price: number
  regularPrice: number
  image: string[]
  categoryName: string
  description : string
  quantity: number
  sold: number
  ownerId: string
  rating: number
  ratingCount: number
}

export interface Category {
  id: number
  title: string
  image: string
  select: boolean
}

export interface PriceRange {
  min: number
  max: number
}

export interface SortOption {
  value: string
  label: string
}

export interface RelatedProduct {
  id: number
  name: string
  image: string
  category: string
  price: number
}
