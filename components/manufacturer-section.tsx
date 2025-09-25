'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Award, Users, Globe, CheckCircle, Calendar, MapPin, Phone, Mail, FileText } from 'lucide-react';

export default function ManufacturerSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const achievements = [
        { icon: Award, title: 'GMP сертификат', description: 'Международные стандарты качества' },
        { icon: Users, title: 'Лучшие специалисты', description: 'В области ветеринарной фармакологии' },
        { icon: Globe, title: 'Широкая известность', description: 'Более 85% клиник России' },
        { icon: CheckCircle, title: 'Резидент Сколково', description: 'Передовые технологии и инновации' },
        { icon: FileText, title: 'Менее 0,03%', description: 'Сообщений о нежелательных реакциях' },
        {
            icon: Building2,
            title: 'Разработка и производство в России',
            description: 'Гарантированное качество и техническая поддержка',
        },
    ];

    const timeline = [
        {
            year: '2020',
            event: 'Основание компании',
            description: 'Создание ООО «ВЕТСТЕМ» с фокусом на инновационные ветеринарные решения',
        },
        {
            year: '2022',
            event: 'Резидент Сколково',
            description: 'Получение статуса резидента инновационного центра Сколково',
        },
        {
            year: '2022',
            event: 'Разработка препаратов против FIP',
            description: 'Разработка препаратов для лечения кошачьего инфекционного перитонита',
        },
        {
            year: '2023',
            event: 'Разработка линейки анестетиков',
            description: 'Разработка препаратов для безопасной и эффективной анестезии животных',
        },
        {
            year: '2024',
            event: 'Выпуск ВЕЗОТИЛ',
            description: 'Успешная регистрация инновационного препарата для анестезии животных',
        },
    ];

    return (
        <section className="py-14 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">О производителе</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        <span className="hud-text">ООО "ВЕТСТЕМ"</span> - ведущий российский производитель ветеринарных
                        препаратов
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="custom-flex-column custom-height-100 space-y-6 h-fit"
                    >
                        <div className="custom-flex-grow-2 hud-element p-8 rounded-lg">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="hud-element p-4 rounded-lg pulse-animation">
                                    <Building2 className="w-8 h-8 hud-text" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">ООО "ВЕТСТЕМ"</h3>
                                    <p className="hud-text">Ветеринарная фармацевтика</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                    Специализируемся на разработке и производстве инновационных ветеринарных препаратов
                                    и клеточной регенеративной терапии.
                                </p>
                                <p className="leading-relaxed">
                                    Наша миссия - обеспечить ветеринарных врачей надёжными, безопасными и эффективными
                                    инструментами для заботы о здоровье животных.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="mt-6 p-6 bg-slate-800/30 rounded-lg border border-cyan-500/30">
                                <h4 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                                    <Building2 className="w-5 h-5" />
                                    Контактная информация
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Юридический адрес:</p>
                                            <p className="text-gray-300">
                                                121205, г. Москва, тер. Сколково инновационного центра,
                                            </p>
                                            <p className="text-gray-300">Большой бульвар, д.42, стр.1, пом.209</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Телефоны:</p>
                                            <p className="text-gray-300">+7 (917) 525-77-70</p>
                                            <p className="text-gray-300">+7 (495) 768-08-49</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FileText className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Регистрационное удостоверение:</p>
                                            <p className="text-gray-300 font-mono text-xs">
                                                № 77-3-29.23-5075ПВР-3-29.23/03889
                                            </p>
                                            <p className="text-gray-300">от 28.12.2023 г.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="hud-element p-6 rounded-lg text-center">
                                <div className="text-3xl font-bold hud-text mb-2">5+</div>
                                <div className="text-gray-400">лет на рынке</div>
                            </div>
                            <div className="hud-element p-6 rounded-lg text-center">
                                <div className="text-3xl font-bold hud-text mb-2">85%</div>
                                <div className="text-gray-400">охват</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="custom-overflow-y-hide flex flex-col justify-between h-full min-h-[750px]"
                    >
                        {achievements?.map((achievement, index) => (
                            <motion.div
                                key={achievement?.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                className="hud-element p-5 rounded-lg scan-line hover:medical-glow transition-all duration-300 mb-2 last:mb-0"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="hud-element p-3 rounded-lg">
                                        <achievement.icon className="w-6 h-6 hud-text" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{achievement?.title}</h4>
                                        <p className="text-gray-300">{achievement?.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hud-element p-8 rounded-lg"
                >
                    <h3 className="text-2xl font-bold hud-text text-center mb-8">История развития</h3>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 hidden lg:block"></div>
                        <div className="space-y-8">
                            {timeline?.map((item, index) => (
                                <motion.div
                                    key={item?.event}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    className={`relative flex flex-col lg:flex-row items-center ${
                                        index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                                    }`}
                                >
                                    <div
                                        className={`w-full lg:w-5/12 custom-width-50 ${
                                            index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                                        } mb-4 lg:mb-0`}
                                    >
                                        <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-400/30">
                                            <div className="hud-text font-bold text-xl mb-2">{item?.event}</div>
                                            <div className="text-white">{item?.description}</div>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full pulse-animation hidden lg:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Quality Certificates */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold hud-text mb-8">Сертификаты качества</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="hud-element p-6 rounded-lg">
                            <Award className="w-12 h-12 hud-text mx-auto mb-4" />
                            <h4 className="text-white font-semibold mb-2">GMP</h4>
                            <p className="text-gray-400">Надлежащая производственная практика</p>
                        </div>
                        <div className="hud-element p-6 rounded-lg">
                            <CheckCircle className="w-12 h-12 hud-text mx-auto mb-4" />
                            <h4 className="text-white font-semibold mb-2">ISO 9001</h4>
                            <p className="text-gray-400">Система менеджмента качества</p>
                        </div>
                        <div className="hud-element p-6 rounded-lg">
                            <Calendar className="w-12 h-12 hud-text mx-auto mb-4" />
                            <h4 className="text-white font-semibold mb-2">Росздравнадзор</h4>
                            <p className="text-gray-400">Государственная регистрация</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
