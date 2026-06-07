"use client";



import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { NAV_OFFSET, scrollToSelector } from "@/lib/scroll";



const links = [

  { href: "#proyectos", label: "PROYECTOS" },

  { href: "#studio", label: "SOBRE MÍ" },

  { href: "#contacto", label: "CONTACTO" },

];



export default function Nav() {

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<string | null>(null);



  useEffect(() => {

    const sections = links

      .map((l) => ({

        id: l.href.slice(1),

        el: document.getElementById(l.href.slice(1)),

      }))

      .filter((s) => s.el);



    const onScroll = () => {

      setScrolled(window.scrollY > 40);



      let current: string | null = null;

      sections.forEach(({ id, el }) => {

        if (el && el.getBoundingClientRect().top <= NAV_OFFSET + 40) {

          current = id;

        }

      });

      setActiveSection(current);

    };



    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  const scrollTo = (href: string) => {

    setOpen(false);

    scrollToSelector(href);

  };



  const linkClass = (href: string, mobile = false) => {

    const isActive = activeSection === href.slice(1);

    if (mobile) {

      return `text-sm tracking-[0.3em] transition-colors ${

        isActive ? "text-charcoal" : "text-stone-400"

      }`;

    }

    return `text-[11px] tracking-[0.2em] transition-colors relative group ${

      isActive ? "text-charcoal" : "text-stone-500 hover:text-charcoal"

    }`;

  };



  return (

    <>

      <nav

        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between h-[60px] md:h-[72px] px-4 md:px-12 lg:px-20 transition-all duration-300 ${

          scrolled

            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)]"

            : "bg-white/80 backdrop-blur-md"

        } border-b border-black/[0.04]`}

      >

        <a

          href="#hero"

          onClick={(e) => {

            e.preventDefault();

            scrollTo("#hero");

          }}

          className="text-[13px] font-medium tracking-[0.25em] text-ink"

        >

          MARTA GEA

        </a>



        <ul className="hidden md:flex items-center gap-10">

          {links.map((l) => (

            <li key={l.href}>

              <a

                href={l.href}

                onClick={(e) => {

                  e.preventDefault();

                  scrollTo(l.href);

                }}

                className={linkClass(l.href)}

              >

                {l.label}

                <span

                  className={`absolute -bottom-1 left-0 h-px bg-charcoal transition-all duration-400 ${

                    activeSection === l.href.slice(1)

                      ? "w-full"

                      : "w-0 group-hover:w-full"

                  }`}

                />

              </a>

            </li>

          ))}

        </ul>



        <button

          onClick={() => setOpen(!open)}

          className="md:hidden w-7 h-5 relative flex flex-col justify-between"

          aria-label="Menú"

        >

          <span

            className={`w-full h-px bg-charcoal transition-all duration-300 origin-center ${

              open ? "rotate-45 translate-y-[9px]" : ""

            }`}

          />

          <span

            className={`w-full h-px bg-charcoal transition-all duration-300 origin-center ${

              open ? "-rotate-45 -translate-y-[1px]" : ""

            }`}

          />

        </button>

      </nav>



      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.3 }}

            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"

          >

            {links.map((l, i) => (

              <motion.a

                key={l.href}

                href={l.href}

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.1 + i * 0.08 }}

                onClick={(e) => {

                  e.preventDefault();

                  scrollTo(l.href);

                }}

                className={linkClass(l.href, true)}

              >

                {l.label}

              </motion.a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}


