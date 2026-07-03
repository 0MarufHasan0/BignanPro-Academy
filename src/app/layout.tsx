import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/providers/AppProviders";
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
  title: "BignanPro Academy — Interactive Programming Book | বিজ্ঞানপ্রো একাডেমি",
  description:
    "A premium, beautiful, and interactive coding book website for beginners. Learn Full Stack Web Development from absolute zero in easy, friendly Bangla and English.",
  keywords: [
    "Programming Book",
    "BignanPro Academy",
    "Learn Programming Bangla",
    "Interactive Coding Book",
    "Full Stack Development",
    "Next.js Bangla Tutorial",
    "JavaScript",
  ],
  authors: [{ name: "BignanPro Academy Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

