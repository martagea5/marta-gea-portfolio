"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import type { Project } from "@/lib/data";
import { asset } from "@/lib/assets";

interface NavProject {
  id: string;
  title: string;
}

interface Props {
  project: Project;
  prevProject: NavProject | null;
  nextProject: NavProject | null;
  onNavigate: (id: string) => void;
}

function getRowCols(totalImages: number, index: number): string {
  const patterns: Record<number, string[]> = {
    1: ["grid-cols-1"],
    2: ["grid-cols-2"],
    3: ["grid-cols-2", "grid-cols-2", "grid-cols-1"],
  };

  if (totalImages <= 3) {
    const p = patterns[totalImages] ?? ["grid-cols-1"];
    return p[index % p.length] ?? "grid-cols-1";
  }

  const cycle = index % 5;
  if (cycle < 2) return "grid-cols-2";
  if (cycle < 3) return "grid-cols-1";
  return "grid-cols-2";
}

export default function ProjectDetail({
  project,
  prevProject,
  nextProject,
  onNavigate,
}: Props) {
  const [lightbox, setLightbox] = useState<{
    src: string;
    caption?: string;
  } | null>(null);

  const rows: { src: string; caption?: string }[][] = [];
  let i = 0;
  while (i < project.images.length) {
    const colClass = getRowCols(project.images.length, rows.length);
    const count = colClass === "grid-cols-1" ? 1 : 2;
    rows.push(
      project.images.slice(i, i + Math.min(count, project.images.length - i))
    );
    i += count;
  }

  const scrollTo = (id: string) => {
    onNavigate(id);
  };

  return (
    <>
      <section
        id={project.id}
        className="py-14 md:py-32 lg:py-40 px-4 md:px-12 lg:px-20 bg-offwhite border-t border-stone-100"
      >
        <div className="max-w-5xl mx-auto">
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("proyectos");
              if (el) {
                const y =
                  el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
              }
            }}
            className="inline-block mb-10 text-[10px] tracking-[0.2em] text-stone-400 hover:text-charcoal transition-colors"
          >
            ← TODOS LOS PROYECTOS
          </a>

          <SectionHeader
            title={project.title}
            category={project.categoryLabel}
            meta={project.meta}
          />

          {project.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
            >
              <p className="text-[15px] font-light leading-[1.9] text-stone-500">
                {project.description}
              </p>
            </motion.div>
          )}

          <div className="flex flex-col gap-[2px]">
            {rows.map((row, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: ri * 0.08 }}
                className={`grid gap-[2px] ${
                  row.length === 1
                    ? "grid-cols-1"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {row.map((img, ci) => (
                  <figure
                    key={ci}
                    className="overflow-hidden bg-white group"
                  >
                    <div
                      className="cursor-zoom-in"
                      onClick={() =>
                        setLightbox({
                          src: asset(img.src),
                          caption: img.caption,
                        })
                      }
                    >
                      <Image
                        src={asset(img.src)}
                        alt={img.caption ?? project.title}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain transition-transform duration-600 group-hover:scale-[1.02]"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone-400 border-t border-stone-100">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </motion.div>
            ))}
          </div>

          <nav className="mt-16 md:mt-24 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {prevProject ? (
              <a
                href={`#${prevProject.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(prevProject.id);
                }}
                className="text-left group"
              >
                <span className="block text-[9px] tracking-[0.25em] text-stone-400 mb-2">
                  ← ANTERIOR
                </span>
                <span className="text-sm tracking-[0.08em] text-charcoal group-hover:text-stone-500 transition-colors">
                  {prevProject.title}
                </span>
              </a>
            ) : (
              <span />
            )}

            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("proyectos");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
                }
              }}
              className="text-center text-[10px] tracking-[0.2em] text-stone-400 hover:text-charcoal transition-colors"
            >
              PROYECTOS
            </a>

            {nextProject ? (
              <a
                href={`#${nextProject.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(nextProject.id);
                }}
                className="text-right group sm:col-start-3"
              >
                <span className="block text-[9px] tracking-[0.25em] text-stone-400 mb-2">
                  SIGUIENTE →
                </span>
                <span className="text-sm tracking-[0.08em] text-charcoal group-hover:text-stone-500 transition-colors">
                  {nextProject.title}
                </span>
              </a>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-ink/95 flex flex-col items-center justify-center cursor-zoom-out px-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-8 text-white/70 hover:text-white text-2xl font-light transition-colors"
            >
              &#10005;
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox.caption ?? ""}
              width={1600}
              height={1000}
              className="max-w-[90vw] max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {lightbox.caption && (
              <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-white/60">
                {lightbox.caption}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
