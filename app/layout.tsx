import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Prediction Platform",
  description: "AI-predicted real estate prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Immobilier plateforme</title>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByILPTgINa0KU498gNt20bR8eQMC7a3Vw&callback=console.debug&libraries=maps,places,marker&v=beta"
        ></script>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
