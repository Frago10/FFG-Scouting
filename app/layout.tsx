import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: "FFG-Scouting — Global Athlete Career Advisory",
  description:
    "FFG-Scouting builds real, sustainable international careers for athletes and their families. Strategy. Clarity. Execution. Beyond the game.",
  keywords: [
    "FFG-Scouting",
    "Frago Football Group",
    "Athlete Path Frago",
    "Athlete career advisory",
    "Football scouting Spain",
    "NCAA pathway",
    "Latin America Europe football"
  ],
  openGraph: {
    title: "FFG-Scouting — Beyond the game.",
    description: "Global athlete career advisory. Strategy. Clarity. Execution.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ink-deep text-cream selection:bg-lime selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
