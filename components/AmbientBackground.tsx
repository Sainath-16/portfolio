"use client";

import React, { useEffect, useState } from "react";

const SECTIONS = [
  "overview",
  "cybersecurity",
  "research",
  "certifications",
  "training",
  "projects",
  "skills",
  "contact",
] as const;

type SectionId = typeof SECTIONS[number];

/**
 * Subtle section-specific gradient tints derived from approved NEXA palette:
 * - Porcelain (#FFF0E5, #F8E7DB, #F2DDCF)
 * - Black Cherry (#430D1C, #2A0610, #561626)
 * - Vermillion (#FF493D)
 * All opacity values are kept between 0.02 - 0.085 to preserve full WCAG AA contrast.
 */
const SECTION_GRADIENTS: Record<SectionId, string> = {
  overview:
    "radial-gradient(ellipse 85% 65% at 50% 25%, rgba(255, 73, 61, 0.04) 0%, rgba(248, 231, 219, 0.02) 50%, transparent 80%)",
  cybersecurity:
    "radial-gradient(ellipse 85% 65% at 65% 35%, rgba(67, 13, 28, 0.08) 0%, rgba(42, 6, 16, 0.03) 50%, transparent 80%)",
  research:
    "radial-gradient(ellipse 80% 60% at 35% 45%, rgba(143, 84, 98, 0.05) 0%, rgba(242, 221, 207, 0.02) 50%, transparent 80%)",
  certifications:
    "radial-gradient(ellipse 85% 60% at 70% 55%, rgba(255, 73, 61, 0.035) 0%, rgba(229, 202, 190, 0.02) 50%, transparent 80%)",
  training:
    "radial-gradient(ellipse 80% 60% at 40% 50%, rgba(107, 45, 60, 0.04) 0%, rgba(248, 231, 219, 0.02) 50%, transparent 80%)",
  projects:
    "radial-gradient(ellipse 85% 65% at 50% 40%, rgba(255, 73, 61, 0.045) 0%, rgba(173, 120, 133, 0.02) 50%, transparent 80%)",
  skills:
    "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(86, 22, 38, 0.04) 0%, rgba(255, 240, 229, 0.02) 50%, transparent 80%)",
  contact:
    "radial-gradient(ellipse 90% 70% at 50% 75%, rgba(67, 13, 28, 0.08) 0%, rgba(30, 4, 11, 0.03) 50%, transparent 80%)",
};

/**
 * Ambient background cross-fading layer:
 * - Positioned fixed at inset: 0, z-index: -1, pointer-events: none.
 * - Stacks one low-contrast gradient per section.
 * - Driven by IntersectionObserver (rootMargin: -40% 0px -55% 0px).
 * - Cross-fades strictly through opacity over 900ms with --ease-soft.
 */
export function AmbientBackground() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY < 80) {
            setActiveSection("overview");
          } else if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50
          ) {
            setActiveSection("contact");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="ambient-bg-layer fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {SECTIONS.map((sec) => (
        <div
          key={sec}
          className={`ambient-gradient-layer absolute inset-0 ${
            activeSection === sec ? "ambient-layer-active" : "ambient-layer-inactive"
          }`}
          style={{
            background: SECTION_GRADIENTS[sec],
          }}
        />
      ))}
    </div>
  );
}
