"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, CheckCircle2, FileText, Sparkles, GraduationCap } from "lucide-react";
import { MENTRA_RESEARCH } from "@/lib/portfolio-data";

export function ResearchSection() {
  return (
    <section id="research" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Research & Publications
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
          Academic paper authored and presented at an international artificial intelligence conference, combining cognitive telemetry with explainable machine learning.
        </p>
      </div>

      {/* Main Research Publication Showcase Card */}
      <div className="rounded-3xl bg-[#F8E7DB]/95 border border-[#E5CABE] p-8 sm:p-12 shadow-[0_12px_40px_rgba(67,13,28,0.05)] relative overflow-hidden">
        {/* Subtle decorative background light accent */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "#FF493D" }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Academic Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Conference Badge & Role */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#430D1C] text-[#FFF0E5] flex items-center gap-1.5 shadow-sm">
                <GraduationCap size={13} className="text-[#FF493D]" />
                <span>{MENTRA_RESEARCH.conferenceShort}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#FF493D] bg-[#FFF0E5] border border-[#FF493D]/30 font-medium">
                {MENTRA_RESEARCH.userRole}
              </span>
              <span className="text-xs font-mono text-[#8F5462]">
                ISBN: {MENTRA_RESEARCH.isbn}
              </span>
            </div>

            {/* Paper Title & Abstract */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#430D1C] tracking-tight leading-snug mb-3">
                {MENTRA_RESEARCH.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B2D3C] font-light leading-relaxed">
                {MENTRA_RESEARCH.shortDescription}
              </p>
            </div>

            {/* Publication Metadata Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FFF0E5] border border-[#E5CABE] text-xs">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8F5462]">Conference</span>
                <div className="font-semibold text-[#430D1C]">{MENTRA_RESEARCH.conference}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8F5462]">Conference Date</span>
                <div className="font-semibold text-[#430D1C]">{MENTRA_RESEARCH.conferenceDate}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8F5462]">Proceedings Publication</span>
                <div className="font-semibold text-[#430D1C]">{MENTRA_RESEARCH.publicationType} · ISBN {MENTRA_RESEARCH.isbn}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8F5462]">Academic Affiliation</span>
                <div className="font-semibold text-[#430D1C]">{MENTRA_RESEARCH.department}, Mar Ivanios College</div>
              </div>
            </div>

            {/* Authors Breakdown */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8F5462]">
                Paper Authors & Contributors
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {MENTRA_RESEARCH.authors.map((author) => (
                  <span
                    key={author.name}
                    className={`px-3 py-1.5 rounded-lg border font-mono ${
                      author.isUser
                        ? "bg-[#430D1C] text-[#FFF0E5] border-[#430D1C] font-semibold"
                        : "bg-[#FFF0E5] text-[#430D1C] border-[#E5CABE]"
                    }`}
                  >
                    {author.name}
                    {author.role && <span className="opacity-75 text-[11px] ml-1.5">({author.role})</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Highlights Area (Part 5) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8F5462] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#FF493D]" />
                <span>Technical & Architectural Highlights</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B2D3C]">
                {MENTRA_RESEARCH.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] flex items-center gap-2 leading-tight"
                  >
                    <CheckCircle2 size={13} className="text-[#FF493D] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experimental Metric Card */}
            <div className="p-4 rounded-2xl bg-[#FFF0E5] border border-[#E5CABE] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#8F5462] font-semibold">
                  Reported Experimental Model Accuracy
                </span>
                <span className="text-base font-bold font-mono text-[#FF493D]">
                  {MENTRA_RESEARCH.reportedMetrics.accuracy}
                </span>
              </div>
              <p className="text-[11px] text-[#8F5462] font-light leading-relaxed">
                {MENTRA_RESEARCH.reportedMetrics.context}
              </p>
            </div>

            {/* Primary Action Button — Read Original Research Paper PDF */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={MENTRA_RESEARCH.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_4px_20px_rgba(255,73,61,0.35)] hover:shadow-[0_6px_24px_rgba(255,73,61,0.45)] active:scale-95"
              >
                <FileText size={16} />
                <span>Read Research Paper ↗</span>
                <ArrowUpRight size={14} />
              </a>

              <span className="text-xs font-mono text-[#8F5462]">
                Opens original 7-page conference PDF in a new tab
              </span>
            </div>
          </div>

          {/* Right Column: Visual Document Preview (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8F5462] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen size={13} className="text-[#FF493D]" />
                <span>Proceedings Document Preview</span>
              </span>
              <span className="text-[11px] text-[#FF493D] font-semibold">7 Pages · PDF</span>
            </div>

            {/* Clickable High-Resolution Document Preview Container */}
            <a
              href={MENTRA_RESEARCH.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden border border-[#E5CABE] bg-[#FFF0E5] shadow-md transition-all hover:border-[#FF493D] hover:shadow-xl"
              title="Click to open full research paper in new tab"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                <Image
                  src={MENTRA_RESEARCH.pageThumbnail}
                  alt="MENTRA.OS Research Paper First Page"
                  fill
                  className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#430D1C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-[#FFF0E5]">
                  <div className="w-12 h-12 rounded-full bg-[#FF493D] flex items-center justify-center mb-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight size={22} className="text-[#FFF0E5]" />
                  </div>
                  <span className="font-semibold text-sm">Open Native PDF Viewer</span>
                  <span className="text-xs text-[#ECCDC1] mt-1 font-mono">Preserves full resolution & zoom</span>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="p-4 bg-[#FFF0E5] border-t border-[#E5CABE] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#430D1C]">MENTRA.OS (ICETAI&apos;26)</div>
                  <div className="text-[11px] text-[#8F5462] font-mono">ISBN: 978-81-987260-7-0</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#FF493D] group-hover:underline">
                  <span>View PDF</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>

            {/* Conference Cover Thumbnail Inset */}
            <div className="p-3.5 rounded-xl bg-[#FFF0E5] border border-[#E5CABE] flex items-center gap-3">
              <div className="relative w-12 h-16 rounded overflow-hidden border border-[#E5CABE] shrink-0 bg-white">
                <Image
                  src={MENTRA_RESEARCH.coverThumbnail}
                  alt="ICETAI'26 Conference Proceedings Cover"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[#430D1C]">ICETAI&apos;26 Conference Proceedings</div>
                <div className="text-[11px] text-[#8F5462] leading-relaxed">
                  Department of Computer Applications, NICHE Kanyakumari with ICT Academy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
