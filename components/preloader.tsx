'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let contentLoaded = false;

        const hidePreloader = () => {
            if (contentLoaded) return;
            contentLoaded = true;
            console.log('Hiding preloader');

            // Fade out animation
            const preloaderElement = document.getElementById('preloader');
            if (preloaderElement) {
                preloaderElement.style.opacity = '0';
                preloaderElement.style.transition = 'opacity 0.5s ease';

                setTimeout(() => {
                    setIsVisible(false);
                }, 500);
            }
        };

        // Force hide preloader after maximum 3 seconds
        const forceHideTimeout = setTimeout(() => {
            console.log('Force hiding preloader after timeout');
            hidePreloader();
        }, 3000);

        // Hide when page is fully loaded
        const handleLoad = () => {
            console.log('Window load event fired');
            clearTimeout(forceHideTimeout);
            setTimeout(hidePreloader, 800); // Small delay for better UX
        };

        // Hide after DOM ready with small delay
        const domReadyTimeout = setTimeout(() => {
            if (!contentLoaded) {
                console.log('Hiding preloader after DOM ready delay');
                clearTimeout(forceHideTimeout);
                hidePreloader();
            }
        }, 2000);

        // Error handling - force hide on any JavaScript errors
        const handleError = (e: ErrorEvent) => {
            console.error('JavaScript error detected:', e.error);
            if (!contentLoaded) {
                console.log('Force hiding preloader due to error');
                clearTimeout(forceHideTimeout);
                clearTimeout(domReadyTimeout);
                hidePreloader();
            }
        };

        window.addEventListener('load', handleLoad);
        window.addEventListener('error', handleError);

        return () => {
            clearTimeout(forceHideTimeout);
            clearTimeout(domReadyTimeout);
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('error', handleError);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            id="preloader"
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                background: 'linear-gradient(135deg, #0a0f1c, #1a2332)',
            }}
        >
            <div className="text-center">
                {/* Simple spinner */}
                <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>

                {/* Minimal text */}
                <div className="text-white text-lg font-medium">ВЕЗОТИЛ</div>
                <div className="text-blue-400 text-sm mt-2">Загрузка...</div>
            </div>
        </div>
    );
}
