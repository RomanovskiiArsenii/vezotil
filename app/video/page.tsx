
import { Metadata } from 'next'
import PageLayout from '../../components/page-layouts/page-layout'
import PageHeader from '../../components/page-layouts/page-header'
import ContentSection from '../../components/page-layouts/content-section'
import { VideoPlayer } from '../../components/video-player'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Отзывы ветеринарных врачей | ВЕЗОТИЛ',
  description: 'Отзывы и мнения ветеринарных врачей о применении препарата ВЕЗОТИЛ в клинической практике.',
}

export default function VideoPage() {
  // Данные видео из vezotil.ru/video
  const videos = [
    {
      id: "video_1",
      title: "Лекция о препарате Везотил",
      description: "Лекция ветеринарного врача, анестезиолога-реаниматолога Вдовиной Дарьи Александровны о препарате \"Везотил®\"",
      author: "Вдовина Дарья Александровна",
      position: "ветеринарный врач, анестезиолог-реаниматолог",
      clinic: "Клиника \"Биоконтроль\"",
      topic: "Анестезиология",
      embedId: "b703f190a6870226f3a3b5fcc044ad09",
      platform: "rutube"
    },
    {
      id: "video_2", 
      title: "Мнение ведущих врачей-анестезиологов о Везотил",
      description: "Мнение ведущих врачей-анестезиологов Атанасовой С, Оленчука С, Корнюшенкова Е об анестетике \"Везотил\"",
      author: "Атанасова С., Оленчук С., Корнюшенков Е.",
      position: "ведущие врачи-анестезиологи",
      clinic: "Клиника \"Биоконтроль\"",
      topic: "Анестезиология",
      embedId: "a4234e260a3b6a8d88d241ddfae61a20",
      platform: "rutube"
    },
    {
      id: "video_3",
      title: "Отзыв ветеринарного анестезиолога-реаниматолога",
      description: "Отзыв Бабуновой Ольги Дмитриевны - ветеринарного анестезиолога-реаниматолога о препарате Везотил",
      author: "Бабунова Ольга Дмитриевна", 
      position: "ветеринарный анестезиолог-реаниматолог",
      clinic: "Клиника \"Биоконтроль\"",
      topic: "Анестезиология и реаниматология",
      embedId: "1061cac77cced8ca9adba00ffa1cc3b3",
      platform: "rutube"
    }
  ];

  const additionalDoctors = [
    {
      name: "Кузнецов Василий Сергеевич",
      position: "Директор клиники, ведущий хирург, невролог, травматолог, онколог",
      clinic: "Клиника \"ВетДоктор\"",
      role: "Руководитель исследований препарата Везотил",
      specializations: ["хирургия", "неврология", "травматология", "онкология"]
    },
    {
      name: "Защепкина Анна Анатольевна", 
      position: "Ведущий анестезиолог-реаниматолог, хирург, эндоскопист",
      clinic: "Клиника \"ВетДоктор\"",
      role: "Специалист по анестезиологии и реаниматологии",
      specializations: ["анестезиология", "реаниматология", "хирургия", "эндоскопия"]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Отзывы ветеринарных врачей"
        subtitle="Мнения специалистов о применении ВЕЗОТИЛ в практике"
      />
      
      <ContentSection>
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Кнопка назад */}
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться на главную
            </Link>
          </div>

          <div className="glass-card p-8 space-y-8">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">
              Видео отзывы и лекции
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
              {videos.map((video, index) => (
                <div key={video.id} className="space-y-6 flex flex-col">
                  <div className="flex-shrink-0">
                    <VideoPlayer
                      embedId={video.embedId}
                      title={video.title}
                      author={video.author}
                      position={video.position}
                      clinic={video.clinic}
                      platform={video.platform}
                    />
                  </div>
                  
                  <div className="medical-card p-6 space-y-4 flex-1">
                    <h3 className="font-semibold text-cyan-100 text-base leading-relaxed">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20">
                      <span className="text-cyan-400 text-sm">{video.topic}</span>
                      <span className="text-gray-500 text-sm">2024</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">
              Руководители исследований
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalDoctors.map((doctor, index) => (
                <div key={index} className="medical-card p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {doctor.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-cyan-100">{doctor.name}</h3>
                      <p className="text-gray-400 text-sm">{doctor.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm">
                      <span className="font-medium text-cyan-300">Клиника:</span> {doctor.clinic}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="font-medium text-cyan-300">Роль:</span> {doctor.role}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-cyan-500/20">
                    {doctor.specializations.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">
              Клинический опыт применения
            </h2>
            
            <div className="space-y-6">
              <div className="medical-card p-6">
                <h3 className="text-lg font-semibold text-cyan-100 mb-4">Преимущества в клинической практике:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Быстрое наступление анестезии (2-5 минут)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Стабильная глубина наркоза
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Минимальное влияние на дыхание
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Гладкое пробуждение
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Универсальность применения
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Экономическая эффективность
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Удобство дозирования
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Надежное качество
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="medical-card p-6">
                <h3 className="text-lg font-semibold text-cyan-100 mb-4">Статистика применения (по данным видео отзывов):</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
                    <div className="text-gray-300 text-sm">Видео отзыва</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">5</div>
                    <div className="text-gray-300 text-sm">Ведущих специалистов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                    <div className="text-gray-300 text-sm">Ведущие клиники</div>
                  </div>
                </div>
              </div>
              
              <div className="medical-card p-6">
                <h3 className="text-lg font-semibold text-cyan-100 mb-4">Участвующие клиники:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-cyan-500/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Клиника "Биоконтроль"</h4>
                    <p className="text-gray-300 text-sm mb-2">3 видео отзыва</p>
                    <p className="text-gray-400 text-xs">Специализация: Анестезиология и реаниматология</p>
                  </div>
                  <div className="border border-cyan-500/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Клиника "ВетДоктор"</h4>
                    <p className="text-gray-300 text-sm mb-2">Руководители исследований</p>
                    <p className="text-gray-400 text-xs">Многопрофильная ветеринарная клиника</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  )
}
