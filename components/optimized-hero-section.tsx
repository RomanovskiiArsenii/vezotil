
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OptimizedHeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                    window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Show fallback immediately on mobile for better performance
      if (mobile) {
        setShowFallback(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initialize video with timeout
    const initializeVideo = () => {
      const video = document.getElementById('heroVideo') as HTMLVideoElement;
      if (!video || isMobile) {
        setShowFallback(true);
        return;
      }

      console.log('Initializing video background');

      // Timeout for video loading
      const videoTimeout = setTimeout(() => {
        console.log('Video timeout, showing fallback');
        setShowFallback(true);
      }, 3000); // Reduced from 5000 to 3000

      const handleVideoLoad = () => {
        console.log('Video loaded successfully');
        clearTimeout(videoTimeout);
        setVideoLoaded(true);
        setShowFallback(false);
      };

      const handleVideoError = (e: Event) => {
        console.error('Video failed to load:', e);
        clearTimeout(videoTimeout);
        setShowFallback(true);
      };

      video.addEventListener('loadeddata', handleVideoLoad);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('stalled', handleVideoError);

      // Try to load the video
      if (video.readyState >= 3) {
        handleVideoLoad();
      }

      return () => {
        clearTimeout(videoTimeout);
        video.removeEventListener('loadeddata', handleVideoLoad);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('stalled', handleVideoError);
      };
    };

    // Delay video initialization to prevent blocking
    const initTimeout = setTimeout(initializeVideo, 500);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    document?.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen medical-bg relative overflow-hidden flex items-center">
      {/* Background video or fallback */}
      <div className="absolute inset-0 z-0">
        {!isMobile && (
          <video 
            id="heroVideo"
            className={`hero-video w-full h-full transition-opacity duration-1000 ${videoLoaded && !showFallback ? 'opacity-100' : 'opacity-0'}`}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="none"
            style={{ display: showFallback ? 'none' : 'block' }}
          >
            <source src="https://cdn.abacus.ai/videos/ab08ed29-67b6-42f3-a604-686c6203182d.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback animated background */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showFallback ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animated-bg absolute inset-0"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Main content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* HUD Header */}
          <div className="hud-element p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-sm hud-text">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-animation"></div>
              <span>VETERINARY SYSTEM ONLINE</span>
            </div>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hud-text">ВЕЗОТИЛ</span>
            <br />
            <span className="text-white text-4xl md:text-5xl">
              Инновационная анестезия
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Безопасный и эффективный ветеринарный препарат для анестезии с точной дозировкой. 
            Тилетамин + Золазепам для профессиональной ветеринарной практики.
          </motion.p>

          {/* Features */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hud-element p-4 rounded-lg scan-line">
              <Shield className="w-6 h-6 hud-text mb-2" />
              <div className="text-white font-semibold">Безопасность</div>
              <div className="text-sm text-gray-400">Проверенная формула</div>
            </div>
            <div className="hud-element p-4 rounded-lg scan-line">
              <Zap className="w-6 h-6 hud-text mb-2" />
              <div className="text-white font-semibold">Быстрое действие</div>
              <div className="text-sm text-gray-400">Эффект за минуты</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg medical-glow group"
            >
              Узнать больше
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg text-lg"
            >
              Заказать препарат
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - HUD Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Main HUD Panel */}
          <div className="hud-element p-6 rounded-lg space-y-4 floating">
            <div className="flex justify-between items-center">
              <h3 className="hud-text font-semibold">ПРЕПАРАТ АНАЛИЗ</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full pulse-animation"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Тилетамин:</span>
                <span className="hud-text">50 мг/мл</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Золазепам:</span>
                <span className="hud-text">50 мг/мл</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Объем:</span>
                <span className="hud-text">5 мл</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Эффективность:</span>
                <span className="text-green-400">98.7%</span>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 hud-element p-3 rounded-lg">
            <div className="hud-text text-sm">STATUS: READY</div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 hud-element p-3 rounded-lg">
            <div className="hud-text text-sm">DOSAGE: CALCULATED</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
}
