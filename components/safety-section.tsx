'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, ShieldX, Heart, Brain, Thermometer, Eye } from 'lucide-react';

export default function SafetySection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const contraindications = [
        {
            icon: Heart,
            title: 'Сердечно-сосудистые заболевания',
            description: 'Тяжелые нарушения ритма и проводимости',
            severity: 'high',
        },
        {
            icon: Brain,
            title: 'Неврологические расстройства',
            description: 'Эпилепсия, черепно-мозговые травмы',
            severity: 'high',
        },
        {
            icon: Thermometer,
            title: 'Лихорадочные состояния',
            description: 'Температура тела выше 40°C',
            severity: 'medium',
        },
        {
            icon: Eye,
            title: 'Повышенное внутриглазное давление',
            description: 'Глаукома и другие офтальмологические заболевания',
            severity: 'medium',
        },
    ];

    const sideEffects = [
        { effect: 'Апноэ (кратковременное)', probability: '5-10%', severity: 'medium' },
        { effect: 'Гипотермия', probability: '15-20%', severity: 'low' },
        { effect: 'Гиперсаливация', probability: '25-30%', severity: 'low' },
        { effect: 'Мышечная ригидность', probability: '10-15%', severity: 'medium' },
        { effect: 'Тахикардия', probability: '20-25%', severity: 'low' },
        { effect: 'Рвота при пробуждении', probability: '5-15%', severity: 'low' },
    ];

    const antidotes = [
        { name: 'Флумазенил', indication: 'Антагонист золазепама', dose: '0.01-0.02 мг/кг' },
        { name: 'Атипамезол', indication: 'При необходимости быстрого пробуждения', dose: '0.05-0.1 мг/кг' },
        { name: 'Кислородная терапия', indication: 'При угнетении дыхания', dose: 'По потребности' },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Безопасность применения</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Важная информация о противопоказаниях, побочных эффектах и мерах предосторожности
                    </p>
                </motion.div>

                {/* Contraindications */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">Противопоказания</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contraindications?.map((item, index) => (
                            <motion.div
                                key={item?.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                className={`p-6 rounded-lg border-l-4 ${
                                    item?.severity === 'high'
                                        ? 'bg-red-900/20 border-red-500'
                                        : 'bg-amber-900/20 border-amber-500'
                                }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`custom-flex-shrink-0 p-3 rounded-lg ${
                                            item?.severity === 'high'
                                                ? 'bg-red-900/30 text-red-400'
                                                : 'bg-amber-900/30 text-amber-400'
                                        }`}
                                    >
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{item?.title}</h4>
                                        <p className="text-gray-300">{item?.description}</p>
                                        <span
                                            className={`inline-block mt-2 px-2 py-1 rounded text-xs font-semibold ${
                                                item?.severity === 'high'
                                                    ? 'bg-red-900/50 text-red-300'
                                                    : 'bg-amber-900/50 text-amber-300'
                                            }`}
                                        >
                                            {item?.severity === 'high' ? 'Высокий риск' : 'Средний риск'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Side Effects */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16 hud-element p-8 rounded-lg"
                >
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">Возможные побочные эффекты</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sideEffects?.map((effect, index) => (
                            <motion.div
                                key={effect?.effect}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                className="bg-slate-800/50 p-4 rounded-lg border border-slate-600"
                            >
                                <h4 className="text-white font-semibold mb-2">{effect?.effect}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300 text-sm">Частота: {effect?.probability}</span>
                                    <span
                                        className={`px-2 py-1 rounded text-xs ${
                                            effect?.severity === 'high'
                                                ? 'bg-red-900/50 text-red-300'
                                                : effect?.severity === 'medium'
                                                  ? 'bg-amber-900/50 text-amber-300'
                                                  : 'bg-green-900/50 text-green-300'
                                        }`}
                                    >
                                        {effect?.severity === 'high'
                                            ? 'Высокая'
                                            : effect?.severity === 'medium'
                                              ? 'Средняя'
                                              : 'Низкая'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Antidotes */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16 hud-element p-8 rounded-lg"
                >
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">Антидоты и экстренные меры</h3>
                    <div className="space-y-4">
                        {antidotes?.map((antidote, index) => (
                            <motion.div
                                key={antidote?.name}
                                initial={{ opacity: 0, x: -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-green-400"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="text-green-400 font-semibold text-lg">{antidote?.name}</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">{antidote?.indication}</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Доза: {antidote?.dose}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Emergency Protocol */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-red-900/20 border border-red-600/30 p-8 rounded-lg"
                >
                    <div className="flex items-start space-x-4">
                        <div>
                            <div className="custom-important-note">
                                <h4 className="text-xl font-semibold text-red-400 mb-4">Экстренный протокол</h4>
                                <AlertTriangle className="custom-important-note-svg w-6 h-6 text-red-400 flex-shrink-0" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="text-white font-semibold mb-2">При угнетении дыхания:</h5>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Обеспечить проходимость дыхательных путей</li>
                                        <li>• Начать оксигенотерапию</li>
                                        <li>• При необходимости - ИВЛ</li>
                                        <li>• Ввести антагонист</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold mb-2">При сердечной недостаточности:</h5>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Мониторинг ЭКГ</li>
                                        <li>• Коррекция гемодинамики</li>
                                        <li>• Инфузионная терапия</li>
                                        <li>• Кардиотонические препараты</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
