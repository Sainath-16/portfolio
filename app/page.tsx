"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Code2,
  Shield,
  Cloud,
  Brain,
  Terminal,
  Database,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Award,
  Briefcase,
  Send,
  Layers,
} from "lucide-react";

/* ─── Custom SVG Brand Icons ─── */
const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Animation Variants ─── */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/60 backdrop-blur-2xl border-b border-white/[0.04] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white group">
            S<span className="text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-slate-400 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300 hover:border-cyan-400/40 hover:text-white transition-all duration-300"
          >
            <Send size={14} />
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center gap-6"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={fadeInUp}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Section Badge ─── */
function SectionBadge({ text }: { text: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex justify-center mb-4">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Sparkles size={12} />
        {text}
      </span>
    </motion.div>
  );
}

/* ─── Section Heading ─── */
function SectionHeading({ title, className = "" }: { title: string; className?: string }) {
  return (
    <motion.h3
      variants={fadeInUp}
      className={`text-3xl md:text-4xl font-bold tracking-tight text-white ${className}`}
    >
      {title}
    </motion.h3>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PORTFOLIO
   ═══════════════════════════════════════════════════ */
export default function Portfolio() {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Languages",
      color: "text-cyan-400",
      glowClass: "glow-cyan",
      items: ["Python", "Java", "JavaScript / TypeScript", "SQL"],
    },
    {
      icon: <Database size={24} />,
      title: "Frameworks & Tools",
      color: "text-violet-400",
      glowClass: "glow-violet",
      items: ["Next.js & React", "FastAPI", "Scikit-learn", "SQLite"],
    },
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity",
      color: "text-emerald-400",
      glowClass: "glow-emerald",
      items: ["Ethical Hacking Fundamentals", "Network Security Basics", "Vulnerability Assessment"],
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & Auth",
      color: "text-blue-400",
      glowClass: "glow-blue",
      items: ["Stripe & ngrok", "Clerk Authentication", "Git & GitHub", "Power BI"],
    },
  ];

  const certifications = [
    "Add-on Program on IoT – ICT Academy of Kerala",
    "Data Visualization with Power BI – ICT Academy of Kerala",
    "Unlocking the Power of LLMs Workshop – IBM",
    "AI for Students: Build Your Own Generative AI Model",
    "Cybersecurity & Ethical Hacking Training – ICT Academy",
  ];

  const areas = [
    { title: "AI & Machine Learning", icon: <Brain size={26} />, color: "text-violet-400", border: "group-hover:border-violet-500/30" },
    { title: "Cybersecurity", icon: <Shield size={26} />, color: "text-emerald-400", border: "group-hover:border-emerald-500/30" },
    { title: "Cloud Computing", icon: <Cloud size={26} />, color: "text-blue-400", border: "group-hover:border-blue-500/30" },
    { title: "Full-Stack Dev", icon: <Code2 size={26} />, color: "text-cyan-400", border: "group-hover:border-cyan-500/30" },
  ];

  return (
    <>
      <Navbar />

      {/* ───────── HERO SECTION ───────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 hero-grid hero-grid-fade" />

        {/* Gradient orbs */}
        <div className="absolute top-[15%] -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.12] blur-[140px] animate-float" />
        <div className="absolute bottom-[15%] -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/[0.12] blur-[140px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/[0.06] blur-[160px] animate-pulse-soft" />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Sainath S</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 mb-4"
          >
            Computer Science Undergraduate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 mb-10 leading-relaxed"
          >
            Building intelligent, scalable, and secure software solutions with AI, Machine Learning, and modern cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              View Projects
              <ArrowUpRight size={16} className="inline ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/[0.1] text-slate-300 font-semibold hover:bg-white/[0.05] hover:border-white/[0.2] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/[0.15] flex justify-center pt-2">
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 10] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
              className="w-1 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── ABOUT SECTION ───────── */}
      <section id="about" className="py-28 px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <SectionBadge text="About Me" />
          <SectionHeading title="Professional Summary" className="text-center mb-10" />

          <motion.div variants={fadeInUp}>
            <div className="glass-card glow-cyan rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Terminal size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Building the Future with Code</h4>
                  <p className="text-sm text-slate-500">CS Undergrad · AI Enthusiast · Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Computer Science undergraduate with hands-on experience building AI-powered and full-stack web applications using Python, FastAPI, Next.js, and Scikit-learn. Strong interest in Artificial Intelligence, Machine Learning, Cybersecurity, and Cloud Computing, with practical exposure through projects, workshops, and technical training programs. Passionate about developing secure, scalable, and intelligent software solutions.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.05]">
                {[
                  { value: "4+", label: "Projects Built" },
                  { value: "5+", label: "Certifications" },
                  { value: "4+", label: "Tech Domains" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── SKILLS SECTION ───────── */}
      <section id="skills" className="py-28 px-6 relative">
        {/* Subtle bg accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative max-w-6xl mx-auto"
        >
          <SectionBadge text="Expertise" />
          <SectionHeading title="Technical Arsenal" className="text-center mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={fadeInUp}
                className={`glass-card ${skill.glowClass} rounded-2xl p-7 group cursor-default`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-slate-800/60 ${skill.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">{skill.title}</h4>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                    >
                      <span className={`w-1 h-1 rounded-full ${skill.color.replace("text-", "bg-")} opacity-60`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── PROJECTS SECTION ───────── */}
      <section id="projects" className="py-28 px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <SectionBadge text="Work" />
          <SectionHeading title="Featured Projects" className="text-center mb-14" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Featured: MENTRA.OS */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <div className="gradient-border h-full">
                <div className="gradient-border-inner p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <Brain size={18} className="text-cyan-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">MENTRA.OS</h4>
                  <p className="text-sm font-medium text-cyan-400/80 mb-6">AI-Based Cognitive Telemetry Platform</p>

                  <ul className="space-y-3 text-slate-400 mb-8 text-sm leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▸</span>
                      Built a full-stack platform to monitor student stress using psychological and physiological data.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▸</span>
                      Developed scalable architecture using Next.js and FastAPI with secure JWT authentication.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▸</span>
                      Trained a Random Forest model (Scikit-learn) achieving 88.6% prediction accuracy.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▸</span>
                      Integrated SHAP-based Explainable AI to provide transparent insights, featuring an AI-analysed Autonomic Stress Indicator with locked background-calculated input fields.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▸</span>
                      Implemented SQLite-based longitudinal tracking and automated PDF report generation.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "FastAPI", "Python", "Scikit-learn", "SQLite", "SHAP"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side projects column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* SHOWMAZE */}
              <motion.div variants={fadeInUp} className="glass-card glow-violet rounded-2xl p-7 group flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Layers size={18} className="text-violet-400" />
                  <h4 className="text-xl font-bold text-white">SHOWMAZE</h4>
                </div>
                <p className="text-sm font-medium text-violet-400/80 mb-5">Event Management Platform</p>
                <ul className="space-y-2.5 text-slate-400 text-sm mb-6">
                  <li className="flex gap-2.5">
                    <span className="text-violet-400/60 mt-0.5 shrink-0">▸</span>
                    Developed scalable event discovery and registration platform.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-violet-400/60 mt-0.5 shrink-0">▸</span>
                    Implemented secure authentication using Clerk.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-violet-400/60 mt-0.5 shrink-0">▸</span>
                    Integrated Stripe payment gateway with webhook support, tested via ngrok.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Clerk", "Stripe", "ngrok"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:border-violet-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* AI Quiz Generator */}
              <motion.div variants={fadeInUp} className="glass-card glow-emerald rounded-2xl p-7 group flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Sparkles size={18} className="text-emerald-400" />
                  <h4 className="text-xl font-bold text-white">AI Quiz Generator</h4>
                </div>
                <p className="text-sm font-medium text-emerald-400/80 mb-5">Intelligent Assessment Tool</p>
                <ul className="space-y-2.5 text-slate-400 text-sm mb-6">
                  <li className="flex gap-2.5">
                    <span className="text-emerald-400/60 mt-0.5 shrink-0">▸</span>
                    Java-based application generating dynamic quizzes based on selected topics.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-emerald-400/60 mt-0.5 shrink-0">▸</span>
                    Designed automated question generation and answer validation logic.
                  </li>
                </ul>
                <span className="px-2.5 py-1 text-xs rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:border-emerald-500/30 transition-colors duration-300">
                  Java
                </span>
              </motion.div>
            </div>

            {/* Featured: SurfaceCheck */}
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <div className="gradient-border h-full">
                <div className="gradient-border-inner p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <Shield size={18} className="text-emerald-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">SurfaceCheck API</h4>
                  <p className="text-sm font-medium text-emerald-400/80 mb-6">Automated Vulnerability Scanning Engine</p>

                  <ul className="space-y-3 text-slate-400 mb-8 text-sm leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-emerald-400/60 mt-1 shrink-0">▸</span>
                      Built a decoupled security tool to automate the detection of exposed network ports and missing HTTP security headers.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400/60 mt-1 shrink-0">▸</span>
                      Developed a high-performance backend using FastAPI and Python, integrating the Nmap system tool for active infrastructure scanning.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400/60 mt-1 shrink-0">▸</span>
                      Created a responsive Next.js frontend dashboard to visualize security findings and provide actionable remediation steps based on severity.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400/60 mt-1 shrink-0">▸</span>
                      Implemented automated PDF security report generation for SecOps teams using the fpdf2 library.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Next.js", "Python", "Nmap", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-emerald-500/30 hover:text-emerald-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── EXPERIENCE & CERTIFICATIONS ───────── */}
      <section id="experience" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Experience */}
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="relative pl-8 border-l-2 border-slate-800/80">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]" />
                </div>

                <div className="glass-card glow-cyan rounded-2xl p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                    2025
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Cybersecurity & Ethical Hacking Intern
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">ICT Academy of Kerala, Technopark</p>
                  <ul className="space-y-2.5 text-sm text-slate-400">
                    <li className="flex gap-2.5">
                      <span className="text-cyan-400/50 mt-0.5 shrink-0">▸</span>
                      Learned fundamentals of cybersecurity, ethical hacking, and vulnerability assessment.
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-cyan-400/50 mt-0.5 shrink-0">▸</span>
                      Performed hands-on exercises involving penetration testing concepts.
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-cyan-400/50 mt-0.5 shrink-0">▸</span>
                      Gained exposure to web application and system security practices.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </motion.div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card glow-violet rounded-xl p-4 flex items-center gap-4 group cursor-default"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-xs font-bold group-hover:bg-violet-500/20 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── AREAS OF FOCUS ───────── */}
      <section className="py-28 px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <SectionBadge text="Focus" />
          <SectionHeading title="Areas of Interest" className="text-center mb-14" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={i}
                variants={fadeInScale}
                className={`group glass-card ${area.border} rounded-2xl p-8 flex flex-col items-center text-center cursor-default`}
              >
                <div
                  className={`mb-5 p-4 rounded-2xl bg-slate-800/40 ${area.color} group-hover:scale-110 group-hover:bg-slate-800/70 transition-all duration-400`}
                >
                  {area.icon}
                </div>
                <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                  {area.title}
                </h4>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="mt-10 text-center text-sm text-slate-600">
            Also actively involved in esports content creation and digital branding
            <span className="text-slate-500"> (e.g., IVOKE Radiant Valorant Tournament)</span>.
          </motion.p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* ───────── CONTACT SECTION ───────── */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/[0.05] blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/[0.05] blur-[120px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto text-center"
        >
          <SectionBadge text="Contact" />

          <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Together</span>
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Currently open to new opportunities, collaborations, and discussions around AI, security, and full-stack development.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:sainaths2005@gmail.com"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full glass-card glow-cyan hover:border-cyan-500/30 transition-all duration-300"
            >
              <Mail size={16} className="text-cyan-400" />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                sainaths2005@gmail.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/sainaths18"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full glass-card glow-blue hover:border-blue-500/30 transition-all duration-300"
            >
              <Linkedin size={16} className="text-blue-400" />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                LinkedIn
              </span>
              <ArrowUpRight size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com/Sainath-16"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full glass-card hover:border-white/[0.15] transition-all duration-300"
            >
              <Github size={16} className="text-slate-300" />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                GitHub
              </span>
              <ArrowUpRight size={12} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} className="text-slate-600" />
            <span>Thiruvananthapuram, Kerala</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="py-8 border-t border-white/[0.04] bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Sainath S. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Sainath-16" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white transition-colors duration-300">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/sainaths18" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white transition-colors duration-300">
              <Linkedin size={16} />
            </a>
            <a href="mailto:sainaths2005@gmail.com" className="text-slate-600 hover:text-white transition-colors duration-300">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}