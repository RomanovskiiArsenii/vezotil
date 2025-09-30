'use client';

import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { log } from 'console';

export function AdverseReactionForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        date: '',
        reporterType: '',
        reporterName: '',
        reporterPhone: '',
        reporterEmail: '',
        batchNumber: '',
        purchasePlace: '',
        purchaseDate: '',
        productionDate: '',
        dose: '',
        administrationRoute: '',
        duration: '',
        animalSpecies: '',
        animalAge: '',
        animalWeight: '',
        animalSex: '',
        medicalHistory: '',
        concomitantTherapy: '',
        reactionDescription: '',
        reactionDate: '',
        photo: null as File | null,
        privacyConsent: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // простая проверка наличия файла
        if (!formData.photo) {
            toast({
                title: 'Ошибка',
                description: 'Пожалуйста, приложите фото упаковки',
                variant: 'destructive',
                duration: 2500,
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const fd = new FormData();
            // Добавляем все текстовые поля
            Object.entries(formData).forEach(([key, val]) => {
                if (key === 'photo' || key === 'privacyConsent') return;
                fd.append(key, (val ?? '') as string);
            });
            // Файл (если выбран)
            if (formData.photo) {
                fd.append('photo', formData.photo, formData.photo.name);
            }

            const res = await fetch('/api/adverse-reaction', {
                method: 'POST',
                body: fd, // ВАЖНО: НЕ ставим Content-Type вручную
            });

            if (!res.ok) throw new Error('Ошибка при отправке');

            toast({ title: 'Отчёт отправлен!', description: 'Спасибо, мы получили вашу информацию.', duration: 10000 });
            setFormData({
                date: '',
                reporterType: '',
                reporterName: '',
                reporterPhone: '',
                reporterEmail: '',
                batchNumber: '',
                purchasePlace: '',
                purchaseDate: '',
                productionDate: '',
                dose: '',
                administrationRoute: '',
                duration: '',
                animalSpecies: '',
                animalAge: '',
                animalWeight: '',
                animalSex: '',
                medicalHistory: '',
                concomitantTherapy: '',
                reactionDescription: '',
                reactionDate: '',
                privacyConsent: false,
                photo: null,
            });
            // Если хочешь сбросить value у input[type=file], добавь ref и очисть ref.current.value = ''
        } catch {
            toast({
                title: 'Ошибка',
                description: 'Не удалось отправить отчёт. Попробуйте ещё раз.',
                duration: 4000,
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (type === 'file') {
            const file = (e.target as HTMLInputElement).files?.[0] || null;
            // Проверка размера (8 МБ)
            if (file && file.size > 8 * 1024 * 1024) {
                toast({
                    title: 'Ошибка',
                    description: 'Размер файла превышает 8 МБ',
                    duration: 2500,
                    variant: 'destructive',
                });
                (e.target as HTMLInputElement).value = '';
                setFormData((prev) => ({ ...prev, photo: null }));
                return;
            }
            setFormData((prev) => ({ ...prev, [name]: file }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-6">
            <form
                onSubmit={handleSubmit}
                onInvalid={(e) => {
                    const native = e.nativeEvent as Event & { stopImmediatePropagation?: () => void };
                    native.stopImmediatePropagation?.();

                    const invalidElements = Array.from(
                        (e.currentTarget as HTMLFormElement).querySelectorAll(
                            'input:invalid, select:invalid, textarea:invalid'
                        )
                    ) as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];

                    if (invalidElements.length > 0) {
                        const firstInvalid = invalidElements[0];

                        // ищем текст лейбла, если он есть
                        let label = '';
                        if (firstInvalid.id) {
                            const associatedLabel = document.querySelector(`label[for="${firstInvalid.id}"]`);
                            const text = associatedLabel?.textContent?.trim();
                            if (text) {
                                label = `"${text}"`; // оборачиваем в кавычки только если нашли
                            }
                        }

                        if (firstInvalid.validity.valueMissing) {
                            toast({
                                title: 'Ошибка',
                                description: label
                                    ? `Поле ${label} обязательно для заполнения`
                                    : `Обязательное поле не заполнено`,
                                variant: 'destructive',
                                duration: 2500,
                            });
                        } else if (firstInvalid.validity.typeMismatch) {
                            toast({
                                title: 'Ошибка',
                                description: label
                                    ? `Поле ${label} заполнено некорректно`
                                    : `Поле заполнено некорректно`,
                                variant: 'destructive',
                                duration: 2500,
                            });
                        }
                    }
                }}
                className="space-y-6"
                id="custom-id-adverse-reaction-form"
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReportDate">
                            Дата заполнения отчета
                        </label>
                        <input
                            id="inpReportDate"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReporterType">
                            Кто сообщает
                        </label>
                        <select
                            id="inpReporterType"
                            name="reporterType"
                            value={formData.reporterType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        >
                            <option value="">Выберите</option>
                            <option value="Ветеринарный врач">Ветеринарный врач</option>
                            <option value="Владелец животного">Владелец животного</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Контактные данные заявителя</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReporterName">
                                ФИО
                            </label>
                            <input
                                id="inpReporterName"
                                type="text"
                                name="reporterName"
                                value={formData.reporterName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReporterPhone">
                                Телефон
                            </label>
                            <input
                                id="inpReporterPhone"
                                type="tel"
                                name="reporterPhone"
                                value={formData.reporterPhone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReporterEmail">
                            Email
                        </label>
                        <input
                            id="inpReporterEmail"
                            type="email"
                            name="reporterEmail"
                            value={formData.reporterEmail}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Информация о препарате</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpBatchNumber">
                                Номер серии
                            </label>
                            <input
                                id="inpBatchNumber"
                                type="text"
                                name="batchNumber"
                                value={formData.batchNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpPurchasePlace">
                                Место приобретения
                            </label>
                            <input
                                id="inpPurchasePlace"
                                type="text"
                                name="purchasePlace"
                                value={formData.purchasePlace}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpPurchaseDate">
                                Дата приобретения
                            </label>
                            <input
                                id="inpPurchaseDate"
                                type="date"
                                name="purchaseDate"
                                value={formData.purchaseDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpProductionDate">
                                Дата изготовления
                            </label>
                            <input
                                id="inpProductionDate"
                                type="date"
                                name="productionDate"
                                value={formData.productionDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Применение препарата</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpDose">
                                Доза
                            </label>
                            <input
                                id="inpDose"
                                type="text"
                                name="dose"
                                value={formData.dose}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="мг/кг"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-cyan-200 mb-2"
                                htmlFor="inpAdministrationRoute"
                            >
                                Способ введения
                            </label>
                            <select
                                id="inpAdministrationRoute"
                                name="administrationRoute"
                                value={formData.administrationRoute}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            >
                                <option value="">Выберите</option>
                                <option value="Внутривенно">Внутривенно</option>
                                <option value="Внутримышечно">Внутримышечно</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpDuration">
                                Продолжительность
                            </label>
                            <input
                                id="inpDuration"
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="мин/часов"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Сведения о животном</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpAnimalSpecies">
                                Вид
                            </label>
                            <select
                                id="inpAnimalSpecies"
                                name="animalSpecies"
                                value={formData.animalSpecies}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            >
                                <option value="">Выберите</option>
                                <option value="Собака">Собака</option>
                                <option value="Кошка">Кошка</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpAnimalAge">
                                Возраст
                            </label>
                            <input
                                id="inpAnimalAge"
                                type="text"
                                name="animalAge"
                                value={formData.animalAge}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="лет/месяцев"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpAnimalWeight">
                                Вес
                            </label>
                            <input
                                id="inpAnimalWeight"
                                type="text"
                                name="animalWeight"
                                value={formData.animalWeight}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="кг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpAnimalSex">
                                Пол
                            </label>
                            <select
                                id="inpAnimalSex"
                                name="animalSex"
                                value={formData.animalSex}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            >
                                <option value="">Выберите</option>
                                <option value="Самец">Самец</option>
                                <option value="Самка">Самка</option>
                                <option value="Самец кастрированный">Самец кастрированный</option>
                                <option value="Самка стерилизованная">Самка стерилизованная</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpMedicalHistory">
                        Сопутствующие заболевания (анамнез)
                    </label>
                    <textarea
                        id="inpMedicalHistory"
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Укажите имеющиеся заболевания и состояния животного"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpConcomitantTherapy">
                        Сопутствующая терапия
                    </label>
                    <textarea
                        id="inpConcomitantTherapy"
                        name="concomitantTherapy"
                        value={formData.concomitantTherapy}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Перечислите другие препараты, применявшиеся одновременно с ВЕЗОТИЛ"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReactionDescription">
                        Описание нежелательной реакции
                    </label>
                    <textarea
                        id="inpReactionDescription"
                        name="reactionDescription"
                        value={formData.reactionDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Подробно опишите наблюдаемую реакцию, время появления, длительность и тяжесть симптомов"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpReactionDate">
                        Дата возникновения нежелательной реакции
                    </label>
                    <input
                        id="inpReactionDate"
                        type="date"
                        name="reactionDate"
                        value={formData.reactionDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-cyan-200 mb-2" htmlFor="inpPhoto">
                        Фото упаковки
                    </label>

                    <input
                        id="inpPhoto"
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                    />

                    <label
                        htmlFor="inpPhoto"
                        className="flex items-center justify-center px-4 py-3 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white cursor-pointer hover:border-blue-400 transition"
                    >
                        Загрузить файл
                    </label>

                    {formData.photo && (
                        <p className="text-sm text-gray-400">
                            Выбран: {formData.photo.name} {(formData.photo.size / (1024 * 1024)).toFixed(2)} МБ
                        </p>
                    )}
                </div>

                <div className="mt-6 p-4 bg-blue-900/30 border border-cyan-500/30 rounded-lg">
                    <label className="flex items-start justify-start space-x-2 text-blue-300 text-sm">
                        <input
                            type="checkbox"
                            name="privacyConsent"
                            checked={formData.privacyConsent}
                            onChange={handleChange}
                            className="custom-checkbox mt-1 mr-1 rounded border-blue-600/50 bg-slate-800/50 text-blue-500 focus:ring-blue-400 focus:ring-offset-0"
                            required
                        />
                        <span>
                            Я соглашаюсь на обработку персональных данных в соответствии с&nbsp;
                            <a href="/privacy" target="_blank" className="custom-underline">
                                политикой конфиденциальности
                            </a>
                            .
                        </span>
                    </label>
                </div>

                <div className="flex justify-start pt-6 border-t border-cyan-500/20">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Отправляется...' : 'Отправить отчёт'}
                    </button>
                </div>
            </form>
        </div>
    );
}
