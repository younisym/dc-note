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

const WA =
  "https://wa.me/201033276241?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20DC%20Note";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center h-16 md:h-18 gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden ring-1 ring-black/8 shadow-sm">
                <Image
                  src="/images/logo.jpg"
                  alt="DC Note"
                  fill
                  className="object-cover"
                  sizes="44px"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none gap-0.5">
                <span className="text-navy font-cairo font-black text-lg tracking-tight leading-none">
                  DC Note
                </span>
                <span className="text-rose font-cairo text-[11px] leading-none font-medium">
                  أطلق العنان لخيالك
                </span>
              </div>
            </Link>

            {/* ── Desktop nav — centred ── */}
            <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 font-cairo text-sm font-medium rounded-full transition-all duration-200
                    ${isActive(link.href)
                      ? "text-navy bg-cream"
                      : "text-navy/60 hover:text-navy hover:bg-gray-50"}
                  `}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── Actions ── */}
            <div className="flex items-center gap-2 shrink-0 mr-auto md:mr-0">

              {/* Shop link — desktop */}
              <Link
                href="/shop"
                className="hidden md:inline-flex items-center font-cairo text-sm font-medium text-navy/60 hover:text-navy transition-colors px-3 py-2"
              >
                المتجر
              </Link>

              {/* CTA — desktop */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden md:inline-flex items-center gap-1.5
                  bg-navy text-cream font-cairo font-semibold text-sm
                  px-5 py-2.5 rounded-full
                  hover:bg-navy-light active:scale-[0.97]
                  transition-all duration-200
                  shadow-sm
                "
              >
                اطلب الآن
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "إغلاق القائمة" : "القائمة"}
                aria-expanded={menuOpen}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-100 transition-colors"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col"
          >
            <div className="h-16" />

            <div className="flex-1 flex flex-col px-5 py-6 overflow-y-auto">

              {/* Links */}
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.22 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-5 py-4 rounded-xl
                        font-cairo font-semibold text-xl transition-colors
                        ${isActive(link.href)
                          ? "bg-cream text-navy"
                          : "text-navy/70 hover:bg-gray-50 hover:text-navy"}
                      `}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="w-2 h-2 rounded-full bg-rose" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-navy text-cream w-full py-4 rounded-2xl font-cairo text-lg font-bold"
                >
                  تسوق الآن
                </Link>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center border border-navy/15 text-navy w-full py-4 rounded-2xl font-cairo text-base font-semibold"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
