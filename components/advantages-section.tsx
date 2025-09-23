
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Heart, Users, CheckCircle, Award } from 'lucide-react';
import Image from 'next/image';

export default function AdvantagesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: Shield,
      title: 'Высокая безопасность',
      description: 'Минимальное воздействие на жизненно важные функции организма',
      stats: '98.5% успешных процедур'
    },
    {
      icon: Zap,
      title: 'Быстрое действие',
      description: 'Наступление анестезии через 2-5 минут после введения',
      stats: '2-5 мин до эффекта'
    },
    {
      icon: Heart,
      title: 'Стабильные показатели',
      description: 'Поддержание стабильной гемодинамики во время процедур',
      stats: 'ЧСС и АД в норме'
    },
    {
      icon: Users,
      title: 'Широкий спектр применения',
      description: 'Подходит для различных видов животных и процедур',
      stats: '15+ видов животных'
    },
    {
      icon: CheckCircle,
      title: 'Контролируемая анестезия',
      description: 'Предсказуемые время действия и восстановления',
      stats: '30-90 мин действия'
    },
    {
      icon: Award,
      title: 'Качество GMP',
      description: 'Производство в соответствии с международными стандартами',
      stats: 'GMP сертификат'
    }
  ];

  return (
    <section id="advantages" className="pt-32 pb-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-11"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Преимущества <span className="hud-text">ВЕЗОТИЛ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Современный подход к ветеринарной анестезии с доказанной эффективностью и безопасностью
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video section with two videos */}
          <div className="space-y-8">
            {/* Dog video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-800">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  style={{ 
                    willChange: 'auto',
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  <source src="/dog_video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                
                {/* Floating HUD elements */}
                <div className="absolute top-4 left-4 hud-element p-3 rounded-lg floating">
                  <div className="hud-text text-sm">МОНИТОРИНГ АКТИВЕН</div>
                </div>
                
                <div className="absolute bottom-4 right-4 hud-element p-3 rounded-lg floating">
                  <div className="hud-text text-sm">ПОКАЗАТЕЛИ В НОРМЕ</div>
                </div>
              </div>
            </motion.div>

            {/* Cat video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-800">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  style={{ 
                    willChange: 'auto',
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  <source src="/cat_video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                
                {/* Floating HUD elements */}
                <div className="absolute top-4 left-4 hud-element p-3 rounded-lg floating">
                  <div className="hud-text text-sm">КОНТРОЛЬ АНЕСТЕЗИИ</div>
                </div>
                
                <div className="absolute bottom-4 right-4 hud-element p-3 rounded-lg floating">
                  <div className="hud-text text-sm">БЕЗОПАСНОЕ ПРИМЕНЕНИЕ</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Advantages list */}
          <div className="grid grid-cols-1 gap-6">
            {advantages?.map((advantage, index) => (
              <motion.div
                key={advantage?.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="hud-element p-6 rounded-lg scan-line group hover:medical-glow transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="hud-element p-3 rounded-lg group-hover:pulse-animation">
                    <advantage.icon className="w-6 h-6 hud-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{advantage?.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{advantage?.description}</p>
                    <div className="hud-text text-xs font-semibold">{advantage?.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 hud-element p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold hud-text text-center mb-8">Клинические показатели</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 pulse-animation">98.5%</div>
              <div className="text-gray-400">Успешных операций</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 pulse-animation">&lt;3мин</div>
              <div className="text-gray-400">Время индукции</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 pulse-animation">60мин</div>
              <div className="text-gray-400">Среднее время действия</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 pulse-animation">15+</div>
              <div className="text-gray-400">Видов животных</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
    </section>
  );
}
