"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "منتجات مميزة" },
  { value: "500+", label: "عميل سعيد" },
  { value: "4.9★", label: "متوسط التقييم" },
  { value: "100%", label: "رقمي وفوري" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-navy overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/product-art-coloring.jpg"
                alt="DC Note - حين تعجز الكلمات"
                width={600}
                height={800}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center text-xl">
                  🎨
                </div>
                <div>
                  <p className="font-cairo font-bold text-navy text-sm">الأكثر مبيعاً</p>
                  <p className="font-cairo text-navy/60 text-xs">حين تعجز الكلمات</p>
                </div>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-rose text-white rounded-2xl p-4 shadow-xl"
            >
              <p className="font-cairo font-black text-2xl leading-none">500+</p>
              <p className="font-cairo text-white/80 text-xs">عميل سعيد</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-rose/20 text-rose-light px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-6">
              <span>✦</span>
              <span>قصتنا</span>
            </div>

            <h2 className="text-cream font-cairo font-black text-3xl md:text-4xl leading-tight mb-6">
              نساعدك على{" "}
              <span className="text-rose">استعادة خيالك</span>
              {" "}وإبداعك
            </h2>

            <p className="text-cream/75 font-cairo text-base leading-relaxed mb-5">
              DC Note هي علامة تجارية إبداعية تؤمن بأن كل إنسان بداخله فنان ينتظر أن يُكتشف. في عالم مليء بالشاشات والضجيج الرقمي، نصنع منتجات جميلة تعيدك إلى نفسك.
            </p>

            <p className="text-cream/75 font-cairo text-base leading-relaxed mb-8">
              من كتب التلوين والتأمل للبالغين، إلى كتب الأطفال التعليمية والممتعة، نقدم تجارب إبداعية تهمك قلبك وتضيء يومك. كل منتج نصنعه يحمل رسالة: أنت تستحق لحظات هادئة وجميلة.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-rose font-cairo font-black text-2xl">{stat.value}</p>
                  <p className="text-cream/60 font-cairo text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-rose text-white font-cairo font-bold px-8 py-3 rounded-full hover:bg-rose-dark transition-colors shadow-lg"
            >
              اقرأ قصتنا الكاملة ←
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
