import { Variants } from "framer-motion";
import { ScrollDirection } from "@/hooks/use-scroll-direction";

const spring = { type: "spring" as const, stiffness: 300, damping: 26 };

// Container that staggers children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

// Standard item: direction-aware fade + slide, spring-settled
export const itemVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 18 : -18,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

// Card item: direction-aware fade + slide + subtle scale, spring-settled
export const cardVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 16 : -16,
    scale: 0.98,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring,
  },
};

// Section heading: direction-aware fade + slide, spring-settled
export const headingVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 14 : -14,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

// Accent line: draws left-to-right, precedes the heading it sits above
export const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] },
  },
};

// Character reveal container: fast stagger for a per-letter entrance
export const charContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025, delayChildren: 0.1 },
  },
};

// Individual character: blur-to-sharp + rise
export const charVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

// Kept for any remaining whileInView usage
export const viewport = { once: false, margin: "-80px" };
