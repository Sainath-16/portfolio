"use client";

import React, { useRef, useCallback, useEffect } from "react";

/**
 * High-performance pointer-follow spotlight hook using requestAnimationFrame.
 * Updates CSS custom properties --mx and --my on the target element.
 */
export function useCardSpotlight() {
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    const target = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;

    frameRef.current = requestAnimationFrame(() => {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      target.style.setProperty("--mx", `${x}px`);
      target.style.setProperty("--my", `${y}px`);
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { handlePointerMove, handlePointerLeave };
}

/**
 * Visual overlays for cursor spotlight and subtle border glow.
 * Absolutely positioned with pointer-events: none so document layout is untouched.
 */
export function CardOverlays({
  spotlightGradient = "radial-gradient(320px circle at var(--mx, -9999px) var(--my, -9999px), rgba(255, 73, 61, 0.12), transparent 70%)",
  borderColor = "#FF493D",
}: {
  spotlightGradient?: string;
  borderColor?: string;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="motion-card-spotlight pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: spotlightGradient,
        }}
      />
      <span
        aria-hidden="true"
        className="motion-card-border-glow pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          borderColor,
        }}
      />
    </>
  );
}
