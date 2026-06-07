"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { skills, experience, education, type TimelineEntry } from "@/lib/data";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="flex items-center gap-5" ref={ref}>
      <span className="text-xs tracking-[0.1em] text-charcoal min-w-[110px]">
        {name}
      </span>
      <div className="flex-1 h-px bg-stone-100 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-stone-400 absolute inset-y-0 left-0"
        />
      </div>
    </div>
  );
}

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="flex flex-col gap-8 pl-6 border-l border-stone-100">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[29px] top-2 w-[6px] h-[6px] rounded-full bg-stone-400" />
          {item.date && (
            <span className="block text-[10px] tracking-[0.2em] text-stone-400 mb-1">
              {item.date}
            </span>
          )}
          <h4 className="text-[15px] text-charcoal mb-1">{item.role}</h4>
          <p className="text-[13px] font-light text-stone-500">
            {item.company}
          </p>
          {item.description && (
            <p className="text-[13px] font-light text-stone-300 mt-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Studio() {
  return (
    <section
      id="studio"
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      <SectionHeader title="STUDIO" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 mb-16 lg:mb-28">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[17px] font-light text-charcoal leading-[1.8] mb-7">
            Ingeniera de Diseño Industrial con especialización en interiorismo y
            diseño de producto. Mi trabajo se sitúa en el territorio entre la
            técnica y la sensibilidad estética, entendiendo cada proyecto como
            una oportunidad para crear espacios y objetos con identidad propia.
          </p>
          <p className="text-[15px] font-light text-stone-500 leading-[1.9] mb-5">
            Actualmente formo parte de{" "}
            <strong className="font-medium text-charcoal">
              Salamandra Interiorismo
            </strong>
            , donde desarrollo proyectos integrales que abarcan desde la
            planimetría y el diseño de distribución hasta la selección de
            materiales, la creación de propuestas visuales y el acompañamiento en
            obra. Mi enfoque combina rigor técnico con una mirada creativa,
            siempre orientada a la coherencia y el cuidado del detalle.
          </p>
          <p className="text-[15px] font-light text-stone-500 leading-[1.9]">
            Formada en la{" "}
            <strong className="font-medium text-charcoal">
              Universitat Politècnica de València
            </strong>
            , domino herramientas de modelado 3D, renderizado y diseño gráfico.
            Creo en los espacios que trascienden la moda y resisten al paso del
            tiempo.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3 className="text-[10px] tracking-[0.35em] text-stone-400 mb-8">
            HERRAMIENTAS
          </h3>
          <div className="flex flex-col gap-4">
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h3 className="text-[10px] tracking-[0.35em] text-stone-400 mb-8">
            EXPERIENCIA
          </h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="text-[10px] tracking-[0.35em] text-stone-400 mb-8">
            FORMACIÓN
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
