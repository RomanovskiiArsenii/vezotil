'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Beaker, Target, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: Beaker,
            title: 'Состав',
            description: 'Тилетамин + Золазепам',
            detail: '50 мг/мл + 50 мг/мл в готовом растворе',
            isClickable: true,
            href: '/instruction',
            buttonText: 'Ознакомиться с Инструкцией',
        },
        {
            icon: Target,
            title: 'Точная дозировка',
            description: 'Строгий контроль качества',
            detail: 'Флакон 5 мл для точного расчета',
            isClickable: true,
            href: '/certificates',
            buttonText: 'Сертификаты качества',
        },
        {
            icon: Clock,
            title: 'Быстрое действие',
            description: 'Наступление эффекта за 2-5 минут',
            detail: 'Продолжительность 30-90 минут',
            isClickable: true,
            href: '/how-to-use',
            buttonText: 'Как использовать',
        },
        {
            icon: ShieldCheck,
            title: 'Безопасность',
            description: 'Проверенная формула',
            detail: 'Минимальные побочные эффекты',
            isClickable: true,
            href: '/adverse-reactions',
            buttonText: 'Сообщить о нежелательной реакции',
        },
    ];

    return (
        <section id="about" className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-11"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        О препарате <span className="hud-text">ВЕЗОТИЛ</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Инновационный ветеринарный лиофилизат для приготовления раствора для инъекций. Разработан ООО
                        "ВЕТСТЕМ" для безопасной и эффективной анестезии животных.
                        <br />
                        РУ № 77-3-29.23-5075ПВР-3-29.23/03889 от 28.12.2023 г.
                    </p>
                </motion.div>

                <div className="custom-overflow-y-hide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2">
                    {features?.map((feature, index) => (
                        <motion.div
                            key={feature?.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="custom-overflow-visible p-2"
                        >
                            {feature.isClickable && feature.href ? (
                                <Link href={feature.href}>
                                    <div className="hud-element p-6 rounded-lg scan-line group hover:medical-glow transition-all duration-300 cursor-pointer hover:scale-105 hover:border-cyan-400 min-h-[20rem] flex flex-col">
                                        <div className="text-center space-y-3 flex-1 flex flex-col justify-between">
                                            <div className="space-y-3">
                                                <div className="mx-auto w-12 h-12 hud-element rounded-full flex items-center justify-center group-hover:pulse-animation">
                                                    <feature.icon className="w-6 h-6 hud-text" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white leading-tight">
                                                    {feature?.title}
                                                </h3>
                                                <p className="text-sm text-gray-300 leading-tight">
                                                    {feature?.description}
                                                </p>
                                                <p className="text-xs hud-text leading-tight">{feature?.detail}</p>
                                            </div>
                                            <div className="pt-3">
                                                <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold group-hover:from-cyan-500 group-hover:to-blue-500 transition-all text-center leading-tight max-w-full">
                                                    <div className="truncate">{feature?.buttonText || 'Подробнее'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="hud-element p-6 rounded-lg scan-line group hover:medical-glow transition-all duration-300 min-h-[20rem] flex flex-col">
                                    <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                                        <div className="mx-auto w-12 h-12 hud-element rounded-full flex items-center justify-center group-hover:pulse-animation">
                                            <feature.icon className="w-6 h-6 hud-text" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white leading-tight">
                                            {feature?.title}
                                        </h3>
                                        <p className="text-sm text-gray-300 leading-tight">{feature?.description}</p>
                                        <p className="text-xs hud-text leading-tight">{feature?.detail}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Composition Details */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 hud-element p-8 rounded-lg"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold hud-text mb-4">Состав препарата</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-blue-400/20">
                                    <span className="text-gray-300">Тилетамин гидрохлорид</span>
                                    <span className="hud-text font-semibold">250 мг</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-blue-400/20">
                                    <span className="text-gray-300">Золазепам гидрохлорид</span>
                                    <span className="hud-text font-semibold">250 мг</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-blue-400/20">
                                    <span className="text-gray-300">Форма выпуска</span>
                                    <span className="text-white">Лиофилизат</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-300">Объем флакона</span>
                                    <span className="text-white">5 мл</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Механизм действия</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Тилетамин обеспечивает диссоциативную анестезию, блокируя NMDA-рецепторы. Золазепам
                                усиливает действие ГАМК, обеспечивая седативный эффект и мышечную релаксацию.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Комбинация обеспечивает сбалансированную анестезию с минимальными побочными эффектами на
                                дыхательную и сердечно-сосудистую системы.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
