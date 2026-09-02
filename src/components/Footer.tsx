import React from 'react';
import Link from 'next/link';
import PktClock from './PktClock';
import { SITE_META, CAPABILITIES } from '@/data/content';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070A08] border-t border-[#1C2921] pt-16 pb-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1C2921]">
          {/* Brand & Coordinates Block */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-extrabold text-3xl tracking-tight text-white font-sans">
                <span className="text-[#3DDC84]">te</span>glax
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-sm text-[#A1A1AA]">
              {SITE_META.description}
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-[#71717A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3DDC84]" />
                <span>HQ: {SITE_META.hq.coords} (Okara, PK)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3DDC84]" />
                <span>US Ops: Remote-first, US Client Coverage</span>
              </div>
              <div className="pt-2">
                <PktClock className="text-xs" />
              </div>
            </div>
          </div>

          {/* Sitemap Navigation Column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#3DDC84] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Teglax</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Client Testimonials</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Stories & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Disciplines Column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#3DDC84] mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CAPABILITIES.slice(0, 6).map((cap) => (
                <li key={cap.slug}>
                  <Link href={`/services/${cap.slug}`} className="hover:text-white transition-colors">
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links Column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#3DDC84] mb-4">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${SITE_META.hq.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#3DDC84]" />
                  <span>{SITE_META.hq.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_META.hq.phone}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#3DDC84]" />
                  <span>{SITE_META.hq.phone}</span>
                </a>
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <a href={SITE_META.socials.upwork} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Upwork Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
                <a href={SITE_META.socials.clutch} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Clutch Reviews</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
                <a href={SITE_META.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#3DDC84]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © {new Date().getFullYear()} Teglax. All rights reserved. Est. 2023.
          </div>
          <div className="flex gap-6">
            <span>Okara, Pakistan (HQ)</span>
            <span>·</span>
            <span>US Client Coverage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
