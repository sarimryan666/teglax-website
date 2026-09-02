import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  number?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  number,
  title,
  description,
  centered = false,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {(eyebrow || number) && (
        <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#3DDC84] uppercase mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="w-6 h-[1px] bg-[#3DDC84]/60"></span>
          <span>{number && `${number} `}{eyebrow || ''}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
