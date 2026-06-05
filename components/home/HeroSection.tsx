"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const trust = [
  { icon: "⭐", label: "منتجات مميزة"   },
  { icon: "🚀", label: "تحميل فوري"     },
  { icon: "💜", label: "تصميمات أصلية"  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative overflow-hidden
        flex items-center justify-center
        min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)]
      "
      style={{
        backgroundColor: "#FAFAF8",
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 85% 0%,   #F0D9D9 0%,   transparent 60%),
          radial-gradient(ellipse 60% 50% at 10% 100%, #C4899A18 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 50% 60%,  #EFE8DF40 0%, transparent 50%)
        `,
      }}
    >

      {/* ── Geometric decorators ── */}

      {/* Large ring — desktop only */}
      <div
        className="pointer-events-none absolute hidden lg:block rounded-full border border-rose/15"
        style={{ width: 640, height: 640, top: "50%", right: "-160px", transform: "translateY(-50%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute hidden lg:block rounded-full border border-navy/5"
        style={{ width: 900, height: 900, top: "50%", right: "-320px", transform: "translateY(-50%)" }}
        aria-hidden
      />

      {/* Dot grid — top left */}
      <div className="pointer-events-none absolute top-12 left-10 hidden lg:grid grid-cols-4 gap-2.5 opacity-25" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-rose" />
        ))}
      </div>

      {/* Dot grid — bottom right */}
      <div className="pointer-events-none absolute bottom-12 right-10 hidden lg:grid grid-cols-4 gap-2.5 opacity-15" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-navy" />
        ))}
      </div>

      {/* Small accent circle */}
      <div
        className="pointer-events-none absolute rounded-full bg-rose/20 blur-2xl hidden md:block"
        style={{ width: 180, height: 180, bottom: "15%", left: "8%" }}
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center text-center gap-7 md:gap-8">

          {/* Eyebrow pill */}
          <motion.div {...up(0)}>
            <span className="inline-flex items-center gap-2 bg-white/80 border border-rose/20 text-rose font-cairo font-semibold text-xs md:text-sm px-4 py-2 rounded-full tracking-wider backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
              علامة تجارية إبداعية
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...up(0.1)}
            className="font-cairo font-black text-navy leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
          >
            أطلق العنان
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #C4899A 0%, #A8738A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              لخيالك
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            {...up(0.2)}
            className="font-cairo text-navy/55 leading-loose max-w-lg"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            ملصقات رقمية ومنظمات وأدوات إبداعية مصممة لمساعدتك على التخطيط
            والتعبير عن أفكارك بطريقة أجمل وأكثر إلهاماً.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...up(0.3)}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1"
          >
            <Link
              href="/shop"
              className="
                inline-flex items-center justify-center
                bg-navy text-cream font-cairo font-bold
                px-9 py-4 rounded-full text-base md:text-lg
                hover:bg-navy-light active:scale-[0.97]
                transition-all duration-200
                shadow-[0_4px_24px_rgba(44,44,84,0.25)]
                hover:shadow-[0_8px_32px_rgba(44,44,84,0.30)]
                w-full sm:w-auto
              "
            >
              تسوق الآن
            </Link>
            <Link
              href="/categories"
              className="
                inline-flex items-center justify-center
                bg-white/70 text-navy font-cairo font-semibold
                border border-navy/15
                px-9 py-4 rounded-full text-base md:text-lg
                hover:bg-white hover:border-navy/30
                active:scale-[0.97]
                transition-all duration-200
                backdrop-blur-sm
                w-full sm:w-auto
              "
            >
              استعرض الفئات
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...up(0.42)}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2"
          >
            {trust.map((t, i) => (
              <span key={i} className="flex items-center gap-2 text-navy/50 font-cairo text-sm">
                <span className="text-base">{t.icon}</span>
                {t.label}
                {i < trust.length - 1 && (
                  <span className="hidden sm:inline text-navy/20 mr-2">·</span>
                )}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-16"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
        aria-hidden
      />
    </section>
  );
}
