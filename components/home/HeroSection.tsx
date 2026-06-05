"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingWords = [
  { text: "إبداع", delay: 0, x: "10%", y: "20%" },
  { text: "تأمل", delay: 0.5, x: "80%", y: "15%" },
  { text: "ألوان", delay: 1, x: "5%", y: "70%" },
  { text: "خيال", delay: 1.5, x: "85%", y: "65%" },
  { text: "هدوء", delay: 0.8, x: "50%", y: "10%" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.jpg"
          alt="DC Note Banner"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/70 to-cream/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-transparent to-cream/60" />
      </div>

      {/* Floating decorative words */}
      {floatingWords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.12, 0.08, 0.12] }}
          transition={{ delay: word.delay, duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute hidden lg:block text-navy font-cairo font-bold text-4xl select-none pointer-events-none"
          style={{ left: word.x, top: word.y }}
        >
          {word.text}
        </motion.span>
      ))}

      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl ring-4 ring-rose/20">
              <Image
                src="/images/logo.jpg"
                alt="DC Note Logo"
                fill
                priority
                className="object-cover"
                sizes="144px"
              />
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cairo font-black mb-2 tracking-tight">
              <span className="text-navy">DC </span>
              <span className="text-rose">Note</span>
              <span className="text-rose text-3xl md:text-4xl">♥</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-navy/75 font-cairo text-lg md:text-xl lg:text-2xl font-medium mb-2 leading-relaxed"
          >
            رفيقك في رحلة الهروب من تعفن الدماغ واستعادة الخيال
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-rose font-cairo text-base md:text-lg font-semibold mb-10 tracking-wide"
          >
            Stop Scrolling. Start Imagining. ✦
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {["🎨 تلوين", "📋 تخطيط", "✨ ملصقات", "📱 ديجيتال", "🧩 ألعاب"].map((tag) => (
              <span
                key={tag}
                className="bg-white/70 text-navy font-cairo text-sm px-4 py-1.5 rounded-full border border-rose/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 bg-navy text-cream px-8 py-4 rounded-full font-cairo font-bold text-lg shadow-xl hover:bg-navy-light transition-colors duration-200"
              >
                🛍️ تسوق الآن
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 bg-white/80 text-navy border-2 border-navy/20 px-8 py-4 rounded-full font-cairo font-bold text-lg backdrop-blur-sm hover:bg-blush transition-colors duration-200"
              >
                ✨ اعرف أكثر
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-navy/40"
      >
        <span className="font-cairo text-xs">اكتشف المزيد</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}
