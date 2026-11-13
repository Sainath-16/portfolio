"use client";

import React, { useState } from "react";
import { ShieldCheck, Code2, Cpu, Cloud } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Cybersecurity & Defenses": <ShieldCheck size={18} className="text-[#FF493D]" />,
  "Programming & Web Systems": <Code2 size={18} className="text-[#430D1C]" />,
  "AI & Machine Learning": <Cpu size={18} className="text-[#6B2D3C]" />,
  "Cloud & Developer Tools": <Cloud size={18} className="text-[#8F5462]" />
};

export function Skills() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeCategory = SKILL_CATEGORIES[selectedIdx];

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Capability Index</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Technical Competencies
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
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
                    ? "bg-[#F8E7DB] border-[#430D1C] text-[#430D1C] shadow-sm"
                    : "bg-[#FFF0E5] border-[#E5CABE] text-[#8F5462] hover:bg-[#F8E7DB]/60 hover:text-[#430D1C]"
                }`}
              >
                <div className="mt-0.5">{CATEGORY_ICONS[cat.title]}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#430D1C]">{cat.title}</span>
                    {cat.isPrimary && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF493D] text-[#FFF0E5] font-semibold">
                        Primary Focus
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#8F5462] line-clamp-1 mt-0.5 font-light">{cat.editorialNote}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Skills Grid */}
        <div className="lg:col-span-8 p-7 rounded-2xl bg-[#F8E7DB]/90 border border-[#E5CABE]">
          <div className="mb-6 pb-4 border-b border-[#E5CABE] flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif text-[#430D1C] flex items-center gap-2.5">
                <span>{CATEGORY_ICONS[activeCategory.title]}</span>
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-[#8F5462] mt-1 font-light">
                {activeCategory.editorialNote}
              </p>
            </div>
            <span className="text-xs font-mono text-[#8F5462]">
              {activeCategory.skills.length} Areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] space-y-1.5"
              >
                <div className="text-sm font-semibold text-[#430D1C]">{skill.name}</div>
                <p className="text-xs text-[#6B2D3C] leading-relaxed font-light">
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
