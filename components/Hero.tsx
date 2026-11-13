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
          {/* Subtle Location & Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs font-mono text-[#8F5462]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF493D] shadow-[0_0_8px_rgba(255,73,61,0.6)]" />
            <span>Thiruvananthapuram, Kerala</span>
            <span>·</span>
            <span>Computer Science Graduate</span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#430D1C] tracking-tight leading-[1.12]">
              Hi, I&apos;m Sainath. <br />
              <span className="italic font-normal text-[#6B2D3C]">
                I explore cybersecurity, build software, and experiment with intelligent systems.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B2D3C] font-light leading-relaxed max-w-xl">
              I am a Computer Science graduate from Kerala focused on <strong className="font-semibold text-[#430D1C]">Cybersecurity</strong> as my primary career path, while writing clean full-stack code and training explainable machine learning models.
            </p>
          </motion.div>

          {/* Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm text-[#8F5462] leading-relaxed border-l-2 border-[#E5CABE] pl-4 space-y-2 max-w-xl"
          >
            <p>
              I spend my time understanding how network perimeters and web applications break so I can build better defenses. Currently, I am enrolled in a 6-month cybersecurity training programme at <strong className="text-[#430D1C] font-semibold">Tech By Heart</strong> and solving hands-on virtual lab rooms on <strong className="text-[#430D1C] font-semibold">TryHackMe</strong>.
            </p>
            <p>
              I also love engineering software from scratch — including an automated port & header auditor (<span className="text-[#430D1C] font-medium underline decoration-[#FF493D]/40">SurfaceCheck API</span>), an explainable student stress telemetry platform (<span className="text-[#430D1C] font-medium">MENTRA.OS</span>), and a real-time tournament manager (<span className="text-[#430D1C] font-medium">KickBracket Pro</span>).
            </p>
          </motion.div>

          {/* Action CTAs in Vermillion & Black Cherry */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#cybersecurity"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_4px_16px_rgba(255,73,61,0.3)] hover:shadow-[0_6px_20px_rgba(255,73,61,0.4)] active:scale-95"
            >
              <span>Cybersecurity Focus</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[#430D1C] bg-[#F8E7DB] hover:bg-[#F2DDCF] border border-[#E5CABE] transition-all active:scale-95"
            >
              <span>View Selected Projects</span>
              <ArrowUpRight size={14} className="text-[#8F5462]" />
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/Sainath-16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#F8E7DB] hover:bg-[#F2DDCF] border border-[#E5CABE] text-[#6B2D3C] hover:text-[#430D1C] transition-colors"
                aria-label="GitHub Profile"
              >
                <BrandGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sainaths18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#F8E7DB] hover:bg-[#F2DDCF] border border-[#E5CABE] text-[#6B2D3C] hover:text-[#430D1C] transition-colors"
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
          className="lg:col-span-5 p-7 rounded-2xl bg-[#F8E7DB]/90 border border-[#E5CABE] shadow-[0_8px_32px_rgba(67,13,28,0.04)] space-y-6"
        >
          <div className="pb-4 border-b border-[#E5CABE]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8F5462] mb-1">
              Disciplinary Alignment
            </div>
            <div className="text-sm font-semibold text-[#430D1C]">
              Technical Focus in Order of Priority
            </div>
          </div>

          <div className="space-y-3 font-sans">
            {/* Primary Discipline Card: Cybersecurity */}
            <div className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#FF493D]/40 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#430D1C] flex items-center justify-center text-[#FF493D]">
                  <Shield size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#430D1C]">1. Cybersecurity</div>
                  <div className="text-[11px] text-[#8F5462]">AppSec, Network Defense, Nmap, OWASP</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF493D] text-[#FFF0E5] uppercase font-bold tracking-wider">
                Primary
              </span>
            </div>

            {/* Discipline 2 */}
            <div className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8E7DB] flex items-center justify-center text-[#430D1C]">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#430D1C]">2. Artificial Intelligence & ML</div>
                  <div className="text-[11px] text-[#8F5462]">Scikit-learn, Explainable AI (SHAP), PyTorch</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8F5462]">Secondary</span>
            </div>

            {/* Discipline 3 */}
            <div className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8E7DB] flex items-center justify-center text-[#430D1C]">
                  <Code2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#430D1C]">3. Full-Stack Development</div>
                  <div className="text-[11px] text-[#8F5462]">FastAPI, Next.js, Python, TypeScript</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8F5462]">Core</span>
            </div>

            {/* Discipline 4 */}
            <div className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8E7DB] flex items-center justify-center text-[#430D1C]">
                  <Cloud size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#430D1C]">4. Cloud Computing & Systems</div>
                  <div className="text-[11px] text-[#8F5462]">Linux Server Admin, Docker, Vercel Edge</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8F5462]">Applied</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5CABE] flex items-center justify-between text-xs font-mono text-[#8F5462]">
            <span>Active Status:</span>
            <span className="text-[#430D1C] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D] animate-ping" />
              Training at Tech By Heart
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
