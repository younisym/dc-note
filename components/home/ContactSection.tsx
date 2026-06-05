"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const contactItems = [
  {
    icon: "📞",
    label: "اتصل بنا",
    value: "01033276241",
    href: "tel:01033276241",
    color: "#2C2C54",
    bg: "#E8E8F0",
  },
  {
    icon: "💬",
    label: "واتساب",
    value: "راسلنا الآن",
    href: "https://wa.me/201033276241?text=مرحباً DC Note!",
    color: "#25D366",
    bg: "#E8F5E9",
  },
  {
    icon: "✉️",
    label: "البريد الإلكتروني",
    value: "dc.note24@gmail.com",
    href: "mailto:dc.note24@gmail.com",
    color: "#C4899A",
    bg: "#F0D9D9",
  },
  {
    icon: "📍",
    label: "الموقع",
    value: "العاشر من رمضان - الشرقية - مصر",
    href: "#",
    color: "#C9A87C",
    bg: "#F5EDD8",
  },
];

const socialLinks = [
  {
    icon: "📘",
    label: "فيسبوك",
    username: "@dc.note24",
    href: "https://facebook.com/dc.note24",
  },
  {
    icon: "📸",
    label: "انستغرام",
    username: "@dc.note24",
    href: "https://instagram.com/dc.note24",
  },
  {
    icon: "🎵",
    label: "تيك توك",
    username: "@dc_note",
    href: "https://tiktok.com/@dc.note24",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="تواصل معنا"
          subtitle="نحن هنا للإجابة على أسئلتك ومساعدتك في اختيار ما يناسبك"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact items */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -5 }}
                className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-cream-dark/30"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-cairo font-bold text-sm mb-0.5"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </p>
                  <p className="font-cairo text-navy/70 text-base">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Social */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/30">
              <h3 className="text-navy font-cairo font-bold text-lg mb-6 flex items-center gap-2">
                <span>🌸</span> تابعنا على السوشيال ميديا
              </h3>
              <div className="space-y-4">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <p className="font-cairo font-bold text-navy text-sm">{s.label}</p>
                        <p className="font-cairo text-navy/50 text-xs">{s.username}</p>
                      </div>
                    </div>
                    <span className="text-rose font-cairo text-sm group-hover:text-rose-dark transition-colors">
                      متابعة →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-navy rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="relative">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-cream font-cairo font-bold text-xl mb-3">
                  جاهز للطلب؟
                </h3>
                <p className="text-cream/70 font-cairo text-sm mb-6 leading-relaxed">
                  راسلنا مباشرة عبر واتساب وسيرد عليك فريقنا في أقرب وقت.
                </p>
                <a
                  href="https://wa.me/201033276241?text=مرحباً DC Note، أريد الاستفسار عن المنتجات 🌸"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-cairo font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  ابدأ المحادثة
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
