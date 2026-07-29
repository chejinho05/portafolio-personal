"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

const experiences = [
  {
    roleEn: "Professional Intern",
    roleEs: "Practicante Profesional",
    company: "Forza Delivery Express",
    periodEn: "Aug 2024 - Oct 2024",
    periodEs: "Ago 2024 - Oct 2024",
    bulletsEn: [
      "Provided technical support for internal applications.",
      "Developed a REST API with .NET for inventory management.",
      "Designed relational databases using SQL Server.",
      "Implemented Angular front-end interfaces for administrative dashboards.",
    ],
    bulletsEs: [
      "Brindé soporte técnico a aplicaciones internas.",
      "Desarrollé una API REST con .NET para la gestión de inventarios.",
      "Diseñé bases de datos relacionales utilizando SQL Server.",
      "Implementé interfaces front-end con Angular para paneles administrativos.",
    ],
  },
];

export default function Experience() {
  const { locale } = usePreferences();

  return (
    <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4">
      <div className="flex items-center justify-between mb-[18px] gap-[10px]">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
          {locale === "en" ? "Experience" : "Experiencia"}
        </div>
        <span className="text-fg-mute text-[12px] font-mono">
          {locale === "en" ? "1 role" : "1 experiencia"}
        </span>
      </div>
      <ul className="list-none p-0 m-0 flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <li key={index} className="flex flex-col gap-1.5 pb-4 border-b border-[var(--line)] last:border-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-fg text-[14px] font-semibold leading-[1.25]">
                {locale === "en" ? exp.roleEn : exp.roleEs}
              </span>
              <span className="text-fg-mute text-[12px] font-mono">
                {locale === "en" ? exp.periodEn : exp.periodEs}
              </span>
            </div>
            <span className="text-blue-accent text-[12.5px] font-medium">{exp.company}</span>
            <ul className="list-none p-0 m-0 mt-1.5 flex flex-col gap-1">
              {(locale === "en" ? exp.bulletsEn : exp.bulletsEs).map((bullet, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[12.5px] text-fg-dim leading-[1.45] before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-fg-mute before:mt-2 before:shrink-0">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
