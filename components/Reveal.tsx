"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

/**
 * Section reveal component:
 * - Fade + translateY(20px -> 0) in --dur-slow with --ease-premium, played once.
 * - Staggers children when stagger={true}.
 * - Progressive enhancement: Content defaults to visible on SSR and if JS fails to run.
 * - Respects prefers-reduced-motion natively via CSS.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const mounted = useIsMounted();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Progressive enhancement: only apply hidden state once JS is mounted on the client
  const isHidden = mounted && !revealed;

  return (
    <div
      ref={ref}
      {...props}
      className={`reveal-wrapper ${isHidden ? "reveal-hidden" : "reveal-visible"} ${
        stagger ? "reveal-stagger" : ""
      } ${className}`}
      style={{
        ...props.style,
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
      }}
    >
      {children}
    </div>
  );
}
