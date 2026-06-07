"use client";

import { useState } from "react";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import { projects, type ProjectCategory } from "@/lib/data";

export type Filter = "all" | ProjectCategory;

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Projects active={active} onFilterChange={setActive} />
      {visible.map((p) => (
        <ProjectDetail key={p.id} project={p} />
      ))}
    </>
  );
}
