"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "سارة أحمد",
    role: "أم لطفلين",
    text: "كتاب يوميات فتاة مسلمة رائع! بنتي أصبحت تنتظر وقت التلوين كل يوم. منتج مميز حقاً.",
    rating: 5,
    emoji: "👩",
  },
  {
    id: 2,
    name: "منى خالد",
    role: "مصممة جرافيك",
    text: "حين تعجز الكلمات الجأ للفن... هذا الكتاب غيّر علاقتي بنفسي. أوصي به لكل شخص يشعر بالضغط.",
    rating: 5,
    emoji: "🎨",
  },
  {
    id: 3,
    name: "فاطمة محمد",
    role: "طالبة جامعية",
    text: "تصميمات راقية جداً وجودة ممتازة. الأسرة كلها استفادت من منتجات DC Note.",
    rating: 5,
    emoji: "📚",
  },
  {
    id: 4,
    name: "أم عمر",
    role: "ربة منزل",
    text: "مغامرة الحشرات حلّت مشكلة إدمان الشاشات عند ابني! الآن يجلس ساعات يحل المتاهات.",
    rating: 5,
    emoji: "🌟",
  },
  {
    id: 5,
    name: "نور إبراهيم",
    role: "معلمة",
    text: "أستخدم منتجات DC Note في الفصل. الأطفال يعشقونها والنتائج التعليمية تحسنت بشكل واضح.",
    rating: 5,
    emoji: "🏫",
  },
  {
    id: 6,
    name: "ريم السيد",
    role: "موظفة",
    text: "أخيراً وجدت ما يساعدني على الاسترخاء بعد يوم عمل مرهق. شكراً DC Note ❤️",
    rating: 5,
    emoji: "💝",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="ماذا يقول عملاؤنا؟"
          subtitle="آراء حقيقية من أشخاص حقيقيين أحبوا تجربة DC Note"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-gold text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy/75 font-cairo text-sm leading-relaxed mb-6 relative">
                <span className="text-rose text-4xl font-serif absolute -top-2 -right-1 opacity-20">&ldquo;</span>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blush-dark rounded-full flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <p className="text-navy font-cairo font-bold text-sm">{t.name}</p>
                  <p className="text-navy/50 font-cairo text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-navy/60 font-cairo text-base mb-4">
            انضم إلى مئات العملاء السعداء 🌸
          </p>
          <a
            href="https://wa.me/201033276241?text=مرحباً، أريد الاستفسار عن منتجات DC Note"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-cream font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy-light transition-colors shadow-lg"
          >
            💬 اطلب الآن عبر واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
