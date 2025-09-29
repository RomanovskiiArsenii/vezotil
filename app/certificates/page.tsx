import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import { Award, CheckCircle, Shield, FileText, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Сертификаты качества | ВЕЗОТИЛ',
    description: 'Сертификаты качества препарата ВЕЗОТИЛ. GMP, ISO 9001, государственная регистрация Россельхознадзор.',
};

export default function CertificatesPage() {
    const certificates = [
        {
            title: 'GMP',
            subtitle: 'Надлежащая производственная практика',
            description: 'Международный стандарт качества производства фармацевтических препаратов',
            icon: Award,
            details: [
                'Стандарт качества производства',
                'Международное признание',
                'Контроль всех этапов производства',
                'Гарантия безопасности препаратов',
            ],
        },
        {
            title: 'ISO 9001',
            subtitle: 'Система менеджмента качества',
            description: 'Международный стандарт менеджмента качества, обеспечивающий постоянное улучшение процессов',
            icon: CheckCircle,
            details: [
                'Система управления качеством',
                'Постоянное улучшение процессов',
                'Удовлетворенность потребителей',
                'Документированные процедуры',
            ],
        },
        {
            title: 'Россельхознадзор',
            subtitle: 'Государственная регистрация',
            description: 'Официальная регистрация препарата в России с присвоением регистрационного удостоверения',
            icon: Shield,
            details: [
                'Государственная регистрация',
                'Разрешение на применение в России',
                'Контроль безопасности и эффективности',
                'Соответствие российским стандартам',
            ],
        },
    ];

    return (
        <PageLayout>
            <PageHeader
                title="Сертификаты качества"
                subtitle="Гарантии безопасности и эффективности препарата ВЕЗОТИЛ"
            />

            <ContentSection>
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Кнопка назад */}
                    <div className="flex items-center gap-4 mb-6">
                        <Link
                            href="/#about"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Вернуться к описанию препарата
                        </Link>
                    </div>

                    {/* Регистрационная информация */}
                    <div className="glass-card p-8 mb-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-cyan-100 mb-4">Регистрационные данные</h2>
                            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 max-w-2xl mx-auto">
                                <div className="flex items-center justify-center mb-4">
                                    <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Регистрационное удостоверение
                                        </h3>
                                        <p className="text-cyan-300 font-mono">№ 77-3-29.23-5075ПВР-3-29.23/03889</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-400">Дата регистрации:</span>
                                        <p className="text-white">12.04.2024 г.</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Производитель:</span>
                                        <p className="text-white">ООО "ВЕТСТЕМ"</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Лекарственная форма:</span>
                                        <p className="text-white">Лиофилизат для инъекций</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Срок годности:</span>
                                        <p className="text-white">2 года</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Сертификаты */}
                    <div className="space-y-8">
                        {certificates.map((cert, index) => (
                            <div key={cert.title} className="glass-card p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                                                <cert.icon className="w-8 h-8 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                                                <p className="text-cyan-400 font-medium">{cert.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-6">{cert.description}</p>
                                    </div>

                                    <div className="medical-card p-6">
                                        <h4 className="text-lg font-semibold text-cyan-100 mb-4">
                                            Ключевые характеристики:
                                        </h4>
                                        <ul className="space-y-3">
                                            {cert.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-gray-300">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Контактная информация */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6 text-center">Контроль качества</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="medical-card p-6">
                                <h3 className="text-lg font-semibold text-cyan-100 mb-4">Производственный контроль</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        Контроль исходного сырья
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        Мониторинг производственных процессов
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        Тестирование готовой продукции
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        Контроль условий хранения
                                    </li>
                                </ul>
                            </div>

                            <div className="medical-card p-6">
                                <h3 className="text-lg font-semibold text-cyan-100 mb-4">Качество и безопасность</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        Стерильность препарата
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        Стабильность активных веществ
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        Отсутствие токсичных примесей
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        Соответствие фармакопейным стандартам
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </PageLayout>
    );
}
