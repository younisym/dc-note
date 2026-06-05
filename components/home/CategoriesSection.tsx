"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="تصفح الفئات"
          subtitle="اختر الفئة التي تناسبك وابدأ رحلتك الإبداعية"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/categories#${cat.id}`}
                className="block bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg border border-cream-dark/40 transition-all duration-300 group"
              >
                {/* Icon bubble */}
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${cat.color}18` }}
                >
                  {cat.icon}
                </div>

                <h3 className="text-navy font-cairo font-bold text-sm md:text-base mb-2 leading-tight">
                  {cat.name}
                </h3>

                <p className="text-navy/50 font-cairo text-xs leading-relaxed hidden sm:block">
                  {cat.description}
                </p>

                {cat.productCount > 0 && (
                  <span
                    className="mt-3 inline-block text-xs font-cairo font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                  >
                    {cat.productCount} منتج
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
