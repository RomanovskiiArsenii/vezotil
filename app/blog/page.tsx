import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import Link from 'next/link';
import { BookOpen, FlaskConical, Video, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Блог и образование | ВЕЗОТИЛ ВЕТСТЕМ',
    description:
        'Научные публикации, клинические исследования и вебинары о ветеринарной анестезии. Профессиональные материалы для специалистов.',
    keywords:
        'ветеринарная анестезия, научные публикации, клинические исследования, вебинары, ВЕЗОТИЛ, ветеринарное образование',
    openGraph: {
        title: 'Блог и образование ВЕЗОТИЛ',
        description: 'Профессиональные материалы для специалистов ветеринарной медицины',
        type: 'website',
    },
};

const educationSections = [
    {
        id: 'publications',
        title: 'Научные публикации',
        description: 'Исследования и научные статьи о применении препарата ВЕЗОТИЛ в ветеринарной практике',
        icon: BookOpen,
        href: '/publications',
        color: 'from-blue-600 to-indigo-600',
        hoverColor: 'hover:from-blue-500 hover:to-indigo-500',
    },
    {
        id: 'clinical',
        title: 'Клинические исследования',
        description: 'Результаты клинических испытаний и практические рекомендации по использованию ВЕЗОТИЛ',
        icon: FlaskConical,
        href: '/clinicals',
        color: 'from-green-600 to-emerald-600',
        hoverColor: 'hover:from-green-500 hover:to-emerald-500',
    },
    {
        id: 'webinars',
        title: 'Вебинары',
        description:
            'Образовательные вебинары и видеоматериалы для ветеринарных специалистов по применению препарата ВЕЗОТИЛ',
        icon: Video,
        href: '/webinars',
        color: 'from-purple-600 to-pink-600',
        hoverColor: 'hover:from-purple-500 hover:to-pink-500',
    },
];
export default function BlogEducationPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Специалистам', href: '/blog' },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Блог и образование"
                subtitle="Профессиональные материалы и образовательные ресурсы для ветеринарных специалистов"
                breadcrumbs={breadcrumbs}
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto">
                    {/* Intro Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-cyan-100 mb-6">Образовательные ресурсы</h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                            Доступ к научным публикациям, клиническим исследованиям и образовательным вебинарам о
                            применении препарата ВЕЗОТИЛ в ветеринарной практике
                        </p>
                    </div>

                    {/* Three CTA Cards */}
                    <div className="custom-overflow-visible grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
                        {educationSections.map((section, index) => (
                            <div key={section.id} className="custom-overflow-visible group mobile-card p-6">
                                <Link href={section.href}>
                                    <div
                                        className={`
                    custom-overflow-visible relative backdrop-blur-lg border rounded-xl cursor-pointer
                    transition-all duration-500 hover:scale-[1.02] samsung-safe-card
                    h-[500px] flex flex-col overflow-hidden
                    ${section.id === 'publications' ? 'bg-blue-900/20 border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-800/30' : ''}
                    ${section.id === 'clinical' ? 'bg-emerald-900/20 border-emerald-400/30 hover:border-emerald-300/50 hover:bg-emerald-800/30' : ''}
                    ${section.id === 'webinars' ? 'bg-purple-900/20 border-purple-400/30 hover:border-purple-300/50 hover:bg-purple-800/30' : ''}
                    group-hover:shadow-xl
                    ${section.id === 'publications' ? 'group-hover:shadow-blue-500/20' : ''}
                    ${section.id === 'clinical' ? 'group-hover:shadow-emerald-500/20' : ''}
                    ${section.id === 'webinars' ? 'group-hover:shadow-purple-500/20' : ''}
                  `}
                                    >
                                        {/* Animated background gradient overlay */}
                                        <div
                                            className={`
                      custom-overflow-visible absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      ${section.id === 'publications' ? 'bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent' : ''}
                      ${section.id === 'clinical' ? 'bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent' : ''}
                      ${section.id === 'webinars' ? 'bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent' : ''}
                    `}
                                        />

                                        {/* Glass reflection effect */}
                                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                        <div className="custom-overflow-visible relative flex-1 p-8 text-center space-y-6 flex flex-col justify-between">
                                            {/* Icon */}
                                            <div className="space-y-6 p-4">
                                                <div
                                                    className={`
                          relative w-20 h-20 mx-auto rounded-full flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                          backdrop-blur-sm border
                          ${section.id === 'publications' ? 'bg-blue-500/20 border-blue-400/40' : ''}
                          ${section.id === 'clinical' ? 'bg-emerald-500/20 border-emerald-400/40' : ''}
                          ${section.id === 'webinars' ? 'bg-purple-500/20 border-purple-400/40' : ''}
                        `}
                                                >
                                                    {/* Inner glow effect */}
                                                    <div
                                                        className={`
                            absolute inset-0 rounded-full blur-sm opacity-50
                            ${section.id === 'publications' ? 'bg-blue-400/30' : ''}
                            ${section.id === 'clinical' ? 'bg-emerald-400/30' : ''}
                            ${section.id === 'webinars' ? 'bg-purple-400/30' : ''}
                          `}
                                                    />
                                                    <section.icon
                                                        className={`
                            relative w-10 h-10 z-10
                            ${section.id === 'publications' ? 'text-blue-100' : ''}
                            ${section.id === 'clinical' ? 'text-emerald-100' : ''}
                            ${section.id === 'webinars' ? 'text-purple-100' : ''}
                          `}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="space-y-4">
                                                    <h3
                                                        className={`
                            text-2xl font-bold transition-colors duration-300
                            ${section.id === 'publications' ? 'text-blue-100 group-hover:text-blue-50' : ''}
                            ${section.id === 'clinical' ? 'text-emerald-100 group-hover:text-emerald-50' : ''}
                            ${section.id === 'webinars' ? 'text-purple-100 group-hover:text-purple-50' : ''}
                          `}
                                                    >
                                                        {section.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="pt-4 pb-8">
                                                <div
                                                    className={`
                          inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                          transition-all duration-300 backdrop-blur-sm border
                          group-hover:scale-105 group-hover:shadow-lg
                          ${section.id === 'publications' ? 'bg-blue-600/30 border-blue-400/50 text-blue-100 hover:bg-blue-500/40 hover:border-blue-300/60' : ''}
                          ${section.id === 'clinical' ? 'bg-emerald-600/30 border-emerald-400/50 text-emerald-100 hover:bg-emerald-500/40 hover:border-emerald-300/60' : ''}
                          ${section.id === 'webinars' ? 'bg-purple-600/30 border-purple-400/50 text-purple-100 hover:bg-purple-500/40 hover:border-purple-300/60' : ''}
                        `}
                                                >
                                                    Перейти к разделу
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="relative backdrop-blur-lg bg-slate-900/20 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                        {/* Glass reflection effect */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent opacity-60 rounded-t-xl" />

                        <div className="relative text-center space-y-8">
                            <h3 className="text-2xl font-bold text-cyan-100">О наших образовательных материалах</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 p-4">
                                <div className="space-y-4 group p-4">
                                    <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-xl blur-sm bg-blue-400/20 opacity-50"></div>
                                        <BookOpen className="relative w-8 h-8 text-blue-100 z-10" />
                                    </div>
                                    <h4 className="font-semibold text-blue-100">Научная обоснованность</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Все материалы основаны на клинических исследованиях и научных данных
                                    </p>
                                </div>

                                <div className="space-y-4 group p-4">
                                    <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-xl blur-sm bg-emerald-400/20 opacity-50"></div>
                                        <FlaskConical className="relative w-8 h-8 text-emerald-100 z-10" />
                                    </div>
                                    <h4 className="font-semibold text-emerald-100">Практическая применимость</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Готовые протоколы и рекомендации для повседневной практики
                                    </p>
                                </div>

                                <div className="space-y-4 group p-4">
                                    <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm border border-purple-400/40 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-xl blur-sm bg-purple-400/20 opacity-50"></div>
                                        <Video className="relative w-8 h-8 text-purple-100 z-10" />
                                    </div>
                                    <h4 className="font-semibold text-purple-100">Интерактивное обучение</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Видеоматериалы и вебинары от ведущих специалистов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </PageLayout>
    );
}
