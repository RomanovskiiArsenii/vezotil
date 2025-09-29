'use client';

import { useState } from 'react';
import { useToast } from '../hooks/use-toast';

export function AdverseReactionForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        date: '',
        reporterType: '',
        reporterName: '',
        reporterPhone: '',
        reporterEmail: '',
        organizationName: '',
        ownerName: '',
        ownerPhone: '',
        batchNumber: '',
        purchasePlace: '',
        reactionDescription: '',
        dose: '',
        administrationRoute: '',
        duration: '',
        animalSpecies: '',
        animalAge: '',
        animalWeight: '',
        animalSex: '',
        medicalHistory: '',
        concomitantTherapy: '',
        reactionDate: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/adverse-reaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast({
                    title: 'Отчёт отправлен!',
                    description: 'Спасибо, мы получили вашу информацию.',
                });
                setFormData({
                    date: '',
                    reporterType: '',
                    reporterName: '',
                    reporterPhone: '',
                    reporterEmail: '',
                    organizationName: '',
                    ownerName: '',
                    ownerPhone: '',
                    batchNumber: '',
                    purchasePlace: '',
                    reactionDescription: '',
                    dose: '',
                    administrationRoute: '',
                    duration: '',
                    animalSpecies: '',
                    animalAge: '',
                    animalWeight: '',
                    animalSex: '',
                    medicalHistory: '',
                    concomitantTherapy: '',
                    reactionDate: '',
                });
            } else {
                throw new Error('Ошибка при отправке');
            }
        } catch (error) {
            toast({
                title: 'Ошибка',
                description: 'Не удалось отправить отчёт. Попробуйте ещё раз.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="custom-mobile-padding-sides-0 medical-card p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6" id="custom-id-adverse-reaction-form">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-cyan-200 mb-2">Дата заполнения отчета</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-cyan-200 mb-2">Кто сообщает</label>
                        <select
                            name="reporterType"
                            value={formData.reporterType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            required
                        >
                            <option value="">Выберите</option>
                            <option value="veterinarian">Ветеринарный врач</option>
                            <option value="owner">Владелец животного</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Контактные данные заявителя</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">ФИО</label>
                            <input
                                type="text"
                                name="reporterName"
                                value={formData.reporterName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Телефон</label>
                            <input
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
                        <label className="block text-sm font-medium text-cyan-200 mb-2">Email</label>
                        <input
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
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Номер серии</label>
                            <input
                                type="text"
                                name="batchNumber"
                                value={formData.batchNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Место приобретения</label>
                            <input
                                type="text"
                                name="purchasePlace"
                                value={formData.purchasePlace}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                        Описание нежелательной реакции
                    </label>
                    <textarea
                        name="reactionDescription"
                        value={formData.reactionDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Подробно опишите наблюдаемую реакцию, время появления, длительность и тяжесть симптомов"
                        required
                    />
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-100">Применение препарата</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Доза</label>
                            <input
                                type="text"
                                name="dose"
                                value={formData.dose}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="мг/кг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Способ введения</label>
                            <select
                                name="administrationRoute"
                                value={formData.administrationRoute}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            >
                                <option value="">Выберите</option>
                                <option value="iv">Внутривенно</option>
                                <option value="im">Внутримышечно</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Продолжительность</label>
                            <input
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
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Вид</label>
                            <select
                                name="animalSpecies"
                                value={formData.animalSpecies}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                required
                            >
                                <option value="">Выберите</option>
                                <option value="dog">Собака</option>
                                <option value="cat">Кошка</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Возраст</label>
                            <input
                                type="text"
                                name="animalAge"
                                value={formData.animalAge}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="лет/месяцев"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Вес</label>
                            <input
                                type="text"
                                name="animalWeight"
                                value={formData.animalWeight}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="кг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-cyan-200 mb-2">Пол</label>
                            <select
                                name="animalSex"
                                value={formData.animalSex}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                            >
                                <option value="">Выберите</option>
                                <option value="male">Самец</option>
                                <option value="female">Самка</option>
                                <option value="male_castrated">Самец кастрированный</option>
                                <option value="female_sterilized">Самка стерилизованная</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                        Сопутствующие заболевания (анамнез)
                    </label>
                    <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Укажите имеющиеся заболевания и состояния животного"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">Сопутствующая терапия</label>
                    <textarea
                        name="concomitantTherapy"
                        value={formData.concomitantTherapy}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="Перечислите другие препараты, применявшиеся одновременно с ВЕЗОТИЛ"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cyan-200 mb-2">
                        Дата возникновения нежелательного последствия
                    </label>
                    <input
                        type="date"
                        name="reactionDate"
                        value={formData.reactionDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        required
                    />
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
