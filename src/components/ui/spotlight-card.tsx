"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  const ref = React.useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden border-border/10 transition-[border-color,box-shadow] duration-200 hover:border-foreground/20 hover:shadow-[var(--shadow-lifted)]",
        className
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--foreground) 8%, transparent), transparent 70%)",
        }}
      />
      {children}
    </Card>
  );
}
