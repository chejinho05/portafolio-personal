"use client";

import ProjectCard from "./ProjectCard";
import ProjectPlaceholder from "./ProjectPlaceholder";
import { usePreferences } from "./PreferencesProvider";

const projects = [
  {
    title: "Nodeflix",
    year: "2026",
    categoryEn: "Full-stack entertainment platform",
    categoryEs: "Plataforma full-stack de entretenimiento",
    descriptionEn:
      "Full-stack web application for exploring movies and series, using a graph database and a random-walk algorithm to deliver highly personalized content recommendations.",
    descriptionEs:
      "Aplicación web full-stack para explorar películas y series, utilizando una base de datos orientada a grafos y un algoritmo de random walk para ofrecer recomendaciones altamente personalizadas.",
    bulletsEn: [
      "Advanced recommendation engine powered by Neo4j",
      "Catalog exploration integrated with the TMDB API",
      "Preference onboarding and interaction tracking",
    ],
    bulletsEs: [
      "Motor avanzado de recomendaciones impulsado por Neo4j",
      "Exploración de catálogo integrada con la API de TMDB",
      "Onboarding de preferencias y seguimiento de interacciones",
    ],
    tags: ["Angular", "Node.js", "Neo4j", "TypeScript", "TMDB API"],
    frontendRepoLink: "https://github.com/stepaz-2022164/nodeflix-front",
    repoLink: "https://github.com/stepaz-2022164/nodeflix-back",
    initials: "NF",
    accent: "#e50914",
    image: "/assets/images/nodeflix.png",
  },
  {
    title: "Bitcoin Script Interpreter",
    year: "2026",
    categoryEn: "Bitcoin scripting simulator",
    categoryEs: "Simulador de scripting de Bitcoin",
    descriptionEn:
      "Java project that simulates and interprets Bitcoin's native scripting language through a custom execution context and opcode registry.",
    descriptionEs:
      "Proyecto en Java que simula e interpreta el lenguaje de scripting nativo de Bitcoin mediante un contexto de ejecución y un registro propio de opcodes.",
    bulletsEn: [
      "Arithmetic, cryptographic, logical, flow-control, and stack opcodes",
      "Custom execution context operated through an opcode registry",
      "Maven architecture with Javadocs, UML diagrams, and unit tests",
    ],
    bulletsEs: [
      "Opcodes aritméticos, criptográficos, lógicos, de control y de pila",
      "Contexto de ejecución operado mediante un registro de opcodes",
      "Arquitectura Maven con Javadocs, diagramas UML y pruebas unitarias",
    ],
    tags: ["Java", "Maven", "Bitcoin Script", "Cryptography", "Javadoc"],
    repoLink: "https://github.com/stepaz-2022164/BitcoinProject",
    initials: "₿",
    accent: "#f7931a",
    image: "/assets/images/bitcoin-script.png",
  },
  {
    title: "Gestor de Notas",
    year: "2025",
    categoryEn: "Academic management system",
    categoryEs: "Gestor académico",
    descriptionEn:
      "Web application for academic administration and progress tracking, designed to organize students, assignments, and tutoring subjects.",
    descriptionEs:
      "Aplicación web para la administración y el seguimiento académico, diseñada para organizar estudiantes, tareas y materias de servicios de tutoría.",
    bulletsEn: [
      "Flask backend integrated with MongoDB",
      "Student, assignment, and subject management interfaces",
      "Performance charts for academic progress monitoring",
    ],
    bulletsEs: [
      "Backend en Flask integrado con MongoDB",
      "Gestión de estudiantes, tareas y materias",
      "Gráficas de rendimiento para monitorear el progreso académico",
    ],
    tags: ["Python", "Flask", "MongoDB", "HTML", "CSS"],
    repoLink: "https://github.com/stepaz-2022164/GestorNotas",
    initials: "GN",
    accent: "#3776ab",
    image: undefined,
  },
  {
    title: "InventarioTEC",
    year: "2024",
    categoryEn: "Corporate inventory system",
    categoryEs: "Sistema de inventario corporativo",
    descriptionEn:
      "Full-stack web application for corporate inventory administration, operational asset control, employee tracking, and geographic resource distribution.",
    descriptionEs:
      "Aplicación web full-stack para administrar inventarios corporativos, controlar activos operativos y gestionar empleados y recursos por ubicación.",
    bulletsEn: [
      "Modular Angular front end for organizational management",
      ".NET 8 and Entity Framework Core relational backend",
      "Equipment, ownership, reporting, and geographic location modules",
    ],
    bulletsEs: [
      "Frontend modular en Angular para la gestión organizacional",
      "Backend relacional con .NET 8 y Entity Framework Core",
      "Módulos de equipos, propietarios, reportes y ubicaciones",
    ],
    tags: ["Angular", "TypeScript", "C#", ".NET 8", "SQL Server"],
    frontendRepoLink: "https://github.com/stepaz-2022164/InventarioTEC-front",
    repoLink: "https://github.com/stepaz-2022164/InventarioTEC-back",
    initials: "IT",
    accent: "#512bd4",
    image: undefined,
  },
  {
    title: "Banca en Línea",
    year: "2024",
    categoryEn: "Digital financial platform",
    categoryEs: "Plataforma financiera digital",
    descriptionEn:
      "Full digital-banking platform for managing accounts, transactions, deposits, financial products, and user profiles.",
    descriptionEs:
      "Plataforma de banca digital para gestionar cuentas, transacciones, depósitos, productos financieros y perfiles de usuario.",
    bulletsEn: [
      "Interactive React and Vite user experience",
      "Node.js backend for users, accounts, and transactions",
      "JWT authorization, bcrypt encryption, and documented Postman tests",
    ],
    bulletsEs: [
      "Experiencia interactiva desarrollada con React y Vite",
      "Backend Node.js para usuarios, cuentas y transacciones",
      "Autorización JWT, cifrado con bcrypt y pruebas documentadas en Postman",
    ],
    tags: ["React", "Vite", "Node.js", "JWT", "Tailwind CSS"],
    repoLink: "https://github.com/Chejinos-Kinal/online-bank-backend",
    initials: "BL",
    accent: "#16a34a",
    image: undefined,
  },
  {
    title: "UVG Canvas Dashboard",
    year: "2025",
    categoryEn: "Academic analytics dashboard",
    categoryEs: "Dashboard analítico académico",
    descriptionEn:
      "Spring Boot platform that extracts, processes, and visualizes Canvas LMS data to support academic performance analysis.",
    descriptionEs:
      "Plataforma con Spring Boot que extrae, procesa y visualiza datos de Canvas LMS para analizar el desempeño académico.",
    bulletsEn: [
      "MVC backend with courses, enrollments, assignments, and submissions",
      "Prediction and dashboard services for academic analysis",
      "Dynamic HTML interface with access-control configuration",
    ],
    bulletsEs: [
      "Backend MVC para cursos, inscripciones, tareas y entregas",
      "Servicios de predicción y dashboard para análisis académico",
      "Interfaz HTML dinámica con configuración de control de acceso",
    ],
    tags: ["Java", "Spring Boot", "Maven", "HTML", "Canvas LMS API"],
    repoLink: "https://github.com/bcastillo-2022474/uvg-dashboard-canvas",
    initials: "UVG",
    accent: "#6db33f",
    image: undefined,
  },
];

const TAG_COLORS: Record<string, string> = {
  Angular: "#dd0031",
  "Node.js": "#68a063",
  Neo4j: "#4581c3",
  TypeScript: "#3178c6",
  Java: "#ed8b00",
  Python: "#3776ab",
  Flask: "#ffffff",
  MongoDB: "#47a248",
  "C#": "#68217a",
  React: "#61dafb",
  "Spring Boot": "#6db33f",
};

export default function GithubProjectsGrid() {
  const { locale } = usePreferences();

  return (
    <main className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          size="medium"
          badge={index === 0 ? (locale === "en" ? "Latest project" : "Proyecto reciente") : undefined}
          badgeColor={index === 0 ? "gold" : "blue"}
          meta={`${locale === "en" ? project.categoryEn : project.categoryEs} / ${project.year}`}
          title={project.title}
          desc={locale === "en" ? project.descriptionEn : project.descriptionEs}
          bullets={locale === "en" ? project.bulletsEn : project.bulletsEs}
          tags={project.tags.map((label) => ({ label, color: TAG_COLORS[label] }))}
          repoLink={project.repoLink}
          frontendRepoLink={project.frontendRepoLink}
          art={
            project.image ? (
              <img
                src={project.image}
                alt={locale === "en" ? `${project.title} project interface` : `Interfaz del proyecto ${project.title}`}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <ProjectPlaceholder
                initials={project.initials}
                title={project.title}
                category={locale === "en" ? project.categoryEn : project.categoryEs}
                accent={project.accent}
              />
            )
          }
        />
      ))}
    </main>
  );
}
