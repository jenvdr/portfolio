import { useEffect, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
);

gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

export {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
  useGSAP,
};

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
