"use client";

import React, { useState } from "react";
import { Shield, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SECURITY_PILLARS, CURRENT_TRAINING } from "@/lib/portfolio-data";
import { BrandTryHackMe } from "./BrandIcons";

export function CybersecuritySection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="cybersecurity" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06] relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-xs text-emerald-400 font-mono mb-3">
            <Shield size={13} />
            <span>Primary Focus & Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Security is a discipline I&apos;m actively building.
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light leading-relaxed">
          My primary career trajectory is in cybersecurity. Here is how I combine structured classroom training with hands-on lab experimentation.
        </p>
      </div>

      {/* TryHackMe & Independent Hands-On Learning Spotlight Banner */}
      <div className="mb-16 p-7 sm:p-8 rounded-2xl bg-[#0f1319]/90 border border-white/[0.08] relative overflow-hidden backdrop-blur-md shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-red-400 bg-red-950/40 border border-red-500/30">
                <BrandTryHackMe size={14} className="text-red-400" />
                <span>Hands-On Lab Platform</span>
              </span>
              <span className="text-xs font-mono text-[#8b949e]">
                Independent Practical Practice
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Hands-On Security Learning on TryHackMe
            </h3>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-2xl">
              I complement my formal training at <strong className="text-white">Tech By Heart</strong> with continuous hands-on labs on <strong className="text-white">TryHackMe</strong>. I use the platform to explore Linux command-line environments, network scanning techniques, and fundamental web security vulnerability walkthroughs in sandboxed practice machines.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[#cbd5e1]">
                Network Service Enumeration
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[#cbd5e1]">
                Linux Privilege Basics
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[#cbd5e1]">
                Web App Exploitation Labs
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[#cbd5e1]">
                Defensive Triage
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
            <a
              href="https://tryhackme.com/p/sainaths2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-500 transition-all shadow-[0_0_24px_rgba(239,68,68,0.25)] active:scale-95"
            >
              <BrandTryHackMe size={16} />
              <span>Visit My TryHackMe Profile</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-[11px] font-mono text-[#8b949e]">
              Username: <span className="text-white">sainaths2005</span>
            </span>
          </div>
        </div>
      </div>

      {/* Structured Security Pillars Interactive Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Pillar Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.title}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-[#141820] border-emerald-500/40 text-white shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    : "bg-white/[0.015] border-transparent text-[#9da3af] hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-mono ${isSelected ? "text-emerald-400" : "text-[#656c7a]"}`}>
                    0{idx + 1}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-emerald-400" : "bg-transparent"}`} />
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">{pillar.title}</div>
                <div className="text-xs text-[#8b949e] line-clamp-1">{pillar.focus}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Pillar Focus & Practical Work */}
        <div className="lg:col-span-7 p-7 rounded-2xl bg-[#0f1319]/90 border border-white/[0.08] backdrop-blur-sm space-y-6">
          <div className="pb-4 border-b border-white/[0.06]">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
              Active Focus Domain
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">
              {SECURITY_PILLARS[activePillar].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              {SECURITY_PILLARS[activePillar].description}
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3">
              Hands-On Exercises & Practical Implementations
            </div>
            <ul className="space-y-2.5">
              {SECURITY_PILLARS[activePillar].practicalWork.map((item, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3 text-xs sm:text-sm text-[#9da3af] leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Current Training Program Card (Tech By Heart) */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121720] to-[#0d1015] border border-emerald-500/25 relative overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                {CURRENT_TRAINING.status}
              </span>
              <span className="text-xs font-mono text-[#8b949e]">
                {CURRENT_TRAINING.duration} · {CURRENT_TRAINING.location}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              {CURRENT_TRAINING.title}
            </h3>

            <p className="text-xs font-mono text-emerald-400">
              Provider: {CURRENT_TRAINING.institution}
            </p>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              {CURRENT_TRAINING.description}
            </p>

            <div className="pt-2 space-y-2">
              <div className="text-[11px] font-mono uppercase text-[#8b949e]">
                Core Competencies Covered:
              </div>
              <ul className="space-y-1.5 text-xs text-[#9da3af]">
                {CURRENT_TRAINING.competencies.map((comp, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verification / Security Scope Pill */}
          <div className="shrink-0 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 font-mono text-xs w-full md:w-64">
            <div className="text-[11px] uppercase text-[#8b949e] pb-2 border-b border-white/[0.06]">
              Course Syllabus Code
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-white">CAP</span>
                <span className="text-[#8b949e]">App Penetration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">CNP</span>
                <span className="text-[#8b949e]">Network Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">ASA</span>
                <span className="text-[#8b949e]">Security Admin</span>
              </div>
            </div>
            <div className="pt-2 border-t border-white/[0.06] text-[10px] text-emerald-400">
              In Progress · 6 Months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
