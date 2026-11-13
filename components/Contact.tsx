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
    <section id="contact" className="relative bg-[#430D1C] text-[#FFF0E5] pt-28 pb-16 px-6 overflow-hidden">
      {/* Subtle NEXA Vermillion Glow Atmosphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF493D 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 editorial-lines-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Outreach Invitation (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF493D] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
              <span>Direct Inquiries & Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#FFF0E5] tracking-tight leading-tight">
              Interested in security collaboration or technical roles?
            </h2>

            <p className="text-sm sm:text-base text-[#ECCDC1] leading-relaxed max-w-lg font-light">
              I am actively looking for cybersecurity internships, entry-level security engineering roles, and technical collaborations. Whether you want to discuss defensive tooling, application security, or software development, feel free to reach out.
            </p>

            {/* Email Copy Pill Bar */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-3 p-2 rounded-2xl bg-[#541525] border border-[#75253A] shadow-md">
                <span className="text-xs font-mono text-[#FFF0E5] px-3 select-all">
                  {email}
                </span>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#FFF0E5] bg-[#380B17] hover:bg-[#561626] border border-[#75253A] transition-all"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-[#FF493D]" />
                      <span className="text-[#FF493D] font-semibold">Copied</span>
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
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_2px_12px_rgba(255,73,61,0.25)] hover:shadow-[0_4px_16px_rgba(255,73,61,0.35)] active:scale-95"
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
              className="group p-5 rounded-2xl bg-[#541525]/80 border border-[#75253A] hover:border-[#FF493D] transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#380B17] border border-[#75253A] flex items-center justify-center text-[#ECCDC1] group-hover:text-[#FF493D] transition-colors">
                  <BrandLinkedin size={19} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#FFF0E5]">LinkedIn Network</div>
                  <div className="text-xs text-[#CFA396] font-mono">linkedin.com/in/sainaths18</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#CFA396] group-hover:text-[#FF493D] transition-colors" />
            </a>

            <a
              href="https://github.com/Sainath-16"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#541525]/80 border border-[#75253A] hover:border-[#FF493D] transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#380B17] border border-[#75253A] flex items-center justify-center text-[#ECCDC1] group-hover:text-[#FF493D] transition-colors">
                  <BrandGithub size={19} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#FFF0E5]">GitHub Profile</div>
                  <div className="text-xs text-[#CFA396] font-mono">github.com/Sainath-16</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#CFA396] group-hover:text-[#FF493D] transition-colors" />
            </a>

            <div className="p-5 rounded-2xl bg-[#541525]/80 border border-[#75253A] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#380B17] border border-[#75253A] flex items-center justify-center text-[#FF493D]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#CFA396]">Base Location</div>
                  <div className="text-sm font-medium text-[#FFF0E5] mt-0.5">
                    Thiruvananthapuram, Kerala, India
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#CFA396]">IST (UTC +5:30)</span>
            </div>
          </div>
        </div>

        {/* Footer Colophon */}
        <footer className="pt-8 border-t border-[#75253A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#CFA396]">
          <div>
            <span>© {new Date().getFullYear()} Sainath S.</span>
            <span className="mx-2">·</span>
            <span>Black Cherry & Vermillion Editorial Edition</span>
          </div>
          <a href="#overview" className="hover:text-[#FFF0E5] transition-colors">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
