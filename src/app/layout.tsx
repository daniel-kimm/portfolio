import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans, Frank_Ruhl_Libre, IM_Fell_Great_Primer } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl-libre",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const imFellGreatPrimer = IM_Fell_Great_Primer({
  variable: "--font-im-fell-great-primer",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "daniel kim",
  description: "Personal portfolio of Daniel Kim - Creative developer and designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${frankRuhlLibre.variable} ${imFellGreatPrimer.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
