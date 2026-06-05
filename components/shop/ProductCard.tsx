"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { getBadgeLabel, getBadgeColor, formatPrice, getDiscountPercent } from "@/lib/utils";
import { getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? getDiscountPercent(product.price, product.originalPrice)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card group bg-warm-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-cream-dark/50"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-blush">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`${getBadgeColor(product.badge)} px-3 py-1 rounded-full text-xs font-cairo font-bold shadow-md`}
            >
              {getBadgeLabel(product.badge)}
            </span>
          </div>
        )}

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-rose text-white px-2 py-1 rounded-full text-xs font-cairo font-bold">
              -{discount}%
            </span>
          </div>
        )}

        {/* Quick action overlay */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <a
            href={getWhatsAppLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy font-cairo font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-cream"
          >
            💬 اطلب عبر واتساب
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Age + rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sage font-cairo text-xs font-medium bg-sage/15 px-2.5 py-1 rounded-full">
            {product.ageRange ?? product.format ?? ""}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-gold text-sm">★</span>
            <span className="text-navy/70 font-cairo text-xs font-semibold">
              {product.rating}
              <span className="text-navy/40"> ({product.reviewCount})</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-navy font-cairo font-bold text-base leading-snug mb-3 hover:text-rose transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-navy/60 font-cairo text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-navy font-cairo font-black text-xl">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-navy/40 font-cairo text-sm line-through mr-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <a
            href={getWhatsAppLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-cream font-cairo font-bold text-sm px-4 py-2 rounded-full hover:bg-navy-light transition-colors"
          >
            اطلب
          </a>
        </div>
      </div>
    </motion.div>
  );
}
