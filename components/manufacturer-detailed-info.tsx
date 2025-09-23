
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Users,
  Microscope,
  Shield,
  Target,
  TrendingUp,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function ManufacturerDetailedInfo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Calendar, label: 'Лет на рынке', value: '5+', color: 'blue' },
    { icon: Users, label: 'Сотрудников', value: '45+', color: 'green' },
    { icon: Microscope, label: 'Локализация', value: '97%', color: 'purple' },
    { icon: Globe, label: 'Регионов', value: '85', color: 'orange' }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Основание компании',
      description: 'Создание ООО «ВЕТСТЕМ» с фокусом на инновационные ветеринарные решения'
    },
    {
      year: '2022',
      title: 'Резидент инновационного центра Сколково',
      description: 'Получение статуса резидента инновационного центра Сколково'
    },
    {
      year: '2023',
      title: 'Вывод на рынок передовых препаратов и решений в области клеточной регенеративной терапии',
      description: 'Запуск производства инновационных препаратов для регенеративной медицины'
    },
    {
      year: '2023',
      title: 'Регистрация ВЕЗОТИЛ',
      description: 'Успешная регистрация инновационного препарата для анестезии животных'
    }
  ];

  const certifications = [
    {
      title: 'Лицензия Россельхознадзора',
      number: 'Л042-00118-77/00992073',
      date: '2023-12-20',
      description: 'Лицензия на осуществление фармацевтической деятельности'
    },
    {
      title: 'Лицензия Россельхознадзора',
      number: 'РСН 00-17-1-003263 Произв',
      date: '2017-11-21', 
      description: 'Лицензия на производство ветеринарных препаратов'
    },
    {
      title: 'ISO 9001:2015',
      number: 'ISO-9001-2022',
      date: '2022-06-15',
      description: 'Система менеджмента качества'
    }
  ];

  return (
    <div ref={ref} className="space-y-20">
      {/* Company Overview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="w-8 h-8 hud-text" />
            <h2 className="text-3xl font-bold text-white">ООО «ВЕТСТЕМ»</h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Компания «ВЕТСТЕМ» была основана в 2020 году с целью создания инновационных клеточных препаратов для регенеративной терапии и передовых высококачественных 
            ветеринарных препаратов для российского и международного рынков. Мы специализируемся 
            на разработке и производстве инновационных лекарственных средств для животных.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Наша миссия — обеспечить ветеринарных врачей эффективными и безопасными препаратами, 
            которые помогают сохранить здоровье и улучшить качество жизни животных. Мы постоянно 
            инвестируем в исследования и разработки, следуя самым современным научным достижениям.
          </p>

          {/* Contact Info */}
          <div className="hud-element p-6 rounded-lg space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 hud-text flex-shrink-0" />
              <div>
                <div className="text-white font-medium">Адрес</div>
                <div className="text-gray-300">Россия, 121205, г. Москва, территория Сколково инновационного центра, Большой бульвар, д. 42, стр. 1, пом. 209</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 hud-text flex-shrink-0" />
              <div>
                <div className="text-white font-medium">Телефон</div>
                <div className="text-gray-300">+7 (917) 525-77-70</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 hud-text flex-shrink-0" />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300">info@vetstem.ru</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="hud-element p-6 rounded-lg text-center hover:medical-glow transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 hud-text mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Vision & Values */}
          <div className="hud-element p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Target className="w-6 h-6 hud-text mr-3" />
              Наши ценности
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <Shield className="w-5 h-5 hud-text mt-0.5 flex-shrink-0" />
                <span>Безопасность и качество продукции</span>
              </li>
              <li className="flex items-start space-x-3">
                <Microscope className="w-5 h-5 hud-text mt-0.5 flex-shrink-0" />
                <span>Инновационные научные решения</span>
              </li>
              <li className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 hud-text mt-0.5 flex-shrink-0" />
                <span>Постоянное совершенствование</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">История развития</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Путь от стартапа до ведущего производителя ветеринарных препаратов
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'} md:pl-0`}>
                  <div className="hud-element p-6 rounded-lg hover:medical-glow transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-bold">
                        {achievement.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Сертификаты и лицензии</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Подтверждение высокого качества продукции и соответствия международным стандартам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="hud-element p-6 rounded-lg hover:medical-glow transition-all duration-300 text-center"
            >
              <Award className="w-12 h-12 hud-text mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
              <div className="text-xs text-gray-400 space-y-1">
                <div>№ {cert.number}</div>
                <div>{new Date(cert.date).toISOString().split('T')[0]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
