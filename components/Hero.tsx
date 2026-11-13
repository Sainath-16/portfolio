"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Layers
} from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Hero() {
  return (
    <section 
      id="overview" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Restrained subtle architectural glow - non-neon, deep charcoal undertones */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Availability Badge & Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/[0.06]"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for technical internships & engineering roles</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Kerala, India
            </span>
            <span>·</span>
            <span>CS Undergraduate</span>
          </div>
        </motion.div>

        {/* Main Editorial Hero Headings */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400 mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-cyan-400/60 inline-block" />
              AI & Full-Stack Developer · Security Focus
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Architecting intelligent software with defensive precision.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal"
          >
            I am <strong className="text-white font-semibold">Sainath S</strong>, a Computer Science undergraduate engineering resilient, high-concurrency full-stack systems and machine learning workflows across <span className="text-slate-100">Artificial Intelligence</span>, <span className="text-slate-100">Cybersecurity</span>, and <span className="text-slate-100">Cloud Infrastructure</span>.
          </motion.p>
        </div>

        {/* Action CTAs and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 pt-6 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_24px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            <span>Explore Engineering Work</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-200 bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2] transition-all active:scale-[0.98]"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight size={16} className="text-slate-400" />
          </a>

          <div className="h-6 w-px bg-white/[0.1] hidden sm:block mx-1" />

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Sainath-16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:text-white transition-all"
            >
              <BrandGithub size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sainaths18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:text-cyan-300 transition-all"
            >
              <BrandLinkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Engineering Philosophy Metrics Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Cpu size={16} />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Model Accuracy</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">88.6%</div>
            <p className="text-xs text-slate-400 mt-1">Validated Stress Telemetry with SHAP</p>
          </div>

          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-amber-400 mb-1.5">
              <Layers size={16} />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Concurrency</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">3s Sync</div>
            <p className="text-xs text-slate-400 mt-1">Real-time edge spectator loop</p>
          </div>

          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
              <ShieldCheck size={16} />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Security</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">OWASP Tier</div>
            <p className="text-xs text-slate-400 mt-1">Automated vulnerability audits</p>
          </div>

          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-purple-400 mb-1.5">
              <Terminal size={16} />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">Full-Stack</div>
            <p className="text-xs text-slate-400 mt-1">Decoupled Next.js & FastAPI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
