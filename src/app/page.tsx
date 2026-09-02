'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import ClosingCta from '@/components/ClosingCta';
import HeroCanvas from '@/components/HeroCanvas';
import {
  HOME_HERO,
  FEATURED_PROJECTS,
  CAPABILITIES,
  STATS,
  WHY_TEGLAX,
  TESTIMONIALS,
  TRUST_BAR,
  PROCESS_STEPS
} from '@/data/content';
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Star,
  ChevronRight
} from 'lucide-react';

export default function HomePage({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION WITH 3D PRISM GEOMETRY */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Radial Hero Background Glow */}
        {isDark && <div className="absolute inset-0 pointer-events-none radial-glow-hero opacity-90" />}

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.1}>
              {/* Meta Line */}
              <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border text-xs font-mono mb-8 ${
                isDark ? 'border-[#1C2921] bg-[#101713] text-[#A1A1AA]' : 'border-gray-200 bg-gray-100 text-gray-700'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse"></span>
                <span>{HOME_HERO.metaLine}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              {/* Main Headline mirroring Riangle structure */}
              <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-3xl leading-[1.05] font-sans mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                We design brands and build <span className="text-[#3DDC84]">digital & AI-driven</span> experiences.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              {/* Sub-description */}
              <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-sans ${
                isDark ? 'text-[#A1A1AA]' : 'text-gray-600'
              }`}>
                {HOME_HERO.subDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C] hover:bg-[#32b56c] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#3DDC84]/20"
                >
                  <span>{HOME_HERO.ctaPrimary}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/work"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all ${
                    isDark
                      ? 'bg-[#101713] text-white border-[#1C2921] hover:border-[#3DDC84] hover:text-[#3DDC84]'
                      : 'bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  <span>{HOME_HERO.ctaSecondary}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Interactive Rotating Wireframe Prism (Riangle 3D Clone) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroCanvas isDark={isDark} />
          </div>
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

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#3DDC84] hover:underline uppercase tracking-wider"
          >
            <span>Explore full index of 50+ projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
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

        <div className={`divide-y border-y ${isDark ? 'divide-[#1C2921] border-[#1C2921]' : 'divide-gray-200 border-gray-200'}`}>
          {CAPABILITIES.map((cap) => (
            <ScrollReveal key={cap.number} direction="left">
              <Link
                href={`/services/${cap.slug}`}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-4 -mx-4 rounded-xl transition-all duration-300 ${
                  isDark ? 'hover:bg-[#101713]' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start md:items-center gap-6 mb-2 md:mb-0">
                  <span className="font-mono text-sm text-[#3DDC84] font-semibold">
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
                      ? 'border-[#1C2921] text-[#A1A1AA] group-hover:text-[#0A0F0C] group-hover:bg-[#3DDC84] group-hover:border-[#3DDC84]'
                      : 'border-gray-300 text-gray-700 group-hover:bg-[#3DDC84] group-hover:text-[#0A0F0C]'
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
          {/* Studio Office/Team Panel */}
          <div className={`lg:col-span-7 border rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between ${
            isDark ? 'bg-[#101713] border-[#1C2921]' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DDC84]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono text-[#3DDC84] mb-6 ${
                isDark ? 'border-[#1C2921] bg-[#0A0F0C]' : 'border-gray-200 bg-white'
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

            <div className={`grid grid-cols-2 gap-4 pt-6 border-t ${isDark ? 'border-[#1C2921]' : 'border-gray-200'}`}>
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

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`border rounded-2xl p-6 flex flex-col justify-between transition-colors ${
                  isDark ? 'bg-[#101713] border-[#1C2921] hover:border-[#3DDC84]/40' : 'bg-gray-50 border-gray-200 hover:border-[#3DDC84]'
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

      {/* 03 WHY TEGLAX SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="WHY TEGLAX"
          number="— 03"
          title="Built for founders who demand real outcomes"
          description="We don't build software just to check boxes. Every project is engineered around key business metrics: leads, conversions, and retention."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_TEGLAX.map((item) => (
            <ScrollReveal key={item.number} direction="up">
              <div className={`border rounded-2xl p-6 h-full flex flex-col justify-between card-glow-hover ${
                isDark ? 'bg-[#101713] border-[#1C2921]' : 'bg-gray-50 border-gray-200'
              }`}>
                <div>
                  <span className="font-mono text-xs text-[#3DDC84] block mb-4">
                    {item.number}
                  </span>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-[#A1A1AA]' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 04 HOW WE WORK PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="HOW WE WORK"
          number="— 04"
          title="The 5-step delivery engine"
          description="A clear, structured execution path from initial discovery to long-term post-launch scaling."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className={`border rounded-xl p-5 ${
              isDark ? 'bg-[#101713] border-[#1C2921]' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="font-mono text-xs text-[#3DDC84] block mb-2">{step.step}</span>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#A1A1AA]' : 'text-gray-600'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 TESTIMONIALS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="WHAT CLIENTS SAY"
          number="— 05"
          title="Verified Clutch & Upwork reviews"
          description="Real feedback from company owners and founders who hired Teglax for design, development, and marketing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={`border rounded-3xl p-8 flex flex-col justify-between relative card-glow-hover ${
              isDark ? 'bg-[#101713] border-[#1C2921]' : 'bg-gray-50 border-gray-200'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono text-[#3DDC84] px-2.5 py-1 rounded border ${
                    isDark ? 'bg-[#16201B] border-[#1C2921]' : 'bg-white border-gray-200'
                  }`}>
                    {t.platform} Verified ({t.rating}★)
                  </span>
                  <div className="flex gap-1 text-[#3DDC84]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3DDC84]" />
                    ))}
                  </div>
                </div>

                <p className={`text-lg font-medium italic mb-6 leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  "{t.quote}"
                </p>
              </div>

              <div className={`pt-6 border-t ${isDark ? 'border-[#1C2921]' : 'border-gray-200'}`}>
                <div className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.author}</div>
                <div className="text-xs text-[#3DDC84] font-mono">{t.title} · {t.company}</div>
                <div className="text-xs text-[#71717A] mt-1">{t.location} · {t.industry}</div>
                <div className={`mt-3 text-xs p-3 rounded-lg border ${
                  isDark ? 'text-[#A1A1AA] bg-[#0A0F0C] border-[#1C2921]' : 'text-gray-700 bg-white border-gray-200'
                }`}>
                  <strong className={isDark ? 'text-white' : 'text-gray-900'}>Result:</strong> {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <ClosingCta />
    </div>
  );
}
