"use client";

import BentoCard from "@/components/BentoCard";
import Footer from "@/components/Footer";
import { usePreferences } from "@/components/PreferencesProvider";
import { clsx } from "clsx";

const categories = [
  {
    titleEn: "Languages & Web Foundations",
    titleEs: "Lenguajes y Fundamentos Web",
    items: [
      { label: "JavaScript", color: "#f7df1e" },
      { label: "TypeScript", color: "#3178c6" },
      { label: "Python", color: "#3776ab" },
      { label: "C#", color: "#512bd4" },
      { label: "HTML5", color: "#e34f26" },
      { label: "CSS3", color: "#1572b6" },
    ],
  },
  {
    titleEn: "Frameworks & Runtimes",
    titleEs: "Frameworks y Entornos",
    items: [
      { label: "React", color: "#61dafb" },
      { label: "Angular", color: "#dd0031" },
      { label: "Node.js", color: "#68a063" },
      { label: "Flask", color: "#ffffff" },
      { label: ".NET", color: "#512bd4" },
    ],
  },
  {
    titleEn: "Databases",
    titleEs: "Bases de Datos",
    items: [
      { label: "SQL Server", color: "#cc2927" },
      { label: "Firebase", color: "#ffca28" },
      { label: "MongoDB", color: "#47a248" },
      { label: "MySQL", color: "#4479a1" },
    ],
  },
  {
    titleEn: "Cloud Services",
    titleEs: "Servicios en la Nube",
    items: [
      { label: "Google Cloud", color: "#4285f4" },
      { label: "Cloud Run", color: "#4285f4" },
      { label: "Firestore", color: "#ffca28" },
      { label: "IAM", color: "#4285f4" },
      { label: "gsutil", color: "#4285f4" },
    ],
  },
];

function getTechIcon(label: string): string {
  const mapping: { [key: string]: string } = {
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Python": "python",
    "C#": "/assets/images/csharp.png",
    "Go": "go",
    "Java": "openjdk",
    "HTML5": "html5",
    "CSS3": "/assets/images/css.png",
    "Next.js": "nextdotjs/white",
    "React": "react",
    "Angular": "angular",
    ".NET": "dotnet",
    "NestJS": "nestjs",
    "Spring Boot": "springboot",
    "Django": "django",
    "Node.js": "nodedotjs",
    "Express.js": "express/white",
    "Flask": "flask/white",
    "Tailwind CSS": "tailwindcss",
    "Prisma": "prisma/white",
    "PostgreSQL": "postgresql",
    "PostGIS": "postgresql",
    "DuckDB": "duckdb",
    "MongoDB": "mongodb",
    "SQL Server": "/assets/images/sql-server.png",
    "MinIO": "minio",
    "MySQL": "mysql",
    "Redis": "redis",
    "Neo4j": "neo4j",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Azure": "/assets/images/azure.png",
    "GitHub Actions": "githubactions",
    "VMware": "vmware/white",
    "Vercel": "vercel/white",
    "Netlify": "netlify",
    "Supabase": "supabase",
    "AWS": "/assets/images/aws.png",
    "GHCR (CI/CD)": "github/white",
    "Firebase": "firebase",
    "Google Cloud": "googlecloud",
    "Cloud Run": "googlecloud",
    "Firestore": "firebase",
    "IAM": "googlecloud",
    "gsutil": "googlecloud",
    "Git": "git",
    "Postman": "postman",
    "Figma": "figma",
    "Notion": "notion/white",
    "Neovim": "neovim",
    "Cloudflare": "cloudflare",
    "VS Code": "/assets/images/vscode.png"
  };
  const slug = mapping[label] || label.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (slug.startsWith("/")) {
    return slug;
  }
  return `https://cdn.simpleicons.org/${slug}`;
}

interface TechTileProps {
  label: string;
  icon: string;
  className?: string;
}

function TechTile({ label, icon, className }: TechTileProps) {
  return (
    <div className={clsx(
      "flex flex-col items-center justify-center p-3 rounded-xl border border-[var(--line)] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.04] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-all duration-200 gap-2 min-h-[90px] w-full group",
      className
    )}>
      <img
        src={icon}
        alt={label}
        className="w-7.5 h-7.5 object-contain shrink-0 transition-all duration-200 brightness-[0.85] group-hover:brightness-100 group-hover:scale-[1.06]"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="text-[11px] sm:text-[11.5px] text-fg-dim font-mono font-medium tracking-tight text-center leading-snug max-w-full px-0.5 group-hover:text-fg break-words whitespace-normal">
        {label}
      </span>
    </div>
  );
}

export default function StackPage() {
  const { locale } = usePreferences();

  const spans = [
    "col-span-1 md:col-span-3",
    "col-span-1 md:col-span-3",
    "col-span-1 md:col-span-3",
    "col-span-1 md:col-span-3",
  ];

  const whyStackItems = locale === "en"
    ? [
      {
        label: "Full-stack foundations",
        detail:
          "My foundation combines HTML, CSS, and JavaScript with React and Angular for interfaces, plus Node.js, Python with Flask, and .NET for backend development.",
      },
      {
        label: ".NET and Angular in a professional environment",
        detail:
          "During my internship at Forza Delivery Express, I developed a REST API with .NET, designed relational databases in SQL Server, and implemented Angular interfaces for administrative dashboards.",
      },
      {
        label: "Relational and NoSQL databases",
        detail:
          "I work with SQL Server and MySQL for relational data, as well as MongoDB, Firebase, and Firestore for document-oriented and cloud-backed solutions.",
      },
      {
        label: "Google Cloud deployment",
        detail:
          "My cloud toolkit includes Google Cloud Run, Firestore, IAM, and gsutil for deploying services, managing data, controlling access, and working with cloud storage.",
      },
    ]
    : [
      {
        label: "Fundamentos full-stack",
        detail:
          "Mi base combina HTML, CSS y JavaScript con React y Angular para interfaces, además de Node.js, Python con Flask y .NET para desarrollo backend.",
      },
      {
        label: ".NET y Angular en un entorno profesional",
        detail:
          "Durante mis prácticas en Forza Delivery Express desarrollé una API REST con .NET, diseñé bases de datos relacionales en SQL Server e implementé interfaces con Angular para paneles administrativos.",
      },
      {
        label: "Bases de datos relacionales y NoSQL",
        detail:
          "Trabajo con SQL Server y MySQL para datos relacionales, además de MongoDB, Firebase y Firestore para soluciones documentales y respaldadas por servicios en la nube.",
      },
      {
        label: "Despliegue en Google Cloud",
        detail:
          "Mi conjunto de herramientas en la nube incluye Google Cloud Run, Firestore, IAM y gsutil para desplegar servicios, gestionar datos, controlar accesos y trabajar con almacenamiento en la nube.",
      },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-[14px] mb-4 py-1 px-2">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "Tech Stack · Tools of the Trade" : "Stack Técnico · Mis Herramientas"}
        </div>
        <h1 className="text-[clamp(38px,4.4vw,56px)] font-semibold tracking-[-0.035em] leading-none m-0">
          {locale === "en" ? "My " : "Mi "}
          <span className="grad-text">{locale === "en" ? "Stack." : "stack."}</span>
        </h1>
        <p className="text-fg-dim text-[15px] leading-[1.55] max-w-[600px] m-0">
          {locale === "en"
            ? "A comprehensive overview of the programming languages, framework ecosystems, database systems, and DevOps/cloud tools that I use to design and build scalable products."
            : "Una vista detallada de los lenguajes de programación, frameworks, bases de datos y herramientas de DevOps y nube que utilizo para construir soluciones robustas."}
        </p>
      </header>

      {/* Why this stack reasoning card */}
      <BentoCard className="col-span-1 !p-[22px] sm:!p-[28px] flex flex-col gap-4">
        <div className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono border-b border-white/5 pb-2">
          {locale === "en" ? "Why this stack" : "Por qué este stack"}
        </div>
        <ol className="list-none p-0 m-0 flex flex-col gap-4">
          {whyStackItems.map((item, i) => (
            <li key={i} className="flex flex-col gap-[3px]">
              <span className="text-[12px] font-mono font-semibold text-fg tracking-tight">
                {item.label}
              </span>
              <span className="text-[13.5px] text-fg-dim leading-[1.55]">
                {item.detail}
              </span>
            </li>
          ))}
        </ol>
      </BentoCard>

      {/* Categories Grid - Symmetrical 3-Row Sized Grid */}
      <main className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <BentoCard key={idx} className={`${spans[idx]} !p-[22px] sm:!p-[28px] flex flex-col gap-4`}>
            <div className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono border-b border-white/5 pb-2">
              {locale === "en" ? cat.titleEn : cat.titleEs}
            </div>
            <div className={clsx(
              "grid gap-2.5 my-auto",
              idx === 0 && "grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5", // Languages
              idx === 1 && "grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5", // Frameworks
              idx === 2 && "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2", // Databases
              idx === 3 && "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3", // DevOps
            )}>
              {cat.items.map((item, itemIdx) => (
                <TechTile
                  key={item.label}
                  label={item.label}
                  icon={getTechIcon(item.label)}
                  className={clsx(idx === 3 && itemIdx === 4 && "col-span-2 md:col-span-1")}
                />
              ))}
            </div>
          </BentoCard>
        ))}

        {/* Currently Learning Card - Stretching full width 
        <BentoCard className="col-span-1 md:col-span-6 !p-[22px] sm:!p-[28px] flex flex-col gap-4 bg-[var(--grad-soft)] border border-[rgba(167,139,250,0.2)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-[24px] h-[24px] inline-flex items-center justify-center bg-[var(--grad)] rounded-[6px] text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </span>
              <span className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono">
                {locale === "en" ? "Currently learning & focusing" : "Aprendiendo y enfocándome ahora"}
              </span>
          </div>
          <ul className="list-none p-0 m-0 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>Vue.js & ecosystem</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Advanced cloud-native architectures" : "Arquitecturas cloud-native avanzadas"}</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Scalable system design patterns" : "Patrones de diseño de sistemas escalables"}</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Kubernetes operator development" : "Desarrollo de operadores de Kubernetes"}</span>
            </li>
          </ul>
        </BentoCard>
        */}
      </main>

      <Footer
        leftText="© 2026 — Sergio Tepaz"
        midText={locale === "en" ? "Tech stack details page" : "Página detallada de tecnologías"}
        rightText={locale === "en" ? "Always evolving" : "En constante evolución"}
      />
    </div>
  );
}
