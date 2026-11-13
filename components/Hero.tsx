"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Shield, Cpu, Code2, Cloud } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[88vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Left Column: Natural, Human Introduction (7 Columns) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Subtle Location & Disciplinary Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs font-mono text-[#73766E]"
          >
            <span className="w-2 h-2 rounded-full bg-[#345A46]" />
            <span>Thiruvananthapuram, Kerala</span>
            <span>·</span>
            <span>Computer Science Graduate</span>
          </motion.div>

          {/* Natural Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#20231F] tracking-tight leading-[1.12]">
              Hi, I&apos;m Sainath. <br />
              <span className="italic font-normal text-[#345A46]">
                I explore cybersecurity, build software, and experiment with intelligent systems.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#575B53] font-light leading-relaxed max-w-xl">
              I am a Computer Science graduate from Kerala focused on <strong className="font-medium text-[#20231F]">Cybersecurity</strong> as my primary career path, while writing clean full-stack code and training explainable machine learning models.
            </p>
          </motion.div>

          {/* Genuine Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm text-[#73766E] leading-relaxed border-l-2 border-[#DCD6C8] pl-4 space-y-2 max-w-xl"
          >
            <p>
              I spend my time understanding how network perimeters and web applications break so I can build better defenses. Currently, I am enrolled in a 6-month cybersecurity training programme at <strong className="text-[#20231F] font-medium">Tech By Heart</strong> and solving hands-on virtual lab rooms on <strong className="text-[#20231F] font-medium">TryHackMe</strong>.
            </p>
            <p>
              I also love engineering software from scratch — including an automated port & header auditor (<span className="text-[#345A46] font-medium">SurfaceCheck API</span>), an explainable student stress telemetry platform (<span className="text-[#345A46] font-medium">MENTRA.OS</span>), and a real-time tournament manager (<span className="text-[#345A46] font-medium">KickBracket Pro</span>).
            </p>
          </motion.div>

          {/* Thoughtful Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#cybersecurity"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[#F3F0E8] bg-[#345A46] hover:bg-[#254233] transition-all shadow-sm active:scale-95"
            >
              <span>Cybersecurity Focus</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[#20231F] bg-[#EBE6DA] hover:bg-[#DCD6C8] transition-all active:scale-95"
            >
              <span>View Selected Projects</span>
              <ArrowUpRight size={14} className="text-[#73766E]" />
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/Sainath-16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#EBE6DA] hover:bg-[#DCD6C8] text-[#575B53] hover:text-[#20231F] transition-colors"
                aria-label="GitHub Profile"
              >
                <BrandGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sainaths18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#EBE6DA] hover:bg-[#DCD6C8] text-[#575B53] hover:text-[#20231F] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <BrandLinkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Architectural Discipline Card (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 p-7 rounded-2xl bg-[#EBE6DA]/70 border border-[#DCD6C8] shadow-[0_8px_30px_rgba(32,35,31,0.03)] space-y-6"
        >
          <div className="pb-4 border-b border-[#DCD6C8]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#73766E] mb-1">
              Disciplinary Alignment
            </div>
            <div className="text-sm font-medium text-[#20231F]">
              Technical Focus in Order of Priority
            </div>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-3.5 rounded-xl bg-[#F3F0E8] border border-[#345A46]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#345A46]/10 flex items-center justify-center text-[#345A46]">
                  <Shield size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#20231F]">1. Cybersecurity</div>
                  <div className="text-[11px] text-[#73766E]">AppSec, Network Defense, Nmap, OWASP</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#345A46] uppercase font-semibold">Primary</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EBE6DA] flex items-center justify-center text-[#575B53]">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#20231F]">2. AI & Machine Learning</div>
                  <div className="text-[11px] text-[#73766E]">Explainable AI, SHAP, Scikit-learn</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#73766E]">Applied</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EBE6DA] flex items-center justify-center text-[#575B53]">
                  <Code2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#20231F]">3. Full-Stack Systems</div>
                  <div className="text-[11px] text-[#73766E]">Next.js, FastAPI, TypeScript, Python</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#73766E]">Production</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EBE6DA] flex items-center justify-center text-[#575B53]">
                  <Cloud size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#20231F]">4. Cloud & Tooling</div>
                  <div className="text-[11px] text-[#73766E]">Vercel Edge, Linux, ngrok, Git</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#73766E]">Infra</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#DCD6C8] text-xs font-mono text-[#73766E] flex items-center justify-between">
            <span>Current Track:</span>
            <span className="text-[#345A46] font-medium">FRCD – Tech By Heart</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
