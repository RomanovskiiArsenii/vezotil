
'use client';

import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PageLayout from '../../components/page-layouts/page-layout'
import PageHeader from '../../components/page-layouts/page-header'
import ContentSection from '../../components/page-layouts/content-section'
import BackToSection from '../../components/back-to-section'
import { VideoPlayer } from '../../components/video-player'
import { Video, Play, ExternalLink, User, Calendar, Clock, TreePine, Stethoscope, Users, FlaskConical } from 'lucide-react'

const webinars = [
  {
    id: 'zoo-anesthesia',
    title: 'Применение популярных средств для анестезии на диких и зоопарковых животных',
    speaker: 'Дмитрий Николаевич Егоров',
    position: 'Главный ветеринарный врач Московского зоопарка',
    date: 'Август 2024',
    duration: '90 минут',
    description: 'Уникальный взгляд на анестезию диких животных от ведущего специалиста России. Рассматриваются особенности применения ВЕЗОТИЛ у различных видов зоопарковых животных.',
    topics: [
      'Краткая история Московского зоопарка',
      'Зачем нужна анестезия диким животным?',
      'Особенности анестезии зоопарковых животных',
      'Анестезиологические протоколы для диких животных',
      'Использование препарата ВЕЗОТИЛ у зоопарковых животных'
    ],
    rutube_url: 'https://rutube.ru/video/a782bc33fc81210af67ab54cceeb21b5/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=a782bc33fc81210af67ab54cceeb21b5&utm_term=vezotil.ru&t=0',
    rutube_embed: 'a782bc33fc81210af67ab54cceeb21b5',
    preview_image: 'https://i.ytimg.com/vi/RgyvPmFWvIU/sddefault.jpg',
    category: 'Экзотические животные'
  },
  {
    id: 'dissociatives-benzodiazepines',
    title: 'Диссоциативы и бензодиазепины: просто о сложном',
    speaker: 'Игорь Леонидович Алексеев',
    position: 'Старший анестезиолог госпиталя «Skolkovo VET»',
    date: 'Сентябрь 2024',
    duration: '75 минут',
    description: 'Фундаментальные основы действия диссоциативных анестетиков и бензодиазепинов. Детальный разбор механизмов действия ВЕЗОТИЛ.',
    topics: [
      'Механизмы действия диссоциативных анестетиков',
      'Роль бензодиазепинов в анестезии',
      'Фармакокинетика и фармакодинамика ВЕЗОТИЛ',
      'Клинические протоколы применения',
      'Управление побочными эффектами'
    ],
    rutube_url: 'https://rutube.ru/video/12ba07cb7677ef00b1b922b6e540a342/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=12ba07cb7677ef00b1b922b6e540a342&utm_term=vezotil.ru&t=0',
    rutube_embed: '12ba07cb7677ef00b1b922b6e540a342',
    preview_image: 'https://i.ytimg.com/vi/NEtjFkQr4SY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3f0jJxvbbZvusNhkbpKVuNvuM0A',
    category: 'Фармакология'
  },
  {
    id: 'patient-preparation',
    title: 'Подготовка пациента к анестезии',
    speaker: 'Игорь Леонидович Алексеев',
    position: 'Старший анестезиолог госпиталя «Skolkovo VET»',
    date: '29 сентября 2024',
    duration: '60 минут',
    description: 'Комплексный подход к предоперационной подготовке пациентов. Протоколы премедикации при использовании ВЕЗОТИЛ.',
    topics: [
      'Предоперационная оценка пациента',
      'Протоколы премедикации',
      'Подготовка к индукции анестезии',
      'Мониторинг витальных функций',
      'Управление рисками'
    ],
    rutube_url: 'https://rutube.ru/video/8e9ae854be804645dba6a0102e384c65/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=8e9ae854be804645dba6a0102e384c65&utm_term=vezotil.ru&t=0',
    rutube_embed: '8e9ae854be804645dba6a0102e384c65',
    preview_image: 'https://i.ytimg.com/vi/BJIPiTUhV1s/maxresdefault.jpg',
    category: 'Подготовка пациента'
  },
  {
    id: 'emergency-anesthesia',
    title: 'Анестезия экстренных пациентов',
    speaker: 'Игорь Леонидович Алексеев',
    position: 'Старший анестезиолог госпиталя «Skolkovo VET»',
    date: '29 сентября 2024',
    duration: '85 минут',
    description: 'Особенности анестезиологического обеспечения экстренных пациентов. Быстрые протоколы с использованием ВЕЗОТИЛ.',
    topics: [
      'Оценка экстренного пациента',
      'Быстрые протоколы анестезии',
      'Управление нестабильными пациентами',
      'ВЕЗОТИЛ в экстренной анестезии',
      'Протоколы реанимации'
    ],
    rutube_url: 'https://rutube.ru/video/af816a24e11f09618cd1ccb9e49d1c21/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=af816a24e11f09618cd1ccb9e49d1c21&utm_term=vezotil.ru&t=0',
    rutube_embed: 'af816a24e11f09618cd1ccb9e49d1c21',
    preview_image: 'https://www.apsf.org/wp-content/uploads/newsletters/2022/3702/fig-2-apsf.jpg',
    category: 'Экстренная анестезия'
  },
  {
    id: 'gi-surgery-without-opioids',
    title: 'Операции на ЖВС без опиоидов',
    speaker: 'Александр Викторович Караченко',
    position: 'Ветеринарная клиника «Толстый Лори», Санкт-Петербург',
    date: 'Октябрь 2024',
    duration: '70 минут',
    description: 'Инновационные подходы к анестезии при операциях на желудочно-кишечном тракте без использования опиоидных анальгетиков.',
    topics: [
      'Проблемы опиоидной анальгезии в ЖКТ хирургии',
      'Альтернативные протоколы обезболивания',
      'ВЕЗОТИЛ в абдоминальной хирургии',
      'Мультимодальная анальгезия',
      'Послеоперационное ведение'
    ],
    rutube_url: 'https://rutube.ru/video/3fcbd15c1000d8b674a296980dfb9327/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=3fcbd15c1000d8b674a296980dfb9327&utm_term=vezotil.ru&t=0',
    rutube_embed: '3fcbd15c1000d8b674a296980dfb9327',
    preview_image: 'https://i.ytimg.com/vi/ruwdk6-TQ4Y/sddefault.jpg',
    category: 'Хирургия ЖКТ'
  },
  {
    id: 'dissociative-anesthetics',
    title: 'Диссоциативные анестетики',
    speaker: 'Евгений Андреевич Корнюшенков',
    position: 'Центр «Биоконтроль», ВИТАР',
    date: 'Ноябрь 2024',
    duration: '95 минут',
    description: 'Полный обзор диссоциативных анестетиков в ветеринарной практике. Место ВЕЗОТИЛ среди современных анестетиков.',
    topics: [
      'Классификация диссоциативных анестетиков',
      'Механизмы действия и фармакология',
      'Сравнительная характеристика препаратов',
      'ВЕЗОТИЛ: особенности и преимущества',
      'Клинические рекомендации'
    ],
    rutube_url: 'https://rutube.ru/video/7c4e36cdc09a4123b078eaf9f1cf3a19/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=7c4e36cdc09a4123b078eaf9f1cf3a19&utm_term=vezotil.ru&t=0',
    rutube_embed: '7c4e36cdc09a4123b078eaf9f1cf3a19',
    preview_image: 'https://i.ytimg.com/vi/piM6Qw_115w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQiAxcRrFxuY6vofRqygyhXCs3Rg',
    category: 'Фармакология'
  },
  {
    id: 'vezotil-lecture',
    title: 'Лекция о Везотиле',
    speaker: 'Дарья Александровна Вдовина',
    position: 'Ветеринарный анестезиолог-исследователь',
    date: 'Декабрь 2024',
    duration: '55 минут',
    description: 'Специализированная лекция о препарате ВЕЗОТИЛ от одного из ведущих исследователей препарата.',
    topics: [
      'История создания препарата ВЕЗОТИЛ',
      'Фармакологические особенности',
      'Результаты клинических исследований',
      'Практические рекомендации',
      'Перспективы развития'
    ],
    rutube_url: 'https://rutube.ru/video/b703f190a6870226f3a3b5fcc044ad09/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=b703f190a6870226f3a3b5fcc044ad09&utm_term=vezotil.ru&t=0',
    rutube_embed: 'b703f190a6870226f3a3b5fcc044ad09',
    preview_image: 'https://lh4.googleusercontent.com/Dgih5atMTBqXM7zIFIYXN7Ga15ZDrcnUwsVJ8y-603HXmmTLHNrUReiyZD2yZo5CWzdsABx3qXpSl5GIvsLoq_xHcooPAqED597tgp9je96otq3hYpDimJxQuLf3BicKZj7QMvFc',
    category: 'О препарате'
  },
  {
    id: 'modern-anesthesia-trends',
    title: 'Современные тенденции анестезии',
    speaker: 'Сергей Сергеевич Оленчук',
    position: 'Ведущий анестезиолог',
    date: '18 апреля 2024',
    duration: '80 минут',
    description: 'Обзор современных тенденций в ветеринарной анестезиологии и место инновационных препаратов.',
    topics: [
      'Современные направления анестезиологии',
      'Инновационные препараты и технологии',
      'Роль отечественных разработок',
      'ВЕЗОТИЛ в контексте мировых тенденций',
      'Будущее ветеринарной анестезии'
    ],
    rutube_url: 'https://rutube.ru/video/11cc0fef210f3c0acf08535b37c37ccc/?utm_source=embed&utm_medium=referral&utm_campaign=main_logo&utm_content=11cc0fef210f3c0acf08535b37c37ccc&utm_term=vezotil.ru&t=0',
    rutube_embed: '11cc0fef210f3c0acf08535b37c37ccc',
    preview_image: 'https://i.ytimg.com/vi/Gea32bL1sLk/mqdefault.jpg',
    category: 'Тренды анестезии'
  }
];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Все вебинары', count: webinars.length },
    { id: 'Фармакология', label: 'Фармакология', count: webinars.filter(w => w.category === 'Фармакология').length },
    { id: 'Экзотические животные', label: 'Экзотические животные', count: webinars.filter(w => w.category === 'Экзотические животные').length },
    { id: 'О препарате', label: 'О препарате', count: webinars.filter(w => w.category === 'О препарате').length },
    { id: 'Хирургия ЖКТ', label: 'Хирургия', count: webinars.filter(w => w.category === 'Хирургия ЖКТ').length }
  ];

  const filteredWebinars = selectedCategory === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  return (
    <PageLayout>
      <PageHeader
        title="Вебинары"
        subtitle="Образовательные материалы для ветеринарных специалистов"
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/blog" label="Вернуться к образовательным ресурсам" />
          
          {/* Introduction */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <Video className="w-8 h-8 text-cyan-400" />
              Образовательные вебинары ВЕЗОТИЛ
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Коллекция образовательных вебинаров от ведущих специалистов в области ветеринарной анестезиологии. 
              Практические знания и научные основы применения препарата ВЕЗОТИЛ в различных клинических ситуациях.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="medical-card p-4 text-center space-y-2">
                <div className="text-2xl font-bold text-cyan-400">8</div>
                <div className="text-gray-300 text-sm">видео-лекций</div>
              </div>
              <div className="medical-card p-4 text-center space-y-2">
                <div className="text-2xl font-bold text-green-400">7</div>
                <div className="text-gray-300 text-sm">экспертов-лекторов</div>
              </div>
              <div className="medical-card p-4 text-center space-y-2">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-gray-300 text-sm">часов контента</div>
              </div>
              <div className="medical-card p-4 text-center space-y-2">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-gray-300 text-sm">направлений</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="glass-card p-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/30 border-cyan-400/50 text-cyan-100'
                      : 'bg-slate-800/50 border-gray-600/30 text-gray-300 hover:bg-slate-700/50 hover:border-gray-500/50'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Webinars Grid */}
          <div className="space-y-8">
            <div className="grid gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="hud-element p-8 rounded-xl scan-line hover:medical-glow transition-all duration-500 hover:scale-[1.01]">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      {/* Video Preview */}
                      <div className="lg:col-span-4">
                        <VideoPlayer
                          embedId={webinar.rutube_embed}
                          title={webinar.title}
                          author={webinar.speaker}
                          position={webinar.position}
                          clinic="Образовательный вебинар"
                          platform="rutube"
                        />
                      </div>
                      
                      {/* Webinar Info */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-cyan-100 group-hover:text-cyan-50 transition-colors leading-tight">
                            {webinar.title}
                          </h3>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-cyan-200">{webinar.speaker}</p>
                              <p className="text-gray-400 text-sm">{webinar.position}</p>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {webinar.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-cyan-200">Программа лекции:</h4>
                          <ul className="space-y-1">
                            {webinar.topics.slice(0, 3).map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                            {webinar.topics.length > 3 && (
                              <li className="text-gray-400 text-sm ml-4">
                                ...и ещё {webinar.topics.length - 3} тем
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="lg:col-span-2 flex justify-center">
                        <a 
                          href={webinar.rutube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative px-6 py-3 bg-gradient-to-r from-red-600/30 to-red-500/30 hover:from-red-500/40 hover:to-red-400/40 border border-red-400/50 hover:border-red-300/70 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                        >
                          <div className="flex items-center gap-2 text-red-100 group-hover/btn:text-white font-medium">
                            <ExternalLink className="w-4 h-4" />
                            <span>Смотреть на RUTUBE</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educational Program Info */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 text-center">
              Образовательная программа ВЕЗОТИЛ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
              <div className="medical-card p-6 text-center space-y-4 group">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 my-4">
                  <TreePine className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-100">Экзотические животные</h3>
                <p className="text-gray-300 text-sm">Специализированные протоколы для зоопарковых и диких животных</p>
              </div>
              
              <div className="medical-card p-6 text-center space-y-4 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 my-4">
                  <Stethoscope className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-100">Клиническая практика</h3>
                <p className="text-gray-300 text-sm">Практические аспекты применения в повседневной работе</p>
              </div>
              
              <div className="medical-card p-6 text-center space-y-4 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 my-4">
                  <FlaskConical className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-100">Научные основы</h3>
                <p className="text-gray-300 text-sm">Фармакология и механизмы действия препарата</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  )
}
