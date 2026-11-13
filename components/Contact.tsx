"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Check, 
  Copy, 
  Send 
} from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "sainaths2005@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <Terminal size={14} />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s Build Something Resilient
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Open for software engineering roles, security research opportunities, and technical collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Main Direct Action Card - 7 Cols */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently Available for Opportunities</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Send an email or connect directly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-lg">
                Whether you have an inquiry regarding full-stack development, AI model integration, or defensive vulnerability assessment, feel free to reach out.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Primary Contact</div>
                    <div className="text-sm font-mono text-white select-all">{email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all font-mono active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span>Write</span>
                    <Send size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles & Location Card - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sainaths18"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <BrandLinkedin size={19} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn Network
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    linkedin.com/in/sainaths18
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sainath-16"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                  <BrandGithub size={19} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub Profile
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    github.com/Sainath-16
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Location & Timezone card */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                <MapPin size={19} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Thiruvananthapuram, Kerala
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  India · IST (UTC +5:30)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bespoke Footer */}
        <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sainath S.</span>
            <span>·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with Next.js 16 & Tailwind CSS</span>
            <span>·</span>
            <a
              href="#overview"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Back to Top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
