import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getWhatsAppLink, getProductsByCategory } from "@/data/products";
import { formatPrice, getDiscountPercent, getBadgeLabel, getBadgeColor } from "@/lib/utils";
import ProductCard from "@/components/shop/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "المنتج غير موجود" };
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | DC Note`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const discount = product.originalPrice
    ? getDiscountPercent(product.price, product.originalPrice)
    : 0;

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-cream-dark/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-cairo text-sm text-navy/50">
            <Link href="/" className="hover:text-rose transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-rose transition-colors">المتجر</Link>
            <span>/</span>
            <span className="text-navy font-semibold line-clamp-1">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Product image */}
          <div className="sticky top-24">
            <div className="relative rounded-3xl overflow-hidden bg-blush shadow-xl aspect-[3/4] max-w-md mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.badge && (
                  <span className={`${getBadgeColor(product.badge)} px-3 py-1 rounded-full text-xs font-cairo font-bold shadow`}>
                    {getBadgeLabel(product.badge)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-rose text-white px-3 py-1 rounded-full text-xs font-cairo font-bold shadow">
                    خصم {discount}%
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-navy font-cairo font-black text-3xl md:text-4xl leading-tight mb-3">
                {product.title}
              </h1>
              <p className="text-navy/55 font-cairo text-base italic">{product.titleEn}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < Math.floor(product.rating) ? "text-gold" : "text-navy/20"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="font-cairo font-bold text-navy text-sm">{product.rating}</span>
              <span className="font-cairo text-navy/50 text-sm">({product.reviewCount} تقييم)</span>
            </div>

            {/* Description */}
            <p className="text-navy/70 font-cairo text-base leading-relaxed">
              {product.longDescription}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3">
              {product.pageCount && (
                <div className="bg-white rounded-2xl p-4 border border-cream-dark/40">
                  <p className="text-navy/50 font-cairo text-xs mb-1">عدد الصفحات</p>
                  <p className="text-navy font-cairo font-bold text-base">{product.pageCount} صفحة</p>
                </div>
              )}
              {product.format && (
                <div className="bg-white rounded-2xl p-4 border border-cream-dark/40">
                  <p className="text-navy/50 font-cairo text-xs mb-1">الصيغة</p>
                  <p className="text-navy font-cairo font-bold text-base">{product.format}</p>
                </div>
              )}
              {product.ageRange && (
                <div className="bg-white rounded-2xl p-4 border border-cream-dark/40">
                  <p className="text-navy/50 font-cairo text-xs mb-1">الفئة العمرية</p>
                  <p className="text-navy font-cairo font-bold text-base">{product.ageRange}</p>
                </div>
              )}
              <div className="bg-white rounded-2xl p-4 border border-cream-dark/40">
                <p className="text-navy/50 font-cairo text-xs mb-1">التوفر</p>
                <p className={`font-cairo font-bold text-base ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                  {product.inStock ? "✅ متوفر" : "❌ نفذت الكمية"}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-warm-white rounded-2xl p-6 border border-cream-dark/40">
              <h3 className="text-navy font-cairo font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-rose">✦</span> مميزات المنتج
              </h3>
              <ul className="space-y-2.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose mt-0.5 shrink-0">◈</span>
                    <span className="text-navy/70 font-cairo text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA */}
            <div className="bg-navy rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-cream font-cairo font-black text-3xl">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-cream/50 font-cairo text-lg line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-rose text-white text-sm font-cairo font-bold px-3 py-1 rounded-full">
                    وفّر {discount}%
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-cairo font-bold py-3.5 rounded-2xl hover:opacity-90 transition-opacity text-base"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  اطلب عبر واتساب
                </a>
                <a
                  href="https://wa.me/201033276241?text=مرحباً، أريد الاستفسار عن منتجات DC Note"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-cream/30 text-cream font-cairo font-semibold py-3.5 px-6 rounded-2xl hover:bg-cream/10 transition-colors text-base"
                >
                  📞 استفسار
                </a>
              </div>

              <p className="text-cream/50 font-cairo text-xs text-center mt-4">
                💡 منتج رقمي • تحميل فوري بعد التواصل
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-navy font-cairo font-black text-2xl mb-8 text-center">
              منتجات مشابهة ✨
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
