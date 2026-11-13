"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Layers 
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={20} className="text-cyan-400" />,
  "Frameworks & Development": <Layers size={20} className="text-indigo-400" />,
  "AI & Machine Learning": <Cpu size={20} className="text-purple-400" />,
  "Cybersecurity & Defenses": <ShieldCheck size={20} className="text-emerald-400" />,
  "Cloud, Infrastructure & Tools": <Cloud size={20} className="text-blue-400" />
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <Terminal size={14} />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Arsenal & Tooling
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Structured categorization of verified technical proficiencies, frameworks, and defense toolchains applied across production codebases.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {SKILL_CATEGORIES.map((category, index) => {
            const isSelected = selectedCategory === index;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-white/[0.08] text-white border border-white/[0.15] shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                    : "bg-white/[0.02] text-slate-400 border border-white/[0.04] hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                <span>{CATEGORY_ICONS[category.title]}</span>
                <span>{category.title}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400">
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.08]">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2.5">
              <span>{CATEGORY_ICONS[SKILL_CATEGORIES[selectedCategory].title]}</span>
              <span>{SKILL_CATEGORIES[selectedCategory].title}</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              {SKILL_CATEGORIES[selectedCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* All Categories Compact Overview Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-white/[0.06]">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className="text-left p-3 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] border border-transparent hover:border-white/[0.06] transition-all"
            >
              <div className="text-[11px] font-mono text-slate-400 truncate">{cat.title}</div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {cat.skills.map((s) => s.name).slice(0, 2).join(", ")}
                <span className="text-slate-400 text-[10px]"> +{cat.skills.length - 2}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
