import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Indian Astronomy Rocket Research and Development',
  description: 'Innovating Space, Inspiring Earth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics /> {/* Add Vercel Analytics component */}
      </body>
    </html>
  );
}
