'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';

export default function ContactSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        company: '',
        questionTopic: '',
        message: '',
        privacyConsent: false,
    });

    const contactInfo = [
        {
            icon: Phone,
            title: 'Телефоны',
            info: '+7 (917) 525-77-70',
            secondaryInfo: '+7 (495) 768-08-49',
            description: 'Горячая линия и консультации',
        },
        {
            icon: Mail,
            title: 'Email',
            info: 'vezotil@vetstem.ru',
            secondaryInfo: 'info@vetstem.ru',
            description: 'Вопросы по препарату и общие',
        },
        {
            icon: MapPin,
            title: 'Производитель',
            info: 'ООО "ВЕТСТЕМ"',
            description: 'Российская компания',
        },
        {
            icon: Clock,
            title: 'Режим работы',
            info: 'Пн-Пт: 9:00-18:00',
            description: 'Консультации и заказы',
        },
    ];

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { privacyConsent, ...dataToSend } = formData; // <- выкинули флаг
            const formDataToSend = new FormData();
            for (const [key, raw] of Object.entries(dataToSend)) {
                formDataToSend.append(key, raw ?? '');
            }

            const res = await fetch('/api/contact', { method: 'POST', body: formDataToSend });

            if (res.ok) {
                toast({
                    title: 'Заявка отправлена!',
                    description: 'Мы свяжемся с вами в ближайшее время.',
                    duration: 10000,
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    topic: '',
                    company: '',
                    questionTopic: '',
                    message: '',
                    privacyConsent: false, // только для UI формы
                });
            } else {
                throw new Error('Ошибка при отправке');
            }
        } catch {
            toast({
                title: 'Ошибка',
                description: 'Не удалось отправить заявку. Попробуйте ещё раз.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-black">
            <div className="custom-overflow-y-hide container mx-auto px-4 lg:px-8 xl:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Контакты и заказ</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Свяжитесь с нами для заказа <span className="hud-text">ВЕЗОТИЛ</span> или получения консультации
                    </p>
                </motion.div>

                <div className="custom-overflow-y-hide grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="custom-overflow-visible custom-flex-column custom-height-100 space-y-8"
                    >
                        <div className="custom-flex-grow-2 hud-element p-8 rounded-lg">
                            <h3 className="text-2xl font-bold hud-text mb-6">Контактная информация</h3>
                            <div className="custom-overflow-visible space-y-6">
                                {contactInfo?.map((info, index) => (
                                    <motion.div
                                        key={info?.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        className="custom-overflow-visible flex items-start space-x-4"
                                    >
                                        <div className="custom-flex-shrink-0 custom-overflow-visible hud-element p-3 rounded-lg pulse-animation">
                                            <info.icon className="w-6 h-6 hud-text" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">{info?.title}</h4>
                                            <p className="hud-text text-lg">{info?.info}</p>
                                            {info?.secondaryInfo && (
                                                <p className="hud-text text-sm opacity-80">{info?.secondaryInfo}</p>
                                            )}
                                            <p className="text-gray-400 text-sm">{info?.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Order */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="hud-element p-6 rounded-lg scan-line"
                        >
                            <h4 className="text-xl font-bold text-white mb-4">Надёжная и быстрая доставка</h4>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex justify-between">
                                    <span>ВЕЗОТИЛ 250мг + 250мг, 5 мл</span>
                                    <span className="hud-text font-semibold">Цена по запросу</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Минимальная партия:</span>
                                    <span>35 упаковок</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Срок доставки:</span>
                                    <span>3-5 рабочих дней</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hud-element p-6 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold hud-text mb-6">Отправить заявку</h3>
                        <form
                            onSubmit={handleSubmit}
                            onInvalid={(e) => {
                                const native = e.nativeEvent as InputEvent & { stopImmediatePropagation?: () => void };
                                native.stopImmediatePropagation?.(); // блокируем остальные onInvalid

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
                                        const associatedLabel = document.querySelector(
                                            `label[for="${firstInvalid.id}"]`
                                        );
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
                                        });
                                    } else if (firstInvalid.validity.typeMismatch) {
                                        toast({
                                            title: 'Ошибка',
                                            description: label
                                                ? `Поле ${label} заполнено некорректно`
                                                : `Поле заполнено некорректно`,
                                            variant: 'destructive',
                                        });
                                    }
                                }
                            }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="custom-required text-gray-300 text-sm" htmlFor="inpContactName">
                                    ФИО
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="inpContactName"
                                        type="text"
                                        name="name"
                                        value={formData?.name}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                        placeholder="Ваше ФИО"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="custom-required text-gray-300 text-sm" htmlFor="inpContactEmail">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="inpContactEmail"
                                        type="email"
                                        name="email"
                                        value={formData?.email}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="custom-required text-gray-300 text-sm" htmlFor="inpContactPhone">
                                    Телефон
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="inpContactPhone"
                                        type="tel"
                                        name="phone"
                                        value={formData?.phone}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                        placeholder="+7 000 000 00 00"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="custom-required text-gray-300 text-sm" htmlFor="inpContactTopic">
                                    Тема
                                </label>
                                <select
                                    id="inpContactTopic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleInputChange}
                                    className="w-full pl-4 px-2 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:outline-none"
                                    required
                                >
                                    <option value="" disabled>
                                        Выберите из списка
                                    </option>
                                    <option value="Где купить">Где купить?</option>
                                    <option value="Задать вопрос">Задать вопрос</option>
                                </select>
                            </div>

                            {formData.topic === 'Задать вопрос' && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label
                                            className="custom-required text-gray-300 text-sm"
                                            htmlFor="inpContactQuestionTopic"
                                        >
                                            Категория вопроса
                                        </label>
                                        <select
                                            id="inpContactQuestionTopic"
                                            name="questionTopic"
                                            value={formData.questionTopic}
                                            onChange={handleInputChange}
                                            className="w-full pl-4 px-2 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:outline-none"
                                            required
                                        >
                                            <option value="" disabled>
                                                Выберите из списка
                                            </option>
                                            <option value="Вопрос анестезиологу">Вопрос анестезиологу</option>
                                            <option value="Вопрос по сотрудничеству">Вопрос по сотрудничеству</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            className="custom-required text-gray-300 text-sm"
                                            htmlFor="inpContactCompany"
                                        >
                                            Название компании
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <Input
                                                id="inpContactCompany"
                                                type="text"
                                                name="company"
                                                value={formData?.company}
                                                onChange={handleInputChange}
                                                className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                                placeholder="Название вашей компании"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {formData.topic !== '' && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label
                                            className="custom-required text-gray-300 text-sm"
                                            htmlFor="inpContactMessage"
                                        >
                                            Сообщение
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <Textarea
                                                id="inpContactMessage"
                                                name="message"
                                                value={formData?.message}
                                                onChange={handleInputChange}
                                                className="custom-box-shadow-none pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400 min-h-[120px]"
                                                placeholder={
                                                    formData.topic === 'Где купить'
                                                        ? 'Укажите интересующее вас количество для закупки'
                                                        : formData.topic === 'Задать вопрос'
                                                        ? 'Задайте ваш вопрос'
                                                        : ''
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                                <label className="flex items-start justify-start space-x-2 text-blue-300 text-sm">
                                    <input
                                        type="checkbox"
                                        name="privacyConsent"
                                        checked={formData.privacyConsent}
                                        onChange={handleInputChange}
                                        required
                                        className="custom-checkbox mt-1 mr-1 rounded border-blue-600/50 bg-slate-800/50 text-blue-500 focus:ring-blue-400 focus:ring-offset-0"
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative px-6 py-4 text-base font-semibold text-white rounded-lg overflow-hidden
                           hud-element backdrop-blur-md bg-gradient-to-r from-blue-600/80 via-cyan-500/80 to-blue-600/80
                           hover:from-blue-500/80 hover:via-cyan-400/80 hover:to-blue-500/80
                           disabled:opacity-50 disabled:cursor-not-allowed
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:via-cyan-300/20 before:to-blue-500/20
                           before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                           shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/25
                           transform transition-all duration-300 hover:scale-105
                           medical-glow group"
                            >
                                {isSubmitting ? (
                                    <span className="relative z-10">Отправляется...</span>
                                ) : (
                                    <span className="relative z-10 flex items-center justify-center">
                                        Отправить заявку
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                                />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="hud-element p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-8">Дополнительная информация</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Оплата</h4>
                                <p className="text-sm">Безналичный расчет для юридических лиц</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Доставка</h4>
                                <p className="text-sm">По всей России транспортными компаниями</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Документы</h4>
                                <p className="text-sm">Полный пакет ветеринарных документов</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
