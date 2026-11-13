import React from "react";
import { 
  Terminal, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <Terminal size={14} />
              <span>Career Trajectory & Validations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Certifications
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Practical engineering experience, enterprise technical internships, and verified credentials across cybersecurity, AI, and cloud data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline - 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Briefcase size={16} className="text-cyan-400" />
              <span>Technical Experience</span>
            </div>

            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] relative"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20">
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-slate-300 mb-4">
                  {exp.organization}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Workshops List - 5 Cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Award size={16} className="text-purple-400" />
              <span>Verified Certifications ({CERTIFICATIONS.length})</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.04]">
                      {cert.credentialBadge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-100 mb-1 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-cyan-400/90 font-mono mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
