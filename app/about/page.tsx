import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على DC Note - علامة تجارية إبداعية تساعدك على استعادة خيالك وإبداعك من خلال كتب التلوين والمخططات والأنشطة التعليمية.",
};

const values = [
  {
    icon: "🎨",
    title: "الإبداع",
    description: "نؤمن أن الإبداع ليس موهبة نادرة، بل هو حق لكل إنسان ينتظر الاكتشاف.",
    color: "#C4899A",
  },
  {
    icon: "🌿",
    title: "الهدوء",
    description: "في عالم مليء بالضجيج نصنع لحظات سكون ودفء تريح العقل وتجدد الطاقة.",
    color: "#A8BBA8",
  },
  {
    icon: "💝",
    title: "الجودة",
    description: "كل تصميم يمر بمراحل دراسة دقيقة لضمان تجربة استخدام رائعة وجمالية عالية.",
    color: "#C9A87C",
  },
  {
    icon: "📚",
    title: "التعلم",
    description: "نصنع منتجات تعليمية للأطفال تجمع بين المتعة والمعرفة والقيم الجميلة.",
    color: "#2C2C54",
  },
];

const milestones = [
  { year: "2024", event: "انطلاق DC Note بأول مجموعة من كتب التلوين" },
  { year: "2024", event: "إطلاق سلسلة كتب الأطفال (يوميات فتاة ومسلمة وفتى مسلم)" },
  { year: "2025", event: "إضافة سلسلة ألعاب الدماغ (مغامرة الحشرات)" },
  { year: "2025", event: "تجاوز 500 عميل سعيد في مختلف الدول العربية" },
  { year: "2025+", event: "توسعة المتجر بإضافة المخططات والملصقات والأنشطة التعليمية" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose/20 text-rose-light px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-6">
                <span>✦</span> قصتنا
              </div>
              <h1 className="text-cream font-cairo font-black text-4xl md:text-5xl leading-tight mb-6">
                نحن DC Note
                <br />
                <span className="text-rose">أطلق العنان لخيالك</span>
              </h1>
              <p className="text-cream/75 font-cairo text-lg leading-relaxed mb-8">
                رفيقك في رحلة الهروب من تعفن الدماغ واستعادة الخيال. نصنع منتجات تساعدك على العودة إلى نفسك والتواصل مع إبداعك الفطري.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-rose text-white font-cairo font-bold px-8 py-3 rounded-full hover:bg-rose-dark transition-colors shadow-lg"
              >
                🛍️ تصفح المنتجات
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
                <Image
                  src="/images/logo.jpg"
                  alt="DC Note Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-6">
            <span>✦</span> رسالتنا
          </div>
          <h2 className="text-navy font-cairo font-black text-3xl md:text-4xl mb-6 leading-tight">
            Stop Scrolling. Start Imagining.
          </h2>
          <p className="text-navy/70 font-cairo text-lg leading-relaxed mb-6">
            في عصر أصبحت فيه الشاشات تستنزف خيالنا وتحتجز إبداعنا، تأتي DC Note لتُعيدك إلى نفسك. نؤمن أن في كل إنسان فناناً ينتظر الاكتشاف، وكاتباً ينتظر الكلمة، ومفكراً ينتظر اللحظة الهادئة.
          </p>
          <p className="text-navy/70 font-cairo text-lg leading-relaxed">
            منتجاتنا ليست مجرد ورق وألوان؛ هي أدوات للتحول الشخصي، ولحظات للتأمل العميق، وفرص لبناء عادات إبداعية تدوم مدى الحياة.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-4">
              <span>✦</span> قيمنا
            </div>
            <h2 className="text-navy font-cairo font-black text-3xl">ما نؤمن به</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-cream-dark/30"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${value.color}18` }}
                >
                  {value.icon}
                </div>
                <h3 className="font-cairo font-bold text-lg mb-3" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="text-navy/65 font-cairo text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose/20 text-rose-light px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-4">
              <span>✦</span> مسيرتنا
            </div>
            <h2 className="text-cream font-cairo font-black text-3xl">رحلتنا معك</h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute right-8 top-0 bottom-0 w-px bg-rose/30 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="relative shrink-0">
                    <div className="w-16 text-left">
                      <span className="text-rose font-cairo font-black text-lg">{m.year}</span>
                    </div>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 h-4 bg-rose rounded-full hidden md:block" />
                  </div>
                  <div className="flex-1 bg-cream/10 rounded-2xl p-4 border border-cream/10">
                    <p className="text-cream/85 font-cairo text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-blush text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🌸</div>
          <h2 className="text-navy font-cairo font-black text-3xl mb-4">
            ابدأ رحلتك الإبداعية اليوم
          </h2>
          <p className="text-navy/65 font-cairo mb-8">
            انضم إلى مئات الأشخاص الذين اختاروا الهروب الجميل من الشاشات واستعادة خيالهم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-navy text-cream font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy-light transition-colors shadow-lg"
            >
              🛍️ تسوق الآن
            </Link>
            <a
              href="https://wa.me/201033276241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-cream transition-all"
            >
              💬 تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
