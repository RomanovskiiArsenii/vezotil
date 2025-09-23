
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SamsungSafeCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  animation?: boolean;
  index?: number;
}

export default function SamsungSafeCard({
  children,
  className = '',
  title,
  subtitle,
  imageUrl,
  imageAlt,
  animation = true,
  index = 0
}: SamsungSafeCardProps) {
  const CardWrapper = animation ? motion.div : 'div';
  const animationProps = animation ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.1 }
  } : {};

  return (
    <CardWrapper
      {...animationProps}
      className={`
        card-layout-safe
        samsung-safe-card
        hw-accelerated
        samsung-browser-fix
        hover:medical-glow transition-all duration-300
        ${className}
      `}
    >
      {imageUrl && (
        <div className="image-container-safe">
          <img
            src={imageUrl}
            alt={imageAlt || title || 'Image'}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              aspectRatio: '16/9'
            }}
          />
        </div>
      )}
      
      <div className="card-content-safe">
        {title && (
          <h3 className="text-title-safe card-title-safe samsung-safe-text font-semibold text-white">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-body-safe card-excerpt-safe samsung-safe-text text-gray-300">
            {subtitle}
          </p>
        )}
        
        <div className="text-container-safe overflow-wrap-safe">
          {children}
        </div>
      </div>
    </CardWrapper>
  );
}
