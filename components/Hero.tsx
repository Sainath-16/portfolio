"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Natural Introduction & Positioning */}
        <div className="lg:col-span-8 space-y-8">
          {/* Small Status Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs text-[#9da3af]"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>Open for internships & developer opportunities</span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.12]">
              I build web applications, machine learning tools, and security experiments.
            </h1>
            <p className="text-lg sm:text-xl text-[#9da3af] max-w-2xl font-light leading-relaxed">
              Hello, I&apos;m <span className="text-white font-medium">Sainath S</span>. I&apos;m a Computer Science undergraduate based in Kerala, India. I enjoy writing clean code, exploring how AI models make decisions, and auditing web defenses.
            </p>
          </motion.div>

          {/* Authentic Developer Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="prose prose-invert max-w-2xl text-sm text-[#9da3af] space-y-3 leading-relaxed border-l-2 border-white/[0.1] pl-5"
          >
            <p>
              My work spans from building end-to-end full-stack web applications with <span className="text-white">Next.js</span> and <span className="text-white">FastAPI</span> to training predictive models in <span className="text-white">Python</span> where feature attribution (SHAP) matters as much as the final score.
            </p>
            <p>
              When I&apos;m not writing code, I actively organize and produce collegiate esports tournaments and digital broadcasts, handling real-time logistics and spectator media.
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-[#0e1015] bg-[#f1f3f7] hover:bg-white transition-all shadow-md active:scale-95"
            >
              <span>See what I&apos;ve built</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-white bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] transition-all active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} className="text-[#656c7a]" />
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/Sainath-16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#9da3af] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <BrandGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sainaths18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#9da3af] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <BrandLinkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Factual Quick Reference Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-4 p-6 rounded-2xl bg-[#14171f]/80 border border-white/[0.08] backdrop-blur-sm space-y-6"
        >
          <div className="pb-4 border-b border-white/[0.06]">
            <div className="text-xs font-mono uppercase tracking-wider text-[#656c7a] mb-1">
              At a Glance
            </div>
            <div className="text-sm font-medium text-white">
              Sainath S · Engineering Profile
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <div className="text-[#656c7a] font-mono mb-1">Degree & Location</div>
              <div className="text-white">B.Tech in Computer Science</div>
              <div className="text-[#9da3af]">Thiruvananthapuram, Kerala, India</div>
            </div>

            <div>
              <div className="text-[#656c7a] font-mono mb-1">Primary Tools</div>
              <div className="text-white leading-relaxed">
                Python, Next.js, FastAPI, TypeScript, Scikit-learn, Tailwind CSS
              </div>
            </div>

            <div>
              <div className="text-[#656c7a] font-mono mb-1">Key Interests</div>
              <div className="text-white leading-relaxed">
                Applied AI & Interpretability, Defensive Web Security, Real-Time Web Apps
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[#9da3af]">
              <span>Status</span>
              <span className="text-[#10b981] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Undergraduate
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
