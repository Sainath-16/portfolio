"use client";

import React, { useState } from "react";
import { Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SECURITY_DISCIPLINES } from "@/lib/portfolio-data";
import { BrandTryHackMe } from "./BrandIcons";

export function CybersecuritySection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cybersecurity" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#DCD6C8]">
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE6DA] border border-[#DCD6C8] text-xs text-[#345A46] font-mono mb-3">
            <Shield size={13} />
            <span>Core Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#20231F] tracking-tight">
            Security as an Active Practice
          </h2>
        </div>
        <p className="text-sm text-[#575B53] max-w-md font-light leading-relaxed">
          How I practice defensive engineering, network reconnaissance, and web application security auditing through structured learning and self-directed labs.
        </p>
      </div>

      {/* TryHackMe Hands-On Practice Spotlight */}
      <div className="mb-16 p-8 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] shadow-[0_8px_30px_rgba(32,35,31,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#73766E]">
              <span className="w-2 h-2 rounded-full bg-[#A66F50]" />
              <span>Independent Lab Platform</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#20231F] tracking-tight">
              Hands-On Practical Labs on TryHackMe
            </h3>

            <p className="text-xs sm:text-sm text-[#575B53] leading-relaxed max-w-2xl font-light">
              I consistently practice on <strong className="text-[#20231F] font-medium">TryHackMe</strong> to reinforce concepts learned during training. This includes practical exercises across Linux command-line environments, service fingerprinting drills, and introductory web vulnerability rooms in sandboxed virtual machines.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#F3F0E8] border border-[#DCD6C8] text-[#575B53]">
                Network Service Enumeration
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#F3F0E8] border border-[#DCD6C8] text-[#575B53]">
                Linux Privilege Fundamentals
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#F3F0E8] border border-[#DCD6C8] text-[#575B53]">
                OWASP Web Vulnerability Rooms
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#F3F0E8] border border-[#DCD6C8] text-[#575B53]">
                Defensive Log Inspection
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
            <a
              href="https://tryhackme.com/p/sainaths2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold text-[#F3F0E8] bg-[#20231F] hover:bg-[#345A46] transition-all shadow-sm active:scale-95"
            >
              <BrandTryHackMe size={16} />
              <span>Visit My TryHackMe Profile</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-[11px] font-mono text-[#73766E]">
              Username: <span className="text-[#20231F] font-medium">sainaths2005</span>
            </span>
          </div>
        </div>
      </div>

      {/* 4 Security Disciplines - Editorial Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Discipline Selectors (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {SECURITY_DISCIPLINES.map((disc, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={disc.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-[#EBE6DA] border-[#345A46] text-[#20231F] shadow-sm"
                    : "bg-[#F3F0E8] border-[#DCD6C8] text-[#73766E] hover:bg-[#EBE6DA]/50 hover:text-[#20231F]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-mono ${isSelected ? "text-[#345A46] font-semibold" : "text-[#73766E]"}`}>
                    {disc.number}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#345A46]" : "bg-transparent"}`} />
                </div>
                <div className="text-sm font-semibold text-[#20231F] mb-0.5">{disc.title}</div>
                <div className="text-xs text-[#73766E] line-clamp-1 font-light">{disc.scope}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Narrative & Practical Work (7 Cols) */}
        <div className="lg:col-span-7 p-7 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] space-y-6">
          <div className="pb-4 border-b border-[#DCD6C8]">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345A46] mb-1">
              {SECURITY_DISCIPLINES[activeTab].scope}
            </div>
            <h3 className="text-2xl font-serif text-[#20231F] mb-2">
              {SECURITY_DISCIPLINES[activeTab].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#575B53] leading-relaxed font-light">
              {SECURITY_DISCIPLINES[activeTab].narrative}
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#73766E] mb-3">
              Practical Implementation in Projects & Labs
            </div>
            <ul className="space-y-2.5">
              {SECURITY_DISCIPLINES[activeTab].keyPractices.map((practice, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-start gap-3 text-xs sm:text-sm text-[#575B53] leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-[#345A46] mt-0.5 shrink-0" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
