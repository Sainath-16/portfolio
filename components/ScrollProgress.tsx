"use client";

import React, { useEffect, useRef } from "react";

/**
 * Top-of-page fixed scroll progress bar.
 * 2px high, accent color (#FF493D), transform: scaleX(progress) with origin left.
 * Updated via passive scroll listener throttled with requestAnimationFrame.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max(window.scrollY / scrollHeight, 0), 1) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        frameRef.current = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
      style={{
        backgroundColor: "#FF493D",
        transform: "scaleX(0)",
        transformOrigin: "left center",
        willChange: "transform",
      }}
      ref={barRef}
    />
  );
}
