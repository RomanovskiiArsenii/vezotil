'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getScientificPublicationContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { BookOpen, Users, Calendar, FlaskConical, BarChart, TrendingUp, FileText } from 'lucide-react';

export default function PilotComparativeStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const publicationContent = getScientificPublicationContent('pilot-comparative-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Научные публикации', href: '/publications' },
        { label: 'Пилотное исследование', href: '/publications/pilot-comparative-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Пилотное сравнительное исследование"
                subtitle="Анестезиологическая активность Везотил® vs Золетил® 100"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/publications" label="Вернуться к научным публикациям" />

                    {/* Publication Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-cyan-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                                <BookOpen className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">
                                    Пилотное сравнительное клиническое исследование
                                </h2>
                                <p className="text-cyan-300">Ветеринарная анестезиология • 2025</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-cyan-400" />
                                    Авторы исследования
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Е.А. Корнюшенков</p>
                                        <p className="text-sm text-gray-400">Ведущий исследователь, к.в.н.</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Д.В. Вдовина</p>
                                        <p className="text-sm text-gray-400">Ветеринарный анестезиолог</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">П.А. Анисимова</p>
                                        <p className="text-sm text-gray-400">Научный сотрудник</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">А.А. Шимширт</p>
                                        <p className="text-sm text-gray-400">Статистик</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Е.В. Викторова</p>
                                        <p className="text-sm text-gray-400">Аналитик данных</p>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-cyan-400" />
                                    Данные публикации
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-cyan-200 font-medium">Дата публикации</p>
                                            <p className="text-sm">20 мая 2025 г.</p>
                                        </div>
                                        <div>
                                            <p className="text-cyan-200 font-medium">Журнал</p>
                                            <p className="text-sm">Ветеринарная анестезиология</p>
                                        </div>
                                        <div>
                                            <p className="text-cyan-200 font-medium">Тип статьи</p>
                                            <p className="text-sm">Клиническое исследование</p>
                                        </div>
                                        <div>
                                            <p className="text-cyan-200 font-medium">Статус</p>
                                            <p className="text-sm">Опубликовано</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Аннотация</h2>

                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Данное пилотное исследование представляет собой первое комплексное сравнение
                                анестезиологической активности нового отечественного препарата Везотил® с его
                                оригинальным аналогом Золетил® 100. Исследование проводилось с целью оценки
                                терапевтической эквивалентности препаратов и выявления потенциальных преимуществ
                                российского аналога.
                            </p>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Цель исследования</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Провести сравнительную оценку анестезиологической активности препаратов Везотил® и
                                    Золетил® 100 у кошек и собак, определить терапевтическую эквивалентность и выявить
                                    клинически значимые различия в действии препаратов.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <FlaskConical className="w-8 h-8 text-cyan-400" />
                            Материалы и методы
                        </h2>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Дизайн исследования</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Рандомизированное контролируемое исследование</li>
                                        <li>• Двойное слепое сравнение</li>
                                        <li>• Параллельные группы</li>
                                        <li>• Одноцентровое исследование</li>
                                        <li>• Проспективный дизайн</li>
                                    </ul>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Критерии включения</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Здоровые животные (ASA I-II)</li>
                                        <li>• Возраст от 1 до 8+ лет</li>
                                        <li>• Масса тела от 2 до 45 кг</li>
                                        <li>• Плановые хирургические процедуры</li>
                                        <li>• Информированное согласие владельцев</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Протокол анестезии</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Премедикация</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Атропин 0,02-0,04 мг/кг п/к</li>
                                            <li>• За 15-20 минут до индукции</li>
                                            <li>• Контроль саливации</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Индукция</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Везотил® или Золетил® 100</li>
                                            <li>• Дозировка 10-15 мг/кг в/м</li>
                                            <li>• Однократное введение</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Мониторинг</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• ЧСС, ЧД, температура</li>
                                            <li>• Глубина анестезии</li>
                                            <li>• Качество восстановления</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <BarChart className="w-8 h-8 text-cyan-400" />
                            Результаты исследования
                        </h2>

                        <div className="space-y-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Основные выводы</h3>
                                <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-6 space-y-4">
                                    <h4 className="font-semibold text-green-200">🏆 Ключевые результаты</h4>
                                    <ul className="space-y-2 text-green-100 text-sm">
                                        <li>
                                            • Препарат Везотил® продемонстрировал полную терапевтическую
                                            эквивалентность Золетил® 100
                                        </li>
                                        <li>
                                            • Статистически значимых различий в основных показателях анестезии не
                                            выявлено
                                        </li>
                                        <li>• Везотил® показал некоторые преимущества в части седативного эффекта</li>
                                        <li>• Оба препарата показали высокий профиль безопасности</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Временные характеристики</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-cyan-200 font-medium">Везотил®</p>
                                                <div className="space-y-1 text-gray-300">
                                                    <p>Наступление: 3.2±0.8 мин</p>
                                                    <p>Длительность: 62±15 мин</p>
                                                    <p>Восстановление: 95±20 мин</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-cyan-200 font-medium">Золетил® 100</p>
                                                <div className="space-y-1 text-gray-300">
                                                    <p>Наступление: 3.5±0.9 мин</p>
                                                    <p>Длительность: 58±18 мин</p>
                                                    <p>Восстановление: 102±25 мин</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400">p {'>'} 0.05 для всех показателей</p>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Качественные показатели</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Глубина анестезии:</span>
                                            <span className="text-green-300 font-medium">Адекватная (100%)</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Мышечная релаксация:</span>
                                            <span className="text-green-300 font-medium">Отличная</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Седативный эффект:</span>
                                            <span className="text-cyan-300 font-medium">Везотил® {'>'}Золетил®</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Саливация:</span>
                                            <span className="text-cyan-300 font-medium">Везотил® {'<'} Золетил®</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistical Analysis */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Статистический анализ</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Методы статистической обработки</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Использованные тесты:</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• t-критерий Стьюдента</li>
                                            <li>• Критерий Манна-Уитни</li>
                                            <li>• Критерий χ² Пирсона</li>
                                            <li>• Анализ выживаемости Каплана-Мейера</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Уровень значимости:</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• α = 0.05 (p {'<'} 0.05)</li>
                                            <li>• Мощность исследования: 80%</li>
                                            <li>• Доверительный интервал: 95%</li>
                                            <li>• Размер эффекта: 0.3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Основные статистические результаты
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl font-bold text-cyan-400">p {'>'}0.05</div>
                                            <div className="text-gray-300 text-sm">время наступления анестезии</div>
                                        </div>
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl font-bold text-green-400">p {'>'}0.05</div>
                                            <div className="text-gray-300 text-sm">продолжительность действия</div>
                                        </div>
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl font-bold text-purple-400">p {'>'}0.05</div>
                                            <div className="text-gray-300 text-sm">время восстановления</div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/30 rounded-lg p-4">
                                        <p className="text-cyan-200 font-medium text-sm">
                                            📊 Статистический вывод: Отсутствие статистически значимых различий (p {'>'}
                                            0.05) подтверждает терапевтическую эквивалентность препаратов.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusions */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Выводы и перспективы</h2>

                        <div className="space-y-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Научные выводы</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                        1. Препарат Везотил® продемонстрировал полную терапевтическую эквивалентность
                                        оригинальному препарату Золетил® 100 по всем основным показателям
                                        анестезиологической активности.
                                    </p>
                                    <p className="leading-relaxed">
                                        2. Выявлены некоторые клинические преимущества Везотила: более выраженная
                                        седация в период индукции и значительно меньшая саливация.
                                    </p>
                                    <p className="leading-relaxed">
                                        3. Оба препарата показали высокий профиль безопасности при применении в
                                        рекомендованных дозировках.
                                    </p>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Клиническое значение</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Результаты данного пилотного исследования обосновывают возможность использования
                                    препарата Везотил® в качестве альтернативы Золетил® 100 в ветеринарной
                                    анестезиологической практике. Это особенно важно в контексте импортозамещения и
                                    обеспечения доступности качественных анестетиков для российских ветеринарных клиник.
                                </p>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">
                                    Перспективы дальнейших исследований
                                </h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Проведение многоцентрового исследования большего масштаба</li>
                                    <li>• Изучение применения у экзотических видов животных</li>
                                    <li>• Фармакоэкономический анализ</li>
                                    <li>• Долгосрочные исследования безопасности</li>
                                    <li>• Сравнение с другими анестетиками</li>
                                </ul>
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
                articleId="pilot-comparative-study"
            />
        </PageLayout>
    );
}
