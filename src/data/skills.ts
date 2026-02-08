export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "PySide6", "PyQt6"],
  },
  {
    name: "Backend & Cloud",
    skills: ["Firebase", "Firestore", "Stripe", "Node.js"],
  },
  {
    name: "AI & ML",
    skills: ["YOLO", "Kokoro TTS", "Edge TTS", "Gemma LLM", "Gemini", "OpenAI"],
  },
  {
    name: "Tools",
    skills: ["Git", "PyInstaller", "FFmpeg", "Docker"],
  },
  {
    name: "Platforms",
    skills: ["Vercel", "GitHub", "Windows Desktop"],
  },
];
