# DC Note — موقع المتجر الإلكتروني

موقع احترافي لعلامة DC Note التجارية، مبني بـ **Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion**.

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت المكتبات (مرة واحدة فقط)
npm install

# 2. تشغيل بيئة التطوير
npm run dev

# 3. افتح في المتصفح
# http://localhost:3000
```

---

## 📁 هيكل المشروع

```
dc-note/
├── app/
│   ├── layout.tsx              ← Layout الأساسي (RTL، SEO، Navbar، Footer)
│   ├── page.tsx                ← الصفحة الرئيسية
│   ├── shop/page.tsx           ← المتجر مع فلتر الفئات
│   ├── categories/page.tsx     ← الفئات
│   ├── products/[slug]/page.tsx← تفاصيل المنتج (ديناميكية)
│   ├── about/page.tsx          ← من نحن
│   ├── contact/page.tsx        ← التواصل + FAQ
│   ├── not-found.tsx           ← صفحة 404
│   └── globals.css             ← الألوان، الخطوط، RTL
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← ناف بار ثابت RTL + قائمة جوال
│   │   ├── Footer.tsx          ← الفوتر الكامل
│   │   └── WhatsAppButton.tsx  ← زر واتساب العائم
│   ├── home/
│   │   ├── HeroSection.tsx     ← القسم الأول الرئيسي
│   │   ├── FeaturedProducts.tsx← المنتجات المميزة
│   │   ├── CategoriesSection.tsx ← الفئات
│   │   ├── WhyDCNote.tsx       ← لماذا DC Note
│   │   ├── AboutSection.tsx    ← قسم عن العلامة
│   │   ├── TestimonialsSection.tsx ← آراء العملاء
│   │   └── ContactSection.tsx  ← التواصل
│   ├── shop/
│   │   ├── ProductCard.tsx     ← بطاقة المنتج القابلة لإعادة الاستخدام
│   │   └── FilterBar.tsx       ← فلتر الفئات
│   └── ui/
│       ├── Button.tsx          ← زر العلامة التجارية
│       └── SectionTitle.tsx    ← عنوان القسم
│
├── data/products.ts            ← ملف المنتجات والفئات المركزي ← عدّل هنا
├── types/index.ts              ← TypeScript types
├── lib/utils.ts                ← دوال مساعدة
└── public/images/              ← صور العلامة التجارية
    ├── banner.jpg
    ├── logo.jpg
    ├── product-art-coloring.jpg
    ├── product-insects.jpg
    ├── product-muslim-girl.jpg
    └── product-muslim-boy.jpg
```

---

## 🎨 لوحة الألوان

| الاسم | الكود | الاستخدام |
|-------|-------|-----------|
| Navy | `#2C2C54` | الأساسي، الخلفيات الداكنة |
| Rose | `#C4899A` | الـ Accent، الشارات |
| Cream | `#F8F3EE` | خلفية الصفحة |
| Blush | `#F0D9D9` | بطاقات فاتحة |
| Sage | `#A8BBA8` | تفاصيل خضراء |
| Gold | `#C9A87C` | النجوم والتفاصيل |

---

## 📦 إضافة منتج جديد

افتح `data/products.ts` وأضف كائناً للمصفوفة `products`:

```ts
{
  id: "5",
  slug: "slug-المنتج",
  title: "اسم المنتج",
  titleEn: "Product Name",
  category: "coloring-books",      // معرّف الفئة
  description: "وصف قصير...",
  longDescription: "وصف طويل...",
  price: 99,
  originalPrice: 130,              // اختياري (للخصم)
  image: "/images/product-new.jpg",
  badge: "new",                    // best-seller | new | featured | limited
  features: ["ميزة 1", "ميزة 2"],
  pageCount: 50,
  format: "A4 - طباعة رقمية",
  ageRange: "+16",
  inStock: true,
  rating: 4.8,
  reviewCount: 0,
  whatsappMessage: "مرحباً، أريد الاستفسار عن...",
}
```

---

## 📱 معلومات التواصل

- **WhatsApp / هاتف:** 01033276241  
- **Email:** dc.note24@gmail.com  
- **Facebook / Instagram / TikTok:** dc.note24  
- **الموقع:** العاشر من رمضان - الشرقية - مصر
