"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { BrandGithub } from "./BrandIcons";
import { ProjectVisualMockup } from "./ProjectVisualMockup";

export function Projects() {
  const [activeId, setActiveId] = useState<string>("surfacecheck-api");

  const currentProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Featured Projects & Tools
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light leading-relaxed">
          Real tools and platforms I have architected and coded. Includes my automated security scanner, explainable AI model, and tournament software.
        </p>
      </div>

      {/* Visual Navigation Tabs */}
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
                  ? "bg-[#141820] border-white/[0.2] shadow-lg text-white"
                  : "bg-white/[0.015] border-white/[0.04] hover:bg-white/[0.03] text-[#8b949e]"
              }`}
            >
              <div className="flex items-center justify-between mb-1 text-[11px] font-mono">
                <span className={isSelected ? "text-emerald-400 font-semibold" : "text-[#656c7a]"}>
                  {proj.number}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isSelected ? proj.accent : "transparent" }}
                />
              </div>
              <div className="text-sm font-semibold text-white truncate">{proj.title}</div>
              <div className="text-[10px] text-[#656c7a] truncate mt-0.5 font-mono">
                {proj.category.split("·")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Immersive Main Showcase Card */}
      <div className="rounded-2xl bg-[#0f1319]/90 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Full Product Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-[#656c7a]">{currentProject.number}</span>
              <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                {currentProject.category}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-emerald-300/90 leading-relaxed">
                {currentProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#9da3af] leading-relaxed">
              <p>{currentProject.description}</p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-[11px] font-mono uppercase text-[#8b949e] mb-1">
                  Why this matters
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {currentProject.whyItMatters}
                </p>
              </div>
            </div>

            {/* Technical & Security Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8b949e]">
                Technical & Security Scope
              </div>
              <ul className="space-y-2 text-xs text-[#9da3af]">
                {currentProject.securityOrArchitectureHighlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-[#cbd5e1] border border-white/[0.05]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Inspect Source Action */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#090b0e] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <BrandGithub size={15} />
                <span>Inspect Repository</span>
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Right Column: Custom Visual Product Mockup */}
          <div className="lg:col-span-6 h-[340px] sm:h-[420px]">
            <ProjectVisualMockup
              type={currentProject.visualType}
              color={currentProject.accent}
            />
          </div>
        </div>
      </div>

      {/* Full Repositories Table */}
      <div className="mt-14">
        <div className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-4">
          All Repositories ({PROJECTS.length})
        </div>
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-white/[0.015] px-2 -mx-2 rounded transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#656c7a]">{proj.number}</span>
                <div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-xs text-[#8b949e] line-clamp-1 mt-0.5">{proj.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <span className="text-[11px] font-mono text-[#656c7a] hidden md:inline">
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
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  View Spec →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
