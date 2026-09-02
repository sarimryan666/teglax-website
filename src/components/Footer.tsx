'use client';

import React from 'react';
import Link from 'next/link';
import PktClock from './PktClock';
import FooterGlobe from './FooterGlobe';
import { SITE_META, CAPABILITIES } from '@/data/content';
import { ExternalLink, Triangle } from 'lucide-react';

export default function Footer({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`relative overflow-hidden pt-16 pb-12 transition-colors ${
      isDark ? 'bg-[#050806] text-[#A1A1AA] border-t border-[#1A281E]' : 'bg-gray-50 text-gray-700 border-t border-gray-200'
    }`}>
      {/* Background 3D Wireframe Globe matching Screenshot 2 */}
      <FooterGlobe isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header Bar matching Screenshot 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#1A281E] font-mono text-xs uppercase tracking-widest text-[#71717A]">
          <div className="flex items-center gap-3">
            <span>STUDIO TIME</span>
            <PktClock />
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <span className="block text-white font-bold mb-1">PAKISTAN (HQ)</span>
              <span>{SITE_META.hq.coords}</span>
            </div>
            <div>
              <span className="block text-white font-bold mb-1">UNITED STATES</span>
              <span>REMOTE-FIRST US COVERAGE</span>
            </div>
          </div>
        </div>

        {/* 4 Sitemap Columns matching Screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* NAVIGATE */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">
              NAVIGATE
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Stories</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* DISCIPLINE */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">
              DISCIPLINE
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {CAPABILITIES.slice(0, 6).map((cap) => (
                <li key={cap.slug}>
                  <Link href={`/services/${cap.slug}`} className="hover:text-white transition-colors">
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">
              CONTACT
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-[#3DDC84] font-semibold">
                  Start a project
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE_META.hq.email}`} className="hover:text-white transition-colors">
                  {SITE_META.hq.email}
                </a>
              </li>
              <li className="text-xs text-[#71717A] leading-relaxed pt-2">
                MA Jinnah Road, Okara 56300, Pakistan
              </li>
            </ul>
          </div>

          {/* ELSEWHERE */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">
              ELSEWHERE
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href={SITE_META.socials.upwork} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Upwork</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
              </li>
              <li>
                <a href={SITE_META.socials.clutch} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Clutch</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
              </li>
              <li>
                <a href={SITE_META.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
              </li>
              <li>
                <a href={SITE_META.socials.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Screenshot 2 */}
        <div className="pt-12 border-t border-[#1A281E] flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#71717A]">
          <div>
            © 2023 - {new Date().getFullYear()} TEGLAX - ALL RIGHTS RESERVED.
            <span className="ml-6 hover:text-white cursor-pointer">PRIVACY</span>
            <span className="ml-4 hover:text-white cursor-pointer">TERMS</span>
          </div>

          <div className="text-[#3DDC84]">
            <Triangle className="w-4 h-4 fill-[#3DDC84] stroke-none" />
          </div>
        </div>
      </div>
    </footer>
  );
}
