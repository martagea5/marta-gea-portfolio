export interface CVLanguage {
  name: string;
  level: string;
  pct: number;
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
    "Ingeniera de Diseño Industrial con más de 2 años de experiencia en interiorismo residencial y diseño de producto. Especializada en proyectos integrales de viviendas: planimetría, distribución, modelado 3D, renders y dirección creativa. Combina rigor técnico y sensibilidad estética en cada proyecto, con especial atención al detalle y a la coherencia del espacio.",
  experience: [
    {
      date: "Mayo 2024 — Presente",
      role: "Diseñadora",
      company: "Salamandra Interiorismo · Valencia",
      description:
        "Desarrollo de proyectos de interiorismo residencial: viviendas unifamiliares, reformas integrales, distribución de espacios, selección de materiales y acompañamiento en obra. También participación en proyectos comerciales como Casa Decor Madrid 2025 y POPE DELI Valencia. Planimetría en AutoCAD, modelado y renders en SketchUp y D5 Render, propuestas en InDesign, gestión de presupuestos, atención al cliente e identidad corporativa.",
    },
    {
      date: "Septiembre 2023 — Mayo 2024",
      role: "Diseñadora de Interiores",
      company: "Salamandra Interiorismo · Valencia",
      description:
        "Prácticas en interiorismo residencial: planimetrías, propuestas visuales, modelado y renders en AutoCAD y 3DS Max, apoyo en reformas de vivienda y proyectos comerciales puntuales.",
    },
    {
      date: "Junio — Septiembre 2023",
      role: "Ingeniera de Diseño Junior",
      company: "Fab 4.0 Hose S.L. · Valencia",
      description:
        "Automatización de procesos en Excel con macros, revisión de planos en SolidWorks, controles de calidad y generación de fichas técnicas.",
    },
    {
      date: "Julio 2018",
      role: "Becaria — Urbanismo",
      company: "Ajuntament d'Alcàsser · Valencia",
      description:
        "Bocetos de fachadas protegidas, revisión de daños estructurales y propuestas de solución.",
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
    { name: "Español", level: "Nativo", pct: 100 },
    { name: "Catalán", level: "Nativo", pct: 100 },
    { name: "Inglés", level: "B2 Level", pct: 75 },
    { name: "Italiano", level: "A2 ACLES", pct: 35 },
  ] satisfies CVLanguage[],
  tools: [
    "AutoCAD",
    "SketchUp",
    "D5 Render",
    "3DS Max",
    "V-Ray",
    "Rhino",
    "Blender",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "SolidWorks",
    "WordPress / HTML",
  ],
  certifications: [
    "ArchViz 3D Surrealista — Domestika",
    "Generative AI for Everyone — Coursera",
    "Supervised Machine Learning — Coursera",
    "Permiso de conducir B",
  ],
};
