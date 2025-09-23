
'use client'

import { useState } from 'react'
import PageLayout from '../../../components/page-layouts/page-layout'
import PageHeader from '../../../components/page-layouts/page-header'
import ContentSection from '../../../components/page-layouts/content-section'
import BackToSection from '../../../components/back-to-section'
import { FullTextModal } from '../../../components/full-text-modal'
import { ReadFullReportButton } from '../../../components/read-full-report-button'
import { getClinicalReportContent } from '../../../lib/article-content'
import { Building, Users, Calendar, FlaskConical, BarChart, TrendingUp, Hospital } from 'lucide-react'


export default function BestStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Образовательные ресурсы', href: '/blog' },
    { label: 'Клинические исследования', href: '/clinicals' },
    { label: 'Исследование Бэст', href: '/clinicals/best-study' }
  ];

  const reportContent = getClinicalReportContent('best-clinical-study');

  return (
    <PageLayout>
      <PageHeader
        title="Исследование в сети клиник Бэст"
        subtitle="Многоцентровое клиническое исследование • Сеть ветеринарных клиник «Бэст»"
        breadcrumbs={breadcrumbs}
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />
          
          {/* Study Overview */}
          <div className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl border border-yellow-400/30 flex items-center justify-center">
                <Hospital className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-100">
                  Сеть ветеринарных клиник «Бэст»
                </h2>
                <p className="text-cyan-300">Многопрофильная сеть ветеринарных клиник</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    Исследовательская группа
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <p className="font-medium text-cyan-200">Коллектив ветеринарных врачей сети Бэст</p>
                      <p className="text-sm text-gray-400">Специалисты анестезиологии и хирургии</p>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-200">Координатор исследования</p>
                      <p className="text-sm text-gray-400">Главный врач сети</p>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-200">Филиалы участники</p>
                      <p className="text-sm text-gray-400">Все клиники сети Бэст</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    Параметры исследования
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-cyan-200 font-medium">Период</p>
                        <p className="text-sm">Январь - Март 2024</p>
                      </div>
                      <div>
                        <p className="text-cyan-200 font-medium">Продолжительность</p>
                        <p className="text-sm">3 месяца</p>
                      </div>
                      <div>
                        <p className="text-cyan-200 font-medium">Объекты</p>
                        <p className="text-sm">42 животных</p>
                      </div>
                      <div>
                        <p className="text-cyan-200 font-medium">Филиалы</p>
                        <p className="text-sm">Все клиники сети</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Methodology */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-cyan-400" />
              Методология исследования
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Цели исследования</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Оценка эффективности в условиях сети клиник</li>
                  <li>• Стандартизация протоколов применения</li>
                  <li>• Анализ воспроизводимости результатов</li>
                  <li>• Оценка удобства применения</li>
                  <li>• Мониторинг безопасности</li>
                </ul>
              </div>
              
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Особенности сетевого исследования</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Единые протоколы во всех филиалах</li>
                  <li>• Стандартизированная документация</li>
                  <li>• Централизованный анализ данных</li>
                  <li>• Обучение персонала</li>
                  <li>• Контроль качества</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <BarChart className="w-8 h-8 text-cyan-400" />
              Основные результаты
            </h2>
            
            <div className="space-y-8">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Стабильные результаты во всех филиалах сети</h3>
                <p className="text-gray-300 leading-relaxed">
                  Многоцентровое исследование продемонстрировало высокую воспроизводимость результатов 
                  применения препарата ВЕЗОТИЛ во всех филиалах сети клиник Бэст. Стандартизированные 
                  протоколы обеспечили единые высокие стандарты качества анестезии.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Ключевые достижения</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Высокая эффективность при различных вмешательствах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Отличная переносимость и безопасность</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Простота в применении для персонала</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Экономическая эффективность</span>
                    </li>
                  </ul>
                </div>

                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Показатели сети</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Филиалов участников:</span>
                      <span className="text-cyan-300 font-medium">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Успешность анестезии:</span>
                      <span className="text-green-300 font-medium">98.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Единообразие протоколов:</span>
                      <span className="text-green-300 font-medium">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Удовлетворенность врачей:</span>
                      <span className="text-green-300 font-medium">Высокая</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Заключение исследования</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Препарат ВЕЗОТИЛ показал отличные результаты в условиях сетевого применения. 
                    Особенно важна была продемонстрированная воспроизводимость результатов 
                    в различных филиалах сети при соблюдении единых протоколов.
                  </p>
                  <p className="leading-relaxed">
                    Исследование подтвердило возможность успешного внедрения препарата 
                    в крупных ветеринарных сетях с сохранением высоких стандартов 
                    качества и безопасности анестезии.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg p-4">
                    <p className="text-yellow-200 font-medium">
                      🏆 Рекомендация: ВЕЗОТИЛ рекомендован для использования в сетевых 
                      ветеринарных клиниках как надежный препарат с высокой воспроизводимостью результатов.
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Network */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">О сети клиник «Бэст»</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Сеть ветеринарных клиник «Бэст» — современная сеть медицинских учреждений, 
                  специализирующихся на оказании полного спектра ветеринарных услуг. 
                  Все клиники сети работают по единым стандартам качества и безопасности.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-200">Преимущества сетевого подхода:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Единые протоколы лечения</li>
                    <li>• Стандартизированное оборудование</li>
                    <li>• Обмен опытом между филиалами</li>
                    <li>• Централизованное обучение персонала</li>
                  </ul>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Характеристики сети</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-medium text-cyan-200">Количество филиалов:</p>
                    <p className="text-sm">5 клиник</p>
                  </div>
                  <div>
                    <p className="font-medium text-cyan-200">Специализация:</p>
                    <p className="text-sm">Многопрофильная ветеринарная помощь</p>
                  </div>
                  <div>
                    <p className="font-medium text-cyan-200">Исследования:</p>
                    <p className="text-sm">Участие в многоцентровых исследованиях</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Modal for full report */}
      <FullTextModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={reportContent?.title || "Полный отчёт исследования"}
        content={reportContent?.fullText || ""}
        type="clinical"
        articleId="best-clinical-study"
      />
    </PageLayout>
  )
}
