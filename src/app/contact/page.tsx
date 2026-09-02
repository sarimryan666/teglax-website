'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import PktClock from '@/components/PktClock';
import { SITE_META, CAPABILITIES } from '@/data/content';
import { MapPin, Mail, Phone, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web-development',
    budget: '$5k - $10k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* HEADER SECTION */}
      <section className="pt-12 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1C2921] bg-[#101713] text-xs font-mono text-[#3DDC84] mb-6">
            <span>— GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
            Let's limit the galaxies, together.
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans mb-8">
            Tell us the number you want to move. We'll design, build and grow the thing that moves it.
          </p>
        </ScrollReveal>
      </section>

      {/* MAIN CONTACT CONTENT: FORM + LOCATION DETAILS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Interactive Form Column */}
          <div className="lg:col-span-7 bg-[#101713] border border-[#1C2921] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6">Start a Conversation</h2>

            {submitted ? (
              <div className="bg-[#0A0F0C] border border-[#3DDC84] rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#3DDC84] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-[#A1A1AA]">
                  Thank you for reaching out to Teglax. We will review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full border border-[#1C2921] text-xs font-mono text-[#3DDC84] hover:border-[#3DDC84]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Sarim Rayyan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white focus:outline-none focus:border-[#3DDC84] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white focus:outline-none focus:border-[#3DDC84] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white focus:outline-none focus:border-[#3DDC84] text-sm"
                    >
                      {CAPABILITIES.map((cap) => (
                        <option key={cap.slug} value={cap.slug}>
                          {cap.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white focus:outline-none focus:border-[#3DDC84] text-sm"
                    >
                      <option value="< $5k">&lt; $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k+">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#A1A1AA] mb-2">Project Overview</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your goals, target audience, timeline, or key metrics to move..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white focus:outline-none focus:border-[#3DDC84] text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#3DDC84] text-[#0A0F0C] hover:bg-[#32b56c] transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Location & Direct Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pakistan HQ Box */}
            <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  HEADQUARTERS
                </span>
                <PktClock />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pakistan (HQ)</h3>
              <p className="text-xs text-[#A1A1AA] mb-4">{SITE_META.hq.address}</p>

              <div className="space-y-2 text-sm text-white pt-4 border-t border-[#1C2921] font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3DDC84]" />
                  <span>{SITE_META.hq.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#3DDC84]" />
                  <a href={`mailto:${SITE_META.hq.email}`} className="hover:underline">{SITE_META.hq.email}</a>
                </div>
              </div>
            </div>

            {/* US Operations Box */}
            <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#3DDC84] px-3 py-1 rounded bg-[#16201B] border border-[#1C2921]">
                  OPERATIONS
                </span>
                <span className="text-xs font-mono text-[#71717A]">REMOTE-FIRST</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">US Operations</h3>
              <p className="text-xs text-[#A1A1AA] mb-4">{SITE_META.usOps.address}</p>

              <div className="space-y-2 text-sm text-white pt-4 border-t border-[#1C2921] font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3DDC84]" />
                  <span>{SITE_META.usOps.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#3DDC84]" />
                  <a href={`mailto:${SITE_META.usOps.email}`} className="hover:underline">{SITE_META.usOps.email}</a>
                </div>
              </div>
            </div>

            {/* Socials & Outbound Platforms */}
            <div className="bg-[#101713] border border-[#1C2921] rounded-3xl p-8">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-4">DIRECT PROFILES</span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a href={SITE_META.socials.upwork} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white hover:border-[#3DDC84] flex items-center justify-between">
                  <span>Upwork Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3DDC84]" />
                </a>
                <a href={SITE_META.socials.clutch} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white hover:border-[#3DDC84] flex items-center justify-between">
                  <span>Clutch Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3DDC84]" />
                </a>
                <a href={SITE_META.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white hover:border-[#3DDC84] flex items-center justify-between">
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3DDC84]" />
                </a>
                <a href={SITE_META.socials.x} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0A0F0C] border border-[#1C2921] text-white hover:border-[#3DDC84] flex items-center justify-between">
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3DDC84]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
