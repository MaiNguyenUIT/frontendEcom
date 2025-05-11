export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  category: string
  badge?: string
  isHot?: boolean
  isBestSeller?: boolean
  isSale?: boolean
  isNew?: boolean
  discount?: number
}

export interface Category {
  id: number
  name: string
  icon: string
  count?: number
  selected?: boolean
}

export interface PriceRange {
  min: number
  max: number
}

export interface SortOption {
  value: string
  label: string
}

export interface Review {
  id: number
  productId: number
  userName: string
  userInitials: string
  date: string
  rating: number
  comment: string
}

export interface RelatedProduct {
  id: number
  name: string
  image: string
  category: string
  price: number
}
