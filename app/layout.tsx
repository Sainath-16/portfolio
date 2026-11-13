import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sainath S — Cybersecurity & Software Development",
  description:
    "Personal portfolio of Sainath S. Computer Science graduate from Kerala focusing on cybersecurity, defensive engineering, web applications, and explainable AI.",
  keywords: [
    "Sainath S",
    "Cybersecurity",
    "AppSec",
    "Network Security",
    "Tech By Heart",
    "TryHackMe",
    "SurfaceCheck",
    "MENTRA.OS",
    "Python",
    "Next.js"
  ],
  authors: [{ name: "Sainath S" }],
  creator: "Sainath S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sainath.vercel.app/",
    title: "Sainath S — Cybersecurity & Software Development",
    description:
      "Personal portfolio of Sainath S. Computer Science graduate focusing on cybersecurity, defensive engineering, and software development.",
    siteName: "Sainath S"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainath S — Cybersecurity & Software Development",
    description:
      "Personal portfolio of Sainath S. Computer Science graduate focusing on cybersecurity, defensive engineering, and software development."
  }
};

export const viewport: Viewport = {
  themeColor: "#F3F0E8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F3F0E8] text-[#20231F] font-sans selection:bg-[#345A46]/20 selection:text-[#345A46]">
        {children}
      </body>
    </html>
  );
}
