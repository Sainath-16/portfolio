"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { BrandGithub } from "./BrandIcons";
import { ProjectVisualMockup } from "./ProjectVisualMockup";

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>(PROJECTS[0].id);

  const currentProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#656c7a] mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light">
          Real tools and platforms I have architected, coded, and published. Each project includes source code on GitHub.
        </p>
      </div>

      {/* Project Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-10">
        {PROJECTS.map((proj) => {
          const isSelected = activeTab === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className={`text-left p-3.5 rounded-xl border transition-all ${
                isSelected
                  ? "bg-[#181c25] border-white/[0.2] shadow-md"
                  : "bg-white/[0.015] border-white/[0.04] hover:bg-white/[0.04] text-[#9da3af]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 text-[10px] font-mono">
                <span className={isSelected ? "text-white" : "text-[#656c7a]"}>{proj.number}</span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isSelected ? proj.accentColor : "transparent" }}
                />
              </div>
              <div className="text-xs font-medium text-white truncate">{proj.title}</div>
              <div className="text-[10px] text-[#656c7a] truncate mt-0.5">{proj.category.split("·")[0]}</div>
            </button>
          );
        })}
      </div>

      {/* Main Project Showcase Card */}
      <div className="rounded-2xl bg-[#14171f]/90 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context, Problem & Scope */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#656c7a]">{currentProject.number}</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#9da3af]">
                {currentProject.category}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm font-medium text-[#f1f3f7] leading-relaxed">
                {currentProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#9da3af] leading-relaxed">
              <p>{currentProject.description}</p>
              
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-[11px] font-mono uppercase text-[#656c7a] mb-1">
                  Why I built this
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {currentProject.whyItMatters}
                </p>
              </div>
            </div>

            {/* What I Built List */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#656c7a]">
                Technical Scope
              </div>
              <ul className="space-y-2 text-xs text-[#9da3af]">
                {currentProject.whatIBuilt.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-[#9da3af] border border-white/[0.04]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              >
                <BrandGithub size={15} />
                <span>View Repository</span>
                <ArrowUpRight size={13} className="text-[#656c7a]" />
              </a>
            </div>
          </div>

          {/* Right Column: Custom Visual Product Mockup */}
          <div className="lg:col-span-6 h-[340px] sm:h-[400px]">
            <ProjectVisualMockup
              type={currentProject.visualType}
              color={currentProject.accentColor}
            />
          </div>
        </div>
      </div>

      {/* Complete Archive Overview */}
      <div className="mt-14">
        <div className="text-xs font-mono uppercase tracking-widest text-[#656c7a] mb-4">
          All Repositories
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
                    className="text-sm font-medium text-white hover:text-[#60a5fa] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-xs text-[#656c7a] line-clamp-1 mt-0.5">{proj.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <span className="text-[11px] font-mono text-[#656c7a] hidden md:inline">
                  {proj.techStack.slice(0, 3).join(", ")}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(proj.id);
                    const el = document.getElementById("projects");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xs font-mono text-[#3b82f6] hover:underline"
                >
                  Inspect →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
