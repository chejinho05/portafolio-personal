"use client";

import GithubProjectsGrid from "@/components/GithubProjectsGrid";
import Footer from "@/components/Footer";
import { usePreferences } from "@/components/PreferencesProvider";

export default function ProjectsPage() {
  const { locale } = usePreferences();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-[14px] mb-7 py-1 px-2">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "My Projects · Code Portfolio" : "Mis Proyectos · Portafolio de Código"}
        </div>
        <h1 className="text-[clamp(38px,4.4vw,56px)] font-semibold tracking-[-0.035em] leading-none m-0">
          {locale === "en" ? "My " : "Mis "}
          <span className="grad-text">{locale === "en" ? "Projects." : "proyectos."}</span>
        </h1>
        <p className="text-fg-dim text-[15px] leading-[1.55] max-w-[600px] m-0">
          {locale === "en"
            ? "A selection of academic and full-stack projects spanning web platforms, graph databases, financial systems, interpreters, and data analytics."
            : "Una selección de proyectos académicos y full-stack que incluye plataformas web, bases de datos de grafos, sistemas financieros, intérpretes y análisis de datos."}
        </p>
      </header>

      <GithubProjectsGrid />

      <Footer
        leftText="© 2026 — Sergio Tepaz"
        midText={locale === "en" ? "Selected software projects" : "Proyectos de software seleccionados"}
        rightText={locale === "en" ? "Repositories available on GitHub" : "Repositorios disponibles en GitHub"}
      />
    </div>
  );
}
