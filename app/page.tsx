import React from "react";
import { EditorialCanvas } from "@/components/EditorialCanvas";
import { Navigation } from "@/components/Navigation";
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
      <EditorialCanvas />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <CybersecuritySection />
          <ResearchSection />
          <CertificatesGallery />
          <TrainingAndEducation />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
