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
      <div className="absolute inset-0 editorial-lines opacity-60" />

      {/* Gentle Forest Tone Ambient Light Following Cursor */}
      <div
        className="absolute w-[680px] h-[680px] rounded-full blur-[160px] opacity-20 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #345A46 0%, transparent 65%)",
          transform: `translate(${mousePos.x * 30 - 15}vw, ${mousePos.y * 25 - 12}vh)`,
          top: "8%",
          left: "20%",
        }}
      />

      {/* Soft Warm Copper Light Pool */}
      <div
        className="absolute w-[560px] h-[560px] rounded-full blur-[180px] opacity-15"
        style={{
          background: "radial-gradient(circle, #A66F50 0%, transparent 70%)",
          top: "45%",
          right: "10%",
        }}
      />

      {/* Tactile Paper Texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Thin Top Reading Progress Indicator in Forest Green */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#345A46] origin-left z-50 opacity-80"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
