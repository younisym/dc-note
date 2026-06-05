import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "DC Note | أطلق العنان لخيالك",
    template: "%s | DC Note",
  },
  description:
    "DC Note - رفيقك في رحلة استعادة الخيال والإبداع. كتب تلوين، مخططات، ألعاب دماغية وأنشطة تعليمية للكبار والأطفال.",
  keywords: [
    "DC Note",
    "كتب تلوين",
    "مخططات",
    "ملصقات",
    "ألعاب دماغية",
    "أنشطة تعليمية",
    "تلوين للكبار",
    "كتب أطفال",
    "إبداع",
    "منتجات رقمية",
  ],
  authors: [{ name: "DC Note" }],
  creator: "DC Note",
  openGraph: {
    title: "DC Note | أطلق العنان لخيالك",
    description: "رفيقك في رحلة استعادة الخيال والإبداع. كتب تلوين، مخططات، وأنشطة تعليمية.",
    type: "website",
    locale: "ar_EG",
    siteName: "DC Note",
    images: [{ url: "/images/banner.jpg", width: 2033, height: 773, alt: "DC Note" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Note | أطلق العنان لخيالك",
    description: "رفيقك في رحلة استعادة الخيال والإبداع.",
    images: ["/images/banner.jpg"],
  },
  robots: { index: true, follow: true },
};

export const runtime = "edge";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C2C54",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-cream text-ink antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
