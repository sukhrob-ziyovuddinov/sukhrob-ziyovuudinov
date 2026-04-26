import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASII Continuity Pilot",
  description: "AI-native Financial Crime Intelligence continuity workflow for UAE and MENA regulated institutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
