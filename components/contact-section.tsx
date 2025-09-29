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
        message: '',
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     try {
    //         // Simulate API call
    //         await new Promise((resolve) => setTimeout(resolve, 1000));

    //         toast({
    //             title: 'Заявка отправлена!',
    //             description: 'Мы свяжемся с вами в ближайшее время.',
    //         });

    //         setFormData({ name: '', email: '', phone: '', message: '' });
    //     } catch (error) {
    //         toast({
    //             title: 'Ошибка',
    //             description: 'Не удалось отправить заявку. Попробуйте еще раз.',
    //             variant: 'destructive',
    //         });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast({
                    title: 'Заявка отправлена!',
                    description: 'Мы свяжемся с вами в ближайшее время.',
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error('Ошибка при отправке');
            }
        } catch (error) {
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
                        className="hud-element p-8 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold hud-text mb-6">Отправить заявку</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 p-2">
                            <div className="space-y-2">
                                <label className="text-gray-300 text-sm">Имя *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData?.name}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                        placeholder="Ваше имя"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300 text-sm">Email *</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
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
                                <label className="text-gray-300 text-sm">Телефон</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData?.phone}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400"
                                        placeholder="+7 (000) 000-00-00"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300 text-sm">Сообщение *</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <Textarea
                                        name="message"
                                        value={formData?.message}
                                        onChange={handleInputChange}
                                        className="pl-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400 min-h-[120px]"
                                        placeholder="Опишите ваши потребности, количество препарата и любые вопросы..."
                                        required
                                    />
                                </div>
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

                        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                            <p className="text-blue-300 text-sm">
                                * Отправляя заявку, вы соглашаетесь на обработку персональных данных в соответствии
                                с&nbsp;
                                <a href="/privacy" target="blank" className="custom-underline">
                                    политикой конфиденциальности.
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="hud-element p-8 rounded-lg">
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
