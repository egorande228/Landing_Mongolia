"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { remove } from "animejs";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/motion/anime";
import { observeOnce } from "@/motion/observers";
import {
  floatLoop,
  pulseGlow,
  revealLeft,
  revealScale,
  revealUp,
} from "@/motion/presets";

type MotionClusterProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
  immediate?: boolean;
};

export function MotionCluster({
  children,
  className,
  variant = "up",
  immediate = false,
}: MotionClusterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || prefersReducedMotion() || immediate) {
      return;
    }

    return observeOnce(
      node,
      () => {
        const items = Array.from(
          node.querySelectorAll<HTMLElement>("[data-motion-item]"),
        );
        const floatItems = Array.from(
          node.querySelectorAll<HTMLElement>("[data-float-item]"),
        );
        const glowItems = Array.from(
          node.querySelectorAll<HTMLElement>("[data-glow-item]"),
        );

        const targets = items.length > 0 ? items : [node];
        const animations: Array<{ pause: () => void }> = [];

        switch (variant) {
          case "left":
            animations.push(revealLeft(targets));
            break;
          case "scale":
            animations.push(revealScale(targets));
            break;
          case "up":
          default:
            animations.push(revealUp(targets));
            break;
        }

        floatItems.slice(0, 2).forEach((item, index) => {
          animations.push(floatLoop(item, 10 + index * 2));
        });

        glowItems.slice(0, 2).forEach((item) => {
          animations.push(pulseGlow(item));
        });

        return () => {
          remove(targets);
          remove(floatItems);
          remove(glowItems);
          animations.forEach((animation) => animation.pause());
        };
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
  }, [immediate, variant]);

  return <div className={cn(className)} ref={ref}>{children}</div>;
}
