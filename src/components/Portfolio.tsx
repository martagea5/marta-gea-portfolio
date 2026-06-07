"use client";

import { useState } from "react";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import { projects, type ProjectCategory } from "@/lib/data";

export type Filter = "all" | ProjectCategory;

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const scrollToProject = (id: string) => {
    const needsReset = active !== "all";
    setActive("all");

    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, needsReset ? 450 : 50);
  };

  return (
    <>
      <Projects
        active={active}
        onFilterChange={setActive}
        onProjectClick={scrollToProject}
      />
      {projects.map((p) => (
        <ProjectDetail key={p.id} project={p} />
      ))}
    </>
  );
}
