"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

const certifications = [
  { nameEn: "Distinguished Student", nameEs: "Estudiante Distinguido", org: "UVG", badge: "UVG" },
  { nameEn: "Academic Excellence", nameEs: "Excelencia Académica", org: "Fundación JBG", badge: "JBG" },
  { nameEn: "Isabel Gutiérrez de Bosch Scholarship", nameEs: "Beca Isabel Gutiérrez de Bosch", org: "Fundación JBG", badge: "JBG" },
  { nameEn: "Android App Development", nameEs: "Desarrollo Android Studio", org: "INTECAP", badge: "AND" },
  { nameEn: "PHP & Databases", nameEs: "PHP y Bases de Datos", org: "INTECAP", badge: "PHP" },
  { nameEn: "MySQL for Beginners", nameEs: "MySQL para Principiantes", org: "INTECAP", badge: "SQL" },
  { nameEn: "Microsoft Excel Intermediate", nameEs: "Microsoft Excel Intermedio", org: "INTECAP", badge: "XLS" },
];

import { clsx } from "clsx";

export default function CertificationsPreview({ className }: { className?: string }) {
  const { locale } = usePreferences();

  return (
    <BentoCard className={clsx(className)}>
      <div className="flex items-center justify-between mb-[18px] gap-[10px]">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "Certifications" : "Certificaciones"}
        </div>
        <span className="text-fg-mute text-[12px] font-mono">7</span>
      </div>
      <div className="flex flex-col gap-[10px]">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3 p-[11px_12px] bg-white/[0.025] border border-[var(--line)] rounded-bento-sm transition-all duration-200 hover:bg-white/[0.05] hover:border-[var(--line-2)]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[10px] shrink-0 overflow-hidden bg-white/5 border border-white/10">
              <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-white bg-grad font-mono">
                {cert.badge}
              </div>
            </div>
            <div className="flex flex-col gap-[2px] min-w-0 flex-1">
              <span className="text-[13px] text-fg font-medium leading-[1.3] truncate">
                {locale === "en" ? cert.nameEn : cert.nameEs}
              </span>
              <span className="text-[10.5px] text-fg-mute font-mono">{cert.org}</span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
