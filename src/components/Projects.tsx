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
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] pb-2 relative transition-colors ${
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

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-[2px]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={`group bg-stone-50 overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <a
                href={`#${project.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onProjectClick(project.id);
                }}
                className="block relative overflow-hidden"
              >
                <div
                  className={`relative overflow-hidden bg-stone-200 ${
                    project.featured
                      ? "aspect-[4/3] md:aspect-[21/9]"
                      : "aspect-[4/3] md:aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={asset(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out md:group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Mobile: info below image */}
                <div className="md:hidden px-4 py-4 bg-white border-t border-stone-100">
                  <span className="block text-[9px] tracking-[0.3em] text-stone-400 mb-1.5">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-sm font-light tracking-[0.12em] text-charcoal">
                    {project.title}
                  </h3>
                </div>

                {/* Desktop: overlay */}
                <div
                  className={`hidden md:block absolute inset-x-0 bottom-0 px-10 py-8 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent text-white transition-all duration-500 ${
                    project.featured
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <span className="block text-[9px] tracking-[0.3em] opacity-80 mb-2">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-light tracking-[0.15em]">
                    {project.title}
                  </h3>
                  {project.featured && project.description && (
                    <p className="text-[13px] font-light mt-2 opacity-70 max-w-lg">
                      {project.description}
                    </p>
                  )}
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
