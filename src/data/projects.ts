export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "flagship" | "side-project";
  links: {
    github?: string;
    live?: string;
    download?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "WTN Suite",
    description:
      "Desktop app for converting webtoons into narrated videos using AI. Full pipeline: panel detection (YOLO), scene analysis (Gemini/OpenAI), narrative generation, TTS (Edge/Kokoro), and professional video composition.",
    tags: ["Python", "PySide6", "YOLO", "AI/ML", "FFmpeg", "PyInstaller"],
    category: "flagship",
    links: {
      live: "https://wtn-suite.com",
      download: "https://github.com/bosskham/wtn-suite-releases",
    },
    featured: true,
  },
  {
    title: "WTN Web",
    description:
      "Business website for WTN Suite with landing pages, user authentication, Stripe checkout, subscription management, and comprehensive documentation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Stripe"],
    category: "flagship",
    links: { live: "https://wtn-suite.com" },
    featured: true,
  },
  {
    title: "WTN Admin",
    description:
      "Admin dashboard for managing Firebase Auth users, Firestore data, and subscription analytics for the WTN Suite ecosystem.",
    tags: ["Python", "PySide6", "Firebase Admin SDK"],
    category: "flagship",
    links: {},
    featured: true,
  },
  {
    title: "Edge-TTS Web App",
    description:
      "Web application for generating speech using Microsoft Edge Text-to-Speech with voice selection, rate/pitch controls, and audio export.",
    tags: ["Python", "Edge-TTS", "Web App"],
    category: "side-project",
    links: {},
    featured: false,
  },
  {
    title: "Kokoro-TTS GUI",
    description:
      "Desktop GUI for the Kokoro TTS engine with multi-voice support and high-quality audio generation.",
    tags: ["Python", "PyQt6", "Kokoro-TTS"],
    category: "side-project",
    links: {},
    featured: false,
  },
  {
    title: "Webtoon Script Rephraser",
    description:
      "AI-powered script rewriting tool using a local Gemma 1B LLM for improving and rephrasing webtoon dialogue and narratives.",
    tags: ["Python", "PyQt6", "Gemma LLM", "AI"],
    category: "side-project",
    links: {},
    featured: false,
  },
  {
    title: "YOLO Dataset Builder",
    description:
      "Tool for building, annotating, and managing YOLO training datasets for custom object detection models.",
    tags: ["Python", "YOLO", "Computer Vision"],
    category: "side-project",
    links: {},
    featured: false,
  },
  {
    title: "Gallery-DL Fork",
    description:
      "Customized fork of gallery-dl media downloader with enhanced features for specific content workflows.",
    tags: ["Python", "Web Scraping"],
    category: "side-project",
    links: {},
    featured: false,
  },
];
