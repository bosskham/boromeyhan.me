"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cardVariants, headingVariants, itemVariants } from "@/lib/animation-variants";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <motion.h2 variants={headingVariants} className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life.
          </motion.p>
        </ScrollReveal>

        <ScrollReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={cardVariants} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
