"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { containerVariants } from "@/lib/animation-variants";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export function ScrollReveal({ children, className, variants = containerVariants }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px" });
  const direction = useScrollDirection();

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={direction}
      className={className}
    >
      {children}
    </motion.div>
  );
}
