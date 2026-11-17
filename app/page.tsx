import React from "react";
import { AmbientBackground } from "@/components/AmbientBackground";
import { EditorialCanvas } from "@/components/EditorialCanvas";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { CybersecuritySection } from "@/components/CybersecuritySection";
import { ResearchSection } from "@/components/ResearchSection";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { TrainingAndEducation } from "@/components/TrainingAndEducation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFF0E5] text-[#430D1C]">
      <AmbientBackground />
      <ScrollProgress />
      <EditorialCanvas />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <CybersecuritySection />
          </Reveal>
          <Reveal>
            <ResearchSection />
          </Reveal>
          <Reveal>
            <CertificatesGallery />
          </Reveal>
          <Reveal>
            <TrainingAndEducation />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Skills />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </main>
      </div>
    </div>
  );
}
