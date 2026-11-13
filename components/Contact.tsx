"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
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
        {/* Left Column: Direct Outreach Invitation */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#656c7a]">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
            Interested in working together or discussing a project?
          </h2>

          <p className="text-sm sm:text-base text-[#9da3af] leading-relaxed max-w-lg font-light">
            I am currently open to software engineering internships, technical collaborations, and full-stack or AI roles. Feel free to reach out via email or LinkedIn.
          </p>

          {/* Email Copy Bar */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-3 p-2 rounded-2xl bg-[#14171f] border border-white/[0.08]">
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
                    <Check size={13} className="text-[#10b981]" />
                    <span className="text-[#10b981]">Copied</span>
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#0e1015] bg-[#f1f3f7] hover:bg-white transition-all shadow-sm"
              >
                <span>Compose</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Social & Location */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#14171f]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9da3af] group-hover:text-white transition-colors">
                <BrandLinkedin size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">LinkedIn</div>
                <div className="text-xs text-[#656c7a]">linkedin.com/in/sainaths18</div>
              </div>
            </div>
            <ArrowUpRight size={15} className="text-[#656c7a] group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#14171f]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9da3af] group-hover:text-white transition-colors">
                <BrandGithub size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">GitHub</div>
                <div className="text-xs text-[#656c7a]">github.com/Sainath-16</div>
              </div>
            </div>
            <ArrowUpRight size={15} className="text-[#656c7a] group-hover:text-white transition-colors" />
          </a>

          <div className="p-5 rounded-2xl bg-[#14171f]/80 border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-[#656c7a]">Location</div>
              <div className="text-sm font-medium text-white mt-0.5">
                Thiruvananthapuram, Kerala, India
              </div>
            </div>
            <span className="text-xs font-mono text-[#656c7a]">IST (UTC +5:30)</span>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#656c7a]">
        <div>
          <span>© {new Date().getFullYear()} Sainath S</span>
          <span className="mx-2">·</span>
          <span>Crafted with Next.js & Tailwind CSS</span>
        </div>
        <a href="#about" className="hover:text-white transition-colors">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
