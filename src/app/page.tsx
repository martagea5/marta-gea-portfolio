import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ProjectDetail from "@/components/ProjectDetail";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        {projects.map((p) => (
          <ProjectDetail key={p.id} project={p} />
        ))}
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
