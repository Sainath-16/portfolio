"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Overview", href: "#overview" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Focus", href: "#focus" },
  { name: "Contact", href: "#contact" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["overview", "skills", "projects", "experience", "focus", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#overview"
          onClick={(e) => handleNavClick(e, "#overview")}
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          aria-label="Sainath S Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all">
            <Terminal size={17} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight flex items-center gap-2">
              Sainath S
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
              Developer & Researcher
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.06]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-slate-100 bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action icons / CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.2] transition-all"
            aria-label="GitHub Profile"
          >
            <BrandGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <BrandLinkedin size={17} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-900 bg-slate-100 hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle mobile navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-slate-950/95 backdrop-blur-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.08] text-cyan-400 font-semibold"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Sainath-16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white"
                aria-label="GitHub"
              >
                <BrandGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sainaths18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <BrandLinkedin size={18} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-slate-100"
            >
              <span>Contact</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
