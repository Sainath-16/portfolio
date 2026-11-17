"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { VERIFIED_CERTIFICATES, VerifiedCertificate } from "@/lib/portfolio-data";
import { useCardSpotlight, CardOverlays } from "@/components/CardMotion";

export function CertificatesGallery() {
  const [filter, setFilter] = useState<string>("All");
  const { handlePointerMove, handlePointerLeave } = useCardSpotlight();

  const categories = ["All", "Cybersecurity", "Artificial Intelligence", "Software Engineering", "IoT & Systems", "Data & Analytics"];

  const filteredCerts = filter === "All"
    ? VERIFIED_CERTIFICATES
    : VERIFIED_CERTIFICATES.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#E5CABE]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#8F5462] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D]" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#430D1C] tracking-tight">
            Earned Certifications
          </h2>
        </div>
        <p className="text-sm text-[#6B2D3C] max-w-md font-light leading-relaxed">
          Official certificates and verified training programmes completed through accredited institutions, IBM Skills Network, and technical workshops.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {categories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                isActive
                  ? "bg-[#430D1C] text-[#FFF0E5] font-semibold shadow-sm"
                  : "bg-[#F8E7DB] text-[#8F5462] hover:text-[#430D1C] hover:bg-[#F2DDCF] border border-[#E5CABE]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 6 Interactive Certificate Cards Grid */}
      <div className="motion-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredCerts.map((cert: VerifiedCertificate) => (
          <div
            key={cert.id}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="motion-card group rounded-2xl bg-[#F8E7DB]/90 border border-[#E5CABE] hover:border-[#FF493D] shadow-sm hover:shadow-[0_12px_36px_rgba(67,13,28,0.08)] transition-all flex flex-col justify-between overflow-hidden"
          >
            <CardOverlays />
            {/* Clickable High-Resolution Document Thumbnail */}
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[4/3] w-full overflow-hidden bg-white border-b border-[#E5CABE]"
              title={`Open ${cert.title} PDF in a new tab`}
            >
              <Image
                src={cert.thumbnailUrl}
                alt={cert.title}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              />

              {/* Hover Overlay with Native PDF Indicator */}
              <div className="absolute inset-0 bg-[#430D1C]/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-[#FFF0E5]">
                <div className="w-10 h-10 rounded-full bg-[#FF493D] flex items-center justify-center mb-2 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ArrowUpRight size={18} className="text-[#FFF0E5]" />
                </div>
                <span className="font-semibold text-xs">Open Original PDF</span>
                <span className="text-[10px] text-[#ECCDC1] font-mono mt-0.5">High-res browser viewer</span>
              </div>

              {/* Category & Badge Overlay */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#430D1C]/90 text-[#FFF0E5] backdrop-blur-xs">
                  {cert.category}
                </span>
              </div>

              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFF0E5]/90 border border-[#E5CABE] text-[#430D1C] font-semibold backdrop-blur-xs">
                  {cert.dateBadge}
                </span>
              </div>
            </a>

            {/* Certificate Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#FF493D] font-semibold flex items-center gap-1.5">
                  <Award size={13} />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="text-base font-semibold text-[#430D1C] leading-snug group-hover:text-[#FF493D] transition-colors">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cert.title}
                  </a>
                </h3>

                <p className="text-xs text-[#6B2D3C] font-light leading-relaxed">
                  {cert.description}
                </p>

                {cert.partnerInfo && (
                  <div className="text-[11px] text-[#8F5462] font-mono pt-1">
                    {cert.partnerInfo}
                  </div>
                )}
              </div>

              {/* New Tab PDF Action Button */}
              <div className="pt-3 border-t border-[#E5CABE] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8F5462]">
                  {cert.duration || cert.period}
                </span>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FF493D] hover:text-[#E8392D] transition-colors"
                >
                  <span>View PDF</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accuracy & Authenticity Colophon */}
      <div className="mt-12 p-4 rounded-xl bg-[#F8E7DB]/80 border border-[#E5CABE] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#8F5462] font-mono">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#FF493D]" />
          <span>All 6 certificates link directly to verified source documents in the public repository.</span>
        </div>
        <span className="text-[11px]">No unverified credentials displayed.</span>
      </div>
    </section>
  );
}
