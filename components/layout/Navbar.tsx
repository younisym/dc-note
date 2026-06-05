"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "الرئيسية",   href: "/" },
  { label: "المتجر",     href: "/shop" },
  { label: "الفئات",     href: "/categories" },
  { label: "من نحن",     href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const WA_HREF =
  "https://wa.me/201033276241?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20DC%20Note";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-warm-white/96 backdrop-blur-md shadow-[0_1px_12px_rgba(44,44,84,0.08)]"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 md:h-20 gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 ring-rose/20">
                <Image
                  src="/images/logo.jpg"
                  alt="DC Note"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-navy font-cairo font-bold text-base leading-tight">
                  DC Note
                </span>
                <span className="text-rose font-cairo text-[11px] leading-tight">
                  أطلق العنان لخيالك
                </span>
              </div>
            </Link>

            {/* ── Desktop nav — centred ── */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-3.5 py-2 font-cairo font-medium text-sm rounded-full
                      transition-all duration-200
                      ${active
                        ? "text-rose-dark bg-blush"
                        : "text-navy hover:text-rose-dark hover:bg-blush/70"}
                    `}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + hamburger ── */}
            <div className="flex items-center gap-2 shrink-0 mr-auto md:mr-0">
              {/* Separator — visible on desktop */}
              <span className="hidden md:block w-px h-5 bg-navy/12 mx-1" aria-hidden />

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden md:inline-flex items-center gap-1.5
                  bg-navy text-cream
                  px-4 py-2 rounded-full
                  font-cairo text-sm font-semibold
                  hover:bg-navy-light active:scale-95
                  transition-all duration-200 shadow-sm
                "
              >
                <span className="text-base leading-none">🛒</span>
                <span>اطلب الآن</span>
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-blush transition-colors"
                aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={menuOpen}
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45,  y: 7  } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-navy rounded-full origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block w-5 h-0.5 bg-navy rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-navy rounded-full origin-center"
                />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col"
          >
            {/* Header spacer */}
            <div className="h-16" />

            <div className="flex-1 flex flex-col px-5 py-6 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          flex items-center px-5 py-4 rounded-2xl
                          font-cairo font-semibold text-xl
                          transition-colors
                          ${active
                            ? "bg-blush text-rose-dark"
                            : "text-navy hover:bg-blush/60 hover:text-rose"}
                        `}
                      >
                        {link.label}
                        {active && <span className="mr-auto text-rose text-sm">●</span>}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    bg-navy text-cream w-full py-4 rounded-2xl
                    font-cairo text-lg font-bold
                    active:scale-98 transition-transform
                  "
                >
                  <span>💬</span> تواصل عبر واتساب
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
