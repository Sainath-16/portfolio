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
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#DCD6C8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Direct Outreach Invitation (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#73766E]">
            Direct Inquiries
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#20231F] tracking-tight leading-tight">
            Interested in security collaboration or technical roles?
          </h2>

          <p className="text-sm sm:text-base text-[#575B53] leading-relaxed max-w-lg font-light">
            I am actively looking for cybersecurity internships, entry-level security engineering roles, and technical collaborations. Whether you want to discuss defensive tooling, application security, or software development, feel free to reach out.
          </p>

          {/* Email Copy Pill Bar */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-3 p-2 rounded-2xl bg-[#EBE6DA] border border-[#DCD6C8] shadow-sm">
              <span className="text-xs font-mono text-[#20231F] px-3 select-all">
                {email}
              </span>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#20231F] bg-[#F3F0E8] hover:bg-[#DCD6C8] border border-[#DCD6C8] transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[#345A46]" />
                    <span className="text-[#345A46] font-semibold">Copied</span>
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
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-[#F3F0E8] bg-[#345A46] hover:bg-[#254233] transition-all shadow-sm"
              >
                <span>Write Email</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Social Links & Local Details (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] hover:border-[#345A46] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-center text-[#575B53] group-hover:text-[#345A46] transition-colors">
                <BrandLinkedin size={19} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#20231F]">LinkedIn Network</div>
                <div className="text-xs text-[#73766E] font-mono">linkedin.com/in/sainaths18</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#73766E] group-hover:text-[#20231F] transition-colors" />
          </a>

          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] hover:border-[#345A46] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-center text-[#575B53] group-hover:text-[#345A46] transition-colors">
                <BrandGithub size={19} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#20231F]">GitHub Profile</div>
                <div className="text-xs text-[#73766E] font-mono">github.com/Sainath-16</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#73766E] group-hover:text-[#20231F] transition-colors" />
          </a>

          <div className="p-5 rounded-2xl bg-[#EBE6DA]/80 border border-[#DCD6C8] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F3F0E8] border border-[#DCD6C8] flex items-center justify-center text-[#345A46]">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#73766E]">Base Location</div>
                <div className="text-sm font-medium text-[#20231F] mt-0.5">
                  Thiruvananthapuram, Kerala, India
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#73766E]">IST (UTC +5:30)</span>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-8 border-t border-[#DCD6C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#73766E]">
        <div>
          <span>© {new Date().getFullYear()} Sainath S.</span>
          <span className="mx-2">·</span>
          <span>Computer Science & Cybersecurity</span>
        </div>
        <a href="#overview" className="hover:text-[#20231F] transition-colors">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
