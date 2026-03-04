import { Variants } from "framer-motion";
import { ScrollDirection } from "@/hooks/use-scroll-direction";

// Container that staggers children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Standard item: direction-aware fade + slide
export const itemVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 30 : -30,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Card item: direction-aware fade + slide + subtle scale
export const cardVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 24 : -24,
    scale: 0.97,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Section heading: direction-aware fade + slide
export const headingVariants: Variants = {
  hidden: (dir: ScrollDirection = "down") => ({
    opacity: 0,
    y: dir === "down" ? 20 : -20,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Kept for any remaining whileInView usage
export const viewport = { once: false, margin: "-80px" };
