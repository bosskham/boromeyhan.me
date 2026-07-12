"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    function handleMouseMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el?.style.setProperty("--cursor-x", `${e.clientX}px`);
        el?.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
      style={{
        background:
          "radial-gradient(700px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), color-mix(in oklch, var(--primary) 15%, transparent), transparent 70%)",
      }}
    />
  );
}
