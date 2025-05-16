import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vignesh B | Portfolio",
  description: "Personal portfolio website of Vignesh B - Developer & Tech Enthusiast",
  keywords: ["portfolio", "developer", "tech", "Vignesh B", "web development"],
  authors: [{ name: "Vignesh B" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
