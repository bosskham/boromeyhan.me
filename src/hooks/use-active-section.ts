import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let raf = 0;

    function computeActive() {
      // A short last section can't scroll its top past the document's max
      // scroll position, so it may never cross the reference line below —
      // treat "scrolled to the bottom of the page" as its own case.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      const referenceLine = window.innerHeight * 0.25;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= referenceLine) {
          current = el.id;
        }
      }
      setActiveId(current);
    }

    function handleScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeActive);
    }

    computeActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [sectionIds]);

  return activeId;
}
