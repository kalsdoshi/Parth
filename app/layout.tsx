import type { Metadata } from "next";
import React from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Until Next Time, Parth — A Farewell from the Team",
  description:
    "A luxury, emotional, and slightly chaotic farewell tribute for Parth — senior web developer, PR legend, and certified team MVP.",
  openGraph: {
    title: "Until Next Time, Parth",
    description: "A chic, emotional tribute from your team. You'll be missed terribly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} ${firaCode.variable}`}>
      <body className="font-body bg-dark-rose antialiased">{children}</body>
    </html>
  );
}
