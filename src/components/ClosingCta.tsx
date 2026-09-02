import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ClosingCta() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-[#1C2921]">
      {/* Glowing Radial Green Background Overlay */}
      <div className="absolute inset-0 pointer-events-none radial-glow opacity-80" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3DDC84]/30 bg-[#101713] text-[#3DDC84] text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse"></span>
            <span>START YOUR NEXT ENGAGEMENT</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-sans">
            Let's limit the galaxies, together.
          </h2>

          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Tell us the number you want to move. We'll design, build and grow the thing that moves it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C] hover:bg-[#32b56c] transition-all transform hover:scale-[1.03] shadow-lg shadow-[#3DDC84]/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              href="/testimonials"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#101713] text-white border border-[#1C2921] hover:border-[#3DDC84] hover:text-[#3DDC84] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Read Client Reviews</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
