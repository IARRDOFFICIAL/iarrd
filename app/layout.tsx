import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navigation } from "@/components/ui/navigation"; // your existing shadcn nav (exported as Navigation)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IARRD | Indian Astronomy Rocket Research & Development",
  description:
    "Innovating Space, Inspiring Earth. PrithiviSat CubeSat | IRAI-Q2 Defence R&D Platform | Astronomy AI Tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 lg:pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
