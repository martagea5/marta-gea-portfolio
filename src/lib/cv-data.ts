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
  surname: "Almudéver",
  title: "Diseñadora de Interiores & Producto",
  contact: {
    email: "martagea5@hotmail.es",
    phone: "635 911 200",
    phoneHref: "tel:+34635911200",
    linkedin: "linkedin.com/in/marta-gea-483b75255",
    linkedinHref: "https://www.linkedin.com/in/marta-gea-483b75255/",
    location: "Valencia, España",
    dob: "22/03/2000",
  },
  portfolioUrl: "https://martagea5.github.io/marta-gea-portfolio/",
  profile:
    "Ingeniera de Diseño Industrial especializada en interiorismo residencial y diseño de producto. Desarrollo proyectos integrales de vivienda — planimetría, distribución, modelado 3D y renders — con rigor técnico y sensibilidad estética. Combino creatividad y técnica para superar expectativas y ofrecer soluciones excepcionales.",
  skills: [
    "Buena comunicación",
    "Organización y planificación",
    "Resolución de problemas",
    "Dominio de modelado 3D",
    "Espíritu creativo",
    "Agilidad con los resultados",
  ],
  experience: [
    {
      date: "May 2024 — Presente",
      role: "Diseñadora",
      company: "Salamandra Interiorismo",
      description:
        "Interiorismo residencial: viviendas unifamiliares, reformas integrales, distribución de espacios, selección de materiales y acompañamiento en obra. Proyectos comerciales: Casa Decor Madrid 2025 y POPE DELI Valencia. Planimetría en AutoCAD, modelado y renders en SketchUp y D5 Render, propuestas en InDesign, gestión de presupuestos y atención al cliente.",
    },
    {
      date: "Sep 2023 — May 2024",
      role: "Diseñadora de Interiores",
      company: "Salamandra Interiorismo",
      description:
        "Prácticas en interiorismo residencial: planimetrías en AutoCAD, renders en 3DS Max, apoyo en reformas de vivienda y elaboración de propuestas de diseño.",
    },
    {
      date: "Jun — Sep 2023",
      role: "Ingeniera de Diseño Junior",
      company: "Fab 4.0 Hose S.L.",
      description:
        "Automatización de procesos con Macros en Excel. Revisión y realización de planos en SolidWorks. Control de calidad y fichas técnicas. Elaboración del manual de identidad y página web corporativa. Presentaciones para cliente, gestión de presupuestos, propuestas de distribución en AutoCAD e infografías en 3DS Max.",
    },
    {
      date: "Jun — Jul 2018",
      role: "Becaria — Urbanismo",
      company: "Ajuntament d'Alcàsser",
      description:
        "Elaboración de bocetos de fachadas protegidas, revisión de daños y propuestas de solución.",
    },
  ] satisfies CVEntry[],
  education: [
    {
      role: "Ingeniería de Diseño Industrial y Desarrollo del Producto",
      company: "Universitat Politècnica de València (UPV)",
    },
    {
      role: "Bachillerato en Ciencias Tecnológicas",
      company: "IES Alcàsser",
    },
  ] satisfies CVEntry[],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Catalán", level: "Nativo" },
    { name: "Inglés", level: "B2 Level" },
    { name: "Italiano", level: "A2 ACLES" },
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
    "ArchViz de Interiores — Diseños 3D surrealistas con Blender (Domestika)",
    "Generative AI for Everyone — Coursera",
    "Supervised Machine Learning: Regression & Classification — Coursera",
    "Permiso de conducir B",
  ],
};
