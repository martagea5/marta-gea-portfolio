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
  selectedId: string | null;
}

export default function Projects({
  active,
  onFilterChange,
  onProjectClick,
  selectedId,
}: Props) {
  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="proyectos"
      className="py-14 md:py-28 lg:py-36 px-4 md:px-12 lg:px-20"
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

      {/* Grid 2 columnas en desktop */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const isSelected = selectedId === project.id;
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: isSelected ? 1 : 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group"
              >
                <button
                  className="block w-full text-left"
                  onClick={() => onProjectClick(project.id)}
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden bg-stone-100 aspect-[4/3] mb-5">
                    <Image
                      src={asset(project.thumbnail)}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay al hover */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                    {/* Badge de categoría sobre imagen */}
                    <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase text-white/90 bg-charcoal/70 backdrop-blur-sm px-3 py-1">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-[clamp(20px,2.5vw,28px)] font-normal tracking-[0.03em] text-ink leading-[1.2] mb-2 group-hover:text-stone-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-[13px] md:text-[14px] font-light text-stone-400 leading-[1.75] line-clamp-2">
                          {project.description}
                        </p>
                      )}
                    </div>
                    {/* Flecha */}
                    <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-charcoal group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-300 text-sm">
                      →
                    </span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
