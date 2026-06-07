"use client";



import { motion } from "framer-motion";

import Image from "next/image";

import { asset } from "@/lib/assets";

import { scrollToId } from "@/lib/scroll";



export default function Hero() {




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

        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5 sm:gap-8">
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("proyectos");
            }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-charcoal hover:text-stone-500 transition-colors duration-300 group"
          >
            PROYECTOS
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={asset("/portfolio-presentacion.pdf")}
            download="Portfolio_MartaGea.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 border border-stone-300 text-[11px] tracking-[0.25em] uppercase text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300 group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Portfolio PDF
          </a>
        </div>

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


