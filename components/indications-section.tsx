'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dog, Cat, Activity, Scissors, Stethoscope, Syringe } from 'lucide-react';

export default function IndicationsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animals = [
        { icon: Dog, name: 'Собаки', description: 'Все породы и размеры' },
        { icon: Cat, name: 'Кошки', description: 'Домашние и дикие' },
        { icon: Activity, name: 'Экзотические', description: 'Рептилии, птицы' },
    ];

    const procedures = [
        {
            icon: Scissors,
            title: 'Хирургические операции',
            description: 'Плановые и экстренные оперативные вмешательства',
            examples: ['Кастрация/стерилизация', 'Удаление новообразований', 'Ортопедические операции'],
        },
        {
            icon: Stethoscope,
            title: 'Диагностические процедуры',
            description: 'Исследования, требующие неподвижности животного',
            examples: ['Рентгенография', 'КТ и МРТ', 'Эндоскопия'],
        },
        {
            icon: Syringe,
            title: 'Болезненные манипуляции',
            description: 'Процедуры, вызывающие дискомфорт у животного',
            examples: ['Биопсия тканей', 'Дренирование', 'Обработка ран'],
        },
    ];

    return (
        <section id="indications" className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Показания к применению</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        <span className="hud-text">ВЕЗОТИЛ</span> подходит для широкого спектра ветеринарных процедур
                    </p>
                </motion.div>

                {/* Animals */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">Виды животных</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {animals?.map((animal, index) => (
                            <motion.div
                                key={animal?.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="hud-element p-6 rounded-lg text-center scan-line hover:medical-glow transition-all duration-300"
                            >
                                <div className="mx-auto w-16 h-16 hud-element rounded-full flex items-center justify-center mb-4 pulse-animation">
                                    <animal.icon className="w-8 h-8 hud-text" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{animal?.name}</h4>
                                <p className="text-gray-300">{animal?.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Procedures */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">Типы процедур</h3>
                    {procedures?.map((procedure, index) => (
                        <motion.div
                            key={procedure?.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                            className="hud-element p-8 rounded-lg"
                        >
                            <div className="custom-overflow-visible grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                <div className="custom-overflow-visible custom-gap16 flex items-center space-x-4">
                                    <div className="custom-flex-shrink-0 hud-element p-4 rounded-lg pulse-animation">
                                        <div className="w-8 h-8 custom-object-contain">
                                            <procedure.icon className="hud-text" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">{procedure?.title}</h4>
                                        <p className="text-gray-300">{procedure?.description}</p>
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {procedure?.examples?.map((example, exIndex) => (
                                            <div
                                                key={example}
                                                className="bg-slate-800/50 p-3 rounded-lg border-l-4 border-blue-400"
                                            >
                                                <div className="text-white text-sm">{example}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dosage Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 hud-element p-8 rounded-lg"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold hud-text mb-6">Рекомендуемые дозировки</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <div className="text-lg font-semibold text-white">Собаки</div>
                                <div className="hud-text text-2xl font-bold">0.2-0.4 мл/кг</div>
                                <div className="text-gray-400">в зависимости от размера</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg font-semibold text-white">Кошки</div>
                                <div className="hud-text text-2xl font-bold">0.15-0.3 мл/кг</div>
                                <div className="text-gray-400">индивидуально</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg font-semibold text-white">Экзотические</div>
                                <div className="hud-text text-2xl font-bold">0.1-0.5 мл/кг</div>
                                <div className="text-gray-400">по рекомендации врача</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
