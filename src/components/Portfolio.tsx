"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import { projects, type ProjectCategory } from "@/lib/data";
import { scrollToId, scrollToIdWhenReady } from "@/lib/scroll";

export type Filter = "all" | ProjectCategory;

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = selectedId
    ? projects.find((p) => p.id === selectedId) ?? null
    : null;
  const selectedIndex = selectedProject ? projects.indexOf(selectedProject) : -1;

  const openProject = useCallback((id: string) => {
    setActive("all");
    setSelectedId(id);
    window.setTimeout(() => scrollToIdWhenReady("project-detail-view"), 80);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedId(null);
    window.setTimeout(() => scrollToId("proyectos"), 80);
  }, []);

  const navigateProject = useCallback((id: string) => {
    setSelectedId(id);
    window.setTimeout(() => scrollToIdWhenReady("project-detail-view"), 80);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const project = projects.find((p) => p.id === hash);
    if (project) {
      setSelectedId(hash);
      window.setTimeout(() => scrollToIdWhenReady("project-detail-view", { behavior: "auto" }), 200);
    }
  }, []);

  return (
    <>
      <Projects
        active={active}
        onFilterChange={setActive}
        onProjectClick={openProject}
        selectedId={selectedId}
      />

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="project-detail-view"
            key={selectedProject.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ProjectDetail
              project={selectedProject}
              prevProject={
                selectedIndex > 0
                  ? { id: projects[selectedIndex - 1].id, title: projects[selectedIndex - 1].title }
                  : null
              }
              nextProject={
                selectedIndex < projects.length - 1
                  ? { id: projects[selectedIndex + 1].id, title: projects[selectedIndex + 1].title }
                  : null
              }
              onNavigate={navigateProject}
              onBack={closeProject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
