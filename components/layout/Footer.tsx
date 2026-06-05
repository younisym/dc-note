import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: "📘", label: "فيسبوك",   href: "https://facebook.com/dc.note24" },
  { icon: "📸", label: "انستغرام", href: "https://instagram.com/dc.note24" },
  { icon: "🎵", label: "تيك توك",  href: "https://tiktok.com/@dc.note24" },
];

const quickLinks = [
  { label: "الرئيسية",   href: "/" },
  { label: "المتجر",     href: "/shop" },
  { label: "الفئات",     href: "/categories" },
  { label: "من نحن",     href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const categories = [
  { label: "كتب التلوين",  href: "/categories#coloring-books" },
  { label: "كتب الأطفال",  href: "/categories#kids-coloring" },
  { label: "ألعاب الدماغ", href: "/categories#brain-games" },
  { label: "المخططات",    href: "/categories#planners" },
  { label: "الملصقات",    href: "/categories#stickers" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80">

      {/* Wave — fixed height so it never collapses */}
      <div className="w-full overflow-hidden h-10 leading-none">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 40L60 33.3C120 26.7 240 13.3 360 10C480 6.7 600 13.3 720 20C840 26.7 960 33.3 1080 30C1200 26.7 1320 13.3 1380 6.7L1440 0V40H0Z"
            fill="#F8F3EE"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

        {/* ── Main grid: 1-col → 2-col → 4-col ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-rose/30 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="DC Note"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <span className="text-cream font-cairo font-bold text-lg block leading-tight">DC Note</span>
                <span className="text-rose-light font-cairo text-xs">أطلق العنان لخيالك</span>
              </div>
            </div>
            <p className="text-cream/65 font-cairo text-sm leading-relaxed mb-5 max-w-xs">
              رفيقك في رحلة استعادة الخيال والإبداع. منتجات تساعدك على الهروب من ضجيج الحياة واكتشاف نفسك من جديد.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose/30 transition-colors duration-200 text-base"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-sm mb-4 pb-2 border-b border-cream/10 uppercase tracking-wider">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/65 font-cairo text-sm hover:text-rose-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-rose text-xs group-hover:translate-x-[-2px] transition-transform">◈</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-sm mb-4 pb-2 border-b border-cream/10 uppercase tracking-wider">
              الفئات
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-cream/65 font-cairo text-sm hover:text-rose-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-rose text-xs group-hover:translate-x-[-2px] transition-transform">◈</span>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-cairo font-bold text-sm mb-4 pb-2 border-b border-cream/10 uppercase tracking-wider">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-rose mt-0.5 text-sm shrink-0">📍</span>
                <span className="text-cream/65 font-cairo text-sm leading-relaxed">
                  العاشر من رمضان - الشرقية - مصر
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-rose text-sm shrink-0">📞</span>
                <a
                  href="tel:01033276241"
                  className="text-cream/65 font-cairo text-sm hover:text-rose-light transition-colors"
                  dir="ltr"
                >
                  01033276241
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-rose text-sm shrink-0">💬</span>
                <a
                  href="https://wa.me/201033276241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/65 font-cairo text-sm hover:text-rose-light transition-colors"
                >
                  واتساب
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-rose text-sm shrink-0">✉️</span>
                <a
                  href="mailto:dc.note24@gmail.com"
                  className="text-cream/65 font-cairo text-sm hover:text-rose-light transition-colors break-all"
                >
                  dc.note24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-5 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/45 font-cairo text-xs text-center order-2 sm:order-1">
            © {new Date().getFullYear()} DC Note. جميع الحقوق محفوظة.
          </p>
          <p className="text-cream/35 font-cairo text-xs text-center order-1 sm:order-2">
            صُنع بـ ❤️ لكل من يؤمن بقيمة الخيال
          </p>
        </div>
      </div>
    </footer>
  );
}
