import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ClosingCta from '@/components/ClosingCta';
import ProjectCard from '@/components/ProjectCard';
import { ALL_WORK_CATEGORIES, FEATURED_PROJECTS } from '@/data/content';
import { ArrowUpRight, CheckCircle2, Smartphone, Globe, ShoppingCart, TrendingUp, Layers } from 'lucide-react';

export const metadata = {
  title: 'Work & Case Studies | Teglax Digital Agency',
  description: 'Full portfolio index of custom web applications, mobile apps, e-commerce storefronts, and performance digital marketing campaigns.',
};

export default function WorkPage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* PAGE HEADER */}
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>— 01 CASE STUDY INDEX</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our Work. Real Builds & Proven Campaigns.
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed">
            Explore 50+ total deliverables categorized across Web Development, Mobile Apps, E-commerce, Performance Marketing, and Full-Service Engagements.
          </p>
        </ScrollReveal>
      </section>

      {/* FEATURED CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="FEATURED PLATFORMS"
          number="— FEATURED"
          title="Flagship Software Systems"
          description="Detailed view of our primary custom platforms built for logistics, SaaS inspection, and AI EdTech."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              number={`0${idx + 1}`}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.tags}
              metrics={project.metrics}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY 01: WEB DEVELOPMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1C2921] pt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84]">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#3DDC84]">01 CATEGORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Web Development — 15 projects
            </h2>
          </div>
        </div>

        {/* Subgroups */}
        <div className="space-y-12">
          {/* Custom Web Apps */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#3DDC84] mb-6 font-mono">
              A. Custom Web Applications (5)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_WORK_CATEGORIES[0].subgroups![0].projects.map((p: any) => (
                <div key={p.name} className="bg-[#0A0F0C] border border-[#1C2921] rounded-2xl p-6 hover:border-[#3DDC84]/40 transition-colors">
                  <span className="text-xs font-mono text-[#3DDC84] block mb-2">{p.tag}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{p.name}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate & Business Websites */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#3DDC84] mb-6 font-mono">
              B. Corporate & Business Websites (10)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {ALL_WORK_CATEGORIES[0].subgroups![1].projects.map((p: any) => (
                <div key={p.name} className="bg-[#0A0F0C] border border-[#1C2921] rounded-xl p-4 text-center hover:border-[#3DDC84]/40 transition-colors">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase block mb-1">{p.tag}</span>
                  <span className="text-sm font-bold text-white block">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 02: MOBILE APP DEVELOPMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1C2921] pt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84]">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#3DDC84]">02 CATEGORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mobile App Development — 11 apps
            </h2>
          </div>
        </div>

        <p className="text-base text-[#A1A1AA] mb-8 max-w-3xl">
          Meditation, fitness, crypto, legal, media & AI, iOS & Android. Built for retention with clean onboarding & habit loops that keep users coming back.
        </p>

        {/* Featured Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {ALL_WORK_CATEGORIES[1].featuredApps!.map((app) => (
            <div key={app.name} className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 card-glow-hover">
              <span className="text-xs font-mono text-[#3DDC84] block mb-2">{app.tag}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Other Apps Strip */}
        <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6">
          <span className="text-xs font-mono text-[#71717A] uppercase block mb-4">ADDITIONAL MOBILE BUILDS (8)</span>
          <div className="flex flex-wrap gap-3">
            {ALL_WORK_CATEGORIES[1].otherApps!.map((appName) => (
              <span key={appName} className="px-4 py-2 rounded-lg bg-[#0A0F0C] border border-[#1C2921] text-xs font-medium text-white">
                {appName}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 03: E-COMMERCE & CMS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1C2921] pt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84]">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#3DDC84]">03 CATEGORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              E-commerce & CMS — 15 builds
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shopify */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#3DDC84] mb-4 font-mono">
              A. Shopify Storefronts (6)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {ALL_WORK_CATEGORIES[2].subgroups![0].projects.map((name: any) => (
                <div key={name} className="px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-xs font-bold text-white">
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* WordPress */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#3DDC84] mb-4 font-mono">
              B. WordPress Platforms (9)
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {ALL_WORK_CATEGORIES[2].subgroups![1].projects.map((name: any) => (
                <div key={name} className="px-3 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-[11px] font-bold text-white text-center">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 04: DIGITAL MARKETING */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1C2921] pt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#3DDC84]">04 CATEGORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Digital Marketing — 10 campaigns
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALL_WORK_CATEGORIES[3].campaigns!.map((group) => (
            <div key={group.type} className="bg-[#101713] border border-[#1C2921] rounded-3xl p-6">
              <h3 className="text-lg font-bold text-[#3DDC84] mb-4 font-mono">{group.type}</h3>
              <div className="space-y-4">
                {group.items.map((item: any) => (
                  <div key={item.name} className="bg-[#0A0F0C] border border-[#1C2921] rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white text-sm">{item.name}</span>
                      <span className="text-[10px] font-mono text-[#3DDC84] px-2 py-0.5 rounded bg-[#16201B]">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY 05: FULL-SERVICE ENGAGEMENTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1C2921] pt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#3DDC84]">05 CATEGORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Full-Service Engagements — 3 partners
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALL_WORK_CATEGORIES[4].items!.map((item: any) => (
            <div key={item.name} className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 card-glow-hover">
              <span className="text-xs font-mono text-[#3DDC84] block mb-2">{item.role}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed bg-[#0A0F0C] p-4 rounded-xl border border-[#1C2921]">
                <strong className="text-white block mb-1">Scope:</strong> {item.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
