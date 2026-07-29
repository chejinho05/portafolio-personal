"use client";

import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import ProjectPreview from "@/components/ProjectPreview";
import CertificationsPreview from "@/components/CertificationsPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { usePreferences } from "@/components/PreferencesProvider";

export default function Home() {
  const { locale } = usePreferences();

  return (
    <main className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-[18px]">
      {/* ROW 1 */}
      <Hero />
      <ProfileCard />

      {/* ROW 2 */}
      <TechStack />
      <FeaturedProject />

      {/* ROW 3 */}
      <Experience />
      
      {/* Nodeflix Project Preview */}
      <ProjectPreview
        title="Nodeflix"
        meta={locale === "en" ? "Full-stack project - 2026" : "Proyecto full-stack - 2026"}
        desc={
          locale === "en"
            ? "Movie and series discovery platform with graph-powered, highly personalized content recommendations."
            : "Plataforma para explorar películas y series con recomendaciones altamente personalizadas mediante una base de datos de grafos."
        }
        tags={["Angular", "Node.js", "Neo4j", "TypeScript", "TMDB API"]}
        badge={locale === "en" ? "Latest project" : "Proyecto reciente"}
        bullets={
          locale === "en"
            ? [
                "Random-walk recommendation engine powered by Neo4j",
                "TMDB catalog integration and preference onboarding",
              ]
            : [
                "Motor de recomendaciones random walk con Neo4j",
                "Integración del catálogo de TMDB y onboarding de preferencias",
              ]
        }
        repoLink="https://github.com/stepaz-2022164/nodeflix-back"
        frontendRepoLink="https://github.com/stepaz-2022164/nodeflix-front"
        className="col-span-1 md:col-span-3 lg:col-span-4"
        art={
          <img
            src="/assets/images/nodeflix.png"
            alt={locale === "en" ? "Nodeflix movie discovery interface" : "Interfaz de exploración de películas de Nodeflix"}
            className="h-full w-full object-cover object-center"
          />
        }
      />

      {/* Bitcoin Script Interpreter Project Preview */}
      <ProjectPreview
        title="Bitcoin Script Interpreter"
        meta={locale === "en" ? "Java project - 2026" : "Proyecto Java - 2026"}
        desc={
          locale === "en"
            ? "Java interpreter that simulates Bitcoin's native scripting language through a custom execution context and opcode registry."
            : "Intérprete en Java que simula el lenguaje de scripting nativo de Bitcoin mediante un contexto de ejecución y un registro de opcodes."
        }
        tags={["Java", "Maven", "Bitcoin Script", "Cryptography", "Javadoc"]}
        bullets={
          locale === "en"
            ? [
                "Arithmetic, cryptographic, logical, and stack opcodes",
                "Maven architecture with UML documentation and unit tests",
              ]
            : [
                "Opcodes aritméticos, criptográficos, lógicos y de pila",
                "Arquitectura Maven con documentación UML y pruebas unitarias",
              ]
        }
        repoLink="https://github.com/stepaz-2022164/BitcoinProject"
        className="col-span-1 md:col-span-6 lg:col-span-4"
        art={
          <img
            src="/assets/images/bitcoin-script.png"
            alt={locale === "en" ? "Bitcoin Script Interpreter execution output" : "Salida de ejecución de Bitcoin Script Interpreter"}
            className="h-full w-full object-cover object-left"
          />
        }
      />

      {/* ROW 4 */}
      <CertificationsPreview className="col-span-1 md:col-span-3 lg:col-span-4" />
      <CTA className="col-span-1 md:col-span-3 lg:col-span-8" />

      <div className="col-span-1 md:col-span-6 lg:col-span-12 mt-7">
        <Footer />
      </div>
    </main>
  );
}
