"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cardVariants } from "@/lib/animation-variants";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl">
          <SectionHeading
            align="center"
            title="Skills & Technologies"
            description="The tools and technologies I use to bring ideas to life."
          />
        </ScrollReveal>

        <ScrollReveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className={category.skills.length >= 5 ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <SpotlightCard className="h-full">
                <CardHeader>
                  <CardTitle className="font-display text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border-primary/20 bg-primary/10 font-mono text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </SpotlightCard>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
