import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
