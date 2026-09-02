'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PktClock from './PktClock';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', path: '/work', num: '01' },
  { label: 'About', path: '/about', num: '02' },
  { label: 'Services', path: '/services/ai-automation', num: '03' },
  { label: 'Testimonials', path: '/testimonials', num: '04' },
  { label: 'Contact', path: '/contact', num: '05' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F0C]/90 backdrop-blur-md border-b border-[#1C2921] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
            <span className="text-[#3DDC84] transition-colors group-hover:text-white">te</span>glax
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded border border-[#1C2921] text-[#A1A1AA]">
            Agency
          </span>
        </Link>

        {/* Live Studio Clock & Nav items for Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="px-3 py-1 rounded-full border border-[#1C2921] bg-[#101713]/60">
            <PktClock />
          </div>

          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (item.path.startsWith('/services') && pathname.startsWith('/services'));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group relative text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span className="font-mono text-xs text-[#3DDC84] mr-1.5">{item.num}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3DDC84] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C] hover:bg-[#32b56c] transition-all transform hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#1C2921] text-[#A1A1AA] hover:text-white hover:border-[#3DDC84] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#0A0F0C]/98 border-b border-[#1C2921] p-6 backdrop-blur-xl transition-all">
          <div className="mb-6 pb-4 border-b border-[#1C2921] flex justify-between items-center">
            <span className="text-xs font-mono text-[#A1A1AA]">STUDIO TIME</span>
            <PktClock />
          </div>

          <nav className="flex flex-col gap-4 mb-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (item.path.startsWith('/services') && pathname.startsWith('/services'));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center justify-between text-lg font-medium p-3 rounded-lg border ${
                    isActive
                      ? 'border-[#3DDC84] text-white bg-[#101713]'
                      : 'border-[#1C2921] text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#3DDC84]">{item.num}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#3DDC84]" />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </header>
  );
}
