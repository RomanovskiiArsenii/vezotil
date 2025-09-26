'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getClinicalReportContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { Building, Users, Calendar, FlaskConical, MapPin, BarChart } from 'lucide-react';

export default function VetprofAlyansStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const reportContent = getClinicalReportContent('vetprofalyans-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Клинические исследования', href: '/clinicals' },
        { label: 'Исследование ВетПрофАльянс', href: '/clinicals/vetprofalyans-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Исследование в клиниках «ВетПрофАльянс»"
                subtitle="Масштабное двухцентровое исследование • Москва и Чехов"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-blue-500/20 rounded-xl border border-blue-400/30 flex items-center justify-center">
                                <Building className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">
                                    Ветеринарные клиники «ВетПрофАльянс»
                                </h2>
                                <p className="text-blue-300">Сеть специализированных клиник</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-2xl font-bold text-blue-400">65</div>
                                <div className="text-gray-300 text-sm">животных</div>
                            </div>

                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <MapPin className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-2xl font-bold text-green-400">2</div>
                                <div className="text-gray-300 text-sm">филиала</div>
                            </div>

                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Calendar className="w-8 h-8 text-purple-400" />
                                </div>
                                <div className="text-2xl font-bold text-purple-400">4</div>
                                <div className="text-gray-300 text-sm">месяца</div>
                            </div>

                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <BarChart className="w-8 h-8 text-cyan-400" />
                                </div>
                                <div className="text-2xl font-bold text-cyan-400">100%</div>
                                <div className="text-gray-300 text-sm">успешность</div>
                            </div>
                        </div>
                    </div>

                    {/* Dual Location Results */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">
                            Результаты двухцентрового исследования
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    Филиал Москва
                                </h3>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-cyan-200 font-medium">Количество животных:</p>
                                            <p className="text-gray-300">32 животных</p>
                                        </div>
                                        <div>
                                            <p className="text-cyan-200 font-medium">Период:</p>
                                            <p className="text-gray-300">4 месяца</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-cyan-200 text-sm">Основные результаты:</h4>
                                        <ul className="space-y-1 text-gray-300 text-xs">
                                            <li>• Воспроизводимость эффекта в городских условиях</li>
                                            <li>• Эффективность при различных видах операций</li>
                                            <li>• Стабильные показатели у животных разных пород</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-green-400" />
                                    Филиал Чехов
                                </h3>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-cyan-200 font-medium">Количество животных:</p>
                                            <p className="text-gray-300">33 животных</p>
                                        </div>
                                        <div>
                                            <p className="text-cyan-200 font-medium">Период:</p>
                                            <p className="text-gray-300">4 месяца</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-cyan-200 text-sm">Основные результаты:</h4>
                                        <ul className="space-y-1 text-gray-300 text-xs">
                                            <li>• Подтверждение результатов московского филиала</li>
                                            <li>• Одинаково высокое качество анестезии</li>
                                            <li>• Положительная оценка экономической эффективности</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Combined Analysis */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Сводный анализ результатов</h2>

                        <div className="space-y-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Воспроизводимость результатов</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Одним из ключевых достижений исследования стала демонстрация воспроизводимости
                                    результатов применения препарата ВЕЗОТИЛ в различных локациях. Оба филиала клиники
                                    ВетПрофАльянс показали идентичные результаты по основным параметрам эффективности и
                                    безопасности.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="medical-card p-6 text-center space-y-3">
                                    <div className="text-2xl font-bold text-cyan-400">100%</div>
                                    <div className="text-gray-300 text-sm">воспроизводимость между филиалами</div>
                                </div>
                                <div className="medical-card p-6 text-center space-y-3">
                                    <div className="text-2xl font-bold text-green-400">0</div>
                                    <div className="text-gray-300 text-sm">расхождений в результатах</div>
                                </div>
                                <div className="medical-card p-6 text-center space-y-3">
                                    <div className="text-2xl font-bold text-purple-400">98%</div>
                                    <div className="text-gray-300 text-sm">удовлетворенность врачей</div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Экономическая оценка</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Исследование также включало анализ экономической эффективности применения препарата
                                    ВЕЗОТИЛ. Результаты показали положительное соотношение затрат и клинических
                                    результатов, что делает препарат привлекательным для широкого клинического
                                    применения.
                                </p>

                                <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-4">
                                    <p className="text-green-200 font-medium text-sm">
                                        💰 Экономический эффект: Снижение общих затрат на анестезию на 15-20% при
                                        сохранении высокого качества процедур.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопка для чтения полного отчета */}
                <div className="max-w-6xl mx-auto my-8">
                    <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                </div>
            </ContentSection>

            {/* Модальное окно с полным текстом отчета */}
            <FullTextModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={reportContent?.title || 'Полный отчёт исследования'}
                content={reportContent?.fullText || ''}
                type="clinical"
                articleId="vetprofalyans-study"
            />
        </PageLayout>
    );
}
