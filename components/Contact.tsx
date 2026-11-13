"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sainaths2005@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Direct Invitation */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8b949e]">
            Direct Inquiries
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
            Interested in security collaboration or technical roles?
          </h2>

          <p className="text-sm sm:text-base text-[#9da3af] leading-relaxed max-w-lg font-light">
            I am actively looking for cybersecurity internships, security engineering opportunities, and technical collaborations. Whether you want to discuss vulnerability research, defensive tooling, or full-stack software, feel free to reach out.
          </p>

          {/* Email Copy Pill Bar */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-3 p-2 rounded-2xl bg-[#0f1319] border border-white/[0.08] shadow-md">
              <span className="text-xs font-mono text-white px-3 select-all">
                {email}
              </span>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-[#090b0e] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <span>Write Email</span>
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Social Links & Local Details */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0f1319]/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9da3af] group-hover:text-emerald-400 transition-colors">
                <BrandLinkedin size={19} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">LinkedIn Network</div>
                <div className="text-xs text-[#8b949e] font-mono">linkedin.com/in/sainaths18</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0f1319]/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9da3af] group-hover:text-white transition-colors">
                <BrandGithub size={19} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">GitHub Profile</div>
                <div className="text-xs text-[#8b949e] font-mono">github.com/Sainath-16</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-white transition-colors" />
          </a>

          <div className="p-5 rounded-2xl bg-[#0f1319]/80 border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#8b949e]">Base Location</div>
                <div className="text-sm font-medium text-white mt-0.5">
                  Thiruvananthapuram, Kerala, India
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#8b949e]">IST (UTC +5:30)</span>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b949e]">
        <div>
          <span>© {new Date().getFullYear()} Sainath S.</span>
          <span className="mx-2">·</span>
          <span>Computer Science & Cybersecurity</span>
        </div>
        <a href="#overview" className="hover:text-white transition-colors">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
