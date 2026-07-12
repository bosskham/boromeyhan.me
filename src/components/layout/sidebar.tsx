"use client";

import { useState } from "react";
import { Menu, FileDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { JumpDialog } from "@/components/ui/jump-dialog";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

function NavList({ activeId, onNavigate }: { activeId: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {navLinks.map((link) => {
        const isActive = activeId === link.href.slice(1);
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className="group flex items-center gap-3 py-2 text-sm font-semibold uppercase tracking-wider"
          >
            <span
              className={cn(
                "h-px shrink-0 bg-foreground transition-all duration-200",
                isActive ? "w-6 opacity-100" : "w-3 opacity-30 group-hover:w-6 group-hover:opacity-60"
              )}
            />
            <span
              className={cn(
                "transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function IntroBlock() {
  return (
    <div>
      <h1 className="font-display text-5xl font-bold tracking-tight">Boromey Han</h1>
      <p className="mt-3 text-lg text-muted-foreground">Software Engineer</p>
      <p className="mt-6 max-w-sm text-sm text-muted-foreground">
        I build AI-powered desktop apps and web tools that turn creative ideas
        into production-ready software.
      </p>
    </div>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 -m-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.email}
        className="rounded-full p-2 -m-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[26rem] flex-col justify-between overflow-y-auto px-10 py-16 lg:flex">
        <div>
          <IntroBlock />
          <div className="mt-12">
            <NavList activeId={activeId} />
          </div>
          <div className="mt-8">
            <JumpDialog />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <SocialRow />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border/60 bg-background/80 px-4 backdrop-blur-md lg:hidden">
        <a href="#home" className="font-display text-lg font-bold">
          Boromey Han
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-80 bg-sidebar px-8 py-12">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <IntroBlock />
          <div className="mt-10">
            <NavList activeId={activeId} onNavigate={() => setMobileOpen(false)} />
          </div>
          <div className="mt-auto flex flex-col gap-6 pt-10">
            <SocialRow />
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
