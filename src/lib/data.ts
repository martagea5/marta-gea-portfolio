export type ProjectCategory = "interiorismo" | "producto" | "grafico";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  thumbnail: string;
  description?: string;
  meta?: string;
  images: { src: string; caption?: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "oficina",
    title: "PROYECTO OFICINA",
    category: "interiorismo",
    categoryLabel: "INTERIORISMO",
    thumbnail: "/img/projects/edifica-infografia-1.jpg",
    description:
      "Proyecto integral de diseño de oficina corporativa. Desde el análisis del estado actual hasta la propuesta final, abarcando distribución espacial, materialidad, selección de mobiliario e infografías. Un espacio sobrio y funcional con una materialidad cuidada que combina arcilla, madera y latón.",
    meta: "Diseño de interiores · Valencia, 2024",
    images: [
      { src: "/img/projects/edifica-planta-actual.jpg", caption: "Estado actual" },
      { src: "/img/projects/edifica-planta-propuesta.jpg", caption: "Planta propuesta" },
      { src: "/img/projects/edifica-alzado-fachada.jpg", caption: "Alzado fachada" },
      { src: "/img/projects/edifica-alzado-juntas.jpg", caption: "Alzado sala de juntas" },
      { src: "/img/projects/edifica-materialidad.jpg", caption: "Materialidad" },
      { src: "/img/projects/edifica-moodboard-estar.jpg", caption: "Sala de estar" },
      { src: "/img/projects/edifica-moodboard-juntas.jpg", caption: "Sala de juntas" },
      { src: "/img/projects/edifica-moodboard-despacho.jpg", caption: "Despacho" },
      { src: "/img/projects/edifica-infografia-1.jpg", caption: "Infografía" },
      { src: "/img/projects/edifica-infografia-2.jpg", caption: "Infografía" },
      { src: "/img/projects/edifica-iluminacion.jpg", caption: "Iluminación" },
      { src: "/img/projects/edifica-sanitarios.jpg", caption: "Sanitarios" },
      { src: "/img/projects/edifica-mostrador.jpg", caption: "Mostrador a medida" },
    ],
    featured: true,
  },
  {
    id: "grifo",
    title: "GRIFO AIXA",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/grifo-render.jpg",
    meta: "Diseño de producto · UPV",
    images: [
      { src: "/img/projects/grifo-variantes.jpg" },
      { src: "/img/projects/grifo-render.jpg" },
      { src: "/img/projects/grifo-detalle.jpg" },
    ],
  },
  {
    id: "silla",
    title: "SILLA THONET",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/silla-thonet.jpg",
    meta: "Diseño de producto · UPV",
    description: "Reinterpretación infantil del clásico diseño Thonet. Modelado 3D y render fotorrealista.",
    images: [{ src: "/img/projects/silla-thonet.jpg" }],
  },
  {
    id: "altavoz",
    title: "ALTAVOZ BLUETOOTH",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/altavoz-exploded.jpg",
    meta: "Diseño de producto · UPV",
    images: [{ src: "/img/projects/altavoz-exploded.jpg" }],
  },
  {
    id: "reloj",
    title: "MASERATI × GARMIN",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/reloj-maserati-1.jpg",
    meta: "Diseño de producto · UPV",
    images: [
      { src: "/img/projects/reloj-maserati-1.jpg" },
      { src: "/img/projects/reloj-maserati-2.jpg" },
      { src: "/img/projects/reloj-maserati-3.jpg" },
    ],
  },
  {
    id: "trofeo",
    title: "VALENCIA WDC 2022",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/trofeo-valencia.jpg",
    meta: "Trofeo conmemorativo · World Design Capital",
    images: [{ src: "/img/projects/trofeo-valencia.jpg" }],
  },
  {
    id: "metamorfosis",
    title: "LA METAMORFOSIS",
    category: "grafico",
    categoryLabel: "GRÁFICO",
    thumbnail: "/img/projects/metamorfosis.jpg",
    meta: "Diseño editorial · Franz Kafka",
    images: [{ src: "/img/projects/metamorfosis.jpg" }],
  },
  {
    id: "merchandising",
    title: "MERCHANDISING UPV",
    category: "grafico",
    categoryLabel: "GRÁFICO",
    thumbnail: "/img/projects/merchandising-upv.jpg",
    meta: "Diseño gráfico · Universitat Politècnica de València",
    images: [{ src: "/img/projects/merchandising-upv.jpg" }],
  },
  {
    id: "pigment",
    title: "PIGMENT",
    category: "grafico",
    categoryLabel: "GRÁFICO",
    thumbnail: "/img/projects/pigment.jpg",
    meta: "Diseño gráfico · Cartelería y exposición",
    description:
      "Proyecto de diseño gráfico que añade color al espacio: cartelería de evento, identidad visual y aplicaciones para una exposición de producto.",
    images: [{ src: "/img/projects/pigment.jpg" }],
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "AutoCAD", level: 95 },
  { name: "Rhinoceros 3D", level: 90 },
  { name: "SketchUp", level: 90 },
  { name: "SolidWorks", level: 90 },
  { name: "3ds Max", level: 85 },
  { name: "KeyShot", level: 90 },
  { name: "Blender", level: 75 },
  { name: "Illustrator", level: 90 },
  { name: "Photoshop", level: 80 },
  { name: "InDesign", level: 85 },
];

export interface TimelineEntry {
  date?: string;
  role: string;
  company: string;
  description?: string;
}

export const experience: TimelineEntry[] = [
  {
    date: "2024 — Presente",
    role: "Diseñadora",
    company: "Salamandra Interiorismo · Valencia",
    description:
      "Planimetría, propuestas de diseño, modelado 3D, identidad corporativa, diseño web y gestión integral de proyectos de interiorismo.",
  },
  {
    date: "2023 — 2024",
    role: "Diseñadora de Interiores",
    company: "Salamandra Interiorismo · Valencia",
  },
  {
    date: "2023",
    role: "Ingeniera de Diseño Junior",
    company: "Fab 4.0 Hose S.L. · Sueca",
    description:
      "Automatización de procesos, revisión de planos en SolidWorks, controles de calidad y fichas técnicas.",
  },
];

export const education: TimelineEntry[] = [
  {
    role: "Ingeniería de Diseño Industrial y Desarrollo del Producto",
    company: "Universitat Politècnica de València (UPV)",
  },
  {
    role: "ArchViz de Interiores: Diseños 3D con Blender",
    company: "Domestika",
  },
];
