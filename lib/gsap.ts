// src/lib/gsap/index.tsx

import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { Flip } from "gsap/dist/Flip";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  CustomEase,
  ScrollToPlugin,
  MotionPathPlugin,
  TextPlugin,
);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const MICROSTAGGER = 0.05;
const STAGGER = 0.5;
const FADEDISTANCE = 100;
const EASE = CustomEase.create("custom", "M0,0 C0.35,0.86 0.9,1 1,1 ");

// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
  duration: DURATION,
  ease: "power2.out",
});

// Once the desired configurations are set, we simply export what we need to work with in the future.
export {
  DURATION,
  EASE,
  STAGGER,
  MICROSTAGGER,
  FADEDISTANCE,
  GOLDEN_RATIO,
  MotionPathPlugin,
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
};
