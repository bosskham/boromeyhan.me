"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Globe, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Monitor,
    title: "Desktop Apps",
    description: "Python-based desktop applications with PySide6/PyQt6 for professional workflows.",
  },
  {
    icon: Globe,
    title: "Web Apps",
    description: "Full-stack web applications with Next.js, React, Firebase, and Stripe.",
  },
  {
    icon: Brain,
    title: "AI/ML Tools",
    description: "AI-powered tools using YOLO, TTS engines, LLMs, and computer vision.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Boromey Han"
                width={180}
                height={180}
                className="rounded-2xl border-2 border-primary/20 object-cover"
              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a software engineer who enjoys building tools that solve
                real problems. My work spans desktop applications, web platforms,
                and AI-powered tools — always focused on creating polished,
                production-ready software.
              </p>
              <p>
                My flagship project, <strong className="text-foreground">WTN Suite</strong>,
                is an AI-powered desktop application that transforms webtoons and manga
                into narrated video content. It combines panel detection, scene analysis,
                text-to-speech, and video composition into a single automated pipeline.
              </p>
              <p>
                I primarily work with Python for desktop and AI/ML development, and
                TypeScript with Next.js for web applications. I&apos;m always
                exploring new technologies to push the boundaries of what&apos;s possible.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
