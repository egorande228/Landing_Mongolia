import type { TargetsParam } from "animejs";
import { remove } from "animejs";

export const motionTokens = {
  duration: {
    fast: 180,
    base: 360,
    slow: 620,
    loop: 6200,
    marquee: 30000,
  },
  easing: {
    standard: "cubicBezier(0.2, 0.8, 0.2, 1)",
    entrance: "cubicBezier(0.22, 1, 0.36, 1)",
    emphasis: "easeOutExpo",
    linear: "linear",
  },
  distance: {
    xs: 8,
    sm: 12,
    md: 14,
    lg: 20,
  },
  scale: {
    hover: 1.015,
    lift: 1.008,
  },
} as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const removeAnimations = (targets: TargetsParam) => {
  remove(targets);
};
