
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useState, useEffect } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'dark' | 'darker' | 'gradient';
  animate?: boolean;
}

export default function ContentSection({ 
  children, 
  className = '',
  background = 'dark',
  animate = true 
}: ContentSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '100px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundClasses = {
    dark: 'bg-slate-900',
    darker: 'bg-slate-800',
    gradient: 'bg-gradient-to-b from-slate-900 to-slate-800'
  };

  const content = (
    <section className={`py-20 ${backgroundClasses[background]} ${className} overflow-x-hidden`}>
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 overflow-x-hidden">
        {children}
      </div>
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {content}
    </motion.div>
  );
}
