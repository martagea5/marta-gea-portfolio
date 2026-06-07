"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center pt-[72px] px-6 md:px-12 lg:px-20 gap-10 lg:gap-20"
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-10 lg:py-24 text-center lg:text-left"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
          DISEÑO DE INTERIORES & PRODUCTO
        </p>
        <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-normal leading-[1.1] text-ink mb-8">
          Marta Gea
          <br />
          <em className="text-stone-400">Almudever</em>
        </h1>
        <p className="text-[clamp(15px,1.4vw,18px)] font-light text-stone-500 leading-relaxed max-w-[400px] mb-12 mx-auto lg:mx-0">
          Cada espacio cuenta una historia.
          <br />
          Mi trabajo es darle forma.
        </p>
        <a
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#proyectos");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 72;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="inline-block text-[11px] tracking-[0.2em] uppercase px-10 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-400"
        >
          Ver proyectos
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative flex items-center justify-center min-h-[500px] lg:min-h-[700px] bg-stone-50"
      >
        <Image
          src="/img/marta-hero.jpg"
          alt="Marta Gea"
          width={768}
          height={1024}
          priority
          className="max-h-[80vh] w-auto object-contain"
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </motion.div>
    </section>
  );
}
