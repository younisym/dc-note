"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import FilterBar from "@/components/shop/FilterBar";
import SectionTitle from "@/components/ui/SectionTitle";
import type { CategoryId } from "@/types";

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryId | "all">("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream">
      {/* Page header */}
      <div className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cream font-cairo font-black text-4xl md:text-5xl mb-4"
          >
            🛍️ المتجر
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 font-cairo text-lg max-w-xl mx-auto"
          >
            اكتشف منتجاتنا المميزة واختر ما يناسبك
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter */}
        <FilterBar active={activeFilter} onChange={setActiveFilter} />

        {/* Results count */}
        <p className="text-navy/50 font-cairo text-sm mb-6 text-center">
          {filtered.length} منتج{filtered.length !== 1 ? "ات" : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-navy font-cairo font-bold text-xl mb-2">
              لا توجد منتجات حالياً
            </h3>
            <p className="text-navy/60 font-cairo">
              سيتم إضافة منتجات جديدة في هذه الفئة قريباً!
            </p>
          </motion.div>
        )}

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-blush rounded-3xl p-8 text-center"
        >
          <div className="text-4xl mb-3">✨</div>
          <h3 className="text-navy font-cairo font-bold text-xl mb-2">
            المزيد قادم قريباً!
          </h3>
          <p className="text-navy/65 font-cairo mb-6">
            نعمل على إضافة مخططات، دفاتر، وملصقات جديدة. تابعنا لتكون أول من يعلم.
          </p>
          <a
            href="https://wa.me/201033276241?text=مرحباً، أريد التسجيل لتلقي إشعارات المنتجات الجديدة 🌸"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-cream font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy-light transition-colors"
          >
            💬 أخبرني عند الإضافة
          </a>
        </motion.div>
      </div>
    </div>
  );
}
