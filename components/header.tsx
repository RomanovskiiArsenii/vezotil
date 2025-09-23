
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = useMemo(() => [
    { label: 'Преимущества', href: '#advantages', type: 'scroll' },
    { label: 'Показания', href: '#indications', type: 'scroll' },
    { label: 'Производитель', href: '/about', type: 'link' },
    { label: 'Специалистам', href: '/blog', type: 'link', submenu: [
        { label: 'Блог', href: '/blog' },
        { label: 'Вебинары', href: '/webinars' },
        { label: 'Публикации', href: '/publications' },
        { label: 'Клинические исследования', href: '/clinicals' }
      ]
    },
    { label: 'FAQ', href: '/faq', type: 'link' },
    { label: 'Отзывы\nврачей', href: '/video', type: 'link' },
    { label: 'Контакты', href: '#contact', type: 'scroll' }
  ], []);

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 50);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const scrollToSection = useCallback((href: string) => {
    if (typeof document !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  }, []);

  const scrollToHero = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  // Новая функция для умной навигации
  const navigateToSection = (href: string) => {
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // Если на главной странице - обычный скролл
      scrollToSection(href);
    } else {
      // Если на другой странице - переход на главную с якорем
      router.push(`/${href}`);
      setIsOpen(false);
      
      // После навигации попробуем проскроллить к нужной секции
      setTimeout(() => {
        if (typeof document !== 'undefined') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  };

  // Функция для перехода на главную страницу
  const navigateToHome = () => {
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // Если на главной - скролл наверх
      scrollToHero();
    } else {
      // Если на другой странице - переход на главную
      router.push('/');
      setIsOpen(false);
    }
  };

  const handleNavClick = (item: any) => {
    if (item.type === 'scroll') {
      navigateToSection(item.href);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-slate-900/90 border-b border-blue-400/30' : 'bg-transparent'
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-6xl overflow-x-hidden">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Split into two clickable elements */}
          <div className="flex items-center space-x-3 p-2">
            {/* Clickable Cardio Symbol */}
            <motion.button
              className="hud-element p-2 m-1 rounded-lg pulse-animation hover:medical-glow transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              onClick={navigateToHome}
              title="На главную"
            >
              <Activity className="w-8 h-8 hud-text group-hover:text-cyan-300" />
            </motion.button>
            
            {/* Clickable Company Name */}
            <motion.button
              className="text-left hover:medical-glow transition-all duration-300 p-2 m-1 rounded-lg group"
              whileHover={{ scale: 1.02 }}
              onClick={() => navigateToSection('#about')}
              title="О препарате"
            >
              <h1 className="text-2xl font-bold hud-text group-hover:text-cyan-300">ВЕЗОТИЛ</h1>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">ВЕТСТЕМ</p>
            </motion.button>
          </div>

          {/* Desktop Navigation - Full Menu */}
          <nav className="hidden xl:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                {item.type === 'link' ? (
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300 font-medium block text-center text-sm leading-tight min-w-[80px]"
                  >
                    <span className="whitespace-pre-line">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300 font-medium text-center text-sm leading-tight min-w-[80px]"
                  >
                    <span className="whitespace-pre-line">{item.label}</span>
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Compact Navigation for large screens */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 flex-1 justify-center">
            {navItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                {item.type === 'link' ? (
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="px-2 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300 font-medium text-center text-xs leading-tight"
                  >
                    <span className="whitespace-pre-line">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-2 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300 font-medium text-center text-xs leading-tight"
                  >
                    <span className="whitespace-pre-line">{item.label}</span>
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <button 
              onClick={() => navigateToSection('#contact')}
              className="relative px-6 py-3 text-sm font-semibold text-white rounded-lg overflow-hidden
                         hud-element backdrop-blur-md bg-gradient-to-r from-blue-600/80 via-cyan-500/80 to-blue-600/80
                         hover:from-blue-500/80 hover:via-cyan-400/80 hover:to-blue-500/80
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:via-cyan-300/20 before:to-blue-500/20
                         before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                         shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/25
                         transform transition-all duration-300 hover:scale-105
                         medical-glow"
            >
              <span className="relative z-10">Заказать</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hud-element rounded-lg"
          >
            {isOpen ? (
              <X className="w-6 h-6 hud-text" />
            ) : (
              <Menu className="w-6 h-6 hud-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2 bg-slate-900/95 rounded-lg mt-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.type === 'link' ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => navigateToSection('#contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Заказать препарат
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
