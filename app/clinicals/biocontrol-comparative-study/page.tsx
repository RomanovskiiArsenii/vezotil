'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { FullTextModal } from '../../../components/full-text-modal';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { getClinicalReportContent } from '../../../lib/article-content';
import { Building, Users, Calendar, FlaskConical, BarChart, TrendingUp } from 'lucide-react';

export default function BiocalStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Клинические исследования', href: '/clinicals' },
        { label: 'Исследование Биоконтроль', href: '/clinicals/biocontrol-comparative-study' },
    ];

    const reportContent = getClinicalReportContent('biocontrol-comparative-study');

    return (
        <PageLayout>
            <PageHeader
                title="Сравнительная оценка препаратов Везотил и Золетил"
                subtitle="Пилотное клиническое исследование • Центр Биоконтроль"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-cyan-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                                <Building className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">
                                    Ветеринарный онкологический научный центр «Биоконтроль»
                                </h2>
                                <p className="text-cyan-300">Ведущий центр ветеринарной онкологии России</p>
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
                                            <p className="font-medium text-cyan-200">Евгений Андреевич Корнюшенков</p>
                                            <p className="text-sm text-gray-400">Ведущий исследователь, к.в.н.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Дарья Владимировна Вдовина</p>
                                            <p className="text-sm text-gray-400">Ветеринарный анестезиолог</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Полина Александровна Анисимова</p>
                                            <p className="text-sm text-gray-400">Научный сотрудник</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-cyan-200">Екатерина Викторовна Викторова</p>
                                            <p className="text-sm text-gray-400">Статистик-аналитик</p>
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
                                                <p className="text-sm">1.09.2023 - 12.10.2023</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Продолжительность</p>
                                                <p className="text-sm">42 дня</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Объекты</p>
                                                <p className="text-sm">28 животных</p>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Группы</p>
                                                <p className="text-sm">16 кошек, 12 собак</p>
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
                                    <li>• Сравнительная оценка анестезиологической активности</li>
                                    <li>• Анализ безопасности и переносимости</li>
                                    <li>• Оценка времени наступления и продолжительности анестезии</li>
                                    <li>• Сравнение качества пробуждения</li>
                                    <li>• Мониторинг нежелательных реакций</li>
                                </ul>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Критерии включения</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Здоровые животные (ASA I-II)</li>
                                    <li>• Возраст от 1 года до 8 лет</li>
                                    <li>• Масса тела от 2 до 45 кг</li>
                                    <li>• Плановые хирургические вмешательства</li>
                                    <li>• Согласие владельцев на участие</li>
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
                                <h3 className="text-xl font-semibold text-cyan-100">Терапевтическая эквивалентность</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Исследование продемонстрировало терапевтическую эквивалентность препаратов Везотил®
                                    и Золетил® 100. Оба препарата показали сопоставимую эффективность в обеспечении
                                    анестезии у кошек и собак при проведении плановых хирургических вмешательств.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Преимущества Везотил®</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Более выраженная седация в период индукции</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Значительно меньшая саливация</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Более спокойное пробуждение</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>Хорошая переносимость животными</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Временные показатели</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Наступление анестезии:</span>
                                            <span className="text-cyan-300 font-medium">3-5 минут</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Продолжительность:</span>
                                            <span className="text-cyan-300 font-medium">45-90 минут</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Время восстановления:</span>
                                            <span className="text-cyan-300 font-medium">60-120 минут</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Качество пробуждения:</span>
                                            <span className="text-green-300 font-medium">Отличное</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Заключение исследования</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                        Препарат Везотил® продемонстрировал терапевтическую эквивалентность препарату
                                        Золетил® 100 по основным показателям анестезиологической активности. При этом
                                        отмечены некоторые преимущества Везотила в части седативного эффекта и комфорта
                                        для животных.
                                    </p>
                                    <p className="leading-relaxed">
                                        Исследование подтвердило безопасность применения препарата Везотил® у кошек и
                                        собак различных пород и возрастов при соблюдении рекомендованных дозировок и
                                        протоколов применения.
                                    </p>
                                    <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-4">
                                        <p className="text-green-200 font-medium">
                                            🏆 Рекомендация: Препарат Везотил® может рассматриваться как эффективная
                                            альтернатива препарату Золетил® 100 для анестезии мелких домашних животных.
                                        </p>
                                    </div>

                                    {/* Кнопка для чтения полного отчета */}
                                    <div className="pt-6">
                                        <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Study Protocol */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Протокол исследования</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Дизайн исследования</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Рандомизированное контролируемое сравнительное исследование в параллельных группах.
                                    Животные были случайным образом распределены в две группы: группа Везотил® (n=14) и
                                    группа Золетил® 100 (n=14).
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Схема введения</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Внутримышечное введение</li>
                                        <li>• Дозировка: 10-15 мг/кг массы тела</li>
                                        <li>• Предварительная седация атропином</li>
                                        <li>• Мониторинг витальных функций</li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Оцениваемые параметры</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Время наступления седации</li>
                                        <li>• Глубина анестезии</li>
                                        <li>• Продолжительность действия</li>
                                        <li>• Качество пробуждения</li>
                                        <li>• Нежелательные реакции</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Research Center */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">О центре «Биоконтроль»</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    Ветеринарный онкологический научный центр «Биоконтроль» — ведущее учреждение в
                                    области ветеринарной онкологии и анестезиологии в России. Центр специализируется на
                                    лечении онкологических заболеваний у животных и проведении научных исследований.
                                </p>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-cyan-200">Специализации:</h4>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Ветеринарная онкология</li>
                                        <li>• Анестезиология и реаниматология</li>
                                        <li>• Клинические исследования</li>
                                        <li>• Научные разработки</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Контактная информация</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Адрес:</p>
                                        <p className="text-sm">г. Москва, ул. Академика Скрябина</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Научный отдел:</p>
                                        <p className="text-sm">research@biocontrol.ru</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Сотрудничество:</p>
                                        <p className="text-sm">Открыты для научного сотрудничества</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Модальное окно с полным текстом отчета */}
            <FullTextModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={reportContent?.title || 'Полный отчёт исследования'}
                content={reportContent?.fullText || ''}
                type="clinical"
                articleId="biocontrol-comparative-study"
            />
        </PageLayout>
    );
}
