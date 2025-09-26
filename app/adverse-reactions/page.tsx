import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import { AdverseReactionForm } from '../../components/adverse-reaction-form';

export const metadata: Metadata = {
    title: 'Сообщить о нежелательной реакции | ВЕЗОТИЛ',
    description:
        'Форма для сообщения о нежелательных реакциях и побочных эффектах препарата ВЕЗОТИЛ. Система фармаконадзора.',
};

export default function AdverseReactionsPage() {
    return (
        <PageLayout>
            <PageHeader title="Нежелательные реакции" subtitle="Система мониторинга безопасности препарата ВЕЗОТИЛ" />

            <ContentSection>
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="custom-mobile-padding-sides-0 glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-50 mb-6">Сообщить о нежелательной реакции</h2>

                        <div className="space-y-6">
                            <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-50">Важная информация</h3>
                                <div className="space-y-3 text-gray-300">
                                    <p>
                                        Система фармаконадзора позволяет собирать информацию о нежелательных реакциях
                                        для постоянного мониторинга безопасности препарата ВЕЗОТИЛ.
                                    </p>
                                    <p>
                                        О любой нежелательной реакции, возникшей в процессе применения препарата, просим
                                        сообщить производителю ООО "ВЕТСТЕМ".
                                    </p>
                                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                                        <p className="text-yellow-300 font-semibold">Внимание!</p>
                                        <p className="text-yellow-200 text-sm">
                                            В случае серьезной нежелательной реакции немедленно обратитесь к
                                            ветеринарному врачу и сообщите о случившемся по телефону горячей линии: +7
                                            (917) 525-77-70
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <AdverseReactionForm />
                        </div>
                    </div>

                    <div className="custom-mobile-padding-sides-0 glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Известные побочные эффекты</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Редкие (&lt; 1%)</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                        Временная атаксия
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                        Повышенное слюноотделение
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                        Тошнота
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                        Атетоидные движения
                                    </li>
                                </ul>
                            </div>

                            <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Меры предосторожности</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                        Постоянное наблюдение за пациентом
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                        Контроль температуры тела
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                        Готовность к поддержке дыхания
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                        Снижение дозы у пожилых животных
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="custom-mobile-padding-sides-0 glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-100 mb-6">Контакты для экстренных случаев</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Горячая линия</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-red-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-red-300">+7 (917) 525-77-70</p>
                                            <p className="text-gray-400 text-sm">Круглосуточно</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Для сообщения о серьезных нежелательных реакциях, требующих немедленного
                                        внимания
                                    </p>
                                </div>
                            </div>

                            <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-cyan-100">Email поддержка</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-cyan-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-cyan-300">vezotil@vetstem.ru</p>
                                            <p className="text-gray-400 text-sm">Ответ в течение 24 часов</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Для подачи подробных отчетов о нежелательных реакциях и вопросов по препарату
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
