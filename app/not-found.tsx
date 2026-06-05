import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl mb-6">🎨</div>
        <h1 className="text-navy font-cairo font-black text-5xl mb-4">404</h1>
        <h2 className="text-navy font-cairo font-bold text-2xl mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-navy/60 font-cairo text-base mb-8 max-w-md mx-auto leading-relaxed">
          يبدو أن هذه الصفحة تاهت في رحلتها الإبداعية! دعنا نعيدك إلى الطريق الصحيح.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-cream font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy-light transition-colors"
          >
            🏠 الرئيسية
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-cairo font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-cream transition-all"
          >
            🛍️ المتجر
          </Link>
        </div>
      </div>
    </div>
  );
}
