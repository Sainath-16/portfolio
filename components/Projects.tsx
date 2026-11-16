"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { BrandGithub } from "./BrandIcons";

export function Projects() {
  const [activeId, setActiveId] = useState<string>("surfacecheck-api");

  const currentProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Built From Scratch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Selected Engineering Projects
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
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
                  ? "bg-[#F8E7DB] border-[#430D1C] text-[#430D1C] shadow-sm"
                  : "bg-[#FFF0E5] border-[#E5CABE] hover:bg-[#F8E7DB]/60 text-[#8F5462]"
              }`}
            >
              <div className="flex items-center justify-between mb-1 text-[11px] font-mono">
                <span className={isSelected ? "text-[#FF493D] font-bold" : "text-[#8F5462]"}>
                  {proj.number}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isSelected ? "#FF493D" : "transparent" }}
                />
              </div>
              <div className="text-sm font-semibold text-[#430D1C] truncate">{proj.title}</div>
              <div className="text-[10px] text-[#8F5462] truncate mt-0.5 font-mono">
                {proj.category.split("·")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Project Showcase Box */}
      <div className="rounded-2xl bg-[#F8E7DB]/90 border border-[#E5CABE] p-7 sm:p-10 shadow-[0_8px_30px_rgba(67,13,28,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Spec & Real Reasoning (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-[#8F5462]">{currentProject.number}</span>
              <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-[#FFF0E5] border border-[#E5CABE] text-[#430D1C]">
                {currentProject.category}
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#430D1C] tracking-tight mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#FF493D] leading-relaxed">
                {currentProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B2D3C] leading-relaxed font-light">
              <p>{currentProject.description}</p>

              <div className="p-4 rounded-xl bg-[#FFF0E5] border border-[#E5CABE]">
                <div className="text-[11px] font-mono uppercase text-[#8F5462] mb-1 font-semibold">
                  Why this problem matters
                </div>
                <p className="text-xs text-[#430D1C] leading-relaxed">
                  {currentProject.whyItMatters}
                </p>
              </div>
            </div>

            {/* Technical Scope Breakdown */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8F5462]">
                Technical Implementation Details
              </div>
              <ul className="space-y-2 text-xs text-[#6B2D3C]">
                {currentProject.technicalDepth.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed font-light">
                    <CheckCircle2 size={14} className="text-[#FF493D] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5CABE]">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FFF0E5] text-[#6B2D3C] border border-[#E5CABE]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Source Code Action Button in Vermillion */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_2px_12px_rgba(255,73,61,0.25)] hover:shadow-[0_4px_16px_rgba(255,73,61,0.35)] active:scale-95"
              >
                <BrandGithub size={15} />
                <span>Inspect Repository on GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              {currentProject.id === "mentra-os" && (
                <a
                  href="/research/mentra-os-research-paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#430D1C] bg-[#FFF0E5] hover:bg-[#F2DDCF] border border-[#E5CABE] transition-all active:scale-95 shadow-sm"
                >
                  <FileText size={14} className="text-[#FF493D]" />
                  <span>Research Paper (ICETAI&apos;26) ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Editorial Technical Dossier / Architecture Preview (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] space-y-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5CABE] text-[#8F5462]">
              <span>project.dossier</span>
              <span className="text-[#FF493D] font-semibold">Active Review</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-[11px] text-[#8F5462] uppercase">Architecture Style</div>
                <div className="text-sm font-sans font-semibold text-[#430D1C] mt-0.5">
                  {currentProject.type === "security" && "Asynchronous Scanning Microservice"}
                  {currentProject.type === "telemetry" && "Decoupled Telemetry & SHAP XAI"}
                  {currentProject.type === "realtime" && "Low-Latency Edge Replication"}
                  {currentProject.type === "transactional" && "Webhook-Reconciled Payments"}
                  {currentProject.type === "algorithmic" && "OOP Domain Model Architecture"}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-[#8F5462] uppercase">Primary Language & Runtime</div>
                <div className="text-xs text-[#430D1C] mt-0.5">
                  {currentProject.techStack.slice(0, 3).join(" · ")}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#F8E7DB] space-y-1 text-[11px] leading-relaxed text-[#6B2D3C]">
                <div className="text-[#430D1C] font-semibold">Verification Standard:</div>
                {currentProject.type === "security" && "Tested against local network targets and OWASP header benchmarks."}
                {currentProject.type === "telemetry" && "Cross-validated classification models on student survey cohort telemetry."}
                {currentProject.type === "realtime" && "Validated 3-second spectator replication loop under high concurrency."}
                {currentProject.type === "transactional" && "Cryptographic Stripe webhook signature verification tested with ngrok."}
                {currentProject.type === "algorithmic" && "Object-oriented question pools with randomized distractor logic."}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5CABE] flex items-center justify-between text-[11px] text-[#8F5462]">
              <span>Repository Status:</span>
              <span className="text-[#430D1C] font-semibold">Public & Open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Project Archive Table */}
      <div className="mt-14">
        <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-4">
          All Project Repositories ({PROJECTS.length})
        </div>
        <div className="divide-y divide-[#E5CABE] border-y border-[#E5CABE]">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F8E7DB]/60 px-2 -mx-2 rounded transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#8F5462]">{proj.number}</span>
                <div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#430D1C] hover:text-[#FF493D] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={13} className="opacity-40" />
                  </a>
                  <p className="text-xs text-[#8F5462] line-clamp-1 mt-0.5 font-light">{proj.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <span className="text-[11px] font-mono text-[#8F5462] hidden md:inline">
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
                  className="text-xs font-mono text-[#FF493D] hover:underline font-semibold"
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
