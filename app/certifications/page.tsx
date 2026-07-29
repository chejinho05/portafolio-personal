"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import CertificationCard from "@/components/CertificationCard";
import { usePreferences } from "@/components/PreferencesProvider";
import PdfModal from "@/components/PdfModal";

export default function CertificationsPage() {
  const { locale } = usePreferences();
  const [activePdf, setActivePdf] = useState<{ link: string; name: string } | null>(null);

  const sections = [
    {
      titleEn: "Academic Recognition",
      titleEs: "Reconocimientos Académicos",
      items: [
        {
          badge: "UVG",
          nameEn: "Distinguished Student Diploma",
          nameEs: "Diploma de Estudiante Distinguido",
          org: "Universidad del Valle de Guatemala",
          date: "2026",
          descEn:
            "Recognition for outstanding academic performance, participation, and university conduct during the 2025 academic year.",
          descEs:
            "Reconocimiento por alto desempeño académico, participación y comportamiento universitario durante el año académico 2025.",
          link: "/assets/certificaciones/estudiante-distinguido-uvg-2026.pdf",
        },
        {
          badge: "JBG",
          nameEn: "Academic Excellence Diploma",
          nameEs: "Diploma a la Excelencia Académica",
          org: "Fundación Juan Bautista Gutiérrez",
          date: "2026",
          descEn:
            "Merit diploma from the Isabel Gutiérrez de Bosch Scholarship program for maintaining a grade average between 90 and 94 during 2025.",
          descEs:
            "Diploma de honor al mérito de la Beca Isabel Gutiérrez de Bosch por mantener un promedio entre 90 y 94 puntos durante 2025.",
          link: "/assets/certificaciones/excelencia-academica-fundacion-2026.pdf",
        },
        {
          badge: "JBG",
          nameEn: "Isabel Gutiérrez de Bosch Scholarship",
          nameEs: "Beca Isabel Gutiérrez de Bosch",
          org: "Fundación Juan Bautista Gutiérrez",
          date: "2024",
          descEn:
            "Scholarship recognition awarded for academic excellence to continue university studies.",
          descEs:
            "Reconocimiento de beca otorgado por excelencia académica para continuar estudios universitarios.",
          link: "/assets/certificaciones/beca-isabel-gutierrez-2024.pdf",
        },
      ],
    },
    {
      titleEn: "Technology & Productivity",
      titleEs: "Tecnología y Productividad",
      items: [
        {
          badge: "AND",
          nameEn: "Android Application Development",
          nameEs: "Desarrollo de Aplicaciones para Android",
          org: "INTECAP · Android Studio",
          date: "2022 · 60 h",
          descEn:
            "Practical training in Android application development, completed through INTECAP's information and communication technologies center.",
          descEs:
            "Formación práctica en desarrollo de aplicaciones para Android con Android Studio, impartida por el centro de tecnologías de información y comunicaciones de INTECAP.",
          link: "/assets/certificaciones/android-studio-intecap.pdf",
        },
        {
          badge: "PHP",
          nameEn: "PHP Programming & Database Connectivity",
          nameEs: "Programación PHP y Conexión a Bases de Datos",
          org: "INTECAP",
          date: "2022 · 60 h",
          descEn:
            "PHP programming course focused on connecting web applications to database systems.",
          descEs:
            "Curso de programación en PHP enfocado en la conexión de aplicaciones web con sistemas de bases de datos.",
          link: "/assets/certificaciones/php-bases-datos-intecap.pdf",
        },
        {
          badge: "SQL",
          nameEn: "MySQL for Beginners",
          nameEs: "MySQL para Principiantes",
          org: "INTECAP",
          date: "2021 · 40 h",
          descEn:
            "Foundational training in MySQL and relational database concepts delivered through distance learning.",
          descEs:
            "Formación inicial en MySQL y fundamentos de bases de datos relacionales impartida a distancia.",
          link: "/assets/certificaciones/mysql-principiantes-intecap.pdf",
        },
        {
          badge: "XLS",
          nameEn: "Microsoft Excel Intermediate",
          nameEs: "Microsoft Excel Intermedio",
          org: "INTECAP · E-Learning",
          date: "2022 · 20 h",
          descEn:
            "Intermediate-level Microsoft Excel course covering productivity and spreadsheet management.",
          descEs:
            "Curso de nivel intermedio de Microsoft Excel enfocado en productividad y gestión de hojas de cálculo.",
          link: "/assets/certificaciones/excel-intermedio-intecap.pdf",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-[28px]">
      <header className="flex flex-col gap-[14px] mb-4 py-1 px-2">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "Credentials · Academic & Professional Growth" : "Credenciales · Crecimiento Académico y Profesional"}
        </div>
        <h1 className="text-[clamp(38px,4.4vw,56px)] font-semibold tracking-[-0.035em] leading-none m-0">
          {locale === "en" ? (
            <>Recognition & <span className="grad-text">Certifications.</span></>
          ) : (
            <>Reconocimientos y <span className="grad-text">certificaciones.</span></>
          )}
        </h1>
        <p className="text-fg-dim text-[15px] leading-[1.55] max-w-[620px] m-0">
          {locale === "en"
            ? "A verified record of academic excellence and technical training in Android development, PHP, databases, MySQL, and productivity tools."
            : "Un registro verificado de excelencia académica y formación técnica en desarrollo Android, PHP, bases de datos, MySQL y herramientas de productividad."}
        </p>
      </header>

      <main className="flex flex-col gap-[36px]">
        {sections.map((section) => (
          <section key={section.titleEn} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 px-2">
              <h2 className="text-[20px] font-semibold text-fg">
                {locale === "en" ? section.titleEn : section.titleEs}
              </h2>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {section.items.map((cert) => (
                <CertificationCard
                  key={cert.link}
                  onViewPdf={(link, name) => setActivePdf({ link, name })}
                  badge={cert.badge}
                  name={locale === "en" ? cert.nameEn : cert.nameEs}
                  org={cert.org}
                  date={cert.date}
                  desc={locale === "en" ? cert.descEn : cert.descEs}
                  link={cert.link}
                  viewLabel={locale === "en" ? "View certificate" : "Ver certificado"}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer
        leftText="© 2026 — Sergio Tepaz"
        midText={locale === "en" ? "Verified academic and technical credentials" : "Credenciales académicas y técnicas verificadas"}
        rightText={locale === "en" ? "Continuous learning" : "Aprendizaje continuo"}
      />

      <PdfModal
        isOpen={!!activePdf}
        link={activePdf?.link ?? ""}
        name={activePdf?.name ?? ""}
        onClose={() => setActivePdf(null)}
      />
    </div>
  );
}
