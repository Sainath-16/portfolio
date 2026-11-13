"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "./BrandIcons";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
          ? "bg-[#0e1015]/85 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Brandmark */}
        <a
          href="#about"
          onClick={(e) => scrollTo(e, "#about")}
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-xs font-serif italic text-white group-hover:border-white/[0.25] transition-colors">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-white flex items-center gap-2">
              Sainath S
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </span>
            <span className="text-[11px] font-mono text-[#656c7a]">Developer</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-[#9da3af] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Direct Action Links */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Sainath-16"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#9da3af] hover:text-white hover:bg-white/[0.04] transition-colors"
            aria-label="GitHub profile"
          >
            <BrandGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/sainaths18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#9da3af] hover:text-white hover:bg-white/[0.04] transition-colors"
            aria-label="LinkedIn profile"
          >
            <BrandLinkedin size={17} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#0e1015] bg-[#f1f3f7] hover:bg-white transition-all shadow-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9da3af] hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1015]/98 border-b border-white/[0.08] px-6 py-6 mt-4">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-sm font-medium text-[#9da3af] hover:text-white py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Sainath-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da3af] hover:text-white"
                >
                  <BrandGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/sainaths18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da3af] hover:text-white"
                >
                  <BrandLinkedin size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="text-xs font-medium text-[#0e1015] bg-[#f1f3f7] px-3.5 py-1.5 rounded-full"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
