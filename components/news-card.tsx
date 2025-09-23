
'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  title: string;
  excerpt: string;
  publishDate: string;
  author: string;
  slug: string;
  isImportant?: boolean;
  featuredImage?: string;
  index?: number;
}

export default function NewsCard({
  title,
  excerpt,
  publishDate,
  author,
  slug,
  isImportant = false,
  featuredImage,
  index = 0
}: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`hud-element rounded-lg overflow-hidden hover:medical-glow transition-all duration-300 mobile-card samsung-safe-card ${
        isImportant ? 'ring-2 ring-blue-400/30' : ''
      }`}
    >
      {featuredImage && (
        <div className="relative h-48 sm:h-48 image-height-mobile-fix bg-gray-200">
          <Image 
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
          />
          {isImportant && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-blue-500 px-2 py-1 rounded-full text-xs text-white overflow-safe">
                <Star className="w-3 h-3 flex-shrink-0" />
                <span className="whitespace-nowrap">Важно</span>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-4 sm:p-6 mobile-card-content overflow-wrap-safe">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400 mb-3 space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-1 overflow-safe">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm">{new Date(publishDate).toISOString().split('T')[0]}</span>
          </div>
          <div className="flex items-center space-x-1 overflow-safe">
            <User className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate max-w-[150px]">{author}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/news/${slug}`}
          className="inline-flex items-center space-x-2 hud-text hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
        >
          <span className="whitespace-nowrap">Читать далее</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </Link>
      </div>
    </motion.div>
  );
}
