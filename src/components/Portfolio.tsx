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
    if (needsReset) setActive("all");

    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, needsReset ? 420 : 0);
  };

  return (
    <>
      <Projects
        active={active}
        onFilterChange={setActive}
        onProjectClick={scrollToProject}
      />
      {projects.map((p, i) => (
        <ProjectDetail
          key={p.id}
          project={p}
          prevProject={
            i > 0
              ? { id: projects[i - 1].id, title: projects[i - 1].title }
              : null
          }
          nextProject={
            i < projects.length - 1
              ? { id: projects[i + 1].id, title: projects[i + 1].title }
              : null
          }
          onNavigate={scrollToProject}
        />
      ))}
    </>
  );
}
