
'use client';

import { useEffect, useState } from 'react';

export default function SimplePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simple timeout-based preloader with fallback
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5 seconds max

    // Also hide on window load
    const handleLoad = () => {
      clearTimeout(timer);
      setTimeout(() => setIsVisible(false), 500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-white text-lg font-medium">ВЕЗОТИЛ</div>
        <div className="text-blue-400 text-sm mt-1">Загрузка...</div>
      </div>
    </div>
  );
}
