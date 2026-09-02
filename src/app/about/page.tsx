import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ClosingCta from '@/components/ClosingCta';
import PktClock from '@/components/PktClock';
import { TEAM_MEMBERS, WORKFLOW, STATS, SITE_META } from '@/data/content';
import { MapPin, Mail, Phone, CheckCircle2, User, Globe, Target, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About Us | Teglax Digital Agency',
  description: 'Get to know the Teglax team, our mission, locations in Okara, Pakistan and US operations, and our 3-stage delivery workflow.',
};

export default function AboutPage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO / INTRO SECTION */}
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>— ABOUT TEGLAX</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
            Get to know the team.
          </h1>

          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-4xl leading-relaxed mb-6 font-sans">
            Teglax is a full-service digital agency operating out of Okara, Pakistan, with US-based operations. We design brand identities and build the websites, apps and marketing engines that carry them.
          </p>

          <p className="text-sm font-mono text-[#3DDC84]">
            The rest of this page is the evidence — the people who make the work, and the numbers it produces.
          </p>
        </ScrollReveal>
      </section>

      {/* MISSION & VISION GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 h-full flex flex-col justify-between card-glow-hover">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84] mb-6">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#3DDC84] uppercase block mb-2">OUR MISSION</span>
                <h2 className="text-2xl font-bold text-white mb-4">Driving innovation, empowering growth.</h2>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Teglax delivers client-focused technology under one roof. We don't just build software; we create measurable pathways to growth. Every engagement is built to move a real number: traffic, conversions, revenue.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 h-full flex flex-col justify-between card-glow-hover">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#3DDC84] mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#3DDC84] uppercase block mb-2">OUR VISION</span>
                <h2 className="text-2xl font-bold text-white mb-4">Limit the galaxies with technology.</h2>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  We aim to be the technical co-founder ambitious teams wish they hired, delivering world-class full-stack development, AI automation, and ROI-driven marketing across global markets.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOCATIONS BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="LOCATIONS"
          number="— 01"
          title="Global Operations & Headquarters"
          description="Distributed strength with centralized delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Okara HQ */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  HEADQUARTERS
                </span>
                <PktClock />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Okara, Pakistan</h3>
              <p className="text-sm text-[#A1A1AA] mb-4">{SITE_META.hq.address}</p>
              <div className="font-mono text-xs text-[#71717A] mb-6">
                Coordinates: {SITE_META.hq.coords}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C2921] text-xs text-[#A1A1AA] space-y-1 font-mono">
              <div>Phone: {SITE_META.hq.phone}</div>
              <div>Email: {SITE_META.hq.email}</div>
            </div>
          </div>

          {/* US Operations */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  OPERATIONS
                </span>
                <span className="text-xs font-mono text-[#A1A1AA]">US CLIENT COVERAGE</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">United States</h3>
              <p className="text-sm text-[#A1A1AA] mb-4">{SITE_META.usOps.address}</p>
              <div className="font-mono text-xs text-[#71717A] mb-6">
                Coverage: Pacific, Mountain, Central & Eastern Time Zones
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C2921] text-xs text-[#A1A1AA] space-y-1 font-mono">
              <div>Phone: {SITE_META.usOps.phone}</div>
              <div>Email: {SITE_META.usOps.email}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="TEAM"
          number="— 02"
          title="The Engineers & Leaders"
          description="Experienced software engineers, AI developers, and Flutter architects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <ScrollReveal key={member.name} direction="up">
              <div className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 h-full flex flex-col justify-between card-glow-hover">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#16201B] border border-[#3DDC84]/30 flex items-center justify-center text-white font-bold text-xl mb-4 font-mono">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-xs font-mono text-[#3DDC84] block mb-3">{member.role}</span>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WORKFLOW BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="WORKFLOW"
          number="— 03"
          title="3-Stage Execution Checklist"
          description="How we convert ideas into reliable, high-converting digital products."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKFLOW.map((col) => (
            <div key={col.step} className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm text-[#3DDC84] px-2.5 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  {col.step}
                </span>
                <h3 className="text-2xl font-bold text-white">{col.title}</h3>
              </div>

              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                    <CheckCircle2 className="w-4 h-4 text-[#3DDC84] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RECOGNITION / STATS BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 md:p-12">
          <SectionHeader
            eyebrow="TRACK RECORD"
            number="— 04"
            title="Numbers backed by real engagements"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-[#3DDC84] pl-4">
                <span className="text-3xl md:text-5xl font-extrabold text-white block">{s.value}</span>
                <span className="text-xs font-mono text-[#A1A1AA] uppercase mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
