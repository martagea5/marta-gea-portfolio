"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { asset } from "@/lib/assets";

const items = [
  {
    label: "EMAIL",
    value: "martagea5@hotmail.es",
    href: "mailto:martagea5@hotmail.es",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/marta-gea",
    href: "https://www.linkedin.com/in/marta-gea-483b75255/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="inline-block w-4 h-4 mr-2 -mt-px fill-current"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "TELÉFONO",
    value: "635 911 200",
    href: "tel:+34635911200",
  },
  {
    label: "UBICACIÓN",
    value: "Valencia, España",
  },
  {
    label: "IDIOMAS",
    value: "Español · Catalán · Inglés (B2) · Italiano",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-14 md:py-32 lg:py-40 px-4 md:px-12 lg:px-20 bg-charcoal text-white"
    >
      <SectionHeader title="CONTACTO" light />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="font-serif text-[clamp(22px,3vw,32px)] italic leading-[1.5] text-white/90 mb-14">
          ¿Hablamos? Estoy abierta a nuevas oportunidades y colaboraciones.
        </p>

        {/* Botón CV — destacado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`${asset("/cv-marta-gea.pdf")}?v=2026`}
            download="CV_MartaGea.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300 group"
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
            Descargar CV
          </a>
          <a
            href={asset("/cv")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white/70 text-[11px] tracking-[0.25em] uppercase hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            Ver CV online →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <span className="block text-[9px] tracking-[0.3em] text-stone-400 mb-2">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center text-sm font-light text-white/85 hover:text-white transition-colors"
                >
                  {item.icon}
                  {item.value}
                </a>
              ) : (
                <span className="text-sm font-light text-white/85">
                  {item.value}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
