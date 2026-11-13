import React from "react";
import { 
  Terminal, 
  Shield, 
  Brain, 
  Code2, 
  Cloud, 
  Tv 
} from "lucide-react";
import { FOCUS_AREAS } from "@/lib/portfolio-data";

const FOCUS_ICONS: Record<string, React.ReactNode> = {
  "Cybersecurity & Attack Surface Defense": <Shield size={22} className="text-emerald-400" />,
  "Artificial Intelligence & Machine Learning": <Brain size={22} className="text-purple-400" />,
  "Full-Stack System Engineering": <Code2 size={22} className="text-cyan-400" />,
  "Cloud Infrastructure & Real-Time Sync": <Cloud size={22} className="text-blue-400" />
};

export function FocusAreas() {
  return (
    <section id="focus" className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <Terminal size={14} />
              <span>Specializations & Future Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Areas of Focus & Research
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Key domains where I apply active research, software prototyping, and technical execution.
          </p>
        </div>

        {/* 2x2 Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FOCUS_AREAS.map((area, index) => (
            <div
              key={index}
              className="group p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    {FOCUS_ICONS[area.title]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {area.eyebrow}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Key points */}
              <div className="pt-4 border-t border-white/[0.04] space-y-1.5">
                {area.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Domain Interest: Esports Production & Community */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.01] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Tv size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Esports Broadcast Infrastructure & Media Creation
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
                Active organizer and technical producer for collegiate esports tournaments (e.g., IVOKE Radiant Valorant Tournament), managing live streaming graphics, broadcast overlays, and digital branding.
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06] shrink-0">
            Community Ops
          </span>
        </div>
      </div>
    </section>
  );
}
