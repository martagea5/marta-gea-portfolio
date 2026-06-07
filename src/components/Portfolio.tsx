"use client";

import { useCallback, useEffect, useState } from "react";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import { projects, type ProjectCategory } from "@/lib/data";
import { scrollToIdWhenReady } from "@/lib/scroll";

export type Filter = "all" | ProjectCategory;

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const scrollToProject = useCallback(
    (id: string) => {
      const needsReset = active !== "all";
      if (needsReset) setActive("all");

      const delay = needsReset ? 450 : 0;
      window.setTimeout(() => {
        scrollToIdWhenReady(id);
      }, delay);
    },
    [active]
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const knownIds = new Set(["proyectos", "studio", "contacto", "hero", ...projects.map((p) => p.id)]);
    if (!knownIds.has(hash)) return;

    window.setTimeout(() => {
      scrollToIdWhenReady(hash, { behavior: "auto", maxAttempts: 30 });
    }, 120);
  }, []);

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
