'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    showBackButton?: boolean;
    breadcrumbs?: Array<{ label: string; href: string }>;
}

export default function PageHeader({
    title,
    subtitle,
    backgroundImage,
    showBackButton = true,
    breadcrumbs = [],
}: PageHeaderProps) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '100px' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section ref={ref} className="relative pt-32 pb-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
                {backgroundImage && (
                    <div className="relative w-full h-full bg-gray-200 aspect-video">
                        <Image src={backgroundImage} alt={title} fill className="object-cover opacity-20" priority />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/60" />
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="medical-grid-pattern" />
            </div>

            {/* Content */}
            <div className="custom-overflow-y-hide relative z-10 container mx-auto px-4 lg:px-8 xl:px-12 overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Back button */}
                    {showBackButton && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="mb-6 flex justify-center md:justify-start"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center space-x-2 hud-element px-4 py-2 rounded-lg hover:medical-glow transition-all duration-300"
                            >
                                <ArrowLeft className="w-4 h-4 hud-text" />
                                <span className="text-white">Вернуться на главную</span>
                            </Link>
                        </motion.div>
                    )}

                    {/* Breadcrumbs */}
                    {breadcrumbs.length > 0 && (
                        <motion.nav
                            initial={{ opacity: 0, y: 10 }}
                            animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="mb-8"
                        >
                            <div className="custom-mobile-hide flex items-center justify-center space-x-2 text-sm text-gray-400">
                                {breadcrumbs.map((crumb, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        {index > 0 && <span className="text-gray-600">/</span>}
                                        <Link
                                            href={crumb.href}
                                            className="hover:hud-text transition-colors duration-300"
                                        >
                                            {crumb.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </motion.nav>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {title.split(' ').map((word, index) => (
                            <span key={index}>
                                {word === 'ВЕЗОТИЛ' ? <span className="hud-text">{word}</span> : word}{' '}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={mounted && inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="mt-12 flex justify-center"
                    >
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Static floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${i * 10 + 5}%`,
                            top: `${i * 8 + 10}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
