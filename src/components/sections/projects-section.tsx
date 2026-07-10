"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Download } from "lucide-react";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects, type Project } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cardVariants } from "@/lib/animation-variants";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasLinks = project.links.github || project.links.live || project.links.download;

  return (
    <SpotlightCard className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className={featured ? "font-display text-2xl" : "font-display text-lg"}>
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className={featured ? "text-base text-muted-foreground" : "text-sm text-muted-foreground"}>
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {hasLinks && (
        <CardFooter className="gap-2">
          {project.links.github && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
          {project.links.download && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.links.download}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-1 h-4 w-4" />
                Download
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </SpotlightCard>
  );
}

export function ProjectsSection() {
  const flagship = projects.filter((p) => p.category === "flagship");
  const sideProjects = projects.filter((p) => p.category === "side-project");

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl">
          <SectionHeading
            align="center"
            title="Projects"
            description="A selection of projects I've built — from full product ecosystems to focused developer tools."
          />
        </ScrollReveal>

        <div className="mt-16">
          <h3 className="font-display mb-6 text-xl font-semibold">Flagship</h3>
          <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {flagship.map((project, i) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <ProjectCard project={project} featured={i === 0} />
              </motion.div>
            ))}
          </ScrollReveal>
        </div>

        <Separator className="my-12" />

        <div>
          <h3 className="font-display mb-6 text-xl font-semibold">Side Projects</h3>
          <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sideProjects.map((project) => (
              <motion.div key={project.title} variants={cardVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
