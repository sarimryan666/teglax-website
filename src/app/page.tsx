import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import ClosingCta from '@/components/ClosingCta';
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
  Award,
  Layers,
  Users,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Radial Hero Background Glow */}
        <div className="absolute inset-0 pointer-events-none radial-glow-hero opacity-90" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            {/* Meta Line */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#A1A1AA] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse"></span>
              <span>{HOME_HERO.metaLine}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05] font-sans mb-8">
              We design, build and market digital products that move <span className="text-[#3DDC84]">real numbers.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Sub-description */}
            <p className="text-lg md:text-2xl text-[#A1A1AA] max-w-3xl leading-relaxed mb-10 font-sans">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#101713] text-white border border-[#1C2921] hover:border-[#3DDC84] hover:text-[#3DDC84] transition-all"
              >
                <span>{HOME_HERO.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
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

        <div className="divide-y divide-[#1C2921] border-y border-[#1C2921]">
          {CAPABILITIES.map((cap) => (
            <ScrollReveal key={cap.number} direction="left">
              <Link
                href={`/services/${cap.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-4 -mx-4 rounded-xl hover:bg-[#101713] transition-all duration-300"
              >
                <div className="flex items-start md:items-center gap-6 mb-2 md:mb-0">
                  <span className="font-mono text-sm text-[#3DDC84] font-semibold">
                    {cap.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#3DDC84] transition-colors">
                    {cap.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pl-12 md:pl-0">
                  <p className="text-sm text-[#A1A1AA] max-w-md font-sans">
                    {cap.desc}
                  </p>
                  <div className="w-8 h-8 rounded-full border border-[#1C2921] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#0A0F0C] group-hover:bg-[#3DDC84] group-hover:border-[#3DDC84] transition-all">
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
          <div className="lg:col-span-7 bg-[#101713] border border-[#1C2921] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DDC84]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C2921] bg-[#0A0F0C] text-xs font-mono text-[#3DDC84] mb-6">
                <span>— STUDIO OPERATIONS</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Operating out of Okara, PK with US client coverage
              </h3>
              <p className="text-base text-[#A1A1AA] leading-relaxed mb-8">
                Teglax was founded in 2023 to bring elite technical execution and business development directly to ambitious founders across North America, Australia, and the Gulf.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1C2921]">
              <div>
                <span className="block text-xs font-mono text-[#71717A] uppercase">HEADQUARTERS</span>
                <span className="text-sm font-semibold text-white">Okara, Pakistan</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-[#71717A] uppercase">OPERATIONS</span>
                <span className="text-sm font-semibold text-white">Remote-first US & Gulf</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3DDC84]/40 transition-colors"
              >
                <span className="font-mono text-xs text-[#3DDC84]">0{idx + 1}</span>
                <div className="my-4">
                  <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-sans mt-1 block">
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
              <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 h-full flex flex-col justify-between card-glow-hover">
                <div>
                  <span className="font-mono text-xs text-[#3DDC84] block mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
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
            <div key={step.step} className="bg-[#101713] border border-[#1C2921] rounded-xl p-5">
              <span className="font-mono text-xs text-[#3DDC84] block mb-2">{step.step}</span>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{step.desc}</p>
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

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 flex flex-col justify-between relative card-glow-hover">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#3DDC84] px-2.5 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                    {t.platform} Verified ({t.rating}★)
                  </span>
                  <div className="flex gap-1 text-[#3DDC84]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3DDC84]" />
                    ))}
                  </div>
                </div>

                <p className="text-lg text-white font-medium italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C2921]">
                <div className="font-bold text-white text-base">{t.author}</div>
                <div className="text-xs text-[#3DDC84] font-mono">{t.title} · {t.company}</div>
                <div className="text-xs text-[#71717A] mt-1">{t.location} · {t.industry}</div>
                <div className="mt-3 text-xs text-[#A1A1AA] bg-[#0A0F0C] p-3 rounded-lg border border-[#1C2921]">
                  <strong className="text-white">Result:</strong> {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Trust Bar */}
        <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left">
              <span className="block text-xs font-mono text-[#71717A] uppercase">CLUTCH PLATFORM</span>
              <span className="text-xl font-bold text-white">{TRUST_BAR.clutch.overall} Rating</span>
              <span className="block text-xs text-[#A1A1AA]">{TRUST_BAR.clutch.verifiedCount}</span>
            </div>

            <div className="h-10 w-[1px] bg-[#1C2921] hidden sm:block"></div>

            <div className="text-center sm:text-left">
              <span className="block text-xs font-mono text-[#71717A] uppercase">UPWORK PLATFORM</span>
              <span className="text-xl font-bold text-white">{TRUST_BAR.upwork.rating} ({TRUST_BAR.upwork.reviewsCount})</span>
              <span className="block text-xs text-[#3DDC84] font-mono">{TRUST_BAR.upwork.badge}</span>
            </div>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#16201B] border border-[#1C2921] text-white hover:border-[#3DDC84] hover:text-[#3DDC84] transition-all"
          >
            <span>View All Reviews</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* LATEST STORIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="STORIES"
          number="— 06"
          title="Insights from the engineering trenches"
          description="Articles and deep dives on software architecture, agency growth, and AI automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-8 opacity-70">
            <span className="text-xs font-mono text-[#3DDC84] mb-2 block">COMING SOON</span>
            <h3 className="text-xl font-bold text-white mb-2">Architecting Autonomous AI Agents for US Logistics</h3>
            <p className="text-sm text-[#A1A1AA]">A technical walkthrough on integrating Claude API and Make.com workflows for ground transportation.</p>
          </div>

          <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-8 opacity-70">
            <span className="text-xs font-mono text-[#3DDC84] mb-2 block">COMING SOON</span>
            <h3 className="text-xl font-bold text-white mb-2">Conversion-First UI/UX: Lessons from 11 Mobile App Launches</h3>
            <p className="text-sm text-[#A1A1AA]">How we design onboarding loops in Flutter apps that drive retention from day one.</p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <ClosingCta />
    </div>
  );
}
