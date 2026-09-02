'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PktClock from './PktClock';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', path: '/work', num: '01' },
  { label: 'About', path: '/about', num: '02' },
  { label: 'Services', path: '/services/ai-automation', num: '03' },
  { label: 'Testimonials', path: '/testimonials', num: '04' },
  { label: 'Contact', path: '/contact', num: '05' },
];

export default function Navbar({
  theme,
  toggleTheme
}: {
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}) {
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0A0F0C]/90 backdrop-blur-md border-b border-[#1C2921] py-4'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className={`font-extrabold text-2xl tracking-tight font-sans ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-[#3DDC84]">te</span>glax
          </span>
          <span className={`hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded border ${
            isDark ? 'border-[#1C2921] text-[#A1A1AA]' : 'border-gray-300 text-gray-600'
          }`}>
            Agency
          </span>
        </Link>

        {/* Live Studio Clock & Nav items for Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className={`px-3 py-1 rounded-full border ${
            isDark ? 'border-[#1C2921] bg-[#101713]/60' : 'border-gray-200 bg-gray-50'
          }`}>
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
                    isActive
                      ? isDark ? 'text-white' : 'text-gray-900 font-bold'
                      : isDark ? 'text-[#A1A1AA] hover:text-white' : 'text-gray-600 hover:text-gray-900'
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

        {/* Desktop CTA & Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Black & White Light/Dark Theme Switcher Button */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${
                isDark
                  ? 'border-[#1C2921] bg-[#101713] text-[#3DDC84] hover:border-[#3DDC84]'
                  : 'border-gray-300 bg-gray-100 text-gray-900 hover:border-gray-900'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C] hover:bg-[#32b56c] transition-all transform hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-[#1C2921] text-[#A1A1AA] hover:text-white'
                : 'border-gray-300 text-gray-700 hover:text-gray-900'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-[73px] border-b p-6 backdrop-blur-xl transition-all ${
          isDark ? 'bg-[#0A0F0C]/98 border-[#1C2921]' : 'bg-white/98 border-gray-200'
        }`}>
          <div className={`mb-6 pb-4 border-b flex justify-between items-center ${
            isDark ? 'border-[#1C2921]' : 'border-gray-200'
          }`}>
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
                      ? isDark ? 'border-[#3DDC84] text-white bg-[#101713]' : 'border-[#3DDC84] text-gray-900 bg-gray-100'
                      : isDark ? 'border-[#1C2921] text-[#A1A1AA]' : 'border-gray-200 text-gray-700'
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
