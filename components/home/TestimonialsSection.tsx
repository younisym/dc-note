"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    stars: 5,
    text: "الملصقات الرقمية خيال! استخدمتها في مخططي وأصبح الدفتر أجمل بكثير. التصميم راقي جداً وسهل الاستخدام.",
    name: "سارة العمري",
    role: "مصممة ومدوّنة",
    initial: "س",
    color: "#C4899A",
  },
  {
    stars: 5,
    text: "المخطط الأسبوعي غيّر طريقة تنظيمي تماماً. جودة الملف عالية جداً والطباعة طلعت ممتازة. شكراً DC Note!",
    name: "لينا الشمري",
    role: "طالبة دكتوراه",
    initial: "ل",
    color: "#6B7FD4",
  },
  {
    stars: 5,
    text: "أفضل استثمار عملته لتنظيم حياتي. القوالب الرقمية احترافية جداً وتوفر وقت وجهد كبيرين.",
    name: "نورة القحطاني",
    role: "رائدة أعمال",
    initial: "ن",
    color: "#C9A87C",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-rose font-cairo font-semibold text-sm uppercase tracking-widest mb-3">
            آراء العملاء
          </p>
          <h2 className="text-navy font-cairo font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            ماذا يقولون عنّا
          </h2>
          <p className="text-navy/50 font-cairo text-base md:text-lg max-w-md mx-auto leading-relaxed">
            آراء حقيقية من عملاء يستخدمون منتجاتنا يومياً
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <span key={si} className="text-gold text-base">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-navy/70 font-cairo text-sm md:text-base leading-loose flex-1 mb-7">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-cairo font-bold text-sm text-white shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initial}
                </div>
                <div>
                  <p className="text-navy font-cairo font-bold text-sm leading-tight">{r.name}</p>
                  <p className="text-navy/45 font-cairo text-xs leading-tight mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-navy/40 font-cairo text-sm mb-5">
            انضم إلى أكثر من 500 عميل سعيد
          </p>
          <a
            href="https://wa.me/201033276241?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20DC%20Note"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-navy text-cream font-cairo font-bold px-8 py-3.5 rounded-full hover:bg-navy-light transition-colors duration-200 shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-80">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            تواصل معنا على واتساب
          </a>
        </motion.div>

      </div>
    </section>
  );
}
