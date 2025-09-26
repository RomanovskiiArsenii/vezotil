'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import BackToSection from '../../components/back-to-section';
import { BookOpen, Users, Calendar, ArrowRight, FileText, Award, FlaskConical } from 'lucide-react';

// Metadata will be handled by layout.tsx

const scientificPublications = [
    {
        id: 'pilot-comparative-clinical-study',
        title: 'Пилотное сравнительное клиническое исследование анестезиологической активности нового отечественного препарата на основе тилетамина-золазепама «Везотил®» и его оригинального аналога «Золетил® 100»',
        authors: 'Е.А. Корнюшенков, Д.В. Вдовина, П.А. Анисимова, А.А. Шимширт, Е.В. Викторова',
        date: '2025-05-20',
        journal: 'Ветеринарная анестезиология',
        category: 'Клинические исследования',
        href: '/publications/pilot-comparative-study',
        image: '/publication-1.jpg',
        summary:
            'Комплексное сравнительное исследование эффективности и безопасности препарата Везотил® в сравнении с оригинальным Золетил® 100',
        keywords: ['анестезия', 'тилетамин', 'золазепам', 'сравнительное исследование'],
    },
    {
        id: 'effectiveness-vezotil-vs-zoletil',
        title: 'Эффективность препарата Везотил по сравнению с препаратом золетил 100 в клинической анестезиологической практике',
        authors: 'Е.А. Корнюшенков, Д.В. Вдовина, П.А. Анисимова, Е.В. Викторова',
        date: '2025-05-20',
        journal: 'Клиническая ветеринария',
        category: 'Сравнительная анестезиология',
        href: '/publications/effectiveness-study',
        image: '/publication-2.jpg',
        summary:
            'Детальный анализ клинической эффективности препарата Везотил® в условиях реальной ветеринарной практики',
        keywords: ['эффективность', 'клиническая практика', 'анестезиология'],
    },
    {
        id: 'vezotil-chronic-pain-management',
        title: 'Использование препарата Везотил® у собак и кошек для контроля хронической ортопедической боли',
        authors: 'Закирова О.В.',
        date: '2025-05-20',
        journal: 'Ветеринарная ортопедия',
        category: 'Управление болью',
        href: '/publications/chronic-pain-study',
        image: '/publication-3.jpg',
        summary:
            'Инновационный подход к использованию Везотил® в лечении хронических болевых синдромов у мелких домашних животных',
        keywords: ['хроническая боль', 'ортопедия', 'обезболивание'],
    },
    {
        id: 'zoo-animals-efficacy-assessment',
        title: 'Оценка терапевтической эффективности нового российского анестетика «Везотил®» на зоопарковых и диких животных',
        authors: 'Егоров Д.Н., Арсатян К.М., Викторова Е.В.',
        date: '2025-01-15',
        journal: 'Зоопарковая ветеринария',
        category: 'Дикие животные',
        href: '/publications/zoo-animals-study',
        image: 'https://cdn.abacus.ai/images/5533acb3-120c-4372-9204-bad5e534b1cd.png',
        summary: 'Первое масштабное исследование применения Везотил® у зоопарковых и диких животных различных видов',
        keywords: ['зоопарковые животные', 'дикие животные', 'анестезия экзотических видов'],
    },
    {
        id: 'comparative-clinical-pilot',
        title: 'Сравнительная оценка препаратов «Везотил®» и «Золетил® 100» в клинической анестезиологической практике. Пилотное исследование',
        authors: 'Евгений Корнюшенков, Дарья Вдовина, Полина Анисимова, Екатерина Викторова',
        date: '2024-08-26',
        journal: 'Современная ветеринарная медицина',
        category: 'Пилотные исследования',
        href: '/publications/comparative-pilot-study',
        image: '/publication-5-optimized.jpg',
        summary: 'Пилотное исследование, заложившее основы для более крупных сравнительных клинических испытаний',
        keywords: ['пилотное исследование', 'сравнительный анализ', 'клиническая анестезия'],
    },
];

export default function PublicationsPage() {
    return (
        <PageLayout>
            <PageHeader title="Научные публикации" subtitle="Исследования и публикации по препарату ВЕЗОТИЛ" />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-12">
                    <BackToSection href="/blog" label="Вернуться к образовательным ресурсам" />

                    {/* Introduction */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-3xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                            <BookOpen className="custom-mobile-hide w-8 h-8 text-cyan-400" />
                            Научные публикации по препарату ВЕЗОТИЛ
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Препарат ВЕЗОТИЛ является предметом активных научных исследований в ведущих ветеринарных
                            центрах России. Представленные публикации демонстрируют научную обоснованность применения
                            препарата в различных областях ветеринарной медицины.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-2xl font-bold text-cyan-400">5</div>
                                <div className="text-gray-300 text-sm">научных публикаций</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-2xl font-bold text-green-400">12+</div>
                                <div className="text-gray-300 text-sm">авторов-исследователей</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-2xl font-bold text-purple-400">2024-2025</div>
                                <div className="text-gray-300 text-sm">период публикаций</div>
                            </div>
                            <div className="medical-card p-4 text-center space-y-2">
                                <div className="text-2xl font-bold text-blue-400">4</div>
                                <div className="text-gray-300 text-sm">направления исследований</div>
                            </div>
                        </div>
                    </div>

                    {/* Publications Grid */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-cyan-100 text-center mb-8">
                            Актуальные научные публикации
                        </h2>

                        <div className="custom-overflow-y-hide grid gap-8">
                            {scientificPublications.map((publication, index) => (
                                <motion.div
                                    key={publication.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="custom-overflow-y-hide group"
                                >
                                    <div className="hud-element p-8 rounded-xl scan-line hover:medical-glow transition-all duration-500 custom-after-before-no-poiner-events">
                                        <div className="grid lg:grid-cols-12 gap-8 items-start">
                                            {/* Publication Image */}
                                            <div className="lg:col-span-3">
                                                <div className="relative aspect-[4/3] bg-slate-800/50 rounded-xl border border-cyan-500/30 overflow-hidden group-hover:border-cyan-400/50 transition-colors">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                                                    <Image
                                                        src={publication.image}
                                                        alt={`Иллюстрация: ${publication.title}`}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            </div>

                                            {/* Publication Info */}
                                            <div className="lg:col-span-7 space-y-4">
                                                <div className="space-y-3">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30">
                                                            {publication.category}
                                                        </span>
                                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                                                            {publication.journal}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-xl font-bold text-cyan-100 group-hover:text-cyan-50 transition-colors leading-tight">
                                                        {publication.title}
                                                    </h3>

                                                    <div className="flex items-center gap-2 text-cyan-300">
                                                        <Users className="w-4 h-4" />
                                                        <span className="font-medium">{publication.authors}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed">{publication.summary}</p>

                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-300">
                                                        Дата публикации:{' '}
                                                        {new Date(publication.date).toLocaleDateString('ru-RU')}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {publication.keywords.map((keyword, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-gray-600/30"
                                                        >
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="lg:col-span-2 flex justify-center">
                                                <Link href={publication.href}>
                                                    <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/50 hover:border-cyan-300/70 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                                                        <div className="custom-overflow-visible flex items-center gap-2 text-cyan-100 group-hover/btn:text-white font-medium">
                                                            <span>Основное в&nbsp;статье</span>
                                                            <ArrowRight className="custom-flex-shrink-0 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                        </div>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Research Categories */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 text-center">
                            Направления научных исследований
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="custom-flex-column custom-height-100 medical-card p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <FlaskConical className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h3 className="custom-flex-grow-2 text-lg font-semibold text-cyan-100">
                                    Эффективность
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Исследования клинической эффективности препарата
                                </p>
                                <div className="text-2xl font-bold text-cyan-400">3</div>
                                <div className="text-gray-400 text-xs">публикации</div>
                            </div>

                            <div className="custom-flex-column custom-height-100 medical-card p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Award className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="custom-flex-grow-2 text-lg font-semibold text-cyan-100">Безопасность</h3>
                                <p className="text-gray-300 text-sm">Профиль безопасности и переносимости</p>
                                <div className="text-2xl font-bold text-green-400">2</div>
                                <div className="text-gray-400 text-xs">публикации</div>
                            </div>

                            <div className="custom-flex-column custom-height-100 medical-card p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="custom-flex-grow-2 text-lg font-semibold text-cyan-100">
                                    Специальные популяции
                                </h3>
                                <p className="text-gray-300 text-sm">Зоопарковые и экзотические животные</p>
                                <div className="text-2xl font-bold text-purple-400">1</div>
                                <div className="text-gray-400 text-xs">публикация</div>
                            </div>

                            <div className="custom-flex-column custom-height-100 medical-card p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <FileText className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="custom-flex-grow-2 text-lg font-semibold text-cyan-100">
                                    Управление болью
                                </h3>
                                <p className="text-gray-300 text-sm">Применение в обезболивающей терапии</p>
                                <div className="text-2xl font-bold text-blue-400">1</div>
                                <div className="text-gray-400 text-xs">публикация</div>
                            </div>
                        </div>
                    </div>

                    {/* For Researchers */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Для исследователей</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Исследовательские программы</h3>
                                <div className="space-y-3 text-gray-300">
                                    <p>
                                        ООО "ВЕТСТЕМ" активно поддерживает научные исследования препарата ВЕЗОТИЛ и
                                        предоставляет возможности для сотрудничества с исследовательскими центрами.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Предоставление препарата для исследований</li>
                                        <li>• Методологическая поддержка исследований</li>
                                        <li>• Консультации научного отдела</li>
                                        <li>• Помощь в публикации результатов</li>
                                        <li>• Финансовая поддержка перспективных исследований</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Приоритетные направления</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-cyan-200">Текущие приоритеты:</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Педиатрическая анестезия</li>
                                            <li>• Гериатрические пациенты</li>
                                            <li>• Экзотические виды животных</li>
                                            <li>• Амбулаторные процедуры</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-4">
                                        <p className="text-blue-200 font-medium text-sm">
                                            📧 Для сотрудничества: research@vetstem.ru
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </PageLayout>
    );
}
