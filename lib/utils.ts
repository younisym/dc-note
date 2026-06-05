import type { Product } from "@/types";

export function formatPrice(price: number): string {
  return `${price} جنيه`;
}

export function getDiscountPercent(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function getBadgeLabel(badge: Product["badge"]): string {
  const map: Record<NonNullable<Product["badge"]>, string> = {
    "best-seller": "الأكثر مبيعاً",
    new: "جديد",
    featured: "مميز",
    limited: "كمية محدودة",
  };
  return badge ? map[badge] : "";
}

export function getBadgeColor(badge: Product["badge"]): string {
  const map: Record<NonNullable<Product["badge"]>, string> = {
    "best-seller": "bg-rose-500 text-white",
    new: "bg-sage text-white",
    featured: "bg-navy text-white",
    limited: "bg-gold text-white",
  };
  return badge ? map[badge] : "";
}

export function getRatingStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
