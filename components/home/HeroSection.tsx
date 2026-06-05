"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingWords = [
  { text: "إبداع", delay: 0,   x: "8%",  y: "22%" },
  { text: "تأمل",  delay: 0.5, x: "82%", y: "18%" },
  { text: "ألوان", delay: 1,   x: "6%",  y: "68%" },
  { text: "خيال",  delay: 1.5, x: "84%", y: "62%" },
  { text: "هدوء",  delay: 0.8, x: "50%", y: "8%"  },
];

const pills = ["🎨 تلوين", "📋 تخطيط", "✨ ملصقات", "📱 ديجيتال", "🧩 ألعاب"];

export default function HeroSection() {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden bg-cream
        min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)]
      "
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.jpg"
          alt="DC Note"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/75 to-cream/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-transparent to-cream/70" />
      </div>

      {/* ── Decorative floating words — desktop only ── */}
      {floatingWords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0.06, 0.1] }}
          transition={{
            delay: word.delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute hidden lg:block text-navy font-cairo font-black text-5xl select-none pointer-events-none"
          style={{ left: word.x, top: word.y }}
        >
          {word.text}
        </motion.span>
      ))}

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">

          {/* 1 — Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 160 }}
          >
            <div
              className="
                relative rounded-full overflow-hidden shadow-xl
                ring-4 ring-rose/25 ring-offset-2 ring-offset-cream
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
              "
            >
              <Image
                src="/images/logo.jpg"
                alt="DC Note Logo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
              />
            </div>
          </motion.div>

          {/* 2 — Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
          >
            <h1 className="font-cairo font-black tracking-tight leading-none">
              <span className="text-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl">DC </span>
              <span className="text-rose  text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Note</span>
              <span className="text-rose  text-2xl sm:text-3xl md:text-4xl align-super ml-1">♥</span>
            </h1>
          </motion.div>

          {/* 3 — Arabic tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="text-navy/70 font-cairo font-medium leading-relaxed text-base sm:text-lg md:text-xl max-w-lg"
          >
            رفيقك في رحلة الهروب من تعفن الدماغ واستعادة الخيال
          </motion.p>

          {/* 4 — English tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.6 }}
            className="text-rose font-cairo font-semibold tracking-widest text-sm md:text-base uppercase"
          >
            Stop Scrolling. Start Imagining. ✦
          </motion.p>

          {/* 5 — Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {pills.map((tag) => (
              <span
                key={tag}
                className="
                  bg-white/75 text-navy font-cairo font-medium
                  text-xs sm:text-sm
                  px-3 py-1.5 sm:px-4 sm:py-2
                  rounded-full border border-rose/20 backdrop-blur-sm
                "
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 6 — CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/shop"
                className="
                  flex items-center justify-center gap-2
                  bg-navy text-cream
                  px-8 py-3.5 rounded-full
                  font-cairo font-bold text-base md:text-lg
                  shadow-lg hover:bg-navy-light
                  transition-colors duration-200 w-full
                "
              >
                🛍️ تسوق الآن
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/about"
                className="
                  flex items-center justify-center gap-2
                  bg-white/80 text-navy
                  border-2 border-navy/20
                  px-8 py-3.5 rounded-full
                  font-cairo font-bold text-base md:text-lg
                  backdrop-blur-sm hover:bg-blush
                  transition-colors duration-200 w-full
                "
              >
                ✨ اعرف أكثر
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-cream to-transparent pointer-events-none" />

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-navy/35"
      >
        <span className="font-cairo text-xs tracking-wider">اكتشف المزيد</span>
        <span className="text-base">↓</span>
      </motion.div>
    </section>
  );
}
