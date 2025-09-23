
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen medical-bg relative overflow-hidden flex items-center pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="hero-video w-full h-full"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/vezotil-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
        {/* Left side - Main content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white leading-none relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ lineHeight: '0.9' }}
          >
            <span className="hud-text block">ВЕЗОТИЛ</span>
            <span className="text-white text-3xl md:text-4xl block mt-1">
              Инновационная
            </span>
            <span className="text-white text-3xl md:text-4xl block -mt-1">
              анестезия
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
            className="flex flex-col sm:flex-row gap-4 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(29, 78, 216, 0.25))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(59, 130, 246, 0.2)'
              }}
            >
              {/* Подсветка по периметру */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              {/* Анимированный перелив */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              
              {/* Основное свечение */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative flex items-center justify-center z-10">
                Узнать больше
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.25))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(16, 185, 129, 0.2)'
              }}
            >
              {/* Подсветка по периметру */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/30 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              {/* Анимированный перелив */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              
              {/* Основное свечение */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative flex items-center justify-center z-10">
                Заказать препарат
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - HUD Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-6 min-h-[300px] flex items-center justify-center"
        >
          {/* Container for all HUD elements with proper spacing */}
          <div className="relative w-full max-w-sm">
            {/* Top status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-0 right-0 z-20"
            >
              <div className="hud-element px-3 py-1.5 rounded-lg shadow-lg border border-cyan-400/30">
                <div className="hud-text text-xs font-semibold whitespace-nowrap">STATUS: READY</div>
              </div>
            </motion.div>

            {/* Main HUD Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hud-element p-6 rounded-lg space-y-4 floating relative mt-8 mb-8"
            >
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
            </motion.div>

            {/* Bottom status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute bottom-0 left-0 z-20"
            >
              <div className="hud-element px-3 py-1.5 rounded-lg shadow-lg border border-cyan-400/30">
                <div className="hud-text text-xs font-semibold whitespace-nowrap">DOSAGE: CALCULATED</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
}
