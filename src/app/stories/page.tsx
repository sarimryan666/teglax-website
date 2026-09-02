import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ClosingCta from '@/components/ClosingCta';
import { BookOpen, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Stories & Insights | Teglax Digital Agency',
  description: 'Articles, software architecture deep dives, and agency updates from Teglax.',
};

export default function StoriesPage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>— STORIES & INSIGHTS</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
            Stories from Teglax Engineering
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans mb-12">
            Technical breakdowns, design systems, and AI automation insights straight from our team.
          </p>
        </ScrollReveal>

        {/* Coming Soon Articles Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 card-glow-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  AI & AUTOMATION
                </span>
                <span className="text-xs font-mono text-[#71717A]">COMING SOON</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Building Scalable Autonomous AI Agents for Freight Operations
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                How we architected PathSync and integrated custom Claude API workflows with real-time dispatch systems.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1C2921] text-xs font-mono text-[#71717A]">
              By Sarim · Founder & Full-Stack AI Developer
            </div>
          </div>

          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 card-glow-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  MOBILE ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-[#71717A]">COMING SOON</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Optimizing User Onboarding Loops in Flutter Apps
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Key UX patterns learned from publishing 11 mobile applications across health, crypto, and meditation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1C2921] text-xs font-mono text-[#71717A]">
              By Talha Latif · Flutter Lead
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
