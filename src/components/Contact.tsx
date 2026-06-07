"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const items = [
  {
    label: "EMAIL",
    value: "martagea5@gmail.com",
    href: "mailto:martagea5@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/marta-gea",
    href: "https://www.linkedin.com/in/marta-gea-483b75255/",
  },
  {
    label: "UBICACIÓN",
    value: "Valencia, España",
  },
  {
    label: "IDIOMAS",
    value: "Español · Catalán · Inglés · Italiano",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-charcoal text-white"
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
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-light text-white/85 hover:text-white transition-colors"
                >
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
