"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

export default function Hero() {
  const { locale } = usePreferences();

  return (
    <BentoCard className="col-span-1 md:col-span-4 lg:col-span-8 flex flex-col min-h-[380px]">
      <div className="mb-[22px] inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
        {locale === "en" ? "Portfolio - 2026" : "Portafolio - 2026"}
      </div>
      <h1 className="text-[clamp(40px,4.6vw,60px)] font-semibold leading-[1.0] tracking-[-0.035em] mb-4">
        {locale === "en" ? "Hi, I'm " : "Hola, soy "}
        <span className="grad-text">Sergio Tepaz.</span>
      </h1>
      <p className="text-[19px] text-fg-dim mb-[18px] font-normal">
        <strong className="text-fg font-semibold">
          {locale === "en" ? "Developer" : "Desarrollador"}
        </strong>
      </p>
      <p className="text-[15.5px] text-fg-dim leading-[1.6] max-w-[540px] mb-6 text-pretty">
        {locale === "en"
          ? "Computer Science and IT Engineering student at Universidad del Valle de Guatemala, with technical training in computer science. Passionate about web development, databases, and cloud deployment, with a focus on continuous learning and applying knowledge to real-world projects."
          : "Estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala, con formación técnica como Perito en Informática. Apasionado por el desarrollo web, las bases de datos y el despliegue en la nube, con un enfoque en el aprendizaje continuo y la aplicación práctica del conocimiento."}
      </p>
      <div className="mt-auto flex gap-[22px] flex-wrap pt-[18px] border-t border-[var(--line)]">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">{locale === "en" ? "Location" : "Ubicacion"}</span>
          <span className="text-[14px] text-fg font-medium">Guatemala</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">Focus</span>
          <span className="text-[14px] text-fg font-medium">
            {locale === "en" ? "Web development" : "Desarrollo web"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">Status</span>
          <span className="text-[14px] text-fg font-medium">
            {locale === "en" ? "UVG student" : "Estudiante UVG"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">{locale === "en" ? "Education" : "Formación"}</span>
          <span className="text-[14px] text-fg font-medium">
            {locale === "en" ? "CS & IT Engineering · UVG" : "Ing. en CC y TI · UVG"}
          </span>
        </div>
      </div>
    </BentoCard>
  );
}
