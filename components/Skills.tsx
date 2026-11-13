"use client";

import React, { useState } from "react";
import { ShieldCheck, Code2, Cpu, Cloud } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Cybersecurity & Defenses": <ShieldCheck size={18} className="text-[#345A46]" />,
  "Programming & Web Systems": <Code2 size={18} className="text-[#2A4365]" />,
  "AI & Machine Learning": <Cpu size={18} className="text-[#6B46C1]" />,
  "Cloud & Developer Tools": <Cloud size={18} className="text-[#A66F50]" />
};

export function Skills() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeCategory = SKILL_CATEGORIES[selectedIdx];

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#DCD6C8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#73766E] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#345A46]" />
            <span>Capability Index</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#20231F] tracking-tight">
            Technical Competencies
          </h2>
        </div>
        <p className="text-sm text-[#575B53] max-w-md font-light leading-relaxed">
          Structured overview of technologies I work with regularly, with Cybersecurity prioritized as my primary discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Category Selection Rail */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-[#EBE6DA] border-[#345A46] text-[#20231F] shadow-sm"
                    : "bg-[#F3F0E8] border-[#DCD6C8] text-[#73766E] hover:bg-[#EBE6DA]/50 hover:text-[#20231F]"
                }`}
              >
                <div className="mt-0.5">{CATEGORY_ICONS[cat.title]}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#20231F]">{cat.title}</span>
                    {cat.isPrimary && (
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#345A46] text-[#F3F0E8]">
                        Primary Focus
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#73766E] line-clamp-1 mt-0.5 font-light">{cat.editorialNote}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Skills Grid */}
        <div className="lg:col-span-8 p-7 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8]">
          <div className="mb-6 pb-4 border-b border-[#DCD6C8] flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif text-[#20231F] flex items-center gap-2.5">
                <span>{CATEGORY_ICONS[activeCategory.title]}</span>
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-[#73766E] mt-1 font-light">
                {activeCategory.editorialNote}
              </p>
            </div>
            <span className="text-xs font-mono text-[#73766E]">
              {activeCategory.skills.length} Areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] space-y-1.5"
              >
                <div className="text-sm font-semibold text-[#20231F]">{skill.name}</div>
                <p className="text-xs text-[#575B53] leading-relaxed font-light">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
