import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.title}`,
  description:
    "A personal portfolio by Akshatha Kulkarni, a first-year AI and Machine Learning engineering student in Bengaluru.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
