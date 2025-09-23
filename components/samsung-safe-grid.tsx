
'use client';

import { ReactNode } from 'react';

interface SamsungSafeGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  gap?: 'small' | 'medium' | 'large';
}

export default function SamsungSafeGrid({
  children,
  columns = 3,
  className = '',
  gap = 'medium'
}: SamsungSafeGridProps) {
  const gapClasses = {
    small: 'gap-2 sm:gap-4',
    medium: 'gap-4 sm:gap-6',
    large: 'gap-6 sm:gap-8'
  };
  
  const gridClasses = {
    1: 'mobile-card-grid',
    2: 'mobile-card-grid md:grid-cols-2',
    3: 'mobile-card-grid md:grid-cols-2 lg:grid-cols-3',
    4: 'mobile-card-grid md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div 
      className={`
        ${gridClasses[columns]}
        ${gapClasses[gap]}
        no-horizontal-scroll
        samsung-browser-fix
        ${className}
      `}
    >
      {children}
    </div>
  );
}
