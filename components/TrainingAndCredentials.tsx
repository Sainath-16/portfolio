import React from "react";
import { Award, CheckCircle2, BookOpen } from "lucide-react";
import { CURRENT_TRAINING, VERIFIED_CREDENTIALS } from "@/lib/portfolio-data";

export function TrainingAndCredentials() {
  return (
    <section id="training" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Learning Journey & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Training & Credentials
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light leading-relaxed">
          Clear distinction between my current active cybersecurity training course and verified certifications earned through technical programs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Ongoing Training & Internship Experience */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8b949e] flex items-center gap-2">
            <BookOpen size={14} className="text-emerald-400" />
            <span>Formal Cybersecurity Training & Experience</span>
          </div>

          {/* Active 6-Month Course Card */}
          <div className="p-7 rounded-2xl bg-[#0f1319]/90 border border-emerald-500/30 space-y-4 shadow-lg relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                {CURRENT_TRAINING.status}
              </span>
              <span className="text-xs font-mono text-[#8b949e]">{CURRENT_TRAINING.duration}</span>
            </div>

            <div>
              <h3 className="text-xl font-serif text-white">{CURRENT_TRAINING.title}</h3>
              <div className="text-xs font-mono text-emerald-400 mt-0.5">
                {CURRENT_TRAINING.institution} · {CURRENT_TRAINING.location}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              {CURRENT_TRAINING.description}
            </p>

            <div className="pt-2 border-t border-white/[0.04] space-y-2">
              <div className="text-[11px] font-mono text-[#8b949e] uppercase">Syllabus Highlights:</div>
              <ul className="space-y-1.5 text-xs text-[#9da3af]">
                {CURRENT_TRAINING.competencies.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Completed Internship Card */}
          <div className="p-6 rounded-2xl bg-[#0f1319]/70 border border-white/[0.08] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#38bdf8]">Internship Completed</span>
              <span className="text-[#8b949e]">2025 · Technopark, Trivandrum</span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-white">
                Cybersecurity & Ethical Hacking Intern
              </h4>
              <div className="text-xs text-[#8b949e]">ICT Academy of Kerala</div>
            </div>

            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              Practical internship training covering network reconnaissance drills with Nmap, fundamental web security assessments aligned with OWASP Top 10, and system hardening practices.
            </p>
          </div>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8b949e] flex items-center gap-2">
            <Award size={14} className="text-sky-400" />
            <span>Verified Credentials Earned ({VERIFIED_CREDENTIALS.length})</span>
          </div>

          <div className="space-y-3">
            {VERIFIED_CREDENTIALS.map((cred, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3 hover:border-white/[0.12] transition-colors"
              >
                <div>
                  <div className="text-xs font-semibold text-white leading-snug">
                    {cred.title}
                  </div>
                  <div className="text-[11px] text-[#8b949e] mt-0.5 font-mono">
                    {cred.issuer}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#cbd5e1]">
                    {cred.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer Note */}
          <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] text-[11px] text-[#8b949e] leading-relaxed">
            <strong className="text-white font-medium">Transparency Note:</strong> All items listed above represent completed courses or workshops verified with institutions. The 6-month FRCD course is actively in progress.
          </div>
        </div>
      </div>
    </section>
  );
}
