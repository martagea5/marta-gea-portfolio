"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  category?: string;
  meta?: string;
  light?: boolean;
}

export default function SectionHeader({ title, category, meta, light }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
      className="mb-12 md:mb-20 text-center"
    >
      {category && (
        <span className="block text-[9px] tracking-[0.35em] text-stone-400 mb-4">
          {category}
        </span>
      )}
      <h2
        className={`text-[clamp(12px,1.2vw,14px)] tracking-[0.35em] ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {meta && (
        <p className="text-[13px] font-light text-stone-500 mt-3">{meta}</p>
      )}
      <div
        className={`w-10 h-px mx-auto mt-5 ${
          light ? "bg-stone-400" : "bg-stone-400"
        }`}
      />
    </motion.header>
  );
}
