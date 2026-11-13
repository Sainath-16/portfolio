"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function AmbientCanvas() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to 0..1
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Editorial subtle grid rule */}
      <div className="absolute inset-0 editorial-grid opacity-50" />

      {/* Primary ambient light that follows mouse softly */}
      <div
        className="absolute w-[680px] h-[680px] rounded-full blur-[140px] opacity-20 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, #1e3a8a 40%, transparent 70%)",
          transform: `translate(${mousePosition.x * 60 - 30}vw, ${mousePosition.y * 50 - 25}vh)`,
          top: "10%",
          left: "20%",
        }}
      />

      {/* Secondary warm ambient light positioned deep in the layout */}
      <div
        className="absolute w-[540px] h-[540px] rounded-full blur-[160px] opacity-10"
        style={{
          background: "radial-gradient(circle, #d97706 0%, transparent 65%)",
          top: "45%",
          right: "10%",
        }}
      />

      {/* Tertiary deep emerald pool near bottom sections */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-15"
        style={{
          background: "radial-gradient(circle, #059669 0%, transparent 70%)",
          bottom: "10%",
          left: "15%",
        }}
      />

      {/* Very subtle grain overlay for tactile paper-like feel */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Subtle top reading progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-[#d97706] origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
