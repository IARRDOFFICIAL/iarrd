'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"  // Your shadcn button
import { Menu } from "lucide-react";  // If you have lucide-react

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}
      border-b border-slate-800/50
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            IARRD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#timeline" className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Timeline
            </Link>
            <Link href="#team" className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Button variant="default" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400">
              Investor Deck
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-slate-800 p-6 space-y-4">
            <Link href="#projects" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMobileOpen(false)}>
              Projects
            </Link>
            <Link href="#timeline" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMobileOpen(false)}>
              Timeline
            </Link>
            <Link href="#team" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMobileOpen(false)}>
              Team
            </Link>
            <Link href="#contact" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
              Investor Deck
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
