import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sainath S — Developer & Computer Science Student",
  description:
    "Personal website of Sainath S. Computer Science undergraduate building web apps, machine learning models, and security tools.",
  keywords: [
    "Sainath S",
    "Sainath",
    "Portfolio",
    "Web Developer",
    "AI Student",
    "FastAPI",
    "Next.js",
    "Cybersecurity"
  ],
  authors: [{ name: "Sainath S" }],
  creator: "Sainath S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sainath.vercel.app/",
    title: "Sainath S — Developer & Computer Science Student",
    description:
      "Personal website of Sainath S. Computer Science student building web apps, machine learning models, and security tools.",
    siteName: "Sainath S"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainath S — Developer & Computer Science Student",
    description:
      "Personal website of Sainath S. Computer Science student building web apps, machine learning models, and security tools."
  }
};

export const viewport: Viewport = {
  themeColor: "#0f1115",
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
      className={`${sans.variable} ${serif.variable} ${mono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0e1015] text-[#e2e4e9] font-sans selection:bg-[#3b82f6]/25 selection:text-[#93c5fd]">
        {children}
      </body>
    </html>
  );
}
