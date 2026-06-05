export interface Product {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: CategoryId;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "best-seller" | "new" | "featured" | "limited";
  features: string[];
  pageCount?: number;
  format?: string;
  ageRange?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  whatsappMessage: string;
}

export type CategoryId =
  | "coloring-books"
  | "kids-coloring"
  | "brain-games"
  | "planners"
  | "notebooks"
  | "stickers"
  | "educational"
  | "custom";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
