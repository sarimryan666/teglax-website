import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ClosingCta from '@/components/ClosingCta';
import { SERVICE_DETAILS, CAPABILITIES, FEATURED_PROJECTS } from '@/data/content';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICE_DETAILS[params.slug];
  if (!service) return {};
  return {
    title: `${service.title} | Teglax Services`,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICE_DETAILS[params.slug];

  if (!service) {
    notFound();
  }

  // Cross-linked services
  const crossLinkedServices = service.crossLinks
    .map((slug) => SERVICE_DETAILS[slug])
    .filter(Boolean);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* SERVICE HERO */}
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>SERVICE {service.number}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
            {service.title}
          </h1>

          <p className="text-xl md:text-2xl text-[#3DDC84] font-medium max-w-3xl mb-6 font-sans">
            {service.tagline}
          </p>

          <p className="text-base md:text-lg text-[#A1A1AA] max-w-3xl leading-relaxed font-sans">
            {service.description}
          </p>
        </ScrollReveal>
      </section>

      {/* DELIVERABLES CHECKLIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="WHAT WE DELIVER"
          number="— SCOPE"
          title="Core Capabilities & Deliverables"
          description="Detailed execution components included within this service discipline."
        />

        <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-4 p-4 rounded-xl bg-[#0A0F0C] border border-[#1C2921]">
                <CheckCircle2 className="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED WORK EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="PROVEN DELIVERABLES"
          number="— WORK"
          title="Related Case Studies"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((proj) => (
            <div key={proj.id} className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 flex flex-col justify-between card-glow-hover">
              <div>
                <span className="text-xs font-mono text-[#3DDC84] block mb-2">{proj.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">{proj.description}</p>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#3DDC84] hover:underline pt-4 border-t border-[#1C2921]"
              >
                <span>View project details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-LINKED CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="CROSS-DISCIPLINE INTEGRATION"
          number="— RELATED"
          title="Explore Related Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crossLinkedServices.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              className="bg-[#101713] border border-[#1C2921] rounded-2xl p-6 block hover:border-[#3DDC84] transition-all group"
            >
              <span className="text-xs font-mono text-[#3DDC84] block mb-2">SERVICE {rel.number}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-[#3DDC84] transition-colors mb-2">
                {rel.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mb-4">{rel.tagline}</p>
              <div className="flex items-center gap-1 text-xs font-mono text-[#3DDC84]">
                <span>Explore Service</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
