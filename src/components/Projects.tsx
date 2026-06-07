"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";
import { asset } from "@/lib/assets";
import type { Filter } from "./Portfolio";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todo" },
  { value: "interiorismo", label: "Interiorismo" },
  { value: "producto", label: "Producto" },
  { value: "grafico", label: "Gráfico" },
];

interface Props {
  active: Filter;
  onFilterChange: (filter: Filter) => void;
  onProjectClick: (id: string) => void;
}

export default function Projects({
  active,
  onFilterChange,
  onProjectClick,
}: Props) {
  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="proyectos"
      className="py-14 md:py-32 lg:py-40 px-4 md:px-12 lg:px-20"
    >
      <SectionHeader title="PROYECTOS" />

      {/* Filters */}
      <div className="flex justify-center gap-4 sm:gap-8 mb-12 md:mb-20 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`text-[10px] sm:text-[11px] tracking-[0.15em] pb-2 relative transition-colors ${
              active === f.value
                ? "text-charcoal"
                : "text-stone-300 hover:text-stone-500"
            }`}
          >
            {f.label}
            {active === f.value && (
              <motion.span
                layoutId="filterUnderline"
                className="absolute bottom-0 left-0 right-0 h-px bg-charcoal"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Editorial list — Paloma Bau style */}
      <motion.div layout className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group"
            >
              <a
                href={`#${project.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onProjectClick(project.id);
                }}
                className="block"
              >
                <div className="relative overflow-hidden bg-stone-100 aspect-[3/2] mb-6 md:mb-8">
                  <Image
                    src={asset(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 960px"
                  />
                </div>

                <div className="max-w-2xl">
                  <span className="block text-[10px] tracking-[0.35em] text-stone-400 mb-3">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-serif text-[clamp(26px,4vw,42px)] font-normal tracking-[0.04em] text-ink leading-[1.15] mb-3">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-[14px] md:text-[15px] font-light text-stone-500 leading-[1.8] line-clamp-2">
                      {project.description}
                    </p>
                  )}
                  <span className="inline-block mt-4 text-[10px] tracking-[0.2em] text-stone-400 group-hover:text-charcoal transition-colors duration-300">
                    VER PROYECTO →
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
