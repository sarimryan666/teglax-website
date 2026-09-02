'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PktClock from './PktClock';
import { Menu, X, Sun, Moon, Triangle } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'WORK', path: '/work', num: '01' },
  { label: 'ABOUT', path: '/about', num: '02' },
  { label: 'SERVICES', path: '/services/ai-automation', num: '03' },
  { label: 'TESTIMONIALS', path: '/testimonials', num: '04' },
  { label: 'CONTACT', path: '/contact', num: '05' },
];

export default function Navbar({
  theme = 'dark',
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
            ? 'bg-[#070B09]/90 backdrop-blur-md border-b border-[#1A281E] py-4'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Emblem Logo (Figma Screenshot 1 style) */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-5 h-5 flex items-center justify-center text-[#3DDC84]">
            <Triangle className="w-4 h-4 fill-[#3DDC84] stroke-none transform rotate-0" />
          </div>
          <span className={`font-extrabold text-xl tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
            TEGLAX
          </span>
        </Link>

        {/* Center Nav items (Figma Uppercase Mono style) */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path || (item.path.startsWith('/services') && pathname.startsWith('/services'));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative text-xs font-mono tracking-widest uppercase transition-colors py-1 ${
                  isActive
                    ? isDark ? 'text-white font-bold' : 'text-gray-900 font-bold'
                    : isDark ? 'text-[#A1A1AA] hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-[#3DDC84] mr-1.5">{item.num}</span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#3DDC84] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Bar: Sun/Moon Pill Theme Switcher (Figma style) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <PktClock />
          </div>

          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                isDark
                  ? 'border-[#1A281E] bg-[#0D1510] text-white hover:border-[#3DDC84]'
                  : 'border-gray-300 bg-gray-100 text-gray-900 hover:border-gray-900'
              }`}
              aria-label="Toggle Theme Mode"
            >
              <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-[#3DDC84]' : 'text-[#71717A]'}`} />
              <span>/</span>
              <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-[#3DDC84]' : 'text-[#71717A]'}`} />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-[#1A281E] text-[#A1A1AA] hover:text-white'
                : 'border-gray-300 text-gray-700 hover:text-gray-900'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-6" /> : <Menu className="w-5 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-[73px] border-b p-6 backdrop-blur-xl transition-all ${
          isDark ? 'bg-[#070B09]/98 border-[#1A281E]' : 'bg-white/98 border-gray-200'
        }`}>
          <nav className="flex flex-col gap-4 mb-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (item.path.startsWith('/services') && pathname.startsWith('/services'));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center justify-between text-base font-mono tracking-widest uppercase p-3 rounded-lg border ${
                    isActive
                      ? isDark ? 'border-[#3DDC84] text-white bg-[#0D1510]' : 'border-[#3DDC84] text-gray-900 bg-gray-100'
                      : isDark ? 'border-[#1A281E] text-[#A1A1AA]' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#3DDC84]">{item.num}</span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
