import React from "react";
import { AmbientCanvas } from "@/components/AmbientCanvas";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0e1015] text-[#e2e4e9]">
      <AmbientCanvas />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
