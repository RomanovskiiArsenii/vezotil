'use client';

import { useState } from 'react';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import BackToSection from '../../../components/back-to-section';
import { FullTextModal } from '../../../components/full-text-modal';
import { ReadFullReportButton } from '../../../components/read-full-report-button';
import { getClinicalReportContent } from '../../../lib/article-content';
import { Building, Users, Calendar, FlaskConical, MapPin, Award } from 'lucide-react';

export default function DobryjDoctorStudyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Образовательные ресурсы', href: '/blog' },
        { label: 'Клинические исследования', href: '/clinicals' },
        { label: 'Исследование Добрый Доктор', href: '/clinicals/dobryj-doctor-study' },
    ];

    const reportContent = getClinicalReportContent('dobryj-doctor-study');

    return (
        <PageLayout>
            <PageHeader
                title="Клиническое исследование в сети «Добрый Доктор»"
                subtitle="Многоцентровое исследование эффективности ВЕЗОТИЛ • г. Владимир"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />

                    {/* Network Overview */}
                    <div className="glass-card p-8 space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="custom-mobile-hide w-16 h-16 bg-green-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                                <Building className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cyan-100">
                                    Сеть ветеринарных клиник «Добрый Доктор»
                                </h2>
                                <p className="text-green-300">г. Владимир • Сеть из 4 филиалов</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <MapPin className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-2xl font-bold text-green-400">4</div>
                                <div className="text-gray-300 text-sm">филиала клиник</div>
                            </div>

                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-cyan-400" />
                                </div>
                                <div className="text-2xl font-bold text-cyan-400">50+</div>
                                <div className="text-gray-300 text-sm">животных в исследовании</div>
                            </div>

                            <div className="medical-card p-6 text-center space-y-3">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Calendar className="w-8 h-8 text-purple-400" />
                                </div>
                                <div className="text-2xl font-bold text-purple-400">3</div>
                                <div className="text-gray-300 text-sm">месяца исследований</div>
                            </div>
                        </div>
                    </div>

                    {/* Study Results */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <FlaskConical className="w-8 h-8 text-cyan-400" />
                            Результаты многоцентрового исследования
                        </h2>

                        <div className="space-y-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Основные выводы</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Эффективность:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Стабильные результаты во всех 4 филиалах</li>
                                            <li>• Воспроизводимость эффекта анестезии</li>
                                            <li>• Одинаково высокое качество анестезии</li>
                                            <li>• Предсказуемое время действия</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-cyan-200">Безопасность:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Отсутствие серьезных нежелательных реакций</li>
                                            <li>• Стабильные показатели витальных функций</li>
                                            <li>• Быстрое и гладкое восстановление</li>
                                            <li>• Высокая удовлетворенность врачей</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-cyan-100">Особенности исследования</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Многоцентровое исследование в сети клиник «Добрый Доктор» позволило оценить
                                    воспроизводимость результатов применения препарата ВЕЗОТИЛ в различных условиях и
                                    при работе разных специалистов. Это особенно важно для понимания практической
                                    применимости препарата в реальных клинических условиях.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="medical-card p-4 text-center space-y-2">
                                    <div className="text-lg font-bold text-cyan-400">100%</div>
                                    <div className="text-gray-300 text-xs">успешных анестезий</div>
                                </div>
                                <div className="medical-card p-4 text-center space-y-2">
                                    <div className="text-lg font-bold text-green-400">0</div>
                                    <div className="text-gray-300 text-xs">серьезных осложнений</div>
                                </div>
                                <div className="medical-card p-4 text-center space-y-2">
                                    <div className="text-lg font-bold text-purple-400">95%</div>
                                    <div className="text-gray-300 text-xs">удовлетворенность врачей</div>
                                </div>
                                <div className="medical-card p-4 text-center space-y-2">
                                    <div className="text-lg font-bold text-blue-400">4.8/5</div>
                                    <div className="text-gray-300 text-xs">общая оценка</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Network */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">О сети клиник «Добрый Доктор»</h2>

                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Сеть ветеринарных клиник «Добрый Доктор» — одна из крупнейших ветеринарных сетей
                                Владимирской области, предоставляющая полный спектр ветеринарных услуг.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Характеристики сети</h3>
                                    <div className="space-y-3 text-gray-300">
                                        <div className="flex justify-between">
                                            <span>Количество филиалов:</span>
                                            <span className="text-cyan-300 font-medium">4</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Количество врачей:</span>
                                            <span className="text-cyan-300 font-medium">24+</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Опыт работы:</span>
                                            <span className="text-cyan-300 font-medium">15+ лет</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Пациентов в год:</span>
                                            <span className="text-cyan-300 font-medium">8000+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="medical-card p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-100">Специализации</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Терапия и диагностика</li>
                                        <li>• Хирургия и анестезиология</li>
                                        <li>• Стоматология</li>
                                        <li>• Офтальмология</li>
                                        <li>• Дерматология</li>
                                        <li>• Кардиология</li>
                                    </ul>
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
                articleId="dobryj-doctor-study"
            />
        </PageLayout>
    );
}
