/**
 * Motion design system tokens
 * Values strictly match styles/motion.css
 */
export const MOTION_TOKENS = {
  ease: {
    premium: [0.22, 1, 0.36, 1] as const,
    soft: [0.4, 0, 0.2, 1] as const,
  },
  dur: {
    fast: 0.18, // 180ms
    base: 0.32, // 320ms
    slow: 0.70, // 700ms
  },
  stagger: 0.07, // 70ms
} as const;
