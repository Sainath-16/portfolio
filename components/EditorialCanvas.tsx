"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function EditorialCanvas() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });

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
      {/* Editorial Hairline Grid Background */}
      <div className="absolute inset-0 editorial-lines opacity-70" />

      {/* Atmospheric Black Cherry Ambient Pool Following Cursor */}
      <div
        className="absolute w-[680px] h-[680px] rounded-full blur-[170px] opacity-15 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #430D1C 0%, transparent 65%)",
          transform: `translate(${mousePos.x * 25 - 12}vw, ${mousePos.y * 20 - 10}vh)`,
          top: "6%",
          left: "18%",
        }}
      />

      {/* Subtle Warm Vermillion Light Arc Pool */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[190px] opacity-10"
        style={{
          background: "radial-gradient(circle, #FF493D 0%, transparent 70%)",
          top: "40%",
          right: "8%",
        }}
      />

      {/* Tactile Paper Grain Texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Thin Top Reading Progress Indicator in Vermillion */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#FF493D] origin-left z-50 opacity-90 shadow-[0_0_8px_rgba(255,73,61,0.5)]"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
