export interface VisualProps {
  color: string;
}

export function ProjectVisualMockup({ type, color }: { type: string; color: string }) {
  if (type === "dashboard") {
    // MENTRA.OS - Telemetry dashboard preview
    return (
      <div className="w-full h-full bg-[#11141c] border border-white/[0.08] rounded-xl overflow-hidden p-5 flex flex-col justify-between select-none font-mono">
        {/* Browser / Window Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-[#656c7a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
            <span className="ml-2 text-[#9da3af] text-[11px]">mentra.telemetry.local</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#3b82f6]">SHAP Engine Active</span>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="text-[10px] text-[#9da3af] uppercase">Autonomic Index</div>
            <div className="text-xl font-sans font-bold text-white mt-1">72.4</div>
            <div className="text-[10px] text-[#10b981] mt-0.5">Normal baseline</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="text-[10px] text-[#9da3af] uppercase">SHAP Top Weight</div>
            <div className="text-xl font-sans font-bold text-[#60a5fa] mt-1">+0.38</div>
            <div className="text-[10px] text-[#9da3af] mt-0.5">Sleep duration</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="text-[10px] text-[#9da3af] uppercase">Classifier</div>
            <div className="text-xl font-sans font-bold text-white mt-1">Random Forest</div>
            <div className="text-[10px] text-[#d97706] mt-0.5">Scikit-learn model</div>
          </div>
        </div>

        {/* Simulated Waveform & SHAP bars */}
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-2">
          <div className="flex justify-between text-[11px] text-[#9da3af]">
            <span>Stress Factor Attribution (SHAP Values)</span>
            <span className="text-[#60a5fa]">Cross-Validated</span>
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[10px] text-[#656c7a] mb-1">
                <span>Physiological Heart Rate Variability</span>
                <span>+0.34</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-[#3b82f6] rounded-full" style={{ width: "68%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-[#656c7a] mb-1">
                <span>Self-Reported Academic Workload</span>
                <span>+0.28</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-[#818cf8] rounded-full" style={{ width: "54%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#656c7a] flex items-center justify-between border-t border-white/[0.04]">
          <span>FastAPI + SQLite telemetry stream</span>
          <span>PDF Report Compiled</span>
        </div>
      </div>
    );
  }

  if (type === "bracket") {
    // KickBracket Pro - Bracket UI preview
    return (
      <div className="w-full h-full bg-[#11141c] border border-white/[0.08] rounded-xl overflow-hidden p-5 flex flex-col justify-between select-none font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-[#656c7a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
            <span className="ml-2 text-[#9da3af] text-[11px]">kickbracket.app/live</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#d97706] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
            Live Sync (3s)
          </span>
        </div>

        {/* Bracket Match Diagram */}
        <div className="grid grid-cols-2 gap-4 my-auto py-2">
          {/* Semi-Finals Column */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase text-[#656c7a] tracking-wider">Semi-Final Match 01</div>
            <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between text-xs text-white">
                <span className="font-sans font-medium">Phoenix FC</span>
                <span className="text-[#d97706] font-bold">3</span>
              </div>
              <div className="flex justify-between text-xs text-[#9da3af]">
                <span className="font-sans">Stallions XI</span>
                <span className="text-[#656c7a]">1</span>
              </div>
            </div>

            <div className="text-[10px] uppercase text-[#656c7a] tracking-wider">Semi-Final Match 02</div>
            <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between text-xs text-white">
                <span className="font-sans font-medium">Apex City</span>
                <span className="text-[#d97706] font-bold">2</span>
              </div>
              <div className="flex justify-between text-xs text-[#9da3af]">
                <span className="font-sans">Vanguard Club</span>
                <span className="text-[#656c7a]">0</span>
              </div>
            </div>
          </div>

          {/* Finals Column */}
          <div className="flex flex-col justify-center">
            <div className="text-[10px] uppercase text-[#d97706] tracking-wider mb-2">Grand Championship</div>
            <div className="p-3.5 rounded bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-[#d97706]/40 space-y-2 shadow-lg">
              <div className="flex justify-between text-xs text-white">
                <span className="font-sans font-semibold">Phoenix FC</span>
                <span className="text-white font-bold bg-[#d97706] px-1.5 py-0.2 rounded text-[11px]">1</span>
              </div>
              <div className="flex justify-between text-xs text-[#9da3af]">
                <span className="font-sans">Apex City</span>
                <span className="text-white font-bold bg-white/[0.1] px-1.5 py-0.2 rounded text-[11px]">1</span>
              </div>
              <div className="pt-1.5 border-t border-white/[0.06] text-[10px] text-[#f59e0b] text-center">
                74&apos; In Progress · Live Spectator Link
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#656c7a] flex items-center justify-between border-t border-white/[0.04]">
          <span>6 Tournament Formats Supported</span>
          <span>Google Auth + Organizer Workspace</span>
        </div>
      </div>
    );
  }

  if (type === "security") {
    // SurfaceCheck API - Terminal and scanner preview
    return (
      <div className="w-full h-full bg-[#11141c] border border-white/[0.08] rounded-xl overflow-hidden p-5 flex flex-col justify-between select-none font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-[#656c7a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
            <span className="ml-2 text-[#9da3af] text-[11px]">surfacecheck-cli/v1</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#10b981]">OWASP Baseline Audit</span>
        </div>

        <div className="p-3.5 rounded bg-[#090b0e] border border-white/[0.04] my-3 space-y-2 text-xs">
          <div className="text-[#9da3af]">
            <span className="text-[#10b981]">$</span> surfacecheck scan --target target-host.org
          </div>
          <div className="text-[#656c7a] text-[11px] leading-relaxed">
            [+] Invoking sandboxed Nmap scanner...<br />
            [+] Port 80/tcp: HTTP (Redirecting to HTTPS)<br />
            [+] Port 443/tcp: HTTPS (TLS 1.3 Active)<br />
            <span className="text-[#f59e0b]">[-] Port 8080/tcp: HTTP-Proxy (Exposed Debug Endpoint)</span>
          </div>
          <div className="pt-2 border-t border-white/[0.06] space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-[#9da3af]">Content-Security-Policy</span>
              <span className="text-[#10b981]">Valid</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9da3af]">Strict-Transport-Security</span>
              <span className="text-[#10b981]">Valid (max-age=31536000)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9da3af]">X-Frame-Options</span>
              <span className="text-[#ef4444]">Missing (Clickjacking risk)</span>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#656c7a] flex items-center justify-between border-t border-white/[0.04]">
          <span>FastAPI sandboxed worker</span>
          <span>Executive PDF ready</span>
        </div>
      </div>
    );
  }

  // Generic fallback preview (SHOWMAZE / AI Quiz Generator)
  return (
    <div className="w-full h-full bg-[#11141c] border border-white/[0.08] rounded-xl overflow-hidden p-5 flex flex-col justify-between select-none font-mono">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-[#656c7a]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
          <span className="ml-2 text-[#9da3af] text-[11px]">application.pipeline</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider" style={{ color }}>Verified Architecture</span>
      </div>

      <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] my-auto space-y-3">
        <div className="flex items-center justify-between text-xs text-white">
          <span>Production Endpoints</span>
          <span className="text-[#10b981]">Active</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "82%", backgroundColor: color }} />
        </div>
        <div className="text-[11px] text-[#9da3af] leading-relaxed">
          Decoupled backend logic handling verified transactions, data validation, and clean event delivery across system boundaries.
        </div>
      </div>

      <div className="pt-2 text-[10px] text-[#656c7a] flex items-center justify-between border-t border-white/[0.04]">
        <span>Git Verified</span>
        <span>Open Source</span>
      </div>
    </div>
  );
}
