'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { FullTextModal } from '../../../components/full-text-modal';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { getClinicalReportContent } from '../../../lib/article-content';
import { Building, Users, Calendar, FlaskConical, BarChart, TrendingUp, TreePine } from 'lucide-react';

export default function MoszooStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Клинические исследования', href: '/clinicals' },
        { label: 'Исследование Московский зоопарк', href: '/clinicals/moszoo-study' },
    ];

    const reportContent = getClinicalReportContent('moszoo-clinical-study');

    return (
        <PageLayout>
            <PageHeader
                title="ВЕЗОТИЛ для зоопарковых животных"
                subtitle="Специализированное исследование • Московский зоопарк"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-green-600/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                                <TreePine className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">Московский зоопарк</h2>
                                <p className="text-cyan-300">Ведущий зоологический парк России</p>
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
                                                Ветеринарная служба Московского зоопарка
                                            </p>
                                            <p className="text-sm text-gray-400">Специалисты по дикой фауне</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Главный ветеринарный врач</p>
                                            <p className="text-sm text-gray-400">Руководитель ветеринарной службы</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Команда зоологов</p>
                                            <p className="text-sm text-gray-400">Специалисты по поведению животных</p>
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
                                                <p className="text-sm">Март - Июнь 2024</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Продолжительность</p>
                                                <p className="text-sm">4 месяца</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Объекты</p>
                                                <p className="text-sm">52 животных</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Виды</p>
                                                <p className="text-sm">Различные экзотические виды</p>
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
                                    <li>• Оценка эффективности у различных видов</li>
                                    <li>• Определение видоспецифичных дозировок</li>
                                    <li>• Анализ безопасности для экзотических животных</li>
                                    <li>• Оценка стресс-факторов</li>
                                    <li>• Мониторинг поведенческих реакций</li>
                                </ul>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Виды животных</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Крупные кошачьи (тигры, львы)</li>
                                    <li>• Медведи различных видов</li>
                                    <li>• Приматы</li>
                                    <li>• Копытные животные</li>
                                    <li>• Мелкие хищники</li>
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
                                    Отличная эффективность у разнообразных видов животных
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Исследование показало превосходную эффективность препарата ВЕЗОТИЛ у широкого
                                    спектра зоопарковых и экзотических животных. Препарат продемонстрировал стабильное
                                    действие независимо от биологических особенностей различных видов.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Ключевые преимущества</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Безопасность для редких и экзотических видов</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Предсказуемость действия вне зависимости от вида</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Минимальный стресс для животных</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Быстрое и спокойное восстановление</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Статистические данные</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Успешность анестезии:</span>
                                            <span className="text-cyan-300 font-medium">96.2%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Количество видов:</span>
                                            <span className="text-cyan-300 font-medium">15+</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Побочные эффекты:</span>
                                            <span className="text-green-300 font-medium">Отсутствуют</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Стрессовые реакции:</span>
                                            <span className="text-green-300 font-medium">Минимальные</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Заключение исследования</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                        Препарат ВЕЗОТИЛ показал выдающиеся результаты в применении у зоопарковых и
                                        экзотических животных. Особенно важна была продемонстрированная безопасность при
                                        работе с редкими и находящимися под угрозой исчезновения видами.
                                    </p>
                                    <p className="leading-relaxed">
                                        Исследование подтвердило возможность безопасного использования препарата в
                                        условиях зоопарка при соблюдении видоспецифичных протоколов дозирования и
                                        мониторинга.
                                    </p>
                                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-lg p-4">
                                        <p className="text-green-200 font-medium">
                                            🌟 Рекомендация: ВЕЗОТИЛ рекомендован для использования в зоологических
                                            парках как безопасный препарат для анестезии экзотических и диких животных.
                                        </p>
                                    </div>

                                    <div className="pt-6">
                                        <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Special Considerations */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">
                            Особенности работы с зоопарковыми животными
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Протоколы безопасности</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Индивидуальный расчет дозировки для каждого вида</li>
                                    <li>• Постоянный мониторинг витальных функций</li>
                                    <li>• Наличие антагонистов и реанимационного оборудования</li>
                                    <li>• Минимизация стресса во время процедур</li>
                                </ul>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Видоспецифичные особенности</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Адаптация дозировок под массу тела</li>
                                    <li>• Учет метаболических особенностей</li>
                                    <li>• Поведенческие характеристики видов</li>
                                    <li>• Различия в чувствительности к препарату</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* About Zoo */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">О Московском зоопарке</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    Московский зоопарк — один из старейших зоопарков в России, основанный в 1864 году.
                                    Сегодня это современный зоологический парк, в котором содержится более 8000 животных
                                    1000 видов и подвидов, включая редкие и исчезающие виды.
                                </p>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-cyan-200">Ветеринарная служба:</h4>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Профилактическая медицина</li>
                                        <li>• Лечение экзотических животных</li>
                                        <li>• Научные исследования</li>
                                        <li>• Программы сохранения видов</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Научная деятельность</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Направление:</p>
                                        <p className="text-sm">Ветеринария диких животных</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Экспертиза:</p>
                                        <p className="text-sm">Экзотические и редкие виды</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Сотрудничество:</p>
                                        <p className="text-sm">Международные программы</p>
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
                articleId="moszoo-clinical-study"
            />
        </PageLayout>
    );
}
