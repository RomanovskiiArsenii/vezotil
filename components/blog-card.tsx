
'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  publishDate: string;
  author: string;
  slug: string;
  category: string;
  readTime: number;
  isPopular?: boolean;
  featuredImage?: string;
  index?: number;
}

export default function BlogCard({
  title,
  excerpt,
  publishDate,
  author,
  slug,
  category,
  readTime,
  isPopular = false,
  featuredImage,
  index = 0
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    education: 'bg-blue-500',
    research: 'bg-purple-500',
    'case-study': 'bg-green-500',
    announcement: 'bg-orange-500',
    tips: 'bg-cyan-500'
  };

  const categoryNames: Record<string, string> = {
    education: 'Образование',
    research: 'Исследования',
    'case-study': 'Клинические случаи',
    announcement: 'Объявления',
    tips: 'Советы'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="hud-element rounded-lg overflow-hidden hover:medical-glow transition-all duration-300 mobile-card samsung-safe-card"
    >
      {featuredImage && (
        <div className="relative h-48 sm:h-48 image-height-mobile-fix bg-gray-200">
          <Image 
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2 flex-wrap">
            <div className={`px-2 py-1 rounded-full text-xs text-white overflow-safe ${categoryColors[category] || 'bg-gray-500'}`}>
              {categoryNames[category] || category}
            </div>
            {isPopular && (
              <div className="flex items-center space-x-1 bg-red-500 px-2 py-1 rounded-full text-xs text-white overflow-safe">
                <TrendingUp className="w-3 h-3 flex-shrink-0" />
                <span className="whitespace-nowrap">Популярно</span>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="p-4 sm:p-6 mobile-card-content overflow-wrap-safe">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 mb-3 space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-1 overflow-safe">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{new Date(publishDate).toISOString().split('T')[0]}</span>
            </div>
            <div className="flex items-center space-x-1 overflow-safe">
              <User className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate max-w-[150px]">{author}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 overflow-safe">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">{readTime} мин</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center space-x-2 hud-text hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
        >
          <span className="whitespace-nowrap">Читать статью</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </Link>
      </div>
    </motion.div>
  );
}
