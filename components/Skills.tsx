"use client";

import React, { useState } from "react";
import { ShieldCheck, Code2, Cpu, Cloud } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Cybersecurity & Defenses": <ShieldCheck size={18} className="text-emerald-400" />,
  "Programming & Backend": <Code2 size={18} className="text-sky-400" />,
  "AI & Machine Learning": <Cpu size={18} className="text-purple-400" />,
  "Cloud, Infrastructure & Ops": <Cloud size={18} className="text-amber-400" />
};

export function Skills() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeCategory = SKILL_CATEGORIES[selectedIdx];

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Capability Index</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light leading-relaxed">
          Structured inventory of my skills, with Cybersecurity as the primary discipline alongside AI/ML and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Category List */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-[#141820] border-emerald-500/40 text-white shadow-md"
                    : "bg-white/[0.015] border-transparent text-[#9da3af] hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                <div className="mt-0.5">{CATEGORY_ICONS[cat.name]}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{cat.name}</span>
                    {cat.isPrimary && (
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#656c7a] line-clamp-1 mt-0.5">{cat.tagline}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Category Skills Breakdown */}
        <div className="lg:col-span-8 p-7 rounded-2xl bg-[#0f1319]/90 border border-white/[0.08] backdrop-blur-sm">
          <div className="mb-6 pb-4 border-b border-white/[0.06] flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif text-white flex items-center gap-2.5">
                <span>{CATEGORY_ICONS[activeCategory.name]}</span>
                <span>{activeCategory.name}</span>
              </h3>
              <p className="text-xs text-[#8b949e] mt-1 font-mono">
                {activeCategory.tagline}
              </p>
            </div>
            <span className="text-xs font-mono text-[#656c7a]">
              {activeCategory.skills.length} Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  {skill.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#8b949e] border border-white/[0.06]">
                      {skill.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8b949e] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
