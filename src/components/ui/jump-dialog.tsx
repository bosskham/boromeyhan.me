"use client";

import { useEffect, useState } from "react";
import { Home, User, Wrench, Briefcase, Mail } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const jumpTargets = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About Me", icon: User },
  { href: "#skills", label: "Skills", icon: Wrench },
  { href: "#projects", label: "Portfolio", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function JumpDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function jump(href: string) {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full max-w-xs items-center gap-2 rounded-md border border-border bg-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span>Search &middot; Jump</span>
        <kbd className="ml-auto inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          &#8984;K
        </kbd>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Jump to section"
        description="Search sections of this site"
      >
        <CommandInput placeholder="Jump to a section..." />
        <CommandList>
          <CommandEmpty>No section found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {jumpTargets.map((target) => (
              <CommandItem
                key={target.href}
                value={target.label}
                onSelect={() => jump(target.href)}
              >
                <target.icon />
                {target.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
