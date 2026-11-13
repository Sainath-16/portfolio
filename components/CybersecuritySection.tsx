"use client";

import React, { useState } from "react";
import { Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SECURITY_DISCIPLINES } from "@/lib/portfolio-data";
import { BrandTryHackMe } from "./BrandIcons";

export function CybersecuritySection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="cybersecurity"
      className="relative py-32 px-6 bg-[#430D1C] text-[#FFF0E5] overflow-hidden"
    >
      {/* Decorative NEXA-inspired Vermillion Ambient Light Arc */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF493D 0%, #430D1C 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF493D 0%, transparent 70%)",
        }}
      />

      {/* Dark Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 editorial-lines-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#75253A]/60 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#561626] border border-[#75253A] text-xs text-[#FF493D] font-mono mb-4 shadow-sm">
              <Shield size={13} />
              <span>Core Discipline · Primary Career Focus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#FFF0E5] tracking-tight">
              Security as an Active Practice
            </h2>
          </div>
          <p className="text-sm text-[#ECCDC1] max-w-md font-light leading-relaxed">
            How I practice defensive engineering, network reconnaissance, and web application security auditing through structured institute training and self-directed virtual labs.
          </p>
        </div>

        {/* TryHackMe Hands-On Practice Spotlight (NEXA Hero Card Treatment) */}
        <div className="relative mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#541525] via-[#430D1C] to-[#300914] border border-[#75253A] shadow-[0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Subtle curved Vermillion rim light */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "#FF493D" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF493D]">
                <span className="w-2 h-2 rounded-full bg-[#FF493D] animate-pulse" />
                <span>Hands-On Virtual Lab Training</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#FFF0E5] tracking-tight">
                Hands-On Practical Labs on TryHackMe
              </h3>

              <p className="text-xs sm:text-sm text-[#ECCDC1] leading-relaxed max-w-2xl font-light">
                I consistently practice on <strong className="text-[#FFF0E5] font-semibold">TryHackMe</strong> to reinforce concepts learned during training. This includes practical exercises across Linux command-line environments, service fingerprinting drills, and introductory web vulnerability rooms in sandboxed virtual machines.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#380B17] border border-[#75253A] text-[#ECCDC1]">
                  Network Service Enumeration
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#380B17] border border-[#75253A] text-[#ECCDC1]">
                  Linux Privilege Fundamentals
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#380B17] border border-[#75253A] text-[#ECCDC1]">
                  OWASP Web Vulnerability Rooms
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#380B17] border border-[#75253A] text-[#ECCDC1]">
                  Defensive Log Inspection
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3.5">
              <a
                href="https://tryhackme.com/p/sainaths2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_4px_20px_rgba(255,73,61,0.35)] hover:shadow-[0_6px_24px_rgba(255,73,61,0.45)] active:scale-95"
              >
                <BrandTryHackMe size={16} />
                <span>Visit My TryHackMe Profile</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[11px] font-mono text-[#ECCDC1]">
                Username: <span className="text-[#FFF0E5] font-semibold underline decoration-[#FF493D]/60">sainaths2005</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4 Security Disciplines - Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Discipline Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SECURITY_DISCIPLINES.map((disc, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={disc.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-[#561626] border-[#FF493D] text-[#FFF0E5] shadow-[0_4px_20px_rgba(255,73,61,0.15)]"
                      : "bg-[#380B17]/70 border-[#75253A]/60 text-[#ECCDC1] hover:bg-[#561626]/60 hover:text-[#FFF0E5]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-mono ${isSelected ? "text-[#FF493D] font-bold" : "text-[#CFA396]"}`}>
                      {disc.number}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#FF493D] shadow-[0_0_8px_#FF493D]" : "bg-transparent"}`} />
                  </div>
                  <div className="text-sm font-semibold text-[#FFF0E5] mb-1">{disc.title}</div>
                  <div className="text-xs text-[#CFA396] line-clamp-1 font-light">{disc.scope}</div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Narrative & Practical Work (7 Cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#541525]/80 border border-[#75253A] space-y-6 shadow-xl">
            <div className="pb-5 border-b border-[#75253A]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF493D] mb-1">
                {SECURITY_DISCIPLINES[activeTab].scope}
              </div>
              <h3 className="text-2xl font-serif text-[#FFF0E5] mb-2.5">
                {SECURITY_DISCIPLINES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#ECCDC1] leading-relaxed font-light">
                {SECURITY_DISCIPLINES[activeTab].narrative}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#CFA396] mb-3">
                Practical Implementation in Projects & Labs
              </div>
              <ul className="space-y-2.5">
                {SECURITY_DISCIPLINES[activeTab].keyPractices.map((practice, i) => (
                  <li
                    key={i}
                    className="p-3.5 rounded-xl bg-[#380B17]/90 border border-[#75253A] flex items-start gap-3 text-xs sm:text-sm text-[#ECCDC1] leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-[#FF493D] mt-0.5 shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
