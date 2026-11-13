import React from "react";
import { SecurityBackground } from "@/components/SecurityBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CybersecuritySection } from "@/components/CybersecuritySection";
import { Projects } from "@/components/Projects";
import { TrainingAndCredentials } from "@/components/TrainingAndCredentials";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090b0e] text-[#e2e4e9]">
      <SecurityBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <CybersecuritySection />
          <Projects />
          <TrainingAndCredentials />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
