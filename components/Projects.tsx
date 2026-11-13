"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { BrandGithub } from "./BrandIcons";

export function Projects() {
  const [activeId, setActiveId] = useState<string>("surfacecheck-api");

  const currentProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#DCD6C8]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#73766E] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#345A46]" />
            <span>Built From Scratch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#20231F] tracking-tight">
            Selected Engineering Projects
          </h2>
        </div>
        <p className="text-sm text-[#575B53] max-w-md font-light leading-relaxed">
          Open-source security tools, explainable AI platforms, and real-time tournament systems that I have architected and coded.
        </p>
      </div>

      {/* Project Selector Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
        {PROJECTS.map((proj) => {
          const isSelected = activeId === proj.id;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveId(proj.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? "bg-[#EBE6DA] border-[#345A46] text-[#20231F] shadow-sm"
                  : "bg-[#F3F0E8] border-[#DCD6C8] hover:bg-[#EBE6DA]/50 text-[#73766E]"
              }`}
            >
              <div className="flex items-center justify-between mb-1 text-[11px] font-mono">
                <span className={isSelected ? "text-[#345A46] font-semibold" : "text-[#73766E]"}>
                  {proj.number}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isSelected ? "#345A46" : "transparent" }}
                />
              </div>
              <div className="text-sm font-semibold text-[#20231F] truncate">{proj.title}</div>
              <div className="text-[10px] text-[#73766E] truncate mt-0.5 font-mono">
                {proj.category.split("·")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Project Showcase Box */}
      <div className="rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] p-7 sm:p-10 shadow-[0_8px_30px_rgba(32,35,31,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Spec & Real Reasoning (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-[#73766E]">{currentProject.number}</span>
              <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-[#F3F0E8] border border-[#DCD6C8] text-[#20231F]">
                {currentProject.category}
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#20231F] tracking-tight mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#345A46] leading-relaxed">
                {currentProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#575B53] leading-relaxed font-light">
              <p>{currentProject.description}</p>

              <div className="p-4 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8]">
                <div className="text-[11px] font-mono uppercase text-[#73766E] mb-1 font-semibold">
                  Why this problem matters
                </div>
                <p className="text-xs text-[#20231F] leading-relaxed">
                  {currentProject.whyItMatters}
                </p>
              </div>
            </div>

            {/* Technical Scope Breakdown */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#73766E]">
                Technical Implementation Details
              </div>
              <ul className="space-y-2 text-xs text-[#575B53]">
                {currentProject.technicalDepth.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed font-light">
                    <CheckCircle2 size={14} className="text-[#345A46] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#DCD6C8]">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F3F0E8] text-[#575B53] border border-[#DCD6C8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Source Code Action Button */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F3F0E8] bg-[#20231F] hover:bg-[#345A46] transition-all shadow-sm active:scale-95"
              >
                <BrandGithub size={15} />
                <span>Inspect Repository on GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Technical Dossier / Architecture Preview (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] space-y-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCD6C8] text-[#73766E]">
              <span>project.dossier</span>
              <span className="text-[#345A46] font-semibold">Active Review</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-[11px] text-[#73766E] uppercase">Architecture Style</div>
                <div className="text-sm font-sans font-semibold text-[#20231F] mt-0.5">
                  {currentProject.type === "security" && "Asynchronous Scanning Microservice"}
                  {currentProject.type === "telemetry" && "Decoupled Telemetry & SHAP XAI"}
                  {currentProject.type === "realtime" && "Low-Latency Edge Replication"}
                  {currentProject.type === "transactional" && "Webhook-Reconciled Payments"}
                  {currentProject.type === "algorithmic" && "OOP Domain Model Architecture"}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-[#73766E] uppercase">Primary Language & Runtime</div>
                <div className="text-xs text-[#20231F] mt-0.5">
                  {currentProject.techStack.slice(0, 3).join(" · ")}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#EBE6DA] space-y-1 text-[11px] leading-relaxed text-[#575B53]">
                <div className="text-[#20231F] font-semibold">Verification Standard:</div>
                {currentProject.type === "security" && "Tested against local network targets and OWASP header benchmarks."}
                {currentProject.type === "telemetry" && "Cross-validated classification models on student survey cohort telemetry."}
                {currentProject.type === "realtime" && "Validated 3-second spectator replication loop under high concurrency."}
                {currentProject.type === "transactional" && "Cryptographic Stripe webhook signature verification tested with ngrok."}
                {currentProject.type === "algorithmic" && "Object-oriented question pools with randomized distractor logic."}
              </div>
            </div>

            <div className="pt-3 border-t border-[#DCD6C8] flex items-center justify-between text-[11px] text-[#73766E]">
              <span>Repository Status:</span>
              <span className="text-[#345A46] font-semibold">Public & Open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Project Archive Table */}
      <div className="mt-14">
        <div className="text-xs font-mono uppercase tracking-widest text-[#73766E] mb-4">
          All Project Repositories ({PROJECTS.length})
        </div>
        <div className="divide-y divide-[#DCD6C8] border-y border-[#DCD6C8]">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#EBE6DA]/50 px-2 -mx-2 rounded transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#73766E]">{proj.number}</span>
                <div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#20231F] hover:text-[#345A46] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={13} className="opacity-40" />
                  </a>
                  <p className="text-xs text-[#73766E] line-clamp-1 mt-0.5 font-light">{proj.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <span className="text-[11px] font-mono text-[#73766E] hidden md:inline">
                  {proj.techStack.slice(0, 3).join(", ")}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveId(proj.id);
                    const el = document.getElementById("projects");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xs font-mono text-[#345A46] hover:underline font-medium"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
