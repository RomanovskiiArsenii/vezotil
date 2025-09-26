'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { getScientificPublicationContent } from '../../../lib/article-content';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { FullTextModal } from '../../../components/full-text-modal';
import { BookOpen, Users, TreePine, FlaskConical, Globe, Award, Target } from 'lucide-react';

export default function ZooAnimalsStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const publicationContent = getScientificPublicationContent('zoo-animals-study');

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Научные публикации', href: '/publications' },
        { label: 'Исследование зоопарковых животных', href: '/publications/zoo-animals-study' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Везотил® для зоопарковых животных"
                subtitle="Анестезия диких и экзотических видов • Московский зоопарк"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/publications" label="Вернуться к научным публикациям" />

                    {/* Study Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-green-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                                <TreePine className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">
                                    Исследование на зоопарковых животных
                                </h2>
                                <p className="text-green-300">Московский зоопарк • 2025</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-cyan-400" />
                                    Исследовательская группа
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-medium text-cyan-200">Д.Н. Егоров</p>
                                        <p className="text-sm text-gray-400">
                                            Главный ветеринарный врач Московского зоопарка
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">К.М. Арсатян</p>
                                        <p className="text-sm text-gray-400">Специалист по экзотическим животным</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-cyan-200">Е.В. Викторова</p>
                                        <p className="text-sm text-gray-400">Аналитик данных</p>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Объем исследования</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">1462</div>
                                        <div className="text-gray-400 text-sm">слов в публикации</div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Виды животных:</span>
                                            <span className="text-cyan-300 font-medium">12+</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Общее количество:</span>
                                            <span className="text-cyan-300 font-medium">45+ особей</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Период наблюдения:</span>
                                            <span className="text-cyan-300 font-medium">6 месяцев</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Уникальность</h3>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                                        <Globe className="w-6 h-6 text-green-400" />
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Первое в России масштабное исследование применения тилетамин-золазепамовых
                                        комбинаций у зоопарковых и диких животных.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animal Species */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Исследованные виды животных</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Хищники</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Амурские тигры (3 особи)</li>
                                        <li>• Леопарды (2 особи)</li>
                                        <li>• Рыси (4 особи)</li>
                                        <li>• Волки (5 особей)</li>
                                    </ul>
                                    <div className="text-center pt-2">
                                        <div className="text-lg font-bold text-cyan-400">14</div>
                                        <div className="text-gray-400 text-xs">хищников</div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Копытные</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Благородные олени (6 особей)</li>
                                        <li>• Косули (4 особи)</li>
                                        <li>• Кабаны (3 особи)</li>
                                        <li>• Муфлоны (2 особи)</li>
                                    </ul>
                                    <div className="text-center pt-2">
                                        <div className="text-lg font-bold text-green-400">15</div>
                                        <div className="text-gray-400 text-xs">копытных</div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Приматы</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Орангутаны (2 особи)</li>
                                        <li>• Шимпанзе (3 особи)</li>
                                        <li>• Макаки (8 особей)</li>
                                        <li>• Лемуры (3 особи)</li>
                                    </ul>
                                    <div className="text-center pt-2">
                                        <div className="text-lg font-bold text-purple-400">16</div>
                                        <div className="text-gray-400 text-xs">приматов</div>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Видоспецифичные результаты</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Исследование показало, что препарат Везотил® эффективен у всех исследованных видов
                                    животных, однако требует корректировки дозировок в зависимости от вида, размера и
                                    физиологических особенностей. Особенно выраженный эффект наблюдался у хищных
                                    млекопитающих.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results by Species */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <Award className="w-8 h-8 text-cyan-400" />
                            Результаты по видам
                        </h2>

                        <div className="space-y-6">
                            <div className="grid gap-6">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">
                                        Крупные хищники (тигры, леопарды)
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Дозировка:</h4>
                                            <p className="text-gray-300 text-sm">3-4 мг/кг массы тела</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Эффективность:</h4>
                                            <p className="text-green-300 text-sm">Отличная (95% успеха)</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Особенности:</h4>
                                            <p className="text-gray-300 text-sm">Быстрое наступление эффекта</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Приматы</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Дозировка:</h4>
                                            <p className="text-gray-300 text-sm">8-12 мг/кг массы тела</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Эффективность:</h4>
                                            <p className="text-green-300 text-sm">Хорошая (88% успеха)</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Особенности:</h4>
                                            <p className="text-gray-300 text-sm">Требует корректировки доз</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Копытные</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Дозировка:</h4>
                                            <p className="text-gray-300 text-sm">2-3 мг/кг массы тела</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Эффективность:</h4>
                                            <p className="text-green-300 text-sm">Очень хорошая (92% успеха)</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-cyan-200 text-sm">Особенности:</h4>
                                            <p className="text-gray-300 text-sm">Стабильные результаты</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-6">
                                <h4 className="font-semibold text-green-200 mb-3">🦁 Выводы по зоопарковым животным</h4>
                                <p className="text-green-100 text-sm leading-relaxed">
                                    Препарат Везотил® показал высокую эффективность и безопасность при использовании у
                                    различных видов зоопарковых животных, что открывает новые возможности для
                                    ветеринарной помощи в зоопарках и заповедниках.
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
                articleId="zoo-animals-study"
            />
        </PageLayout>
    );
}
