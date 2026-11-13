import React from "react";
import { BookOpen, Award } from "lucide-react";
import { CURRENT_TRAINING, COMPLETED_CREDENTIALS } from "@/lib/portfolio-data";

export function TrainingAndEducation() {
  return (
    <section id="training" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Formal Education & Training</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Cybersecurity Training & Credentials
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
          Transparent overview of my ongoing professional cybersecurity programme at Tech By Heart and verified certifications earned through university and industry workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Ongoing 6-Month Training at Tech By Heart (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8F5462] flex items-center gap-2">
            <BookOpen size={14} className="text-[#FF493D]" />
            <span>Active Cybersecurity Programme</span>
          </div>

          <div className="p-8 rounded-2xl bg-[#F8E7DB]/90 border border-[#E5CABE] shadow-[0_8px_30px_rgba(67,13,28,0.04)] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#430D1C] bg-[#FFF0E5] border border-[#FF493D]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D] animate-pulse" />
                {CURRENT_TRAINING.status}
              </span>
              <span className="text-xs font-mono text-[#8F5462]">
                {CURRENT_TRAINING.duration}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#430D1C] mb-1">
                {CURRENT_TRAINING.programName}
              </h3>
              <div className="text-xs font-mono text-[#FF493D] font-semibold flex items-center gap-2">
                <span>{CURRENT_TRAINING.provider}</span>
                <span>·</span>
                <span>{CURRENT_TRAINING.location}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6B2D3C] leading-relaxed font-light">
              {CURRENT_TRAINING.summary}
            </p>

            {/* 3 Explicit Tracks: CAP, CNP, ASA with full names */}
            <div className="pt-2 border-t border-[#E5CABE] space-y-3">
              <div className="text-[11px] font-mono uppercase text-[#8F5462]">
                Three Core Training Tracks:
              </div>

              <div className="space-y-2.5">
                {CURRENT_TRAINING.tracks.map((track) => (
                  <div
                    key={track.code}
                    className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#430D1C] text-[#FFF0E5]">
                        {track.code}
                      </span>
                      <span className="text-xs font-semibold text-[#430D1C]">
                        {track.fullName}
                      </span>
                    </div>
                    <p className="text-xs text-[#8F5462] font-light leading-relaxed pl-1">
                      {track.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Completed Internship Highlight */}
          <div className="p-6 rounded-2xl bg-[#F8E7DB]/70 border border-[#E5CABE] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#FF493D] font-semibold">Completed Internship</span>
              <span className="text-[#8F5462]">2025 · Technopark, Trivandrum</span>
            </div>
            <h4 className="text-base font-semibold text-[#430D1C]">
              Cybersecurity & Ethical Hacking Intern
            </h4>
            <div className="text-xs text-[#8F5462]">ICT Academy of Kerala</div>
            <p className="text-xs text-[#6B2D3C] leading-relaxed font-light pt-1">
              Practiced network scanning, port enumeration using Nmap, and analyzed common web vulnerabilities aligned with OWASP Top 10 guidelines.
            </p>
          </div>
        </div>

        {/* Right Column: Verified Certifications List (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8F5462] flex items-center gap-2">
            <Award size={14} className="text-[#FF493D]" />
            <span>Verified Credentials Earned ({COMPLETED_CREDENTIALS.length})</span>
          </div>

          <div className="space-y-3">
            {COMPLETED_CREDENTIALS.map((cred, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#F8E7DB]/70 border border-[#E5CABE] flex items-center justify-between gap-3 hover:border-[#FF493D]/60 transition-colors"
              >
                <div>
                  <div className="text-xs font-semibold text-[#430D1C] leading-snug">
                    {cred.title}
                  </div>
                  <div className="text-[11px] text-[#8F5462] mt-0.5 font-mono">
                    {cred.issuer}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFF0E5] text-[#6B2D3C] border border-[#E5CABE]">
                    {cred.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Profile Card */}
          <div className="p-5 rounded-xl bg-[#F8E7DB]/70 border border-[#E5CABE] space-y-2">
            <div className="text-xs font-mono uppercase text-[#8F5462]">
              Academic Qualification
            </div>
            <div className="text-sm font-semibold text-[#430D1C]">
              Bachelor of Technology (B.Tech) in Computer Science
            </div>
            <div className="text-xs text-[#6B2D3C] font-light">
              University Affiliation · Kerala, India
            </div>
          </div>

          {/* Integrity Note */}
          <div className="p-4 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] text-[11px] text-[#8F5462] leading-relaxed font-light">
            <strong className="text-[#430D1C] font-medium">Transparency Note:</strong> All credentials above represent completed certifications verified by institutions. The 6-month FRCD course at Tech By Heart is currently ongoing.
          </div>
        </div>
      </div>
    </section>
  );
}
