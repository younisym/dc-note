import type { Metadata } from "next";
import Link from "next/link";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "الفئات",
  description: "تصفح جميع فئات منتجات DC Note - كتب تلوين، ألعاب دماغية، مخططات وأكثر.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-cream font-cairo font-black text-4xl md:text-5xl mb-4">
            🗂️ الفئات
          </h1>
          <p className="text-cream/70 font-cairo text-lg max-w-xl mx-auto">
            كل ما تحتاجه لرحلتك الإبداعية في مكان واحد
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat.id);

          return (
            <section key={cat.id} id={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0"
                  style={{ backgroundColor: `${cat.color}18` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-navy font-cairo font-black text-2xl md:text-3xl">
                    {cat.name}
                  </h2>
                  <p className="text-navy/55 font-cairo text-sm mt-1">
                    {cat.description}
                  </p>
                </div>
                {cat.productCount > 0 && (
                  <span
                    className="mr-auto shrink-0 text-xs font-cairo font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                  >
                    {cat.productCount} منتج
                  </span>
                )}
              </div>

              {/* Products or coming soon */}
              {catProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {catProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              ) : (
                <div className="bg-warm-white rounded-2xl p-10 text-center border border-cream-dark/40">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <p className="text-navy/55 font-cairo font-semibold">
                    قريباً في هذه الفئة ✨
                  </p>
                </div>
              )}

              {/* Divider */}
              <div className="mt-12 h-px bg-cream-dark/50" />
            </section>
          );
        })}
      </div>
    </div>
  );
}
