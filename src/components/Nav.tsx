"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#proyectos", label: "PROYECTOS" },
  { href: "#sobre-mi", label: "SOBRE MÍ" },
  { href: "#contacto", label: "CONTACTO" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between h-[72px] px-6 md:px-12 lg:px-20 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-md"
        } border-b border-black/[0.04]`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="text-[13px] font-medium tracking-[0.25em] text-ink"
        >
          MARTA GEA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="text-[11px] tracking-[0.2em] text-stone-500 hover:text-charcoal transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-7 h-5 relative flex flex-col justify-between"
          aria-label="Menú"
        >
          <span
            className={`w-full h-px bg-charcoal transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`w-full h-px bg-charcoal transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[1px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="text-sm tracking-[0.3em] text-charcoal"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
