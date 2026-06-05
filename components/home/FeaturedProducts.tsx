"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="منتجاتنا المميزة"
          subtitle="كل منتج صُمِّم بعناية لمساعدتك على استعادة خيالك وإبداعك"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-cream transition-all duration-300"
          >
            عرض جميع المنتجات
            <span>←</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
