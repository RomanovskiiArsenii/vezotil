'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlaskConical, Calculator, Syringe, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function InstructionsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            icon: FlaskConical,
            title: 'Приготовление раствора',
            description: 'Восстановление лиофилизата стерильной водой для инъекций',
            details: [
                'Добавить 5 мл стерильной воды',
                'Аккуратно перемешать до полного растворения',
                'Проверить прозрачность раствора',
            ],
        },
        {
            icon: Calculator,
            title: 'Расчет дозировки',
            description: 'Точный расчет дозы в зависимости от веса и вида животного',
            details: ['Взвесить животное', 'Применить коэффициент для вида', 'Рассчитать объем в мл'],
        },
        {
            icon: Syringe,
            title: 'Введение препарата',
            description: 'Внутривенное и/или внутримышечное введение с соблюдением асептики',
            details: ['Обработать место инъекции', 'Ввести медленно в мышцу', 'Контролировать состояние животного'],
        },
        {
            icon: Clock,
            title: 'Мониторинг',
            description: 'Наблюдение за животным в течение всего периода действия',
            details: [
                'Следить за дыханием и пульсом',
                'Контролировать температуру тела',
                'Фиксировать время восстановления',
            ],
        },
    ];

    const timeline = [
        { time: '0-2 мин', event: 'Введение препарата', status: 'injection' },
        { time: '2-5 мин', event: 'Начало седации', status: 'onset' },
        { time: '5-10 мин', event: 'Полная анестезия', status: 'full' },
        { time: '30-90 мин', event: 'Период действия', status: 'active' },
        { time: '90-120 мин', event: 'Возврат', status: 'recovery' },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Пособие по применению</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Пошаговое руководство по безопасному применению <span className="hud-text">ВЕЗОТИЛ</span>
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-8 mb-16">
                    {steps?.map((step, index) => (
                        <motion.div
                            key={step?.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="hud-element p-8 rounded-lg scan-line"
                        >
                            <div className="custom-overflow-visible grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                                <div className="custom-overflow-visible flex items-center space-x-4">
                                    <div className="custom-overflow-visible hud-element p-4 rounded-lg pulse-animation">
                                        <step.icon className="w-8 h-8 hud-text" />
                                    </div>
                                    <div className="hud-text text-2xl font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{step?.title}</h3>
                                    <p className="text-gray-300">{step?.description}</p>
                                </div>

                                <div className="lg:col-span-2 space-y-2">
                                    {step?.details?.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hud-element p-4 sm:p-8 rounded-lg"
                >
                    <h3 className="text-xl sm:text-2xl font-bold hud-text text-center mb-6 sm:mb-8">
                        Временная шкала действия
                    </h3>
                    <div className="relative">
                        {/* Mobile and Desktop Timeline */}
                        <div className="hidden md:block">
                            {/* Desktop Timeline - Horizontal Layout */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>
                            <div className="space-y-8">
                                {timeline?.map((item, index) => (
                                    <motion.div
                                        key={item?.time}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                        className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={`w-5/12 custom-width-50 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                                        >
                                            <div className="hud-element p-4 rounded-lg">
                                                <div className="hud-text font-bold text-xl mb-2">{item?.time}</div>
                                                {/* <div className="hud-text font-semibold">{item?.time}</div> */}
                                                <div className="text-white">{item?.event}</div>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full pulse-animation"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Timeline - Vertical Layout */}
                        <div className="block md:hidden">
                            <div className="space-y-4">
                                {timeline?.map((item, index) => (
                                    <motion.div
                                        key={item?.time}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                        className="relative flex items-start space-x-4"
                                    >
                                        <div className="custom-mobile-hide flex-shrink-0 w-4 h-4 bg-blue-400 rounded-full pulse-animation mt-2"></div>
                                        <div className="custom-mobile-margin-left-0 flex-1">
                                            <div className="hud-element p-3 rounded-lg">
                                                <div className="hud-text font-semibold text-sm mb-1">{item?.time}</div>
                                                <div className="text-white text-sm leading-tight break-words">
                                                    {item?.event}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 bg-amber-900/20 border border-amber-600/30 p-8 rounded-lg"
                >
                    <div className="flex items-start space-x-4">
                        <div>
                            <div className="custom-important-note">
                                <h4 className=" text-xl font-semibold text-amber-400 mb-4">Важные замечания</h4>
                                <AlertCircle className="custom-important-note-svg w-6 h-6 text-amber-400 flex-shrink-0" />
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Применять только после тщательного клинического осмотра животного</li>
                                <li>• Обеспечить постоянный мониторинг дыхания и сердечной деятельности</li>
                                <li>• Иметь под рукой средства для искусственной вентиляции легких</li>
                                <li>• Готовый раствор хранить не более 10 суток при t° от 2°С до 8°С</li>
                                <li>• Не применять животным с заболеваниями печени и почек</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
