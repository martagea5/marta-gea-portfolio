"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import type { Project } from "@/lib/data";
import { asset } from "@/lib/assets";

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

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const rows: { src: string; caption?: string }[][] = [];
  let i = 0;
  while (i < project.images.length) {
    const colClass = getRowCols(project.images.length, rows.length);
    const count = colClass === "grid-cols-1" ? 1 : 2;
    rows.push(project.images.slice(i, i + Math.min(count, project.images.length - i)));
    i += count;
  }

  return (
    <>
      <section
        id={project.id}
        className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-offwhite border-t border-stone-100"
      >
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
                row.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {row.map((img, ci) => (
                <figure
                  key={ci}
                  className="relative overflow-hidden bg-white group cursor-zoom-in"
                  onClick={() => setLightbox(asset(img.src))}
                >
                  <Image
                    src={asset(img.src)}
                    alt={img.caption ?? project.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transition-transform duration-600 group-hover:scale-[1.02]"
                  />
                  {img.caption && (
                    <figcaption className="absolute bottom-0 left-0 px-5 py-3 text-[10px] tracking-[0.2em] uppercase text-stone-500 bg-white/85 backdrop-blur-sm">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-ink/95 flex items-center justify-center cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-8 text-white/70 hover:text-white text-2xl font-light transition-colors"
            >
              &#10005;
            </button>
            <Image
              src={lightbox ?? ""}
              alt=""
              width={1600}
              height={1000}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
