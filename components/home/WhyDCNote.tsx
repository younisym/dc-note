"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "🎨",
    title: "تنمية الإبداع",
    description:
      "منتجاتنا مصممة لإطلاق إبداعك وخيالك بعيداً عن حدود التكنولوجيا والشاشات.",
    color: "#C4899A",
    bg: "#F0D9D9",
  },
  {
    icon: "🧠",
    title: "تنمية التركيز",
    description:
      "ألعاب الدماغ والمتاهات تقوي قدرة التركيز وتحسن مهارات التفكير المنطقي.",
    color: "#A8BBA8",
    bg: "#E8F0E8",
  },
  {
    icon: "🌿",
    title: "لحظات هادئة",
    description:
      "اهرب من الضجيج الرقمي واستمتع بلحظات تلوين وتأمل هادئة تريح العقل والروح.",
    color: "#C9A87C",
    bg: "#F5EDD8",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "للكبار والأطفال",
    description:
      "مجموعة متنوعة تناسب جميع الأعمار، من كتب التلوين للبالغين إلى الكتب التعليمية للأطفال.",
    color: "#2C2C54",
    bg: "#E8E8F0",
  },
  {
    icon: "✨",
    title: "تصاميم مميزة",
    description:
      "كل منتج يحمل تصميماً فريداً يعكس الذوق الرفيع والاهتمام بأدق التفاصيل.",
    color: "#DBA8B8",
    bg: "#FAF0F0",
  },
  {
    icon: "📥",
    title: "تحميل فوري",
    description:
      "اطلب ونزّل فوراً. منتجات رقمية جاهزة للطباعة في أي وقت ومن أي مكان.",
    color: "#C4899A",
    bg: "#F0D9D9",
  },
];

export default function WhyDCNote() {
  return (
    <section className="py-20 bg-cream pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="لماذا DC Note؟"
          subtitle="نؤمن أن الإبداع ليس رفاهية، بل ضرورة للروح"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-cream-dark/30"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                style={{ backgroundColor: feature.bg }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3
                className="font-cairo font-bold text-lg mb-3"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className="text-navy/65 font-cairo text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative line */}
              <div
                className="mt-5 h-0.5 w-12 rounded-full"
                style={{ backgroundColor: feature.color, opacity: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
