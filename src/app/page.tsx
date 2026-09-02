'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import ClosingCta from '@/components/ClosingCta';
import HeroPyramid from '@/components/HeroPyramid';
import {
  HOME_HERO,
  FEATURED_PROJECTS,
  CAPABILITIES,
  STATS,
  WHY_TEGLAX,
  TESTIMONIALS,
  PROCESS_STEPS
} from '@/data/content';
import {
  ArrowUpRight,
  Star,
  ChevronRight
} from 'lucide-react';

export default function HomePage({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <div className={`space-y-24 md:space-y-32 ${isDark ? 'figma-grid' : 'figma-grid-light'}`}>
      {/* HERO SECTION — 100% MATCH TO FIGMA SCREENSHOT 1 */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          {/* Left Column: Giant Bold Headline */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-4xl leading-[1.02] font-sans mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                We design brands and build <span className="text-[#3DDC84]">digital</span> and <span className="text-[#3DDC84]">AI-driven</span> experiences.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-sans ${
                isDark ? 'text-[#A1A1AA]' : 'text-gray-600'
              }`}>
                {HOME_HERO.subDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest bg-[#3DDC84] text-[#070B09] hover:bg-[#32b56c] transition-all transform hover:scale-[1.02] font-bold"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/work"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${
                    isDark
                      ? 'bg-[#0D1510] text-white border-[#1A281E] hover:border-[#3DDC84]'
                      : 'bg-gray-100 text-gray-900 border-gray-300'
                  }`}
                >
                  <span>Explore Work</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Triforce Pyramid Structure (Figma Screenshot 1) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroPyramid isDark={isDark} />
          </div>
        </div>

        {/* Bottom Hero Meta Bar matching Screenshot 1 */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#71717A]">
          <div>
            TEGLAX · EST. 2023 · PK ↔ US ↔ REMOTE
          </div>
          <div className="hidden md:block w-px h-6 bg-[#3DDC84] animate-pulse"></div>
        </div>
      </section>

      {/* 01 SELECTED WORK SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="SELECTED WORK"
          number="— 01"
          title="Featured builds designed to scale"
          description="A selection of high-impact web platforms, SaaS applications, and custom software systems built for ambitious teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} delay={0.1 * (idx + 1)}>
              <ProjectCard
                number={`0${idx + 1}`}
                title={project.title}
                category={project.category}
                description={project.description}
                tags={project.tags}
                metrics={project.metrics}
                featured={idx === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 02 CAPABILITIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="CAPABILITIES"
          number="— 02"
          title="8 Disciplines under one roof"
          description="We eliminate hand-offs and fragmented teams by bringing design, engineering, and growth under single accountability."
        />

        <div className={`divide-y border-y ${isDark ? 'divide-[#1A281E] border-[#1A281E]' : 'divide-gray-200 border-gray-200'}`}>
          {CAPABILITIES.map((cap) => (
            <ScrollReveal key={cap.number} direction="left">
              <Link
                href={`/services/${cap.slug}`}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-4 -mx-4 rounded-xl transition-all duration-300 ${
                  isDark ? 'hover:bg-[#0D1510]' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start md:items-center gap-6 mb-2 md:mb-0">
                  <span className="font-mono text-xs text-[#3DDC84] font-semibold">
                    {cap.number}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-[#3DDC84]' : 'text-gray-900 group-hover:text-[#3DDC84]'
                  }`}>
                    {cap.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pl-12 md:pl-0">
                  <p className={`text-sm max-w-md font-sans ${isDark ? 'text-[#A1A1AA]' : 'text-gray-600'}`}>
                    {cap.desc}
                  </p>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-[#1A281E] text-[#A1A1AA] group-hover:text-[#070B09] group-hover:bg-[#3DDC84] group-hover:border-[#3DDC84]'
                      : 'border-gray-300 text-gray-700 group-hover:bg-[#3DDC84] group-hover:text-[#070B09]'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STUDIO PANEL & STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className={`lg:col-span-7 border rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between ${
            isDark ? 'bg-[#0D1510] border-[#1A281E]' : 'bg-gray-50 border-gray-200'
          }`}>
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono text-[#3DDC84] mb-6 ${
                isDark ? 'border-[#1A281E] bg-[#070B09]' : 'border-gray-200 bg-white'
              }`}>
                <span>— STUDIO OPERATIONS</span>
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Operating out of Okara, PK with US client coverage
              </h3>
              <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-[#A1A1AA]' : 'text-gray-600'}`}>
                Teglax was founded in 2023 to bring elite technical execution and business development directly to ambitious founders across North America, Australia, and the Gulf.
              </p>
            </div>

            <div className={`grid grid-cols-2 gap-4 pt-6 border-t ${isDark ? 'border-[#1A281E]' : 'border-gray-200'}`}>
              <div>
                <span className="block text-xs font-mono text-[#71717A] uppercase">HEADQUARTERS</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Okara, Pakistan</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-[#71717A] uppercase">OPERATIONS</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-first US & Gulf</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`border rounded-2xl p-6 flex flex-col justify-between transition-colors ${
                  isDark ? 'bg-[#0D1510] border-[#1A281E] hover:border-[#3DDC84]/40' : 'bg-gray-50 border-gray-200 hover:border-[#3DDC84]'
                }`}
              >
                <span className="font-mono text-xs text-[#3DDC84]">0{idx + 1}</span>
                <div className="my-4">
                  <span className={`text-3xl md:text-4xl font-extrabold tracking-tight block ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </span>
                  <span className={`text-xs font-sans mt-1 block ${isDark ? 'text-[#A1A1AA]' : 'text-gray-600'}`}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <ClosingCta />
    </div>
  );
}
