import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import { Syringe, Clock, Droplet, Activity, AlertTriangle, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Как использовать ВЕЗОТИЛ | Пошаговое руководство',
    description: 'Пошаговое руководство по разведению, дозировке и применению препарата ВЕЗОТИЛ для собак и кошек.',
};

export default function HowToUsePage() {
    const preparationSteps = [
        {
            step: 1,
            title: 'Подготовка к применению',
            description: 'Подготовьте животное и рабочее место',
            details: [
                '12-часовая голодная диета',
                'Снять антипаразитарный ошейник за 24 часа',
                'Подготовить стерильные шприцы и иглы',
                'Обеспечить спокойную обстановку',
            ],
            icon: Shield,
            color: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
        },
        {
            step: 2,
            title: 'Премедикация (за 15 минут)',
            description: 'Введите вспомогательные препараты',
            details: [
                'Димедрол 1% - 10 мг/кг (антигистаминное)',
                'Атропин 0,1%: собаки - 0,1 мг/кг, кошки - 0,05 мг/кг',
                'Внутримышечно или подкожно',
                'Дождитесь начала действия (15 минут)',
            ],
            icon: Syringe,
            color: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
        },
        {
            step: 3,
            title: 'Приготовление раствора',
            description: 'Разведите лиофилизат непосредственно перед применением',
            details: [
                'Возьмите флакон с лиофилизатом',
                'Введите весь объем растворителя (5 мл)',
                'Легко встряхните флакон',
                'Убедитесь в полном растворении',
            ],
            icon: Droplet,
            color: 'from-purple-500/20 to-pink-500/20 border-purple-400/30',
        },
        {
            step: 4,
            title: 'Расчет дозировки',
            description: 'Рассчитайте дозу согласно весу животного и цели применения',
            details: [
                'В 1 мл готового раствора: 50 мг тилетамина + 50 мг золазепама',
                'Дозировка зависит от вида животного',
                'Учитывайте цель применения',
                'Не превышайте максимальную дозу',
            ],
            icon: Activity,
            color: 'from-orange-500/20 to-red-500/20 border-orange-400/30',
        },
        {
            step: 5,
            title: 'Введение препарата',
            description: 'Введите препарат соблюдая асептику',
            details: [
                'Внутривенно или внутримышечно',
                'Соблюдайте правила асептики',
                'После введения наблюдайте за животным',
                'Готовьтесь к началу действия',
            ],
            icon: Syringe,
            color: 'from-cyan-500/20 to-blue-500/20 border-cyan-400/30',
        },
        {
            step: 6,
            title: 'Наблюдение и контроль',
            description: 'Контролируйте состояние животного',
            details: [
                'Наступление эффекта: собаки 7-8 мин (в/м), кошки 1,5-7 мин (в/м)',
                'Продолжительность анестезии: 30-90 минут',
                'Период восстановления: 2-6 часов',
                'Обеспечьте спокойную обстановку',
            ],
            icon: Clock,
            color: 'from-teal-500/20 to-green-500/20 border-teal-400/30',
        },
    ];

    const dosageTable = {
        dogs: [
            { purpose: 'Клинический осмотр', im: '7-10 мг/кг', iv: '5 мг/кг' },
            { purpose: 'Кратковременная анестезия', im: '10-15 мг/кг', iv: '7,5 мг/кг' },
            { purpose: 'Длительная анестезия', im: '15-25 мг/кг', iv: '10 мг/кг' },
        ],
        cats: [
            { purpose: 'Клинический осмотр', im: '10 мг/кг', iv: '5 мг/кг' },
            { purpose: 'Длительная анестезия', im: '15 мг/кг', iv: '7,5 мг/кг' },
        ],
    };

    return (
        <PageLayout>
            <PageHeader title="Как использовать ВЕЗОТИЛ" subtitle="Пошаговое руководство по применению препарата" />

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

                    {/* Предупреждение */}
                    <div className="glass-card p-6 border-l-4 border-orange-500">
                        <div className="flex items-start gap-6">
                            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-orange-300 mb-2">Важное предупреждение</h3>
                                <p className="text-gray-300">
                                    Препарат предназначен только для применения ветеринарными врачами. Строго соблюдайте
                                    дозировку и противопоказания. При возникновении нежелательных реакций немедленно
                                    обратитесь к специалисту.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Пошаговая инструкция */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-cyan-100 text-center mb-8">
                            Практическое пособие по применению
                        </h2>

                        {preparationSteps.map((step, index) => (
                            <div key={step.step} className="relative">
                                <div className="glass-card p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                        <div className="md:col-span-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center border`}
                                                >
                                                    <step.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="custom-overflow-y-hide text-4xl font-bold text-cyan-400">
                                                    {step.step}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.description}</p>
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="medical-card p-6">
                                                <ul className="space-y-3">
                                                    {step.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow to next step */}
                                {/* {index < preparationSteps.length - 1 && (
                                    <div className="flex justify-center my-4">
                                        <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                                        </div>
                                    </div>
                                )} */}
                            </div>
                        ))}
                    </div>

                    {/* Таблица дозировок */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-cyan-100 text-center mb-8">Таблица дозировок</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Собаки */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 text-center">🐕 Собаки</h3>
                                <div className="overflow-hidden rounded-lg border border-cyan-500/30">
                                    <table className="w-full">
                                        <thead className="bg-cyan-500/20">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">
                                                    Цель применения
                                                </th>
                                                <th className="px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                                                    В/м
                                                </th>
                                                <th className="px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                                                    В/в
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dosageTable.dogs.map((row, idx) => (
                                                <tr key={idx} className="border-t border-cyan-500/20">
                                                    <td className="px-4 py-3 text-sm text-gray-300">{row.purpose}</td>
                                                    <td className="px-4 py-3 text-sm text-white text-center font-mono">
                                                        {row.im}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-white text-center font-mono">
                                                        {row.iv}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Кошки */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 text-center">🐱 Кошки</h3>
                                <div className="overflow-hidden rounded-lg border border-cyan-500/30">
                                    <table className="w-full">
                                        <thead className="bg-cyan-500/20">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">
                                                    Цель применения
                                                </th>
                                                <th className="px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                                                    В/м
                                                </th>
                                                <th className="px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                                                    В/в
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dosageTable.cats.map((row, idx) => (
                                                <tr key={idx} className="border-t border-cyan-500/20">
                                                    <td className="px-4 py-3 text-sm text-gray-300">{row.purpose}</td>
                                                    <td className="px-4 py-3 text-sm text-white text-center font-mono">
                                                        {row.im}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-white text-center font-mono">
                                                        {row.iv}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Противопоказания */}
                    <div className="glass-card p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
                        <h2 className="text-2xl font-bold text-red-300 mb-6 text-center">
                            ⚠️ Противопоказания и ограничения
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-red-300 mb-4">
                                    Абсолютные противопоказания:
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        Заболевания поджелудочной железы
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        Выраженные нарушения ССС и дыхания
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        Беременность и кесарево сечение
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        Гипертония
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-orange-300 mb-4">Особые указания:</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        При заболеваниях почек - снизить дозу
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        Не применять при лактации
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        Максимальная доза: собаки 30 мг/кг, кошки 72 мг/кг
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        Хранить готовый раствор не более 10 суток (2-8°C)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Связанные ссылки */}
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-semibold text-cyan-100 mb-4 text-center">
                            Дополнительная информация
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/instruction"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/30 transition-all text-sm"
                            >
                                Полная инструкция по применению
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/adverse-reactions"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-500/30 text-red-300 rounded-lg border border-red-400/30 transition-all text-sm"
                            >
                                Сообщить о нежелательной реакции
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </PageLayout>
    );
}
