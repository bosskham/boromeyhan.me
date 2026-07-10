"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { headingVariants, itemVariants, lineVariants } from "@/lib/animation-variants";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center")}>
      <motion.span
        variants={lineVariants}
        style={{ transformOrigin: "left" }}
        className={cn("block h-0.5 w-10 bg-primary", centered && "mx-auto")}
      />
      <motion.h2
        variants={headingVariants}
        className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
          {description}
        </motion.p>
      )}
    </div>
  );
}
