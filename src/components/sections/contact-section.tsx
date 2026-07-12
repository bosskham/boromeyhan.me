"use client";

import { useState } from "react";
import { Github, Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/data/social-links";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28 lg:scroll-mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl">
          <SectionHeading
            align="center"
            title="Get in Touch"
            description="Have a question or want to work together? Feel free to reach out."
          />
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold">Contact Info</h3>
              <div className="mt-4 space-y-3">
                <a
                  href={socialLinks.email}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  contact@boromeyhan.me
                </a>
                <a
                  href="mailto:khammy.han080388@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  khammy.han080388@gmail.com
                </a>
                <a
                  href="tel:+85589295515"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  +855 89 295 515
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Home No. 8E1, Street No. 432, Sangkat Beong Trabek, Khan Chomkar Morn, Phnom Penh, 12254</span>
                </div>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5 shrink-0 text-primary" />
                  github.com/bosskham
                </a>
              </div>
            </div>
          </div>

          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="font-display text-lg font-semibold">Message Sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
