
'use client'

import { useState } from 'react'
import PageLayout from '../../../components/page-layouts/page-layout'
import PageHeader from '../../../components/page-layouts/page-header'
import ContentSection from '../../../components/page-layouts/content-section'
import BackToSection from '../../../components/back-to-section'
import { FullTextModal } from '../../../components/full-text-modal'
import { ReadFullReportButton } from '../../../components/read-full-report-button'
import { getClinicalReportContent } from '../../../lib/article-content'
import { Building, Users, Calendar, FlaskConical, BarChart, TrendingUp, Heart } from 'lucide-react'


export default function DTSTStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Образовательные ресурсы', href: '/blog' },
    { label: 'Клинические исследования', href: '/clinicals' },
    { label: 'Исследование Добрые руки', href: '/clinicals/dtst-study' }
  ];

  const reportContent = getClinicalReportContent('dtst-clinical-study');

  return (
    <PageLayout>
      <PageHeader
        title="Исследование эффективности ВЕЗОТИЛ"
        subtitle="Клинические испытания • Ветеринарная клиника «Добрые руки»"
        breadcrumbs={breadcrumbs}
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />
          
          {/* Study Overview */}
          <div className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-100">
                  Ветеринарная клиника «Добрые руки»
                </h2>
                <p className="text-cyan-300">Современная многопрофильная ветеринарная клиника</p>
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
                      <p className="font-medium text-cyan-200">Команда ветеринарных анестезиологов</p>
                      <p className="text-sm text-gray-400">Специалисты по анестезии и реанимации</p>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-200">Главный ветеринарный врач</p>
                      <p className="text-sm text-gray-400">Руководитель исследования</p>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-200">Хирургическая бригада</p>
                      <p className="text-sm text-gray-400">Практикующие ветеринарные хирурги</p>
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
                        <p className="text-sm">38 животных</p>
                      </div>
                      <div>
                        <p className="text-cyan-200 font-medium">Группы</p>
                        <p className="text-sm">Кошки и собаки</p>
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
                  <li>• Оценка эффективности препарата ВЕЗОТИЛ</li>
                  <li>• Анализ безопасности в условиях клинической практики</li>
                  <li>• Определение оптимальных дозировок</li>
                  <li>• Оценка качества анестезии</li>
                  <li>• Мониторинг побочных эффектов</li>
                </ul>
              </div>
              
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Критерии включения</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Животные различных возрастов</li>
                  <li>• Разные виды хирургических вмешательств</li>
                  <li>• Здоровые и условно здоровые животные</li>
                  <li>• Согласие владельцев</li>
                  <li>• Отсутствие противопоказаний</li>
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
                <h3 className="text-xl font-semibold text-cyan-100">Превосходные анестезиологические характеристики</h3>
                <p className="text-gray-300 leading-relaxed">
                  Препарат ВЕЗОТИЛ продемонстрировал превосходные анестезиологические характеристики 
                  во всех случаях применения. Отмечена высокая эффективность при различных видах 
                  хирургических вмешательств с стабильными показателями витальных функций.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Ключевые преимущества</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Быстрая индукция анестезии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Стабильное поддержание наркоза</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Минимальные побочные эффекты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Быстрое и спокойное восстановление</span>
                    </li>
                  </ul>
                </div>

                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Временные показатели</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Начало действия:</span>
                      <span className="text-cyan-300 font-medium">2-4 минуты</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Продолжительность:</span>
                      <span className="text-cyan-300 font-medium">30-90 минут</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Время восстановления:</span>
                      <span className="text-cyan-300 font-medium">45-90 минут</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Успешность анестезии:</span>
                      <span className="text-green-300 font-medium">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Заключение исследования</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Препарат ВЕЗОТИЛ показал отличные результаты во всех аспектах анестезиологического 
                    обеспечения. Особо отмечается быстрая индукция, стабильное поддержание наркоза 
                    и минимальное количество побочных эффектов.
                  </p>
                  <p className="leading-relaxed">
                    Исследование подтвердило высокую эффективность и безопасность препарата 
                    для использования в условиях современной ветеринарной клиники при различных 
                    видах хирургических вмешательств.
                  </p>
                  <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-4">
                    <p className="text-green-200 font-medium">
                      🏆 Рекомендация: ВЕЗОТИЛ рекомендуется для широкого применения в ветеринарной 
                      анестезиологической практике как безопасный и эффективный препарат.
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Clinic */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">О клинике «Добрые руки»</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Ветеринарная клиника «Добрые руки» — современная многопрофильная ветеринарная клиника, 
                  оснащенная новейшим диагностическим и лечебным оборудованием. Специализируется 
                  на хирургии, терапии и диагностике животных.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-200">Направления деятельности:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Ветеринарная хирургия</li>
                    <li>• Анестезиология</li>
                    <li>• Диагностическая медицина</li>
                    <li>• Экстренная ветеринарная помощь</li>
                  </ul>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Контактная информация</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-medium text-cyan-200">Клиника:</p>
                    <p className="text-sm">Ветеринарная клиника «Добрые руки»</p>
                  </div>
                  <div>
                    <p className="font-medium text-cyan-200">Специализация:</p>
                    <p className="text-sm">Многопрофильная ветеринарная помощь</p>
                  </div>
                  <div>
                    <p className="font-medium text-cyan-200">Исследования:</p>
                    <p className="text-sm">Участие в клинических испытаниях</p>
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
        articleId="dtst-clinical-study"
      />
    </PageLayout>
  )
}
