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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="product-card group bg-warm-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-cream-dark/50 flex flex-col"
    >
      {/* ── Image ── */}
      <div className="relative aspect-[3/4] overflow-hidden bg-blush shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 right-2 md:top-3 md:right-3">
            <span
              className={`${getBadgeColor(product.badge)} px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-cairo font-bold shadow-sm`}
            >
              {getBadgeLabel(product.badge)}
            </span>
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3">
            <span className="bg-rose text-white px-2 py-0.5 rounded-full text-[10px] md:text-xs font-cairo font-bold">
              -{discount}%
            </span>
          </div>
        )}

        {/* Hover overlay — desktop only */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300 items-end justify-center pb-4 hidden md:flex opacity-0 group-hover:opacity-100">
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

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-3 md:p-5 gap-2 md:gap-3">

        {/* Age + rating */}
        <div className="flex items-center justify-between gap-1">
          <span className="text-sage font-cairo text-[10px] md:text-xs font-medium bg-sage/15 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full truncate max-w-[55%]">
            {product.ageRange ?? product.format ?? ""}
          </span>
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="text-gold text-xs">★</span>
            <span className="text-navy/70 font-cairo text-[10px] md:text-xs font-semibold">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/products/${product.slug}`} className="flex-1">
          <h3 className="text-navy font-cairo font-bold text-sm md:text-base leading-snug hover:text-rose transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Description — hidden on small mobile, visible md+ */}
        <p className="hidden sm:block text-navy/55 font-cairo text-xs md:text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2 mt-auto pt-1 border-t border-cream-dark/40">
          <div className="flex flex-col leading-none">
            <span className="text-navy font-cairo font-black text-base md:text-xl leading-tight">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-navy/35 font-cairo text-[10px] md:text-xs line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <a
            href={getWhatsAppLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-cream font-cairo font-bold text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-navy-light transition-colors shrink-0"
          >
            اطلب
          </a>
        </div>
      </div>
    </motion.div>
  );
}
