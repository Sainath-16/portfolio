import React from "react";
import { EXPERIENCE, CERTIFICATIONS } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#656c7a] mb-2">
            Background & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Experience & Credentials
          </h2>
        </div>
        <p className="text-sm text-[#9da3af] max-w-md font-light">
          Formal internship training and technical programs in cybersecurity, LLMs, and data visualization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Work Experience Timeline */}
        <div className="lg:col-span-7 space-y-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#656c7a]">
            Practical Experience
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#14171f]/80 border border-white/[0.08] space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-[#3b82f6]">{item.period}</span>
                  <span className="text-[#656c7a]">{item.location}</span>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">{item.role}</h3>
                  <div className="text-sm text-[#9da3af]">{item.organization}</div>
                </div>

                <p className="text-xs text-[#9da3af] leading-relaxed">
                  {item.overview}
                </p>

                <ul className="space-y-2 pt-2 border-t border-white/[0.04] text-xs text-[#9da3af]">
                  {item.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#10b981] mt-2 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#656c7a]">
            Verified Certifications
          </div>

          <div className="space-y-3">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-medium text-white leading-snug">
                    {cert.title}
                  </div>
                  <div className="text-[11px] text-[#656c7a] mt-0.5">
                    {cert.issuer}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#9da3af]">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
