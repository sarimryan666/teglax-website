'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function PktClock({ showIcon = true, className = "" }: { showIcon?: boolean; className?: string }) {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time specifically for Asia/Karachi (PKT, UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeStr(`${formatted} PKT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) {
    return (
      <span className={`inline-flex items-center gap-2 text-xs font-mono text-[#A1A1AA] ${className}`}>
        {showIcon && <Clock className="w-3.5 h-3.5 text-[#3DDC84]" />}
        <span>--:--:-- PKT</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-mono text-[#A1A1AA] tracking-wider ${className}`}>
      {showIcon && <Clock className="w-3.5 h-3.5 text-[#3DDC84] animate-pulse" />}
      <span>{timeStr}</span>
    </span>
  );
}
