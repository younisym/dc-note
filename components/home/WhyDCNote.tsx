"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "✏️",
    title: "تصاميم أصلية",
    desc:  "كل منتج مصمم بعناية فائقة ليعكس الذوق الرفيع والإبداع الحقيقي.",
  },
  {
    icon: "⚡",
    title: "تحميل فوري",
    desc:  "بمجرد الشراء تحصل على ملفاتك فوراً. لا انتظار ولا شحن.",
  },
  {
    icon: "💎",
    title: "جودة عالية",
    desc:  "ملفات بدقة عالية جاهزة للطباعة بأبعاد قياسية ووضوح احترافي.",
  },
  {
    icon: "🔄",
    title: "تحديثات مستمرة",
    desc:  "نضيف منتجات ونحدّث التصاميم بشكل منتظم لتبقى دائماً متجددة.",
  },
];

export default function WhyDCNote() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#1E1E3C" }}
    >
      {/* Subtle background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 90% 10%, rgba(196,137,154,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(107,127,212,0.08) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 md:mb-18"
        >
          <p className="text-rose font-cairo font-semibold text-sm uppercase tracking-widest mb-3">
            لماذا DC Note
          </p>
          <h2
            className="font-cairo font-black text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ color: "#FAFAF8" }}
          >
            مصممة لك بعناية
          </h2>
          <p className="font-cairo text-base md:text-lg max-w-md mx-auto leading-relaxed" style={{ color: "rgba(250,250,248,0.5)" }}>
            كل تفصيلة صغيرة في منتجاتنا تخدم تجربتك وتلهم إبداعك
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-7 transition-all duration-300"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(196,137,154,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                style={{ backgroundColor: "rgba(196,137,154,0.15)" }}
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="font-cairo font-bold text-lg mb-3" style={{ color: "#FAFAF8" }}>
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-cairo text-sm leading-relaxed" style={{ color: "rgba(250,250,248,0.5)" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
