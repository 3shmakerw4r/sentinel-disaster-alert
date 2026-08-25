import type { Metadata } from "next";
import "./globals.css";
import "./live.css";
import "./weather.css";
import "./nationwide.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export const metadata: Metadata = {
  title: "Sentinel Disaster Alert System",
  description: "Open-source community hazard monitoring and disaster awareness.",
  icons: {
    icon: "/sentinel-logo.webp",
    shortcut: "/sentinel-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}