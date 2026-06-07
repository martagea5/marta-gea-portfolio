export interface CVLanguage {
  name: string;
  level: string;
}

export interface CVEntry {
  date?: string;
  role: string;
  company: string;
  description?: string;
}

export const cvData = {
  name: "Marta Gea",
  surname: "Almudever",
  title: "Diseñadora de Interiores & Producto",
  contact: {
    email: "martagea5@hotmail.es",
    phone: "635 911 200",
    phoneHref: "tel:+34635911200",
    linkedin: "linkedin.com/in/marta-gea",
    linkedinHref: "https://www.linkedin.com/in/marta-gea-483b75255/",
    location: "Valencia, España",
  },
  portfolioUrl: "https://martagea5.github.io/marta-gea-portfolio/",
  profile:
    "Ingeniera de Diseño Industrial especializada en interiorismo residencial y diseño de producto. Desarrollo proyectos integrales de vivienda — planimetría, distribución, modelado 3D y renders — con rigor técnico y sensibilidad estética.",
  experience: [
    {
      date: "May 2024 — Presente",
      role: "Diseñadora",
      company: "Salamandra Interiorismo",
      description:
        "Interiorismo residencial: viviendas, reformas integrales y acompañamiento en obra. Proyectos comerciales: Casa Decor Madrid 2025 y POPE DELI Valencia. AutoCAD, SketchUp, D5 Render, InDesign, gestión de presupuestos y atención al cliente.",
    },
    {
      date: "Sep 2023 — May 2024",
      role: "Diseñadora de Interiores",
      company: "Salamandra Interiorismo",
      description:
        "Prácticas en interiorismo residencial: planimetrías, renders en AutoCAD y 3DS Max, apoyo en reformas de vivienda.",
    },
    {
      date: "Jun — Sep 2023",
      role: "Ingeniera de Diseño Junior",
      company: "Fab 4.0 Hose S.L.",
      description:
        "Automatización en Excel, revisión de planos en SolidWorks y fichas técnicas.",
    },
    {
      date: "Jul 2018",
      role: "Becaria — Urbanismo",
      company: "Ajuntament d'Alcàsser",
      description: "Bocetos de fachadas protegidas y propuestas de solución.",
    },
  ] satisfies CVEntry[],
  education: [
    {
      role: "Ingeniería de Diseño Industrial",
      company: "Universitat Politècnica de València (UPV)",
    },
    {
      role: "Bachillerato Ciencias Tecnológicas",
      company: "IES Alcàsser",
    },
  ] satisfies CVEntry[],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Catalán", level: "Nativo" },
    { name: "Inglés", level: "B2 Level" },
    { name: "Italiano", level: "A2" },
  ] satisfies CVLanguage[],
  tools: [
    "AutoCAD",
    "SketchUp",
    "D5 Render",
    "3DS Max",
    "Rhino",
    "Blender",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "SolidWorks",
  ],
  certifications: [
    "ArchViz 3D — Domestika",
    "Generative AI — Coursera",
    "Machine Learning — Coursera",
    "Permiso B",
  ],
};
