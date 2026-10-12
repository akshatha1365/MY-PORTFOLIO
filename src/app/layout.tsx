import type { Metadata } from "next";
import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Engineering Student`,
  description:
    "A personal portfolio by Akshatha Kulkarni, a first-year AI and Machine Learning engineering student in Bengaluru.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
