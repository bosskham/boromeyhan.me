import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { FloatingAvatar } from "@/components/ui/floating-avatar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boromey Han | Software Engineer",
  description:
    "Full-stack developer specializing in desktop applications, web apps, and AI/ML tools. Creator of WTN Suite.",
  keywords: [
    "Boromey Han",
    "software engineer",
    "full-stack developer",
    "Python",
    "TypeScript",
    "Next.js",
    "AI",
    "ML",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Boromey Han | Software Engineer",
    description:
      "Full-stack developer specializing in desktop applications, web apps, and AI/ML tools.",
    url: "https://boromeyhan.me",
    siteName: "Boromey Han",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-darkreader-ignore>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <MotionConfig reducedMotion="user">
            <a
              href="#main-content"
              className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-primary-foreground focus-visible:outline-none"
            >
              Skip to main content
            </a>
            <CursorGlow />
            <Sidebar />
            <FloatingAvatar />
            <div className="flex min-h-screen flex-col lg:pl-[26rem]">
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
          </MotionConfig>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
