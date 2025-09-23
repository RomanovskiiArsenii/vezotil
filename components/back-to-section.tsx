
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackToSectionProps {
  href: string;
  label?: string;
}

export default function BackToSection({ href, label = "Вернуться в раздел" }: BackToSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="mb-8"
    >
      <Link 
        href={href}
        prefetch={true}
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20"
      >
        <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 group-hover:-translate-x-1 transition-all duration-300" />
        <span className="text-cyan-400 group-hover:text-cyan-300 font-medium text-sm">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}
