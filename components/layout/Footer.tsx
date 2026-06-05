import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: "📘", label: "فيسبوك", href: "https://facebook.com/dc.note24" },
  { icon: "📸", label: "انستغرام", href: "https://instagram.com/dc.note24" },
  { icon: "🎵", label: "تيك توك", href: "https://tiktok.com/@dc.note24" },
];

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المتجر", href: "/shop" },
  { label: "الفئات", href: "/categories" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const categories = [
  { label: "كتب التلوين", href: "/categories#coloring-books" },
  { label: "كتب الأطفال", href: "/categories#kids-coloring" },
  { label: "ألعاب الدماغ", href: "/categories#brain-games" },
  { label: "المخططات", href: "/categories#planners" },
  { label: "الملصقات", href: "/categories#stickers" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40L60 33.3C120 26.7 240 13.3 360 10C480 6.7 600 13.3 720 20C840 26.7 960 33.3 1080 30C1200 26.7 1320 13.3 1380 6.7L1440 0V40H0Z"
            fill="#F8F3EE"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-rose/30">
                <Image
                  src="/images/logo.jpg"
                  alt="DC Note"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="text-cream font-cairo font-bold text-xl block leading-none">DC Note</span>
                <span className="text-rose-light font-cairo text-xs">أطلق العنان لخيالك</span>
              </div>
            </div>
            <p className="text-cream/70 font-cairo text-sm leading-relaxed mb-6">
              رفيقك في رحلة استعادة الخيال والإبداع. منتجات تساعدك على الهروب من ضجيج الحياة واكتشاف نفسك من جديد.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose/30 transition-colors duration-200 text-lg"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-base mb-4 pb-2 border-b border-cream/10">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 font-cairo text-sm hover:text-rose-light transition-colors flex items-center gap-2"
                  >
                    <span className="text-rose text-xs">◈</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-base mb-4 pb-2 border-b border-cream/10">
              الفئات
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-cream/70 font-cairo text-sm hover:text-rose-light transition-colors flex items-center gap-2"
                  >
                    <span className="text-rose text-xs">◈</span>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-base mb-4 pb-2 border-b border-cream/10">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">📍</span>
                <span className="text-cream/70 font-cairo text-sm">
                  العاشر من رمضان - الشرقية - مصر
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">📞</span>
                <a href="tel:01033276241" className="text-cream/70 font-cairo text-sm hover:text-rose-light transition-colors" dir="ltr">
                  01033276241
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">💬</span>
                <a
                  href="https://wa.me/201033276241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 font-cairo text-sm hover:text-rose-light transition-colors"
                >
                  واتساب
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">✉️</span>
                <a href="mailto:dc.note24@gmail.com" className="text-cream/70 font-cairo text-sm hover:text-rose-light transition-colors">
                  dc.note24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 font-cairo text-xs text-center">
            © {new Date().getFullYear()} DC Note. جميع الحقوق محفوظة.
          </p>
          <p className="text-cream/40 font-cairo text-xs text-center">
            صُنع بـ ❤️ لكل من يؤمن بقيمة الخيال
          </p>
        </div>
      </div>
    </footer>
  );
}
