import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    icon: "/favicon.ico",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
