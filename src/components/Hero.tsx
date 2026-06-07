"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/assets";

export default function Hero() {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center pt-[60px] md:pt-[72px] px-4 md:px-12 lg:px-20 gap-6 md:gap-10 lg:gap-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-10 lg:py-24 text-center lg:text-left"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 mb-8">
          DISEÑO DE INTERIORES & PRODUCTO
        </p>
        <h1 className="font-serif text-[clamp(44px,7vw,88px)] font-normal leading-[1.05] text-ink mb-10">
          Marta Gea
          <br />
          <em className="text-stone-400">Almudever</em>
        </h1>
        <p className="text-[clamp(15px,1.4vw,18px)] font-light text-stone-500 leading-[1.9] max-w-[420px] mb-14 mx-auto lg:mx-0">
          Cada espacio cuenta una historia.
          <br />
          Mi trabajo es darle forma.
        </p>
        <a
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#proyectos");
          }}
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-charcoal hover:text-stone-500 transition-colors duration-300 group"
        >
          PROYECTOS
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] md:min-h-[560px] lg:min-h-[700px] bg-stone-50"
      >
        <Image
          src={asset("/img/marta-hero.jpg")}
          alt="Marta Gea"
          width={768}
          height={1024}
          priority
          className="max-h-[75vh] w-auto object-contain"
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </motion.div>
    </section>
  );
}
