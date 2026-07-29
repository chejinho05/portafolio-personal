"use client";

import BentoCard from "./BentoCard";
import Chip from "./Chip";
import { usePreferences } from "./PreferencesProvider";

export default function FeaturedProject() {
  const { locale } = usePreferences();

  return (
    <BentoCard className="col-span-1 md:col-span-3 lg:col-span-7 flex flex-col">
      <div className="flex items-center justify-between mb-[18px] gap-[10px]">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
          {locale === "en" ? "Featured Project" : "Proyecto destacado"}
        </div>
        <span className="text-fg-mute text-[12px] font-mono">2026</span>
      </div>

      <div className="relative rounded-[var(--radius-sm)] overflow-hidden border border-[var(--line)] mb-[22px] aspect-[16/7]">
        <img
          src="/assets/images/nodeflix.png"
          alt={locale === "en" ? "Nodeflix movie discovery interface" : "Interfaz de exploración de películas de Nodeflix"}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex items-center gap-2.5 text-[12px] text-fg-mute mb-2.5 font-mono flex-wrap">
        <span>Nodeflix</span>
        <span className="opacity-40">/</span>
        <span>{locale === "en" ? "Graph-powered recommendations" : "Recomendaciones con grafos"}</span>
      </div>

      <h2 className="text-[26px] font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
        <span className="grad-text">Nodeflix</span>{" "}
        {locale === "en" ? "turns preferences into better discoveries." : "convierte preferencias en mejores descubrimientos."}
      </h2>
      <p className="text-fg-dim text-[14px] leading-[1.6] mb-3.5 text-pretty">
        {locale === "en"
          ? "Full-stack web application for exploring movies and series. It combines TMDB data with Neo4j and a random-walk algorithm to deliver highly personalized recommendations."
          : "Aplicación web full-stack para explorar películas y series. Combina datos de TMDB con Neo4j y un algoritmo de random walk para ofrecer recomendaciones altamente personalizadas."}
      </p>

      <ul className="list-none p-0 mb-[22px] grid grid-cols-1 md:grid-cols-2 gap-[8px_18px]">
        {(locale === "en"
          ? [
              "Recommendation engine powered by Neo4j graph data",
              "Movie and series catalog integrated with the TMDB API",
              "Onboarding flow for capturing viewing preferences",
              "Interaction tracking to refine future suggestions",
            ]
          : [
              "Motor de recomendaciones impulsado por grafos en Neo4j",
              "Catálogo de películas y series integrado con la API de TMDB",
              "Flujo de onboarding para capturar preferencias",
              "Seguimiento de interacciones para mejorar sugerencias",
            ]
        ).map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] text-fg-dim leading-[1.45] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-[2px] before:bg-[var(--grad)] before:mt-1.5 before:shrink-0">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-5 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          <Chip label="Angular" dotColor="#dd0031" />
          <Chip label="Node.js" dotColor="#68a063" />
          <Chip label="Neo4j" dotColor="#4581c3" />
          <Chip label="TypeScript" dotColor="#3178c6" />
          <Chip label="TMDB API" dotColor="#01b4e4" />
        </div>

        <div className="flex items-center justify-end border-t border-[var(--line)] pt-5 gap-3 flex-wrap">
          <a
            href="https://github.com/stepaz-2022164/nodeflix-front"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fg-dim text-[11px] font-mono py-[9px] px-4 bg-white/4 border border-[var(--line)] rounded-full transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/30"
          >
            {locale === "en" ? "Frontend Code" : "Código Frontend"}
          </a>
          <a
            href="https://github.com/stepaz-2022164/nodeflix-back"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fg-dim text-[11px] font-mono py-[9px] px-4 bg-white/4 border border-[var(--line)] rounded-full transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/30"
          >
            {locale === "en" ? "Backend Code" : "Código Backend"}
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
