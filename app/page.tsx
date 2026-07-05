"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Shield, 
  Cloud, 
  Brain, 
  ChevronDown,
  Terminal,
  Database
} from "lucide-react";

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

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Subtle animated background gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Sainath S</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-slate-400 mb-8"
          >
            Computer Science Undergraduate | AI & Full-Stack Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed"
          >
            Passionate about building intelligent, scalable, and secure software solutions using AI, Machine Learning, Full-Stack Development, and modern cloud technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-800 font-semibold hover:scale-105 transition-transform duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 relative">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-cyan-400"/> Professional Summary
          </h3>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-500">
            <p className="text-slate-300 leading-relaxed text-lg">
              Computer Science undergraduate with hands-on experience building AI-powered and full-stack web applications using Python, FastAPI, Next.js, and Scikit-learn. Strong interest in Artificial Intelligence, Machine Learning, Cybersecurity, and Cloud Computing, with practical exposure through projects, workshops, and technical training programs. Passionate about developing secure, scalable, and intelligent software solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-24 px-6 bg-slate-900/50">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Skill Card 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
              <Code2 className="mb-4 text-cyan-400" size={28} />
              <h4 className="text-xl font-semibold mb-4">Languages</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript / TypeScript</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
              <Database className="mb-4 text-purple-400" size={28} />
              <h4 className="text-xl font-semibold mb-4">Frameworks & Tools</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Next.js & React</li>
                <li>FastAPI</li>
                <li>Scikit-learn</li>
                <li>SQLite</li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
              <Shield className="mb-4 text-emerald-400" size={28} />
              <h4 className="text-xl font-semibold mb-4">Cybersecurity</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Ethical Hacking Fundamentals</li>
                <li>Network Security Basics</li>
                <li>Vulnerability Assessment</li>
              </ul>
            </div>

            {/* Skill Card 4 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
              <Cloud className="mb-4 text-blue-400" size={28} />
              <h4 className="text-xl font-semibold mb-4">Cloud & Auth</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Stripe & ngrok</li>
                <li>Clerk Authentication</li>
                <li>Git & GitHub</li>
                <li>Power BI</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 relative">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-8">
              {/* MENTRA.OS */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 overflow-hidden hover:from-cyan-500/40 hover:to-purple-600/40 transition-all duration-500">
                <div className="h-full p-8 rounded-xl bg-slate-950 backdrop-blur-xl">
                  <h4 className="text-2xl font-bold mb-2">MENTRA.OS</h4>
                  <p className="text-cyan-400 text-sm font-medium mb-6">AI-Based Cognitive Telemetry Platform</p>
                  <ul className="space-y-3 text-slate-400 mb-8 text-sm">
                    <li>• Built a full-stack platform to monitor student stress using psychological and physiological data.</li>
                    <li>• Developed scalable architecture using Next.js and FastAPI with secure JWT authentication.</li>
                    <li>• Trained a Random Forest model (Scikit-learn) achieving 88.6% prediction accuracy.</li>
                    <li>• Integrated SHAP-based Explainable AI to provide transparent insights, featuring an AI-analysed Autonomic Stress Indicator with locked background-calculated input fields to ensure strict data integrity.</li>
                    <li>• Implemented SQLite-based longitudinal tracking and automated PDF report generation.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "FastAPI", "Python", "Scikit-learn", "SQLite", "SHAP"].map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Sainath-16/mentra.os" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                    <Github size={14} /> View on GitHub
                  </a>
                </div>
              </div>

              {/* SurfaceCheck API */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                <h4 className="text-xl font-bold mb-2">SurfaceCheck API</h4>
                <p className="text-emerald-400 text-sm font-medium mb-4">Automated Vulnerability Scanning Engine</p>
                <ul className="space-y-2 text-slate-400 mb-6 text-sm">
                  <li>• Built a decoupled security tool to automate the detection of exposed network ports and missing HTTP security headers.</li>
                  <li>• Developed a high-performance backend using FastAPI and Python, integrating the Nmap system tool.</li>
                  <li>• Created a responsive Next.js frontend dashboard to visualize security findings and provide actionable remediation steps based on severity.</li>
                  <li>• Implemented automated PDF security report generation for SecOps teams.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["FastAPI", "Next.js", "Python", "Nmap", "Tailwind CSS"].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/Sainath-16/SurfaceCheck" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-emerald-400 transition-colors duration-300">
                  <Github size={14} /> View on GitHub
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* KickBracket Pro */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-orange-500/20 to-rose-600/20 overflow-hidden hover:from-orange-500/40 hover:to-rose-600/40 transition-all duration-500">
                <div className="h-full p-8 rounded-xl bg-slate-950 backdrop-blur-xl">
                  <h4 className="text-2xl font-bold mb-2">KickBracket Pro</h4>
                  <p className="text-orange-400 text-sm font-medium mb-6">Broadcast-Grade Tournament Management Platform</p>
                  <ul className="space-y-3 text-slate-400 mb-8 text-sm">
                    <li>• Built a full-stack football tournament platform enabling organizers to create tournaments, register unlimited teams, and auto-generate match fixtures.</li>
                    <li>• Implemented 6 tournament formats including Round Robin, Single/Double Elimination, Swiss System, and Group + Knockout stages.</li>
                    <li>• Engineered real-time cloud sync with spectator views updating live match scores every 3 seconds via serverless proxy routes.</li>
                    <li>• Designed a dedicated auth portal with Google login, organizer workspace isolation, and 1-click demo accounts.</li>
                    <li>• Delivered a broadcast-grade glassmorphism UI with Framer Motion micro-animations for live status indicators and match cards.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "TypeScript", "Framer Motion", "Vercel", "Real-time Sync"].map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Sainath-16/kickbracket-pro" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-orange-400 transition-colors duration-300">
                    <Github size={14} /> View on GitHub
                  </a>
                </div>
              </div>

              {/* SHOWMAZE */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                <h4 className="text-xl font-bold mb-2">SHOWMAZE</h4>
                <p className="text-purple-400 text-sm font-medium mb-4">Event Management Platform</p>
                <ul className="space-y-2 text-slate-400 mb-6 text-sm">
                  <li>• Developed scalable event discovery and registration platform.</li>
                  <li>• Implemented secure authentication using Clerk.</li>
                  <li>• Integrated Stripe payment gateway with webhook support, tested securely via ngrok.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Clerk", "Stripe", "ngrok"].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/Sainath-16/showmaze" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-purple-400 transition-colors duration-300">
                  <Github size={14} /> View on GitHub
                </a>
              </div>

              {/* AI Quiz Generator */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                <h4 className="text-xl font-bold mb-2">AI Quiz Generator</h4>
                <ul className="space-y-2 text-slate-400 mb-6 text-sm">
                  <li>• Java-based application generating dynamic quizzes based on selected topics.</li>
                  <li>• Designed automated question generation and answer validation logic.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">Java</span>
                </div>
                <a href="https://github.com/Sainath-16/AI-Quiz-Generator" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300">
                  <Github size={14} /> View on GitHub
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- EXPERIENCE & CERTIFICATIONS --- */}
      <section className="py-24 px-6 bg-slate-900/50">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="relative pl-6 border-l border-slate-800">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-2" />
              <h4 className="text-xl font-semibold text-slate-200">Cybersecurity & Ethical Hacking Intern</h4>
              <p className="text-cyan-400 text-sm mb-4">ICT Academy of Kerala, Technopark | 2025</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Learned fundamentals of cybersecurity, ethical hacking, and vulnerability assessment.</li>
                <li>• Performed hands-on exercises involving penetration testing concepts.</li>
                <li>• Gained exposure to web application and system security practices.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="space-y-4">
              {[
                "Add-on Program on IoT – ICT Academy of Kerala",
                "Data Visualization with Power BI – ICT Academy of Kerala",
                "Unlocking the Power of LLMs Workshop – IBM",
                "AI for Students: Build Your Own Generative AI Model",
                "Cybersecurity & Ethical Hacking Training – ICT Academy"
              ].map((cert, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <p className="text-sm text-slate-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

      {/* --- AREAS OF INTEREST --- */}
      <section className="py-24 px-6 relative">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Areas of Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI & Machine Learning", icon: <Brain size={24}/>, color: "text-purple-400" },
              { title: "Cybersecurity", icon: <Shield size={24}/>, color: "text-emerald-400" },
              { title: "Cloud Computing", icon: <Cloud size={24}/>, color: "text-blue-400" },
              { title: "Full-Stack Dev", icon: <Code2 size={24}/>, color: "text-cyan-400" },
            ].map((area, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center justify-center text-center group hover:bg-white/[0.05] transition-all">
                <div className={`mb-4 p-4 rounded-full bg-slate-900 group-hover:scale-110 transition-transform ${area.color}`}>
                  {area.icon}
                </div>
                <h4 className="font-semibold text-slate-200">{area.title}</h4>
              </div>
            ))}
          </div>
          
          {/* Subtle integration of gaming content creation hobby */}
          <div className="mt-8 text-center text-sm text-slate-500">
             Also actively involved in esports content creation and digital branding (e.g., IVOKE Radiant Valorant Tournament).
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section id="contact" className="py-24 px-6 bg-slate-900/80 border-t border-slate-800">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Let&apos;s Connect</h3>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">
            Currently open to new opportunities, collaborations, and discussions around AI, security, and full-stack development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:sainaths2005@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors">
              <Mail size={18} className="text-cyan-400" />
              <span>sainaths2005@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/sainaths18" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors">
              <Linkedin size={18} className="text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Sainath-16" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors">
              <Github size={18} className="text-slate-300" />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05]">
              <MapPin size={18} className="text-red-400" />
              <span>Thiruvananthapuram, Kerala</span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center border-t border-slate-800 bg-slate-950 text-slate-500 text-sm">
        <p>Designed & Developed by Sainath S</p>
      </footer>
    </div>
  );
}