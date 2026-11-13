"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck, Cpu, Network, Layers } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Authentic Cybersecurity Positioning */}
        <div className="lg:col-span-7 space-y-7">
          {/* Active Training Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-xs text-emerald-300 font-mono shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pursuing 6-Month Cybersecurity Training (FRCD – Tech By Heart)</span>
          </motion.div>

          {/* Core Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.12]">
              Exploring security. <br className="hidden sm:inline" />
              Building intelligent software.
            </h1>
            <p className="text-base sm:text-lg text-[#9da3af] max-w-xl font-light leading-relaxed">
              I am <span className="text-white font-medium">Sainath S</span>, a Computer Science undergraduate focused on <strong className="text-emerald-300 font-medium">Cybersecurity and Defensive Engineering</strong>, while actively building applications across AI, Machine Learning, and Full-Stack systems.
            </p>
          </motion.div>

          {/* Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm text-[#8b949e] leading-relaxed border-l-2 border-emerald-500/30 pl-4 space-y-2 max-w-xl"
          >
            <p>
              My primary commitment is learning how systems break and how to defend them — from auditing exposed TCP ports with <span className="text-white">Nmap</span> and verifying <span className="text-white">OWASP defense headers</span> in my tool <span className="text-white font-medium">SurfaceCheck API</span>, to studying network protocols and web vulnerability labs.
            </p>
            <p>
              Alongside security, I apply machine learning to telemetry problems (like stress prediction in <span className="text-white font-medium">MENTRA.OS</span>) and build responsive full-stack applications.
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#cybersecurity"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#090b0e] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-95"
            >
              <span>Cybersecurity Focus</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-white bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={14} className="text-[#8b949e]" />
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/Sainath-16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-[#9da3af] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <BrandGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sainaths18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-[#9da3af] hover:text-emerald-300 transition-colors"
                aria-label="LinkedIn"
              >
                <BrandLinkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Abstract Interactive Network Security Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 p-6 rounded-2xl bg-[#0f1319]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden font-mono"
        >
          {/* Subtle glow edge accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Console Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
              <span className="ml-2 text-[#8b949e] text-[11px]">telemetry.security.node</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
              Active Focus
            </span>
          </div>

          {/* Structured Priority Breakdown */}
          <div className="my-5 space-y-3">
            <div className="text-[11px] text-[#8b949e] uppercase tracking-wider">
              Technical Focus Hierarchy
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span className="text-xs font-medium text-white">1. Cybersecurity & Defense</span>
              </div>
              <span className="text-[10px] text-emerald-400 uppercase">Primary Career</span>
            </div>

            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Cpu size={16} className="text-sky-400" />
                <span className="text-xs font-medium text-[#cbd5e1]">2. Artificial Intelligence & ML</span>
              </div>
              <span className="text-[10px] text-[#8b949e]">SHAP · Scikit-learn</span>
            </div>

            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Layers size={16} className="text-amber-400" />
                <span className="text-xs font-medium text-[#cbd5e1]">3. Full-Stack Web Systems</span>
              </div>
              <span className="text-[10px] text-[#8b949e]">Next.js · FastAPI</span>
            </div>

            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Network size={16} className="text-purple-400" />
                <span className="text-xs font-medium text-[#cbd5e1]">4. Cloud & Real-Time Sync</span>
              </div>
              <span className="text-[10px] text-[#8b949e]">Vercel Edge</span>
            </div>
          </div>

          {/* Quick Base Stats */}
          <div className="pt-3.5 border-t border-white/[0.06] text-[11px] text-[#8b949e] space-y-1.5">
            <div className="flex justify-between">
              <span>Location:</span>
              <span className="text-[#cbd5e1]">Thiruvananthapuram, Kerala</span>
            </div>
            <div className="flex justify-between">
              <span>Current Training:</span>
              <span className="text-emerald-300">FRCD – Tech By Heart (6 mos)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
