import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const description =
  "André Ruiz works at the intersection of product, software, and data, creating and leading technically complex digital products that solve meaningful problems and move the business forward.";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrers.dev"),
  title: {
    default: person.name,
    template: `${person.name} · %s`,
  },
  description,
  keywords: [
    "Technical Product Management",
    "Product",
    "Data platforms",
    "Solution architecture",
    "Software engineering",
    "Guadalajara",
  ],
  authors: [{ name: person.fullName, url: "https://andrers.dev" }],
  creator: person.fullName,
  openGraph: {
    type: "website",
    url: "https://andrers.dev",
    siteName: person.name,
    title: `${person.name} · Product, software and data`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} · Product, software and data`,
    description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000509",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* without JS the reveals would never be triggered — show everything */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}
.sec .sec-k::after{transform:scaleX(1)!important}
.role-rail{transform:scaleY(1)!important}
.fig .rl{transform:translateY(calc(var(--d) * -1em))!important}
.fig .plus{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
