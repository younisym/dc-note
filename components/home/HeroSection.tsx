"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section className="bg-cream min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─────────────────────────────────────────
              LEFT — Text
          ───────────────────────────────────────── */}
          <div className="flex flex-col items-start gap-7 order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <span className="block w-8 h-px bg-rose" />
              <span className="text-rose font-cairo font-semibold text-sm tracking-widest uppercase">
                علامة تجارية إبداعية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-cairo font-black leading-tight text-4xl sm:text-5xl md:text-6xl text-navy"
            >
              أطلق العنان
              <br />
              <span className="text-rose">لخيالك</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-cairo text-navy/60 text-base md:text-lg leading-loose max-w-md"
            >
              منتجات رقمية مميزة للتلوين والتأمل والتخطيط. صُممت لتساعدك على استعادة إبداعك واكتشاف نفسك من جديد.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/shop"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-navy text-cream font-cairo font-bold
                  px-8 py-3.5 rounded-full text-base
                  hover:bg-navy-light active:scale-[0.97]
                  transition-all duration-200 shadow-md hover:shadow-lg
                  w-full sm:w-auto
                "
              >
                تسوق الآن
              </Link>
              <Link
                href="/categories"
                className="
                  inline-flex items-center justify-center gap-2
                  border border-navy/20 text-navy font-cairo font-semibold
                  px-8 py-3.5 rounded-full text-base
                  hover:border-navy/40 hover:bg-blush
                  active:scale-[0.97] transition-all duration-200
                  w-full sm:w-auto
                "
              >
                استعرض الفئات
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-3 pt-1"
            >
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-gold text-sm">★</span>
                ))}
              </div>
              <span className="text-navy/50 font-cairo text-sm">
                +500 عميل سعيد
              </span>
              <span className="w-1 h-1 rounded-full bg-navy/20" />
              <span className="text-navy/50 font-cairo text-sm">4.9 / 5</span>
            </motion.div>

          </div>

          {/* ─────────────────────────────────────────
              RIGHT — Product image
          ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Soft glow behind image */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-90"
              style={{ background: "radial-gradient(ellipse at center, #F0D9D9 0%, #F8F3EE 70%)" }}
              aria-hidden
            />

            {/* Product stack — main + two smaller */}
            <div className="relative w-full max-w-sm lg:max-w-md">

              {/* Main product */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(44,44,84,0.14)] ring-1 ring-navy/5">
                <Image
                  src="/images/product-art-coloring.jpg"
                  alt="حين تعجز الكلمات الجأ للفن — DC Note"
                  width={595}
                  height={842}
                  priority
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>

              {/* Floating badge — best seller */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.4, type: "spring" }}
                className="
                  absolute -top-4 -right-4 md:-top-5 md:-right-5
                  bg-navy text-cream
                  font-cairo font-bold text-xs
                  px-3 py-1.5 rounded-full shadow-lg
                "
              >
                🏆 الأكثر مبيعاً
              </motion.div>

              {/* Floating price card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45 }}
                className="
                  absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5
                  bg-white rounded-2xl shadow-xl
                  px-4 py-3 flex items-center gap-3
                  ring-1 ring-navy/5
                "
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/product-art-coloring.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="font-cairo font-bold text-navy text-xs leading-tight line-clamp-1">
                    حين تعجز الكلمات
                  </p>
                  <p className="font-cairo text-rose font-black text-sm leading-tight">
                    89 جنيه
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
