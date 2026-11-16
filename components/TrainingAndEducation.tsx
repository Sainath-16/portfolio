import React from "react";
import { BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";
import { CURRENT_TRAINING } from "@/lib/portfolio-data";

export function TrainingAndEducation() {
  return (
    <section id="training" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Structured Technical Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Ongoing Training & Formal Education
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
          Transparent presentation of my active cybersecurity training journey alongside my foundational computer science degree.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Ongoing 6-Month Training at Tech By Heart (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8F5462] flex items-center gap-2">
            <BookOpen size={14} className="text-[#FF493D]" />
            <span>Active Cybersecurity Programme (Currently Pursuing)</span>
          </div>

          <div className="p-8 rounded-2xl bg-[#F8E7DB]/95 border border-[#E5CABE] shadow-[0_8px_30px_rgba(67,13,28,0.04)] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-[#430D1C] bg-[#FFF0E5] border border-[#FF493D]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF493D] animate-pulse" />
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
              <div className="text-[11px] font-mono uppercase text-[#8F5462] font-semibold">
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
        </div>

        {/* Right Column: Academic Degree & Transparency Framework (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8F5462] flex items-center gap-2">
            <GraduationCap size={15} className="text-[#FF493D]" />
            <span>University Degree & Institutional Base</span>
          </div>

          {/* Academic Profile Card */}
          <div className="p-7 rounded-2xl bg-[#F8E7DB]/95 border border-[#E5CABE] space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#FF493D] font-semibold">Undergraduate Degree</span>
              <span className="text-[#8F5462]">Class of 2026</span>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-[#430D1C]">
                Bachelor of Technology (B.Tech)
              </h4>
              <div className="text-sm font-semibold text-[#6B2D3C] mt-0.5">
                Computer Science & Engineering
              </div>
              <div className="text-xs text-[#8F5462] font-mono mt-1">
                Mar Ivanios College (Autonomous), Thiruvananthapuram, Kerala
              </div>
            </div>

            <p className="text-xs text-[#6B2D3C] leading-relaxed font-light border-t border-[#E5CABE] pt-3">
              Rigorous curriculum covering data structures, object-oriented design, operating systems, relational database theory, network security foundations, and machine learning.
            </p>
          </div>

          {/* Category Separation & Transparency Card */}
          <div className="p-6 rounded-2xl bg-[#FFF0E5] border border-[#E5CABE] space-y-3">
            <div className="text-xs font-mono uppercase text-[#430D1C] font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FF493D]" />
              <span>Institutional Separation Standard</span>
            </div>

            <ul className="space-y-2 text-xs text-[#6B2D3C] font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#430D1C] mt-1.5 shrink-0" />
                <span><strong>Ongoing Training:</strong> FRCD programme at Tech By Heart is actively in progress.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#430D1C] mt-1.5 shrink-0" />
                <span><strong>Earned Certificates:</strong> Exactly 6 verified certificates with original PDFs viewable above.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#430D1C] mt-1.5 shrink-0" />
                <span><strong>Academic Research:</strong> MENTRA.OS final-year paper published in ICETAI&apos;26 proceedings.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
