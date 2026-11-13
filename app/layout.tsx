import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sainath S — AI, Full-Stack & Cybersecurity Engineer",
  description:
    "Portfolio of Sainath S — Computer Science undergraduate specializing in AI, Machine Learning, Cybersecurity vulnerability assessment, and scalable full-stack web applications.",
  keywords: [
    "Sainath S",
    "Portfolio",
    "AI Developer",
    "Full-Stack Engineer",
    "Cybersecurity",
    "Ethical Hacking",
    "FastAPI",
    "Next.js",
    "MENTRA.OS",
    "KickBracket Pro",
    "SurfaceCheck"
  ],
  authors: [{ name: "Sainath S" }],
  creator: "Sainath S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sainath.vercel.app/",
    title: "Sainath S — AI, Full-Stack & Cybersecurity Engineer",
    description:
      "Explore engineering projects, cognitive telemetry architectures, vulnerability scanning tools, and tournament platforms built by Sainath S.",
    siteName: "Sainath S Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainath S — AI, Full-Stack & Cybersecurity Engineer",
    description:
      "Explore engineering projects, cognitive telemetry architectures, and vulnerability scanning tools built by Sainath S."
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
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
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
