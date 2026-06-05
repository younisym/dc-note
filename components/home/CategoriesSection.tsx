"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cats = [
  {
    id:    "stickers",
    icon:  "✨",
    name:  "ملصقات",
    desc:  "ملصقات رقمية أنيقة لتزيين دفاترك ومساحاتك",
    href:  "/categories#stickers",
    color: "#C4899A",
    bg:    "#FAF0F5",
  },
  {
    id:    "planning",
    icon:  "📋",
    name:  "تخطيط",
    desc:  "مخططات يومية وأسبوعية لتنظيم وقتك بإتقان",
    href:  "/categories#planners",
    color: "#6B7FD4",
    bg:    "#F0F2FA",
  },
  {
    id:    "journals",
    icon:  "📓",
    name:  "نوتات",
    desc:  "دفاتر يومية وقوالب إبداعية جاهزة للطباعة",
    href:  "/categories#notebooks",
    color: "#C9A87C",
    bg:    "#FAF5EC",
  },
  {
    id:    "coloring",
    icon:  "🎨",
    name:  "تلوين",
    desc:  "صفحات تلوين للكبار والأطفال لتنمية الإبداع",
    href:  "/categories#coloring-books",
    color: "#A8BBA8",
    bg:    "#F2F7F2",
  },
  {
    id:    "digital",
    icon:  "💻",
    name:  "منتجات رقمية",
    desc:  "أدوات وقوالب رقمية احترافية قابلة للتخصيص",
    href:  "/categories",
    color: "#2C2C54",
    bg:    "#EEEEF5",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-rose font-cairo font-semibold text-sm uppercase tracking-widest mb-3">
            الفئات
          </p>
          <h2 className="text-navy font-cairo font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            تصفح الفئات
          </h2>
          <p className="text-navy/50 font-cairo text-base md:text-lg max-w-md mx-auto leading-relaxed">
            كل ما تحتاجه لتنظيم أفكارك وإطلاق إبداعك
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col items-center text-center p-6 md:p-7 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cat.bg }}
                >
                  {cat.icon}
                </div>

                {/* Name */}
                <h3
                  className="font-cairo font-bold text-sm md:text-base mb-2 transition-colors duration-200"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-navy/45 font-cairo text-xs leading-relaxed hidden sm:block">
                  {cat.desc}
                </p>

                {/* Arrow — shows on hover */}
                <div
                  className="mt-4 text-xs font-cairo font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1"
                  style={{ color: cat.color }}
                >
                  تصفح
                  <span className="text-[10px]">←</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
