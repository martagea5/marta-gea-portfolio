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
      { src: "/img/projects/edifica-planta-actual.jpg", caption: "Planta actual" },
      { src: "/img/projects/edifica-planta-propuesta.jpg", caption: "Planta propuesta 1" },
      { src: "/img/projects/edifica-planta-propuesta-2.jpg", caption: "Planta propuesta 2" },
      { src: "/img/projects/edifica-demoliciones.jpg", caption: "Demoliciones" },
      { src: "/img/projects/edifica-electricidad.jpg", caption: "Iluminación y electricidad" },
      { src: "/img/projects/edifica-alzado-fachada.jpg", caption: "Alzado fachada" },
      { src: "/img/projects/edifica-alzado-juntas.jpg", caption: "Alzado sala de juntas" },
      { src: "/img/projects/edifica-alzado-despacho.jpg", caption: "Alzado despacho" },
      { src: "/img/projects/edifica-mostrador.jpg", caption: "Mostrador a medida" },
      { src: "/img/projects/edifica-materialidad.jpg", caption: "Materialidad" },
      { src: "/img/projects/edifica-infografia-1.jpg", caption: "Infografía 1" },
      { src: "/img/projects/edifica-infografia-2.jpg", caption: "Infografía 2" },
    ],
    featured: true,
  },
  {
    id: "casa-decor",
    title: "CASA DECOR 2025",
    category: "interiorismo",
    categoryLabel: "INTERIORISMO",
    thumbnail: "/img/projects/casa-decor-1.jpg",
    description:
      "Diseño de aseos públicos para Casa Decor 2025 en Madrid. Un recorrido que contrasta el espacio post-DANA en la Comunidad Valenciana con una visión de renovación: materiales, cocina campestre, despensa y lavadero como trampantojo hacia los baños. Valencia: pasado, presente y futuro.",
    meta: "Interiorismo comercial · Madrid, 2025 · Salamandra Interiorismo",
    images: [
      { src: "/img/projects/casa-decor-1.jpg", caption: "Vista general Casa Decor 2025" },
      { src: "/img/projects/casa-decor-2.jpg", caption: "Espacio post-DANA" },
      { src: "/img/projects/casa-decor-3.jpg", caption: "Renovación" },
      { src: "/img/projects/casa-decor-4.jpg", caption: "Detalle interior" },
      { src: "/img/projects/casa-decor-5.jpg", caption: "Materialidad" },
      { src: "/img/projects/casa-decor-6.jpg", caption: "Cocina campestre" },
      { src: "/img/projects/casa-decor-7.jpg", caption: "Baños" },
      { src: "/img/projects/casa-decor-8.jpg", caption: "Vista general" },
      { src: "/img/projects/casa-decor-9.jpg", caption: "Hall de entrada a cocina" },
      { src: "/img/projects/casa-decor-10.jpg", caption: "Cocina con árbol y cortinas" },
      { src: "/img/projects/casa-decor-11.jpg", caption: "Pasillo acceso a baño" },
      { src: "/img/projects/casa-decor-12.jpg", caption: "Cocina con mesa rústica" },
      { src: "/img/projects/casa-decor-13.jpg", caption: "Corredor con banco y espejo" },
      { src: "/img/projects/casa-decor-14.jpg", caption: "Detalle lavadero" },
    ],
  },
  {
    id: "popedeli",
    title: "POPE DELI",
    category: "interiorismo",
    categoryLabel: "INTERIORISMO",
    thumbnail: "/img/projects/popedeli-1.jpg",
    description:
      "Diseño de interiores del restaurante POPE DELI en Valencia. Un delicatessen neoyorquino donde el pastrami es protagonista: atmósfera cálida y contemporánea que fusiona la estética deli clásica con detalles actuales en el corazón de la ciudad.",
    meta: "Interiorismo comercial · Valencia · Salamandra Interiorismo",
    images: [
      { src: "/img/projects/popedeli-1.jpg", caption: "Fachada POPE DELI Valencia" },
      { src: "/img/projects/popedeli-2.jpg", caption: "Zona de barra alta" },
      { src: "/img/projects/popedeli-3.jpg", caption: "Sala principal" },
      { src: "/img/projects/popedeli-4.jpg", caption: "Galería de cuadros" },
      { src: "/img/projects/popedeli-5.jpg", caption: "Mampara de cristal" },
      { src: "/img/projects/popedeli-6.jpg", caption: "Detalle azulejos y columnas" },
      { src: "/img/projects/popedeli-7.jpg", caption: "Detalle decorativo" },
      { src: "/img/projects/popedeli-8.jpg", caption: "Puerta Restroom" },
      { src: "/img/projects/popedeli-9.jpg", caption: "Baño — azulejos verdes" },
      { src: "/img/projects/popedeli-10.jpg", caption: "Detalle lavabo" },
      { src: "/img/projects/popedeli-11.jpg", caption: "Estantería de barra" },
      { src: "/img/projects/popedeli-12.jpg", caption: "Sala con mesa redonda" },
    ],
  },
  {
    id: "grifo",
    title: "GRIFO AIXA",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/grifo-render.jpg",
    meta: "Diseño de producto · UPV",
    description: "Grifo de diseño minimalista. Forma, función y materialidad en equilibrio.",
    images: [
      { src: "/img/projects/grifo-variantes.jpg", caption: "Variantes de acabado" },
      { src: "/img/projects/grifo-render.jpg", caption: "Render principal" },
      { src: "/img/projects/grifo-detalle.jpg", caption: "Detalle de diseño" },
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
    images: [{ src: "/img/projects/silla-thonet.jpg", caption: "Silla infantil estilo Thonet" }],
  },
  {
    id: "altavoz",
    title: "ALTAVOZ BLUETOOTH",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/altavoz-exploded.jpg",
    meta: "Diseño de producto · UPV",
    description: "Altavoz portátil Bluetooth. Diseño desmontable y vista explosionada.",
    images: [{ src: "/img/projects/altavoz-exploded.jpg", caption: "Vista explosionada" }],
  },
  {
    id: "reloj",
    title: "MASERATI × GARMIN",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/reloj-maserati-1.jpg",
    meta: "Diseño de producto · UPV",
    description: "Reloj deportivo de lujo. Colaboración Maserati × Garmin.",
    images: [
      { src: "/img/projects/reloj-maserati-1.jpg", caption: "Vista general" },
      { src: "/img/projects/reloj-maserati-2.jpg", caption: "Vista frontal" },
      { src: "/img/projects/reloj-maserati-3.jpg", caption: "Vista lateral" },
    ],
  },
  {
    id: "trofeo",
    title: "VALENCIA WDC 2022",
    category: "producto",
    categoryLabel: "PRODUCTO",
    thumbnail: "/img/projects/trofeo-valencia.jpg",
    meta: "Trofeo conmemorativo · World Design Capital",
    description: "Trofeo conmemorativo para la World Design Capital Valencia 2022.",
    images: [{ src: "/img/projects/trofeo-valencia.jpg", caption: "Trofeo World Design Capital 2022" }],
  },
  {
    id: "metamorfosis",
    title: "LA METAMORFOSIS",
    category: "grafico",
    categoryLabel: "GRÁFICO",
    thumbnail: "/img/projects/metamorfosis.jpg",
    meta: "Diseño editorial · Franz Kafka",
    description: "Diseño editorial para La Metamorfosis de Franz Kafka.",
    images: [{ src: "/img/projects/metamorfosis.jpg", caption: "Portada editorial" }],
  },
  {
    id: "merchandising",
    title: "MERCHANDISING UPV",
    category: "grafico",
    categoryLabel: "GRÁFICO",
    thumbnail: "/img/projects/merchandising-upv.jpg",
    meta: "Diseño gráfico · Universitat Politècnica de València",
    description: "Línea de merchandising para la Universitat Politècnica de València.",
    images: [{ src: "/img/projects/merchandising-upv.jpg", caption: "Línea de merchandising UPV" }],
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "AutoCAD", level: 90 },
  { name: "D5 Render", level: 85 },
  { name: "SketchUp", level: 75 },
  { name: "Photoshop", level: 90 },
  { name: "3DS Max", level: 70 },
  { name: "Illustrator", level: 90 },
  { name: "Rhino", level: 80 },
  { name: "InDesign", level: 85 },
  { name: "V-Ray", level: 65 },
  { name: "Office", level: 90 },
];

export interface TimelineEntry {
  date?: string;
  role: string;
  company: string;
  meta?: string;
  description?: string;
}

export const experience: TimelineEntry[] = [
  {
    date: "May 2024 — Presente",
    role: "Diseñadora",
    company: "Salamandra Interiorismo",
    meta: "Jornada completa · Bétera, Valencia",
    description:
      "Desarrollo de proyectos de interiorismo residencial: viviendas unifamiliares, reformas integrales, distribución de espacios y acompañamiento en obra. También participación en proyectos comerciales como Casa Decor Madrid 2025 y POPE DELI Valencia. Planimetría, renders, selección de materiales, atención al cliente, gestión de presupuestos e identidad corporativa.",
  },
  {
    date: "Sep 2023 — May 2024",
    role: "Diseñadora de Interiores",
    company: "Salamandra Interiorismo",
    meta: "Contrato de prácticas · Bétera, Valencia",
    description:
      "Prácticas en interiorismo residencial: planimetrías, propuestas visuales, modelado y renders en AutoCAD y 3ds Max, apoyo en reformas de vivienda y proyectos comerciales puntuales.",
  },
  {
    date: "Jun 2023 — Sep 2023",
    role: "Ingeniera de Diseño Junior",
    company: "Fab 4.0 Hose S.L.",
    meta: "Contrato de prácticas · Sueca, Valencia",
    description:
      "Automatización de procesos mediante plantillas en Excel con macros, revisión de planos en SolidWorks, toma de medidas y controles de calidad, generación de un estándar de calidad para la empresa y creación de fichas técnicas.",
  },
  {
    date: "Jul 2018",
    role: "Becaria",
    company: "Ajuntament d'Alcàsser",
    meta: "Contrato temporal · Alcàsser, Valencia",
    description:
      "Departamento de Urbanismo: elaboración de bocetos para fachadas protegidas, identificación y propuesta de soluciones para daños, recopilación de datos sobre el estado del alcantarillado y contribución al mantenimiento del patrimonio arquitectónico.",
  },
];

export const education: TimelineEntry[] = [
  {
    role: "Ingeniería de Diseño Industrial y Desarrollo del Producto",
    company: "Universitat Politècnica de València (UPV)",
  },
  {
    role: "ArchViz de Interiores: Diseños 3D Surrealistas con Blender",
    company: "Domestika",
  },
];
