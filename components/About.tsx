import React from "react";
import { 
  Terminal, 
  MapPin, 
  CheckCircle2, 
  Workflow 
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-cyan-400">
          <Terminal size={14} />
          <span>Profile & Architectural Philosophy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text - 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Engineering systems that balance mathematical rigor with production reliability.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I am a Computer Science undergraduate focused on the synthesis between <strong className="text-white">scalable web architecture</strong>, <strong className="text-white">predictive machine learning</strong>, and <strong className="text-white">offensive cybersecurity defense</strong>. Rather than treating security or intelligence as secondary features, I architect systems where security parameters and explainability are foundational constraints.
              </p>

              <p>
                Through projects like <span className="text-cyan-300 font-medium">MENTRA.OS</span>, I have engineered end-to-end cognitive telemetry pipelines incorporating Explainable AI (SHAP) to ensure machine learning decisions are interpretable. In <span className="text-emerald-300 font-medium">SurfaceCheck API</span>, I developed decoupled scanning microservices that audit network ports and HTTP defenses against OWASP standards. With <span className="text-amber-300 font-medium">KickBracket Pro</span>, I built real-time spectator-synchronized tournament infrastructure running multi-stage brackets.
              </p>

              <p className="text-slate-400 text-sm">
                Beyond pure software engineering, I actively organize digital esports tournaments and broadcast media, bringing real-world operations experience in high-concurrency event logistics, live moderation, and technical broadcasting.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Explainable & Auditable ML:</strong> Prioritizing model transparency and SHAP attribution over opaque black-box classifiers.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Security by Default:</strong> Enforcing strict session handling, defensive HTTP policies, and vulnerability surface auditing.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Decoupled Microservice Speed:</strong> Building asynchronous FastAPI backends with reactive Next.js frontends.
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Dossier / Quick Spec - 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5 pb-3 border-b border-white/[0.06] flex items-center justify-between">
                <span>Engineer Dossier</span>
                <span className="text-cyan-400">#001-DEV</span>
              </h3>

              <dl className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <dt className="text-slate-400">Current Role</dt>
                  <dd className="text-slate-200 text-right font-medium">Undergraduate / Developer</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <dt className="text-slate-400">Major Discipline</dt>
                  <dd className="text-slate-200 text-right font-medium">Computer Science & Engineering</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <dt className="text-slate-400">Base Location</dt>
                  <dd className="text-slate-200 text-right font-medium flex items-center gap-1">
                    <MapPin size={12} className="text-red-400" />
                    Thiruvananthapuram, Kerala
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <dt className="text-slate-400">Core Stack</dt>
                  <dd className="text-slate-200 text-right font-medium">Next.js · FastAPI · Python · TypeScript</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <dt className="text-slate-400">Security Credentials</dt>
                  <dd className="text-emerald-400 text-right font-medium">ICT Academy Certified (Ethical Hacking)</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-slate-400">Status</dt>
                  <dd className="text-emerald-400 text-right font-medium flex items-center gap-1.5 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active / Open to Opportunities
                  </dd>
                </div>
              </dl>
            </div>

            {/* Secondary Highlight Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2 text-slate-200 text-sm font-semibold">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Workflow size={15} />
                </div>
                <span>Engineering Focus</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proven track record converting complex domain requirements into structured software architectures — from stress telemetry indicators to broadcast-tier bracket software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
