"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function SecurityBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.2 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base Dark Palette Canvas */}
      <div className="absolute inset-0 bg-[#090b0e]" />

      {/* Subtle Architectural Security Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "4.5rem 4.5rem"
        }}
      />

      {/* Dynamic Cursor-Responsive Ambient Security Light */}
      <div
        className="absolute w-[720px] h-[720px] rounded-full blur-[170px] opacity-15 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #059669 0%, #064e3b 40%, transparent 70%)",
          transform: `translate(${mousePos.x * 40 - 20}vw, ${mousePos.y * 30 - 15}vh)`,
          top: "8%",
          left: "25%",
        }}
      />

      {/* Deep Obsidian Blue Ambient Accent */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, #1e1b4b 50%, transparent 70%)",
          top: "42%",
          right: "8%",
        }}
      />

      {/* Warm Graphite Ambient Bottom Pool */}
      <div
        className="absolute w-[540px] h-[540px] rounded-full blur-[160px] opacity-10"
        style={{
          background: "radial-gradient(circle, #059669 0%, transparent 65%)",
          bottom: "5%",
          left: "12%",
        }}
      />

      {/* Tactile Subtle Noise Texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Top Precision Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-400 origin-left z-50 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
