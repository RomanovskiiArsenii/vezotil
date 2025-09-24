'use client';

import { motion } from 'framer-motion';
import { Activity, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
    const currentYear = 2025;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="bg-black/90 border-t border-blue-400/30">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 py-12">
                <div className="custom-overflow-y-hide grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="hud-element p-2 rounded-lg">
                                <Activity className="w-6 h-6 hud-text" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold hud-text">ВЕЗОТИЛ</h3>
                                <p className="text-sm text-gray-400">ООО "ВЕТСТЕМ"</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Инновационный ветеринарный препарат для безопасной и эффективной анестезии животных.
                            Тилетамин + Золазепам для профессиональной ветеринарной практики.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-white">Контакты</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 hud-text" />
                                <div className="space-y-1">
                                    <div className="text-gray-300">+7 (917) 525-77-70</div>
                                    <div className="text-gray-400 text-sm">+7 (495) 768-08-49</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 hud-text" />
                                <div className="space-y-1">
                                    <div className="text-gray-300">vezotil@vetstem.ru</div>
                                    <div className="text-gray-400 text-sm">info@vetstem.ru</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 hud-text" />
                                <span className="text-gray-300">ООО "ВЕТСТЕМ", Россия</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Important Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-white">Важная информация</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>• Только для ветеринарного применения</p>
                            <p>• Требует рецепта ветеринарного врача</p>
                            <p>• Соблюдайте инструкцию по применению</p>
                            <p>• Хранить в недоступном для детей месте</p>
                        </div>
                    </motion.div>
                </div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-lg font-semibold text-white mb-6">Мы в социальных сетях</h3>
                    <div className="flex justify-center items-center gap-6 py-4">
                        {/* VKontakte */}
                        <motion.a
                            href="https://vk.com/vetstem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-slate-800/50 hover:bg-blue-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-400/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.713-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.594v1.558c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.594-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.254 1.218-2.715 4.675-2.715 4.675-.22.356-.305.525 0 .813.203.254.813.797 1.254 1.287.813.898 1.406 1.617 1.558 2.13.186.678-.102.982-.576.982z" />
                            </svg>
                        </motion.a>

                        {/* Telegram */}
                        <motion.a
                            href="https://t.me/vetstemru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-slate-800/50 hover:bg-blue-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-400/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                        </motion.a>

                        {/* RuTube */}
                        <motion.a
                            href="https://rutube.ru/channel/42447586/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-slate-800/50 hover:bg-red-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-red-400/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9 17V7l8 5-8 5z" />
                            </svg>
                        </motion.a>

                        {/* Email button */}
                        <motion.a
                            href="mailto:vezotil@vetstem.ru"
                            className="w-12 h-12 bg-slate-800/50 hover:bg-green-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-green-400/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-slate-700"
                >
                    <div className="custom-footer-flex flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <div className="text-gray-400 text-sm">© {currentYear} ООО "ВЕТСТЕМ". Все права защищены.</div>
                        <div className="custom-footer-flex-inner flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                            <a href="/privacy" className="hover:text-cyan-300 transition-colors">
                                Политика конфиденциальности
                            </a>
                            <a href="/adverse-reactions" className="hover:text-cyan-300 transition-colors">
                                Сообщить о побочном эффекте
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm text-center lg:text-right">
                            Регистрационное удостоверение:
                            <br />№ 77-3-29.23-5075ПВР-3-29.23/03889 от 28.12.2023 г.
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Bottom Line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </footer>
    );
}
