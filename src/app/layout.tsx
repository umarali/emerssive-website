import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emerssive.com"),
  title: "Emerssive | AI & Software Development Agency",
  description:
    "Ship your AI product in weeks. Custom AI agents, web apps, and mobile solutions for startups and enterprises.",
  keywords:
    "ai development agency, custom ai solutions, software development, generative ai consulting, ai agents, web development, mobile development",
  authors: [{ name: "Emerssive" }],
  openGraph: {
    title: "Emerssive | AI & Software Development Agency",
    description:
      "Ship your AI product in weeks. Custom AI agents, web apps, and mobile solutions for startups and enterprises.",
    type: "website",
    url: "https://emerssive.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerssive | AI & Software Development Agency",
    description:
      "Ship your AI product in weeks. Custom AI agents, web apps, and mobile solutions.",
  },
  alternates: {
    canonical: "https://emerssive.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${openSans.variable} font-opensans antialiased bg-secondary text-text`}
      >
        {children}
      </body>
    </html>
  );
}
