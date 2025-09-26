'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getScientificPublicationContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { BookOpen, TrendingUp, Activity, Target, BarChart, CheckCircle } from 'lucide-react';

export default function EffectivenessStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const publicationContent = getScientificPublicationContent('effectiveness-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Научные публикации', href: '/publications' },
        { label: 'Исследование эффективности', href: '/publications/effectiveness-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Эффективность препарата Везотил"
                subtitle="Клиническая анестезиологическая практика"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/publications" label="Вернуться к научным публикациям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <TrendingUp className="custom-mobile-hide w-8 h-8 text-cyan-400" />
                            Анализ клинической эффективности
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Данное исследование представляет собой комплексный анализ клинической эффективности
                            препарата Везотил® в сравнении с Золетил® 100 в условиях реальной ветеринарной практики.
                            Особое внимание уделено практическим аспектам применения препарата.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-lg font-bold text-cyan-400">1047</div>
                                <div className="text-gray-300 text-xs">слов в публикации</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-lg font-bold text-green-400">4</div>
                                <div className="text-gray-300 text-xs">автора исследования</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-lg font-bold text-purple-400">2025</div>
                                <div className="text-gray-300 text-xs">год публикации</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-lg font-bold text-blue-400">RCT</div>
                                <div className="text-gray-300 text-xs">тип исследования</div>
                            </div>
                        </div>
                    </div>

                    {/* Clinical Effectiveness Parameters */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <Activity className="w-8 h-8 text-cyan-400" />
                            Параметры клинической эффективности
                        </h2>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="medical-card p-6 space-y-4 text-center">
                                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                                        <Target className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-cyan-100">Индукция анестезии</h3>
                                    <div className="space-y-2">
                                        <div className="text-2xl font-bold text-cyan-400">98%</div>
                                        <div className="text-gray-300 text-sm">успешная индукция с первой попытки</div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4 text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-cyan-100">Качество анестезии</h3>
                                    <div className="space-y-2">
                                        <div className="text-2xl font-bold text-green-400">9.2/10</div>
                                        <div className="text-gray-300 text-sm">средняя оценка врачей</div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4 text-center">
                                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                                        <BarChart className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-cyan-100">Восстановление</h3>
                                    <div className="space-y-2">
                                        <div className="text-2xl font-bold text-purple-400">96%</div>
                                        <div className="text-gray-300 text-sm">спокойное пробуждение</div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Преимущества в клинической практике
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Для врача:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Предсказуемое время наступления эффекта</li>
                                            <li>• Стабильная глубина анестезии</li>
                                            <li>• Удобство дозирования</li>
                                            <li>• Простота приготовления раствора</li>
                                            <li>• Хорошая совместимость с другими препаратами</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Для пациента:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Минимальный стресс при индукции</li>
                                            <li>• Комфортная анестезия</li>
                                            <li>• Быстрое восстановление</li>
                                            <li>• Отсутствие неприятных последствий</li>
                                            <li>• Хорошая переносимость</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparative Analysis */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Сравнительный анализ с Золетил® 100</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Сравнительная таблица эффективности
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-cyan-500/30">
                                                <th className="text-left py-3 text-cyan-200">Параметр</th>
                                                <th className="text-center py-3 text-cyan-200">Везотил®</th>
                                                <th className="text-center py-3 text-cyan-200">Золетил® 100</th>
                                                <th className="text-center py-3 text-cyan-200">p-value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-300">
                                            <tr className="border-b border-gray-600/20">
                                                <td className="py-3">Время наступления (мин)</td>
                                                <td className="text-center py-3">3.2 ± 0.8</td>
                                                <td className="text-center py-3">3.5 ± 0.9</td>
                                                <td className="text-center py-3 text-gray-400">0.243</td>
                                            </tr>
                                            <tr className="border-b border-gray-600/20">
                                                <td className="py-3">Продолжительность (мин)</td>
                                                <td className="text-center py-3">62 ± 15</td>
                                                <td className="text-center py-3">58 ± 18</td>
                                                <td className="text-center py-3 text-gray-400">0.412</td>
                                            </tr>
                                            <tr className="border-b border-gray-600/20">
                                                <td className="py-3">Восстановление (мин)</td>
                                                <td className="text-center py-3">95 ± 20</td>
                                                <td className="text-center py-3">102 ± 25</td>
                                                <td className="text-center py-3 text-gray-400">0.298</td>
                                            </tr>
                                            <tr className="border-b border-gray-600/20">
                                                <td className="py-3">Качество анестезии (балл)</td>
                                                <td className="text-center py-3 text-green-300">9.1 ± 0.8</td>
                                                <td className="text-center py-3">8.9 ± 0.9</td>
                                                <td className="text-center py-3 text-gray-400">0.456</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3">Седативный эффект (балл)</td>
                                                <td className="text-center py-3 text-cyan-300">8.7 ± 0.6</td>
                                                <td className="text-center py-3">8.2 ± 0.8</td>
                                                <td className="text-center py-3 text-cyan-400">0.024*</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-xs text-gray-400 mt-2">* статистически значимое различие</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-6">
                                <h4 className="font-semibold text-green-200 mb-3">🎯 Практическая рекомендация</h4>
                                <p className="text-green-100 text-sm leading-relaxed">
                                    Препарат Везотил® может успешно использоваться в качестве полноценной замены
                                    Золетил® 100 в ветеринарной анестезиологической практике с потенциальными
                                    преимуществами в обеспечении седативного эффекта.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопка для чтения полной статьи */}
                <div className="max-w-6xl mx-auto my-8">
                    <ReadFullReportButton onClick={() => setIsModalOpen(true)} text="Читать статью полностью" />
                </div>
            </ContentSection>

            {/* Модальное окно с полным текстом статьи */}
            <FullTextModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={publicationContent?.title || 'Полная научная статья'}
                content={publicationContent?.fullText || ''}
                type="publication"
                articleId="effectiveness-study"
            />
        </PageLayout>
    );
}
