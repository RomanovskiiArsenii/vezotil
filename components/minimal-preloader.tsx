'use client';

import { useEffect, useState } from 'react';

export default function MinimalPreloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Очень простой таймер без сложной логики
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 300); // Ускорено до 300ms

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95">
            <div className="text-center">
                <div className="custom-preloader w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <div className="text-white text-sm">ВЕЗОТИЛ</div>
            </div>
        </div>
    );
}
