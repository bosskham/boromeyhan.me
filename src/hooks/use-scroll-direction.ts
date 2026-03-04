import { useState, useEffect, useRef } from "react";

export type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const prevY = useRef(0);

  useEffect(() => {
    prevY.current = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      if (Math.abs(y - prevY.current) < 2) return;
      setDirection(y > prevY.current ? "down" : "up");
      prevY.current = y;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return direction;
}
