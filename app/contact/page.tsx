import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع DC Note عبر واتساب، البريد الإلكتروني، أو وسائل التواصل الاجتماعي. نحن هنا لمساعدتك.",
};

const faqs = [
  {
    q: "كيف أحصل على المنتج بعد الشراء؟",
    a: "منتجاتنا رقمية بالكامل. بعد إتمام الطلب عبر واتساب وتأكيد الدفع، ستصلك ملفات PDF عالية الجودة جاهزة للطباعة فوراً.",
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "نقبل التحويل البنكي، فودافون كاش، إنستا باي، وطرق دفع أخرى. تواصل معنا لمعرفة الطريقة المناسبة لك.",
  },
  {
    q: "هل يمكنني طباعة المنتج أكثر من مرة؟",
    a: "نعم! حين تشتري المنتج تحصل على ملف PDF يمكنك طباعته عدد غير محدود من المرات لاستخدامك الشخصي.",
  },
  {
    q: "هل تقدمون تصاميم مخصصة؟",
    a: "نعم! نقدم خدمة التصاميم المخصصة بأسماء وطلبات محددة. تواصل معنا عبر واتساب لمناقشة طلبك.",
  },
  {
    q: "ما أبعاد المنتجات وهل يمكن طباعتها في أي مكان؟",
    a: "معظم منتجاتنا بأبعاد A4 القياسية، مما يسمح بطباعتها في أي مركز طباعة أو حتى من طابعتك المنزلية.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-cream font-cairo font-black text-4xl md:text-5xl mb-4">
            📬 تواصل معنا
          </h1>
          <p className="text-cream/70 font-cairo text-lg max-w-xl mx-auto">
            نحن دائماً هنا للإجابة على أسئلتك ومساعدتك
          </p>
        </div>
      </div>

      {/* Contact section */}
      <div className="pt-0">
        <ContactSection />
      </div>

      {/* FAQ */}
      <div className="py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-2 rounded-full font-cairo text-sm font-semibold mb-4">
              <span>✦</span> أسئلة شائعة
            </div>
            <h2 className="text-navy font-cairo font-black text-3xl">الأسئلة المتكررة</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-cream-dark/40 shadow-sm"
              >
                <h3 className="text-navy font-cairo font-bold text-base mb-3 flex items-start gap-3">
                  <span className="text-rose mt-0.5">❓</span>
                  {faq.q}
                </h3>
                <p className="text-navy/65 font-cairo text-sm leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-navy/55 font-cairo mb-4">لم تجد إجابتك؟ راسلنا مباشرة!</p>
            <a
              href="https://wa.me/201033276241?text=مرحباً، لدي سؤال عن منتجات DC Note"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-cream font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy-light transition-colors"
            >
              💬 اسألنا عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
