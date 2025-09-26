'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { FullTextModal } from '../../../components/full-text-modal';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { getClinicalReportContent } from '../../../lib/article-content';
import { Building, Users, Calendar, FlaskConical, BarChart, TrendingUp, Stethoscope } from 'lucide-react';

export default function VetLifeStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Клинические исследования', href: '/clinicals' },
        { label: 'Исследование ВетЛайф', href: '/clinicals/vetlife-study' },
    ];

    const reportContent = getClinicalReportContent('vetlife-clinical-study');

    return (
        <PageLayout>
            <PageHeader
                title="Комплексное исследование ВЕЗОТИЛ"
                subtitle="Многопрофильная ветеринарная практика • Клиника «ВетЛайф»"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-green-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                                <Stethoscope className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">Ветеринарная клиника «ВетЛайф»</h2>
                                <p className="text-cyan-300">Специализированная многопрофильная ветеринарная клиника</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-cyan-400" />
                                        Исследовательская группа
                                    </h3>
                                    <div className="space-y-3 text-gray-300">
                                        <div>
                                            <p className="font-medium text-cyan-200">
                                                Специалисты по анестезиологии ВетЛайф
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                Команда профессиональных анестезиологов
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Отделение хирургии</p>
                                            <p className="text-sm text-gray-400">Хирургическая бригада клиники</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Научный координатор</p>
                                            <p className="text-sm text-gray-400">
                                                Ответственный за проведение исследования
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-cyan-400" />
                                        Параметры исследования
                                    </h3>
                                    <div className="space-y-3 text-gray-300">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-cyan-200 font-medium">Период</p>
                                                <p className="text-sm">Февраль - Май 2024</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Продолжительность</p>
                                                <p className="text-sm">3.5 месяца</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Объекты</p>
                                                <p className="text-sm">45 животных</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Типы операций</p>
                                                <p className="text-sm">Различные виды</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Study Methodology */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <FlaskConical className="w-8 h-8 text-cyan-400" />
                            Методология исследования
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Цели исследования</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Оценка эффективности при различных операциях</li>
                                    <li>• Анализ гемодинамических показателей</li>
                                    <li>• Исследование качества анестезии</li>
                                    <li>• Оценка удобства применения</li>
                                    <li>• Мониторинг безопасности</li>
                                </ul>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Виды операций</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Абдоминальная хирургия</li>
                                    <li>• Ортопедические вмешательства</li>
                                    <li>• Офтальмологические операции</li>
                                    <li>• Стоматологические процедуры</li>
                                    <li>• Мягкотканная хирургия</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <BarChart className="w-8 h-8 text-cyan-400" />
                            Основные результаты
                        </h2>

                        <div className="space-y-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Высокая эффективность при различных хирургических вмешательствах
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Исследование продемонстрировало высокую эффективность препарата ВЕЗОТИЛ при всех
                                    типах хирургических вмешательств. Препарат показал стабильные результаты независимо
                                    от сложности и продолжительности операций.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Преимущества препарата</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Стабильные гемодинамические показатели</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Удобство применения и дозирования</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Предсказуемость действия</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Отличная переносимость</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Клинические показатели</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Эффективность анестезии:</span>
                                            <span className="text-cyan-300 font-medium">98.5%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Стабильность ЧСС:</span>
                                            <span className="text-green-300 font-medium">Отличная</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Респираторная функция:</span>
                                            <span className="text-green-300 font-medium">Стабильная</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Побочные эффекты:</span>
                                            <span className="text-green-300 font-medium">Минимальные</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Заключение исследования</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                        Препарат ВЕЗОТИЛ показал превосходные результаты во всех аспектах
                                        многопрофильной ветеринарной практики. Особенно отмечается стабильность
                                        гемодинамических показателей и удобство применения для медицинского персонала.
                                    </p>
                                    <p className="leading-relaxed">
                                        Исследование подтвердило универсальность препарата для использования при
                                        различных типах хирургических вмешательств с высокой степенью безопасности и
                                        эффективности.
                                    </p>
                                    <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-4">
                                        <p className="text-green-200 font-medium">
                                            🏆 Рекомендация: ВЕЗОТИЛ рекомендуется как препарат первого выбора для
                                            анестезии в условиях многопрофильной ветеринарной практики.
                                        </p>
                                    </div>

                                    <div className="pt-6">
                                        <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Clinic */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">О клинике «ВетЛайф»</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    Ветеринарная клиника «ВетЛайф» — современное медицинское учреждение,
                                    специализирующееся на оказании полного спектра ветеринарных услуг. Клиника оснащена
                                    передовым диагностическим и хирургическим оборудованием.
                                </p>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-cyan-200">Специализации клиники:</h4>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Многопрофильная хирургия</li>
                                        <li>• Анестезиология и реаниматология</li>
                                        <li>• Диагностическая медицина</li>
                                        <li>• Интенсивная терапия</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Исследовательская деятельность</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Направление:</p>
                                        <p className="text-sm">Клиническая анестезиология</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Опыт:</p>
                                        <p className="text-sm">Участие в клинических испытаниях</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Фокус:</p>
                                        <p className="text-sm">Многопрофильная ветеринарная практика</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Modal for full report */}
            <FullTextModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={reportContent?.title || 'Полный отчёт исследования'}
                content={reportContent?.fullText || ''}
                type="clinical"
                articleId="vetlife-clinical-study"
            />
        </PageLayout>
    );
}
