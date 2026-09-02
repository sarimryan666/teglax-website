import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  number?: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  link?: string;
}

export default function ProjectCard({
  number,
  title,
  category,
  description,
  tags,
  metrics,
  featured = false,
  link = "/work"
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className={`group relative block rounded-2xl bg-[#101713] border border-[#1C2921] p-6 md:p-8 card-glow-hover transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Bar: Number & Arrow indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {number && (
            <span className="font-mono text-xs text-[#3DDC84] font-semibold px-2.5 py-1 rounded bg-[#16201B] border border-[#1C2921]">
              {number}
            </span>
          )}
          <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA]">
            {category}
          </span>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#16201B] border border-[#1C2921] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#0A0F0C] group-hover:bg-[#3DDC84] group-hover:border-[#3DDC84] transition-all transform group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#3DDC84] transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed mb-6">
        {description}
      </p>

      {/* Browser/Device Mockup Graphic Placeholder */}
      <div className="relative w-full h-48 md:h-56 rounded-xl bg-[#0A0F0C] border border-[#1C2921] overflow-hidden mb-6 p-4 flex flex-col justify-between group-hover:border-[#3DDC84]/40 transition-colors">
        {/* Mockup Top Window Controls */}
        <div className="flex items-center justify-between border-b border-[#1C2921] pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[10px] font-mono text-[#71717A]">teglax.com/work/{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>

        {/* Mockup Inner Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3DDC84] mb-1">PROVEN BUILD</span>
          <span className="text-lg font-bold text-white">{title} Platform</span>
          {metrics && (
            <span className="mt-2 text-xs font-mono text-[#A1A1AA] px-3 py-1 rounded-full bg-[#101713] border border-[#1C2921]">
              {metrics}
            </span>
          )}
        </div>
      </div>

      {/* Tag Chips */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-[#A1A1AA] px-3 py-1 rounded-full bg-[#16201B] border border-[#1C2921] group-hover:border-[#3DDC84]/30 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
