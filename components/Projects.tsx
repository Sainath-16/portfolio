"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Terminal, 
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { BrandGithub } from "./BrandIcons";

const ACCENT_STYLES = {
  cyan: {
    border: "group-hover:border-cyan-500/30",
    badge: "text-cyan-400 bg-cyan-950/40 border-cyan-500/20",
    accentText: "text-cyan-400",
    highlightBg: "bg-cyan-500/10",
    subtleGlow: "from-cyan-500/5"
  },
  emerald: {
    border: "group-hover:border-emerald-500/30",
    badge: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
    accentText: "text-emerald-400",
    highlightBg: "bg-emerald-500/10",
    subtleGlow: "from-emerald-500/5"
  },
  amber: {
    border: "group-hover:border-amber-500/30",
    badge: "text-amber-400 bg-amber-950/40 border-amber-500/20",
    accentText: "text-amber-400",
    highlightBg: "bg-amber-500/10",
    subtleGlow: "from-amber-500/5"
  },
  purple: {
    border: "group-hover:border-purple-500/30",
    badge: "text-purple-400 bg-purple-950/40 border-purple-500/20",
    accentText: "text-purple-400",
    highlightBg: "bg-purple-500/10",
    subtleGlow: "from-purple-500/5"
  },
  indigo: {
    border: "group-hover:border-indigo-500/30",
    badge: "text-indigo-400 bg-indigo-950/40 border-indigo-500/20",
    accentText: "text-indigo-400",
    highlightBg: "bg-indigo-500/10",
    subtleGlow: "from-indigo-500/5"
  }
};

export function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];
  const activeStyle = ACCENT_STYLES[activeProject.accent];

  return (
    <section id="projects" className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <Terminal size={14} />
              <span>Production Codebases & Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Projects
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Architected full-stack systems with deep telemetry, vulnerability assessment scanners, and tournament infrastructure.
          </p>
        </div>

        {/* Project Selector Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-10">
          {PROJECTS.map((proj, idx) => {
            const isSelected = activeProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`text-left p-3.5 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-white/[0.06] border-white/[0.2] shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                    : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-transparent"}`} />
                </div>
                <div className="text-xs font-semibold text-white truncate">{proj.title}</div>
                <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">{proj.badge}</div>
              </button>
            );
          })}
        </div>

        {/* Main Editorial Project Showcase Stage */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
          {/* Subtle directional gradient background */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${activeStyle.subtleGlow} to-transparent rounded-full blur-[100px] pointer-events-none`} />

          <div className="relative z-10">
            {/* Project Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-medium border ${activeStyle.badge}`}>
                  {activeProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {activeProject.architectureTier}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all"
                >
                  <BrandGithub size={15} />
                  <span>Inspect Source</span>
                  <ArrowUpRight size={13} className="text-slate-400" />
                </a>

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-950 bg-white hover:bg-slate-100 transition-all font-mono"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {activeProject.title}
              </h3>
              <p className={`text-base sm:text-lg font-medium ${activeStyle.accentText}`}>
                {activeProject.tagline}
              </p>
            </div>

            {/* Description & Problem Solved */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 pb-8 border-b border-white/[0.06]">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  System Architecture & Purpose
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Problem Solved Callout */}
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Problem Addressed
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.problemSolved}
                  </p>
                </div>
              </div>

              {/* Metrics Grid */}
              {activeProject.metrics && (
                <div className="lg:col-span-5 grid grid-cols-2 gap-3 self-start">
                  {activeProject.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <div className="text-lg font-bold font-mono text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Key Engineering Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                {activeProject.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.03] flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle2 size={15} className={`${activeStyle.accentText} mt-0.5 shrink-0`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-slate-400 mr-2">Core Stack:</span>
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Grid of the other projects for quick scanning */}
        <div className="mt-12">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            All Repositories Overview
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((proj) => (
              <a
                key={proj.id}
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white/[0.015] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400">{proj.badge}</span>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.04]">
                  {proj.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400">
                      {t}
                    </span>
                  ))}
                  {proj.tags.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{proj.tags.length - 3}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
