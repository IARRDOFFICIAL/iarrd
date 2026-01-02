import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navigation from '@/components/ui/Navigation';  // Add this import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IARRD | Indian Astronomy Rocket Research & Development',
  description: 'Innovating Space, Inspiring Earth. PrithiviSat CubeSat | IRAI-Q2 Defence R&D | Astronomy AI Tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />  {/* ADD NAVBAR HERE */}
        <main className="pt-16 lg:pt-20">  {/* Add padding for fixed nav */}
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
