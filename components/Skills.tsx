"use client";

import React, { useState } from "react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#656c7a] mb-2">
            Tooling & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Technical Stack
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light">
          Languages, frameworks, and security utilities I use across real projects and course exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Category Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {SKILL_GROUPS.map((group, index) => {
            const isSelected = activeGroupIndex === index;
            return (
              <button
                key={group.name}
                type="button"
                onClick={() => setActiveGroupIndex(index)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-[#181c25] border-white/[0.15] text-white shadow-sm"
                    : "bg-white/[0.015] border-transparent text-[#9da3af] hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                <div className="text-xs font-semibold mb-1">{group.name}</div>
                <div className="text-[11px] text-[#656c7a] line-clamp-1">{group.summary}</div>
              </button>
            );
          })}
        </div>

        {/* Right Active Skills Grid */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#14171f]/80 border border-white/[0.08]">
          <div className="mb-6 pb-4 border-b border-white/[0.06]">
            <h3 className="text-lg font-serif text-white mb-1">
              {SKILL_GROUPS[activeGroupIndex].name}
            </h3>
            <p className="text-xs text-[#9da3af]">
              {SKILL_GROUPS[activeGroupIndex].summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS[activeGroupIndex].items.map((skill) => (
              <div
                key={skill.title}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1.5"
              >
                <div className="text-sm font-medium text-white">{skill.title}</div>
                <div className="text-xs text-[#9da3af] leading-relaxed">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
