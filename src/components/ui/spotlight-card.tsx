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
        "group relative overflow-hidden transition-[transform,box-shadow] duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:shadow-[4px_4px_0_0_var(--primary)]",
        className
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--primary) 20%, transparent), transparent 70%)",
        }}
      />
      {children}
    </Card>
  );
}
