"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 md:mb-14"
        >
          <div>
            <p className="text-rose font-cairo font-semibold text-sm uppercase tracking-widest mb-3">
              المنتجات
            </p>
            <h2 className="text-navy font-cairo font-black text-3xl md:text-4xl lg:text-5xl">
              الأكثر مبيعاً
            </h2>
          </div>
          <Link
            href="/shop"
            className="shrink-0 inline-flex items-center gap-2 text-navy/60 font-cairo font-semibold text-sm border border-navy/15 px-5 py-2.5 rounded-full hover:bg-navy hover:text-cream hover:border-navy transition-all duration-200"
          >
            عرض الكل
            <span className="text-xs">←</span>
          </Link>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
