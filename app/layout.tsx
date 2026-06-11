import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Landmarx Group — Integrated Real Asset Platform",
  description:
    "Turning complex opportunities into structured, investable real asset projects. Landmarx brings together land, capital, approvals and delivery capability across Australia.",
  keywords:
    "real asset development, property investment, development services, Cairns, Australia",
};

export const viewport: Viewport = {
  themeColor: "#0b0907",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full flex flex-col bg-ink text-beech font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
