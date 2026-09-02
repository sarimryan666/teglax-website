import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ClosingCta from '@/components/ClosingCta';
import { TESTIMONIALS, TRUST_BAR, SITE_META } from '@/data/content';
import { Star, ExternalLink, ShieldCheck, Award, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Client Testimonials | Teglax Digital Agency',
  description: 'Verified client reviews from Clutch and Upwork for Teglax digital agency web engineering, branding, and marketing.',
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* PAGE HEADER */}
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>— 06 WHAT CLIENTS SAY</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
            Client Testimonials & Verified Reviews
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans">
            Verified reviews from Clutch and Upwork — nothing here is written by us.
          </p>
        </ScrollReveal>
      </section>

      {/* PLATFORM TRUST BAR */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clutch Box */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 card-glow-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  VERIFIED REVIEWS
                </span>
                <span className="text-sm font-bold text-white">Clutch.co</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">{TRUST_BAR.clutch.overall} Overall</h2>
              <p className="text-xs text-[#3DDC84] font-mono mb-4">{TRUST_BAR.clutch.metrics}</p>
              <p className="text-sm text-[#A1A1AA] mb-6">{TRUST_BAR.clutch.verifiedCount}</p>
            </div>

            <a
              href={TRUST_BAR.clutch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#3DDC84] hover:underline uppercase tracking-wider"
            >
              <span>View live Clutch profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Upwork Box */}
          <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 card-glow-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  TOP RATED TALENT
                </span>
                <span className="text-sm font-bold text-white">Upwork</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">{TRUST_BAR.upwork.rating} Score</h2>
              <p className="text-xs text-[#3DDC84] font-mono mb-4">{TRUST_BAR.upwork.badge}</p>
              <p className="text-sm text-[#A1A1AA] mb-6">{TRUST_BAR.upwork.reviewsCount} · {TRUST_BAR.upwork.completedJobs}</p>
            </div>

            <a
              href={TRUST_BAR.upwork.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#3DDC84] hover:underline uppercase tracking-wider"
            >
              <span>View live Upwork profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FULL TESTIMONIAL GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="DETAILED REVIEWS"
          number="— REAL QUOTES"
          title="Verified Case Feedback"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <ScrollReveal key={t.id} direction="up">
              <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 h-full flex flex-col justify-between card-glow-hover">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                      {t.platform} Verified ({t.rating}★)
                    </span>
                    <div className="flex gap-1 text-[#3DDC84]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#3DDC84]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xl text-white font-medium italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1C2921]">
                  <div className="font-bold text-white text-lg">{t.author}</div>
                  <div className="text-xs text-[#3DDC84] font-mono">{t.title} · {t.company}</div>
                  <div className="text-xs text-[#71717A] mt-1">{t.location} · {t.industry}</div>
                  <div className="mt-4 text-xs text-[#A1A1AA] bg-[#0A0F0C] p-4 rounded-xl border border-[#1C2921] leading-relaxed">
                    <strong className="text-white block mb-1">Project & Result:</strong>
                    {t.project}
                    <div className="mt-2 text-[#3DDC84] font-mono">
                      {t.result}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Placeholder pattern for LinkedIn / Google reviews */}
        <div className="bg-[#101713] border border-dashed border-[#1C2921] rounded-3xl p-8 text-center max-w-2xl mx-auto">
          <MessageSquare className="w-8 h-8 text-[#3DDC84] mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">More Verified Feedback Coming Soon</h3>
          <p className="text-xs text-[#A1A1AA]">
            We strictly present verified, authentic client reviews from Clutch and Upwork. Additional LinkedIn recommendations and Google business reviews will be published as verified.
          </p>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
