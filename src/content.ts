// Single source for page copy. Facts come from perfil.md; KL details stay generic (NDA).
export type Lang = "en" | "es";
export type T = { en: string; es: string };
export type Area = "web" | "mobile" | "desktop";

export const EMAIL = "pipes.felipe425@gmail.com";
export const LINKS = {
  github: "https://github.com/wllmvg",
  linkedin: "https://www.linkedin.com/in/wllmvg/",
};
export const cvHref = (l: Lang) => `/cv/William_Vega_CV_${l.toUpperCase()}.pdf`;

export const ui = {
  nav: { work: { en: "Work", es: "Proyectos" }, thesis: { en: "Thesis", es: "Tesis" }, path: { en: "Path", es: "Trayectoria" }, contact: { en: "Contact", es: "Contacto" } },
  role: { en: "Junior Developer", es: "Desarrollador Junior" },
  lede: { en: "Native iOS & Android at work. Full-stack web on my own.", es: "iOS y Android nativo en el trabajo. Web full-stack por mi cuenta." },
  motto: { en: "I care about what works, and why.", es: "Me interesa lo que funciona y el por qué." },
  now: { en: "Now", es: "Ahora" },
  nowLine: { en: "at KL Security", es: "en KL Security" },
  study: { en: "Software Engineering, UDES, 2027", es: "Ingeniería de Software, UDES, 2027" },
  location: { en: "Bogotá", es: "Bogotá" },
  cv: { en: "Download CV", es: "Descargar CV" },
  email: { en: "Email me", es: "Escríbeme" },
  photoAlt: { en: "Portrait of William Vega", es: "Retrato de William Vega" },
  bars: { ios: "iOS · Swift / SwiftUI", android: "Android · Java", web: "Web · React / Node" },
  whereNow: { en: "Now at KL Security: iOS + Android", es: "Hoy en KL Security: iOS + Android" },

  klTitle: { en: "Shipping native mobile at a smart-lock company", es: "Apps móviles nativas para una empresa de cerraduras inteligentes" },
  klMeta: { en: "KL Security S.A.S. · Aug 2026 – present · Remote, full-time", es: "KL Security S.A.S. · ago 2026 – hoy · Remoto, tiempo completo" },
  klBody: {
    en: "I build and maintain the company's iOS app (Swift, SwiftUI) and Android app (Java) for its smart-lock platform: account and sign-in flows, production fixes, tests and documentation.",
    es: "Construyo y mantengo la app iOS (Swift, SwiftUI) y la app Android (Java) de su plataforma de cerraduras inteligentes: flujos de cuenta e inicio de sesión, correcciones en producción, pruebas y documentación.",
  },
  nda: { en: "Covered by an NDA, so no screenshots here.", es: "Está bajo acuerdo de confidencialidad, así que aquí no hay capturas." },

  thesisTitle: { en: "Academic Management Platform", es: "Plataforma de Gestión Académica" },
  thesisBody: {
    en: "My undergraduate thesis: a full-stack platform that UDES students use for their academic process. I designed, built and deployed it end to end.",
    es: "Mi trabajo de grado: una plataforma full-stack que los estudiantes de la UDES usan en su proceso académico. La diseñé, construí y desplegué de principio a fin.",
  },
  facts: [
    { k: { en: "Grade", es: "Nota" }, v: { en: "4.9 / 5.0", es: "4,9 / 5,0" } },
    { k: { en: "Users", es: "Usuarios" }, v: { en: "~64 active students", es: "~64 estudiantes activos" } },
    { k: { en: "Hosting", es: "Hosting" }, v: { en: "AWS EC2, in production", es: "AWS EC2, en producción" } },
    { k: { en: "Stack", es: "Stack" }, v: { en: "React, TypeScript, Node, Express, MongoDB, JWT, Tailwind", es: "React, TypeScript, Node, Express, MongoDB, JWT, Tailwind" } },
  ],
  thesisPrivate: { en: "Private repository. I can walk you through the code on a call.", es: "Repositorio privado. Puedo mostrarte el código en una llamada." },

  workTitle: { en: "Selected work", es: "Proyectos" },
  filters: { all: { en: "All", es: "Todos" }, web: { en: "Web", es: "Web" }, mobile: { en: "Mobile", es: "Móvil" }, desktop: { en: "Desktop", es: "Escritorio" } },
  live: { en: "Live", es: "En vivo" },
  code: { en: "Code", es: "Código" },
  team: { en: "Team project", es: "Proyecto en equipo" },
  solo: { en: "Solo", es: "Individual" },

  stackTitle: { en: "Tools I use", es: "Con qué trabajo" },
  pathTitle: { en: "Path", es: "Trayectoria" },
  certTitle: { en: "Certificates", es: "Certificados" },
  openPdf: { en: "Open PDF", es: "Abrir PDF" },

  contactTitle: { en: "Let's talk.", es: "Hablemos." },
  contactBody: { en: "Open to junior mobile or full-stack roles, remote or in Bogotá. English B1 (Cambridge), native Spanish.", es: "Abierto a cargos junior móviles o full-stack, remoto o en Bogotá. Inglés B1 (Cambridge), español nativo." },
  copy: { en: "Copy", es: "Copiar" },
  copied: { en: "Copied", es: "Copiado" },
  skip: { en: "Skip to content", es: "Saltar al contenido" },
  toTop: { en: "Back to top", es: "Volver arriba" },
};

export type Project = {
  id: string;
  name: string;
  area: Area;
  desc: T;
  stack: string;
  img?: string;
  live?: string;
  code?: string;
  team?: boolean;
};

export const projects: Project[] = [
  {
    id: "nexo", name: "nexo-app", area: "web", img: "/screenshots/nexo-app.png",
    desc: { en: "Personal and shared finances for couples: accounts, debts, budgets and savings goals.", es: "Finanzas personales y compartidas en pareja: cuentas, deudas, presupuestos y metas de ahorro." },
    stack: "React · TypeScript", live: "https://nexo-finances.vercel.app", code: "https://github.com/wllmvg/nexo-app",
  },
  {
    id: "usage", name: "usage-for-claude", area: "desktop", img: "/screenshots/usage-for-claude.png",
    desc: { en: "Windows tray app that tracks Claude usage limits in real time. Tiny, no telemetry.", es: "App de bandeja para Windows que muestra los límites de uso de Claude en tiempo real. Ligera y sin telemetría." },
    stack: "Rust", live: "https://wllmvg.github.io/usage-for-claude/", code: "https://github.com/wllmvg/usage-for-claude",
  },
  {
    id: "scheduly", name: "Scheduly", area: "web", img: "/screenshots/scheduly.jpg",
    desc: { en: "Turns a university timetable into an .ics calendar for Google, Apple or Outlook.", es: "Convierte tu horario universitario en un calendario .ics para Google, Apple u Outlook." },
    stack: "React · Python / Flask", live: "https://scheduly-psi.vercel.app", code: "https://github.com/wllmvg/scheduly",
  },
  {
    id: "rifally", name: "Rifally", area: "web", img: "/screenshots/rifally.jpg",
    desc: { en: "Create and run raffles: number management, a public sales page and a prize wheel.", es: "Crea y gestiona rifas: números, página pública de venta y ruleta para el ganador." },
    stack: "React · Supabase (PostgreSQL, RLS)", live: "https://rifally-psi.vercel.app", code: "https://github.com/wllmvg/rifally",
  },
  {
    id: "finance", name: "Student Finance", area: "mobile", team: true,
    desc: { en: "Mobile app for students to log income and expenses, with budget alerts and voice entry.", es: "App móvil para que estudiantes registren ingresos y gastos, con alertas de presupuesto y registro por voz." },
    stack: "React Native · Expo", code: "https://github.com/wllmvg/aplicacion-finanzas-movil",
  },
  {
    id: "tokenshift", name: "TokenShift", area: "web", img: "/screenshots/tokenshift.jpg",
    desc: { en: "Shift booking for a shared Claude account: queue, public history and live availability.", es: "Turnos para una cuenta compartida de Claude: cola, historial público y disponibilidad en vivo." },
    stack: "React · Supabase", live: "https://wllmvg.github.io/TokenShift/", code: "https://github.com/wllmvg/TokenShift",
  },
  {
    id: "gridwall", name: "Gridwall", area: "web",
    desc: { en: "Turns your Spotify library into an endless mosaic of album covers.", es: "Convierte tu biblioteca de Spotify en un mural infinito de portadas." },
    stack: "TypeScript · Spotify API", code: "https://github.com/wllmvg/Gridwall",
  },
];

export const stack: { area: T; items: string }[] = [
  { area: { en: "Mobile", es: "Móvil" }, items: "Swift · SwiftUI · UIKit · Java (Android) · React Native / Expo · Xcode · Android Studio" },
  { area: { en: "Web & backend", es: "Web y backend" }, items: "TypeScript · React · Vite · Tailwind · Node.js · Express · Flask · REST · JWT" },
  { area: { en: "Data & cloud", es: "Datos y nube" }, items: "MongoDB · PostgreSQL (Supabase) · Firebase · AWS EC2 · Docker · Vercel" },
  { area: { en: "Also", es: "Además" }, items: "Rust · Python · SQL · Git · Postman · Unit testing · Scrum" },
];

export const path: { years: string; what: T; where: string; note?: T; now?: boolean }[] = [
  { years: "2026 –", what: { en: "Junior Developer", es: "Desarrollador Junior" }, where: "KL Security S.A.S.", note: { en: "Native iOS and Android", es: "iOS y Android nativo" }, now: true },
  { years: "2022 – 2027", what: { en: "B.S. Software Engineering", es: "Ingeniería de Software" }, where: "UDES", note: { en: "GPA 4.07 · BIGATIC research group · Thesis 4.9", es: "Promedio 4,07 · Semillero BIGATIC · Tesis 4,9" } },
  { years: "2022", what: { en: "English B1, Linguaskill", es: "Inglés B1, Linguaskill" }, where: "Cambridge English" },
  { years: "2021", what: { en: "Programming diploma, 600 h", es: "Diplomado en programación, 600 h" }, where: "Misión TIC · UNAL" },
  { years: "2020 – 2021", what: { en: "IT Support", es: "Soporte TI" }, where: "Litoarte, Sogamoso" },
  { years: "2020", what: { en: "Java software seminar", es: "Seminario de competencias en Java" }, where: "Universidad Sergio Arboleda" },
  { years: "2018 – 2022", what: { en: "Graphic design & social media, part-time", es: "Diseño gráfico y redes, medio tiempo" }, where: "Movilcom Colombia" },
];

export const certs: { name: T; org: string; year: string; file: string }[] = [
  { name: { en: "Programming Diploma, Misión TIC 2022", es: "Diplomado en Programación, Misión TIC 2022" }, org: "Universidad Nacional de Colombia", year: "2021", file: "CertificadoUNALWilliam" },
  { name: { en: "Software Competencies Seminar (Java)", es: "Seminario de Competencias en Software (Java)" }, org: "Universidad Sergio Arboleda", year: "2020", file: "CertificadoSergioArboledaWilliam" },
  { name: { en: "Linguaskill, English B1", es: "Linguaskill, inglés B1" }, org: "Cambridge English", year: "2022", file: "Linguaskill_Report_Melgarejo_William" },
];
