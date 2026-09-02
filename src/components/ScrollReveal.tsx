'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = ""
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30, opacity: 0 };
      case 'down': return { y: -30, opacity: 0 };
      case 'left': return { x: 30, opacity: 0 };
      case 'right': return { x: -30, opacity: 0 };
      case 'none': return { opacity: 0 };
      default: return { y: 30, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down': return { y: 0, opacity: 1 };
      case 'left':
      case 'right': return { x: 0, opacity: 1 };
      case 'none': return { opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Smooth Riangle-style ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
