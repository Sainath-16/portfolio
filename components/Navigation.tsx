"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Training", href: "#training" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["overview", "cybersecurity", "research", "certifications", "training", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveId(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPos - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF0E5]/90 backdrop-blur-md border-b border-[#E5CABE] shadow-[0_4px_24px_rgba(67,13,28,0.06)] py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#overview"
          onClick={(e) => handleNavClick(e, "#overview")}
          className="group flex items-center gap-3 text-[#430D1C] transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-[#F8E7DB] border border-[#E5CABE] flex items-center justify-center text-[#430D1C] font-serif text-sm font-semibold group-hover:border-[#FF493D] transition-colors">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#430D1C] flex items-center gap-2 font-sans">
              Sainath S
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF493D] animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-[#8F5462]">
              Cybersecurity & Software
            </span>
          </div>
        </a>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F8E7DB]/90 px-3 py-1.5 rounded-full border border-[#E5CABE]">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? "bg-[#430D1C] text-[#FFF0E5] shadow-sm"
                    : "text-[#6B2D3C] hover:text-[#430D1C] hover:bg-[#F2DDCF]/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Social Icons & Primary Vermillion CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-[#6B2D3C] hover:text-[#430D1C] hover:bg-[#F8E7DB] transition-colors"
            aria-label="GitHub Profile"
          >
            <BrandGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-[#6B2D3C] hover:text-[#430D1C] hover:bg-[#F8E7DB] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <BrandLinkedin size={17} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D] hover:bg-[#E8392D] transition-all shadow-[0_2px_12px_rgba(255,73,61,0.25)] hover:shadow-[0_4px_16px_rgba(255,73,61,0.35)] active:scale-95"
          >
            <span>Write Me</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#430D1C] hover:text-[#FF493D] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFF0E5] border-b border-[#E5CABE] px-6 py-6 mt-3 shadow-lg">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#430D1C] text-[#FFF0E5]"
                      : "text-[#6B2D3C] hover:bg-[#F8E7DB]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-[#E5CABE] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sainath-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#6B2D3C] hover:text-[#430D1C]"
                  aria-label="GitHub Profile"
                >
                  <BrandGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/sainaths18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#6B2D3C] hover:text-[#430D1C]"
                  aria-label="LinkedIn Profile"
                >
                  <BrandLinkedin size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#FFF0E5] bg-[#FF493D]"
              >
                <span>Write Me</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
