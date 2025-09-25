import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import ClientWrapper from '../../components/client-wrapper';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Инструкция по применению | ВЕЗОТИЛ',
    description:
        'Официальная инструкция по применению ветеринарного препарата ВЕЗОТИЛ. Состав, дозировка, показания к применению.',
};

export default function InstructionPage() {
    return (
        <ClientWrapper>
            <PageLayout>
                <PageHeader title="Инструкция по применению" subtitle="Официальная инструкция препарата ВЕЗОТИЛ" />

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

                        {/* PDF Viewer и информация */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* PDF Viewer */}
                            <div className="lg:col-span-2">
                                <div className="glass-card p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-cyan-100 flex items-center gap-2">
                                            <FileText className="w-6 h-6" />
                                            Инструкция ВЕЗОТИЛ
                                        </h2>
                                        <a
                                            href="/vezotil_instruction_legal.pdf"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                                            download="Vezotil_Instruction.pdf"
                                        >
                                            <Download className="w-4 h-4" />
                                            Скачать PDF
                                        </a>
                                    </div>

                                    <div className="relative">
                                        <div className="aspect-[3/4] bg-slate-900/50 rounded-lg border border-cyan-500/30 overflow-hidden p-6">
                                            <div className="custom-padding-right-24 w-full h-full overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-cyan-500 text-gray-300 text-sm leading-relaxed">
                                                <div className="space-y-4">
                                                    <h1 className="text-xl font-bold text-cyan-100 mb-4">
                                                        ИНСТРУКЦИЯ по ветеринарному применению лекарственного препарата
                                                        Везотил®
                                                    </h1>
                                                    <p className="text-xs text-gray-400 mb-6">
                                                        (организация-разработчик: ООО «ВЕТСТЕМ», 121205, г. Москва,
                                                        территория Сколково Инновационного центра, Большой бульвар, 42,
                                                        стр. 1, пом. 209)
                                                    </p>

                                                    <div className="space-y-6">
                                                        <section>
                                                            <h2 className="text-lg font-semibold text-cyan-200 mb-3">
                                                                I. Общие сведения
                                                            </h2>
                                                            <div className="space-y-3">
                                                                <p>
                                                                    <strong>1. Торговое наименование:</strong> Везотил®
                                                                </p>
                                                                <p>
                                                                    <strong>Международные наименования:</strong>{' '}
                                                                    тилетамин, золазепам
                                                                </p>
                                                                <p>
                                                                    <strong>2. Лекарственная форма:</strong> лиофилизат
                                                                    для приготовления раствора для инъекций
                                                                </p>
                                                                <p>
                                                                    В одном флаконе лиофилизата содержится: 250 мг
                                                                    тилетамина основания (эквивалентно 290,85 мг
                                                                    тилетамина гидрохлорида) и 250 мг золазепама
                                                                    основания (эквивалентно 281 мг золазепама
                                                                    гидрохлорида), а также вспомогательные вещества:
                                                                    мальтозы моногидрат 410 мг, натрия сульфат 18,15 мг.
                                                                    Один флакон растворителя содержит воду для инъекций
                                                                    - 5 мл.
                                                                </p>
                                                                <p>
                                                                    <strong>3. Внешний вид:</strong> лиофилизат
                                                                    представляет собой лиофилизированную массу белого,
                                                                    белого с желтоватым или желтовато-зеленоватым
                                                                    оттенком цвета, растворитель - бесцветную прозрачную
                                                                    жидкость.
                                                                </p>
                                                                <p>
                                                                    <strong>Срок годности:</strong> 2 года с даты
                                                                    производства. После приготовления препарата готовый
                                                                    раствор можно хранить не более 10 суток при
                                                                    температуре от 2°С до 8°С и не более 48 часов при
                                                                    комнатной температуре.
                                                                </p>
                                                                <p>
                                                                    <strong>4. Упаковка:</strong> по одному флакону
                                                                    лиофилизата и одному флакону растворителя в коробке
                                                                    картонной.
                                                                </p>
                                                                <p>
                                                                    <strong>5. Хранение:</strong> в защищенном от прямых
                                                                    солнечных лучей месте при температуре не выше 25°С.
                                                                    Готовый раствор хранить при температуре от 2°С до
                                                                    8°С. Не замораживать!
                                                                </p>
                                                            </div>
                                                        </section>

                                                        <section>
                                                            <h2 className="text-lg font-semibold text-cyan-200 mb-3">
                                                                II. Фармакологические свойства
                                                            </h2>
                                                            <div className="space-y-3">
                                                                <p>
                                                                    <strong>Фармакотерапевтическая группа:</strong>{' '}
                                                                    средства для наркоза (средство для неингаляционной
                                                                    общей анестезии).
                                                                </p>
                                                                <p>
                                                                    <strong>Тилетамин</strong> является диссоциативным
                                                                    анестетиком общего действия, антагонист рецепторов
                                                                    NMDA. Вызывает выраженный анальгетический эффект,
                                                                    обладает противосудорожным и седативным свойствами.
                                                                    Тилетамин не подавляет глотательный, гортанный,
                                                                    кашлевой рефлексы, не угнетает дыхательную систему.
                                                                </p>
                                                                <p>
                                                                    <strong>Золазепам</strong> является производным
                                                                    пиразолодиазепинона - транквилизатором
                                                                    бензодиазепинового ряда. Угнетает подкорковые
                                                                    области мозга, вызывая анксиолитическое и седативное
                                                                    действия, обеспечивает расслабление скелетной
                                                                    мускулатуры.
                                                                </p>
                                                                <p>
                                                                    Комбинация тилетамина и золазепама представляет
                                                                    собой ненаркотическое, небарбитуратное инъекционное
                                                                    анестезирующее средство для кошек и собак.
                                                                </p>
                                                                <p>
                                                                    <strong>Время наступления анестезии:</strong>
                                                                </p>
                                                                <ul className="ml-4 space-y-1 text-sm">
                                                                    <li>• У кошек: в/в - 0,5-1 мин, в/м - 1,5-7 мин</li>
                                                                    <li>• У собак: в/в - 1-2 мин, в/м - 7-8 мин</li>
                                                                    <li>
                                                                        • Продолжительность анестезии: около 30 минут
                                                                    </li>
                                                                    <li>• Период восстановления: 1-4 часа</li>
                                                                </ul>
                                                            </div>
                                                        </section>

                                                        <section>
                                                            <h2 className="text-lg font-semibold text-cyan-200 mb-3">
                                                                III. Порядок применения и дозы
                                                            </h2>
                                                            <div className="space-y-3">
                                                                <p>
                                                                    <strong>11. Показания:</strong> Везотил®
                                                                    предназначен собакам и кошкам для общей анестезии
                                                                    при диагностических процедурах и хирургических
                                                                    вмешательствах разной сложности, а также для седации
                                                                    животных.
                                                                </p>
                                                                <p>
                                                                    <strong>12. Противопоказания:</strong> заболевания
                                                                    поджелудочной железы, выраженные нарушения функции
                                                                    сердечно-сосудистой и дыхательной систем,
                                                                    гипертония, повышенная чувствительность к
                                                                    компонентам препарата. Запрещается применять
                                                                    беременным животным и при кесаревом сечении.
                                                                </p>
                                                                <p>
                                                                    <strong>15. Применение:</strong> Везотил® применяют
                                                                    однократно внутривенно и внутримышечно. За 24 часа
                                                                    до введения следует отказаться от приема
                                                                    антипаразитарных препаратов. Перед применением
                                                                    следует выдержать 12-ти часовую голодную диету.
                                                                </p>
                                                                <p>
                                                                    <strong>Премедикация (за 15 минут):</strong>{' '}
                                                                    димедрол 1% - 10 мг/кг, атропина сульфат 0,1%:
                                                                    собакам - 0,1 мг/кг, кошкам - 0,05 мг/кг.
                                                                </p>
                                                                <p>
                                                                    <strong>Приготовление раствора:</strong> содержимое
                                                                    флакона с лиофилизатом растворяют весь объем
                                                                    растворителя (5 мл). В 1 мл готового раствора
                                                                    содержится 100 мг действующих веществ: 50 мг
                                                                    тилетамина и 50 мг золазепама.
                                                                </p>

                                                                <div className="bg-slate-800/30 p-4 rounded-lg mt-4">
                                                                    <h3 className="font-semibold text-cyan-300 mb-2">
                                                                        Дозировки:
                                                                    </h3>
                                                                    <div className="space-y-2 text-xs">
                                                                        <p className="font-semibold text-white">
                                                                            Собаки:
                                                                        </p>
                                                                        <ul className="ml-4 space-y-1">
                                                                            <li>
                                                                                • Клинический осмотр: в/м 7-10 мг/кг,
                                                                                в/в 5 мг/кг
                                                                            </li>
                                                                            <li>
                                                                                • Кратковременная анестезия: в/м 10-15
                                                                                мг/кг, в/в 7,5 мг/кг
                                                                            </li>
                                                                            <li>
                                                                                • Длительная анестезия: в/м 15-25 мг/кг,
                                                                                в/в 10 мг/кг
                                                                            </li>
                                                                        </ul>
                                                                        <p className="font-semibold text-white mt-3">
                                                                            Кошки:
                                                                        </p>
                                                                        <ul className="ml-4 space-y-1">
                                                                            <li>
                                                                                • Клинический осмотр: в/м 10 мг/кг, в/в
                                                                                5 мг/кг
                                                                            </li>
                                                                            <li>
                                                                                • Длительная анестезия: в/м 15 мг/кг,
                                                                                в/в 7,5 мг/кг
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <p>
                                                                    <strong>16. Побочные эффекты:</strong> При введении
                                                                    высоких доз может возникнуть апноэ. Во время
                                                                    пробуждения может наблюдаться рвота, гиперсаливация,
                                                                    непроизвольные мышечные подергивания, гипертонус.
                                                                </p>
                                                                <p>
                                                                    <strong>17. Передозировка:</strong> остановка
                                                                    дыхания, остановка сердца. При передозировке
                                                                    проводят искусственную вентиляцию лёгких.
                                                                </p>
                                                            </div>
                                                        </section>

                                                        <section>
                                                            <h2 className="text-lg font-semibold text-cyan-200 mb-3">
                                                                Производитель
                                                            </h2>
                                                            <div className="space-y-2 text-sm">
                                                                <p>
                                                                    <strong>Организация-разработчик:</strong> ООО
                                                                    «ВЕТСТЕМ»
                                                                </p>
                                                                <p>
                                                                    <strong>Адрес:</strong> 121205, г. Москва,
                                                                    территория Сколково Инновационного центра, Большой
                                                                    бульвар, 42, стр. 1, пом. 209
                                                                </p>
                                                                <p>
                                                                    <strong>Сайт:</strong> www.vetstem.ru
                                                                </p>
                                                                <p>
                                                                    <strong>Тел.:</strong> +7 (495) 768-08-49
                                                                </p>
                                                                <p>
                                                                    <strong>Email:</strong> info@vetstem.ru
                                                                </p>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Дополнительная информация */}
                            <div className="space-y-6">
                                <div className="medical-card p-6">
                                    <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5" />О документе
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <span className="text-gray-400">Препарат:</span>
                                            <p className="text-white">ВЕЗОТИЛ</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Производитель:</span>
                                            <p className="text-white">ООО "ВЕТСТЕМ"</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Регистрационное удостоверение:</span>
                                            <p className="text-white font-mono text-xs">
                                                № 77-3-29.23-5075ПВР-3-29.23/03889
                                            </p>
                                            <p className="text-gray-300">от 28.12.2023 г.</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Активные вещества:</span>
                                            <p className="text-white">Тилетамин HCl + Золазепам HCl</p>
                                            <p className="text-cyan-400">50 + 50 мг/мл</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="medical-card p-6">
                                    <div className="mb-6">
                                        <a
                                            href="https://www.vidal.ru/veterinar/vezotil-31357"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-300 w-full justify-center"
                                        >
                                            <FileText className="w-4 h-4" />
                                            Инструкция Везотил на Vidal.ru
                                        </a>
                                    </div>

                                    <h3 className="text-lg font-semibold text-cyan-100 mb-4">Основные разделы</h3>
                                    <div className="space-y-2">
                                        {[
                                            'Общие сведения',
                                            'Состав и свойства',
                                            'Фармакологические свойства',
                                            'Показания к применению',
                                            'Дозировка и способ применения',
                                            'Противопоказания',
                                            'Побочные эффекты',
                                            'Особые указания',
                                            'Условия хранения',
                                        ].map((section, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                                <span className="text-gray-300">{section}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="medical-card p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
                                    <h3 className="text-lg font-semibold text-red-300 mb-4">⚠️ Важно</h3>
                                    <div className="text-sm text-gray-300 space-y-2">
                                        <p>Препарат предназначен для применения только ветеринарными врачами.</p>
                                        <p>
                                            Перед применением внимательно изучите инструкцию и строго соблюдайте
                                            дозировку.
                                        </p>
                                        <p>
                                            При возникновении нежелательных реакций немедленно обратитесь к
                                            ветеринарному врачу.
                                        </p>
                                    </div>
                                </div>

                                <div className="medical-card p-6">
                                    <h3 className="text-lg font-semibold text-cyan-100 mb-4">Связанные страницы</h3>
                                    <div className="space-y-3">
                                        <Link
                                            href="/adverse-reactions"
                                            className="block p-3 bg-slate-800/30 hover:bg-slate-700/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all text-sm"
                                        >
                                            <div className="text-white font-medium">
                                                Сообщить о нежелательной реакции
                                            </div>
                                            <div className="text-gray-400 text-xs">Система фармаконадзора</div>
                                        </Link>
                                        <Link
                                            href="/faq"
                                            className="block p-3 bg-slate-800/30 hover:bg-slate-700/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all text-sm"
                                        >
                                            <div className="text-white font-medium">Часто задаваемые вопросы</div>
                                            <div className="text-gray-400 text-xs">FAQ по применению</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </PageLayout>
        </ClientWrapper>
    );
}
