"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { socialLinks } from "@/data/social-links";
import { charContainerVariants, charVariants } from "@/lib/animation-variants";

const NAME = "Boromey Han";

export function HeroSection() {
  return (
    <section id="home" className="relative flex scroll-mt-16 items-center py-20 sm:py-28 lg:scroll-mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm uppercase tracking-[0.2em] text-primary"
          >
            Full-Stack Developer
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={charContainerVariants}
            className="font-display mt-4 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            aria-label={NAME}
          >
            {NAME.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={charVariants}
                    className="inline-block"
                    aria-hidden="true"
                  >
                    {char}
                  </motion.span>
                ))}
                {wi < NAME.split(" ").length - 1 ? " " : null}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 max-w-2xl text-xl text-muted-foreground sm:text-2xl"
          >
            Software Engineer building desktop apps, web applications, and
            AI/ML tools. Passionate about turning creative ideas into
            production-ready software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 -m-2.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={socialLinks.email}
              className="rounded-full p-2.5 -m-2.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
