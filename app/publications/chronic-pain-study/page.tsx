'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getScientificPublicationContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { BookOpen, Heart, Activity, Users, Target, Award } from 'lucide-react';

export default function ChronicPainStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const publicationContent = getScientificPublicationContent('chronic-pain-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Научные публикации', href: '/publications' },
        { label: 'Управление хронической болью', href: '/publications/chronic-pain-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Везотил® для контроля хронической боли"
                subtitle="Использование у собак и кошек при ортопедических патологиях"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/publications" label="Вернуться к научным публикациям" />

                    {/* Author and Publication Info */}
                    <div className="glass-card p-8 space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-orange-500/20 rounded-xl border border-orange-400/30 flex items-center justify-center">
                                <Heart className="w-8 h-8 text-orange-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">Управление хронической болью</h2>
                                <p className="text-orange-300">Ортопедические патологии • 2025</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-cyan-400" />
                                    Автор исследования
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Закирова Ольга Викторовна</p>
                                        <p className="text-sm text-gray-400">Ветеринарный врач-анестезиолог</p>
                                        <p className="text-sm text-gray-400">Специалист по управлению болью</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-cyan-200 text-sm">Квалификация:</h4>
                                        <ul className="space-y-1 text-gray-300 text-xs">
                                            <li>• Сертифицированный анестезиолог</li>
                                            <li>• Специализация: управление болью</li>
                                            <li>• Опыт работы: 8+ лет</li>
                                            <li>• Участник международных конференций</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Специализация исследования</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        Данное исследование открывает новые перспективы использования препарата
                                        Везотил® не только для анестезии, но и для долгосрочного управления хронической
                                        болью у животных с ортопедическими заболеваниями.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-cyan-200 text-sm">Ключевые области:</h4>
                                        <ul className="space-y-1 text-gray-300 text-xs">
                                            <li>• Хроническая ортопедическая боль</li>
                                            <li>• Послеоперационное обезболивание</li>
                                            <li>• Мультимодальная анальгезия</li>
                                            <li>• Качество жизни животных</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Background */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Обоснование исследования</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Проблема хронической боли</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Хроническая ортопедическая боль является серьезной проблемой в ветеринарной
                                    медицине, существенно снижающей качество жизни животных. Традиционные подходы к
                                    обезболиванию не всегда обеспечивают адекватный контроль боли при длительном
                                    применении.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Цели исследования</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Оценить эффективность Везотил® при хронической боли</li>
                                        <li>• Определить оптимальные схемы применения</li>
                                        <li>• Изучить безопасность длительного использования</li>
                                        <li>• Оценить влияние на качество жизни животных</li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Инновационный подход</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Использование субанестезирующих доз</li>
                                        <li>• Комбинация с НПВС</li>
                                        <li>• Индивидуализированные протоколы</li>
                                        <li>• Мониторинг показателей боли</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Clinical Protocol */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <Target className="w-8 h-8 text-cyan-400" />
                            Клинический протокол
                        </h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Схема применения</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Начальная фаза</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Дозировка: 2-3 мг/кг</li>
                                            <li>• Путь введения: в/м</li>
                                            <li>• Частота: каждые 12 часов</li>
                                            <li>• Продолжительность: 3-5 дней</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Поддерживающая терапия</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Дозировка: 1-2 мг/кг</li>
                                            <li>• Путь введения: в/м или п/к</li>
                                            <li>• Частота: каждые 24 часа</li>
                                            <li>• Продолжительность: 7-14 дней</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Мониторинг</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Оценка боли по шкале</li>
                                            <li>• Контроль активности</li>
                                            <li>• Аппетит и поведение</li>
                                            <li>• Побочные эффекты</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Результаты применения</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="text-center space-y-2">
                                        <div className="text-2xl font-bold text-green-400">78%</div>
                                        <div className="text-gray-300 text-sm">значительное улучшение</div>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <div className="text-2xl font-bold text-cyan-400">92%</div>
                                        <div className="text-gray-300 text-sm">хорошая переносимость</div>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <div className="text-2xl font-bold text-purple-400">6.2</div>
                                        <div className="text-gray-300 text-sm">снижение боли (из 10)</div>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <div className="text-2xl font-bold text-blue-400">85%</div>
                                        <div className="text-gray-300 text-sm">повышение активности</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Future Directions */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Перспективы развития</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Направления дальнейших исследований
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Клинические аспекты:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Долгосрочная безопасность при хроническом применении</li>
                                            <li>• Комбинированные протоколы с другими анальгетиками</li>
                                            <li>• Оптимизация дозировок для разных видов боли</li>
                                            <li>• Применение у других видов животных</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Научные аспекты:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Фармакокинетика при хроническом применении</li>
                                            <li>• Механизмы обезболивающего действия</li>
                                            <li>• Молекулярные маркеры эффективности</li>
                                            <li>• Персонализированная терапия боли</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-400/30 rounded-lg p-6">
                                <h4 className="font-semibold text-orange-200 mb-3">🔬 Инновационный потенциал</h4>
                                <p className="text-orange-100 text-sm leading-relaxed">
                                    Использование Везотил® для управления хронической болью открывает новые возможности
                                    в ветеринарной медицине и может стать альтернативой традиционным анальгетикам с
                                    улучшенным профилем безопасности.
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
                articleId="chronic-pain-study"
            />
        </PageLayout>
    );
}
