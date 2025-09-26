'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getScientificPublicationContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { BookOpen, FlaskConical, BarChart, Target, TrendingUp, Award } from 'lucide-react';

export default function ComparativePilotStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const publicationContent = getScientificPublicationContent('pilot-comparative-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Научные публикации', href: '/publications' },
        { label: 'Сравнительное пилотное исследование', href: '/publications/comparative-pilot-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Сравнительная оценка препаратов"
                subtitle="Везотил® vs Золетил® 100 в клинической анестезиологической практике"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/publications" label="Вернуться к научным публикациям" />

                    {/* Comparative Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-blue-500/20 rounded-xl border border-blue-400/30 flex items-center justify-center">
                                <BarChart className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">Сравнительная клиническая оценка</h2>
                                <p className="text-blue-300">
                                    Комплексное сравнение эффективности и безопасности • 2024
                                </p>
                            </div>
                        </div>

                        <div className="medical-card p-6 space-y-4">
                            <h3 className="text-xl font-semibold text-cyan-100">Цель исследования</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Проведение комплексной сравнительной оценки клинической эффективности, безопасности и
                                переносимости нового российского препарата Везотил® в сравнении с референтным
                                препаратом Золетил® 100 при проведении анестезии у собак и кошек в условиях
                                ветеринарной клинической практики.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Основные параметры оценки</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Скорость наступления анестезии</li>
                                    <li>• Глубина и качество анестезии</li>
                                    <li>• Время пробуждения и восстановления</li>
                                    <li>• Качество пробуждения</li>
                                    <li>• Побочные эффекты и осложнения</li>
                                    <li>• Гемодинамические показатели</li>
                                    <li>• Респираторные функции</li>
                                </ul>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Ключевые преимущества Везотил®</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Более быстрое наступление действия</li>
                                    <li>• Улучшенное качество пробуждения</li>
                                    <li>• Снижение саливации</li>
                                    <li>• Стабильная гемодинамика</li>
                                    <li>• Меньшая частота побочных эффектов</li>
                                    <li>• Лучшая переносимость процедуры</li>
                                    <li>• Экономическая эффективность</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Results and Conclusions */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-cyan-400" />
                            Результаты и выводы
                        </h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Статистически значимые результаты
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Временные показатели:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Наступление анестезии: 3-5 мин vs 5-7 мин</li>
                                            <li>• Время восстановления: 15-20 мин vs 20-25 мин</li>
                                            <li>• Полное пробуждение: 25-30 мин vs 35-40 мин</li>
                                            <li>• Качество индукции: улучшено на 23%</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Показатели безопасности:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Снижение саливации на 35%</li>
                                            <li>• Уменьшение апноэ на 28%</li>
                                            <li>• Стабильность ЧСС: +18% по сравнению</li>
                                            <li>• Отсутствие серьезных осложнений</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Клиническое заключение</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Препарат Везотил® продемонстрировал не только сопоставимую с Золетил® 100
                                    эффективность, но и превосходство по ряду важных клинических параметров. Особенно
                                    отмечены улучшения в качестве индукции и пробуждения, а также значительное снижение
                                    нежелательных побочных эффектов.
                                </p>

                                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-4">
                                    <p className="text-green-200 font-medium text-sm">
                                        ✅ Заключение: Везотил® рекомендован как безопасная и эффективная альтернativa
                                        оригинальному препарату с потенциальными преимуществами в клинической практике.
                                    </p>
                                </div>
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
                articleId="comparative-study"
            />
        </PageLayout>
    );
}
