'use client'


import { useState } from 'react'
import PageLayout from '../../../components/page-layouts/page-layout'
import PageHeader from '../../../components/page-layouts/page-header'
import ContentSection from '../../../components/page-layouts/content-section'
import BackToSection from '../../../components/back-to-section'
import { getClinicalReportContent } from '../../../lib/article-content'
import { ReadFullReportButton } from '../../../components/read-full-report-button'
import { FullTextModal } from '../../../components/full-text-modal'
import { Building, Users, Calendar, FlaskConical, Heart, Shield } from 'lucide-react'


export default function PanteraStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const reportContent = getClinicalReportContent('pantera-study')
  
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Образовательные ресурсы', href: '/blog' },
    { label: 'Клинические исследования', href: '/clinicals' },
    { label: 'Исследование Пантера', href: '/clinicals/pantera-study' }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Исследование в клинике «Пантера»"
        subtitle="Специализированное исследование • Московская область"
        breadcrumbs={breadcrumbs}
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />
          
          {/* Clinic Overview */}
          <div className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl border border-purple-400/30 flex items-center justify-center">
                <Building className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-100">
                  Ветеринарная клиника «Пантера»
                </h2>
                <p className="text-purple-300">Московская область • Региональный лидер</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">33</div>
                <div className="text-gray-300 text-sm">животных в исследовании</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">2.5</div>
                <div className="text-gray-300 text-sm">месяца исследований</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-gray-300 text-sm">безопасность</div>
              </div>
            </div>
          </div>

          {/* Age Group Analysis */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-cyan-400" />
              Исследование переносимости по возрастным группам
            </h2>
            
            <div className="space-y-8">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Цель исследования</h3>
                <p className="text-gray-300 leading-relaxed">
                  Основной целью исследования в клинике «Пантера» была оценка переносимости препарата ВЕЗОТИЛ 
                  у животных различных возрастных групп, включая молодых, взрослых и пожилых пациентов.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Молодые животные (1-3 года)</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">12</div>
                      <div className="text-gray-400 text-sm">животных</div>
                    </div>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Быстрое наступление анестезии</li>
                      <li>• Стабильные витальные функции</li>
                      <li>• Активное восстановление</li>
                      <li>• Отсутствие осложнений</li>
                    </ul>
                  </div>
                </div>

                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Взрослые животные (3-7 лет)</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">15</div>
                      <div className="text-gray-400 text-sm">животных</div>
                    </div>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Оптимальная глубина анестезии</li>
                      <li>• Предсказуемое время действия</li>
                      <li>• Гладкое восстановление</li>
                      <li>• Хорошая переносимость</li>
                    </ul>
                  </div>
                </div>

                <div className="medical-card p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-100">Пожилые животные (7+ лет)</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">6</div>
                      <div className="text-gray-400 text-sm">животных</div>
                    </div>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Безопасное применение</li>
                      <li>• Щадящее воздействие</li>
                      <li>• Минимальный стресс</li>
                      <li>• Адаптированные дозировки</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vital Signs Monitoring */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-cyan-400" />
              Мониторинг витальных функций
            </h2>
            
            <div className="space-y-6">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Стабильность показателей</h3>
                <p className="text-gray-300 leading-relaxed">
                  Особое внимание в исследовании было уделено мониторингу витальных функций животных 
                  во время анестезии. Все животные демонстрировали стабильные показатели сердечно-сосудистой 
                  и дыхательной систем на протяжении всего периода анестезии.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-200">Сердечно-сосудистая система:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• ЧСС: стабильная в пределах нормы</li>
                      <li>• АД: без критических изменений</li>
                      <li>• Капиллярное наполнение: нормальное</li>
                      <li>• Цвет слизистых: розовый</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-200">Дыхательная система:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• ЧД: в пределах физиологической нормы</li>
                      <li>• SpO2: {'>'} 95% во время анестезии</li>
                      <li>• Проходимость дыхательных путей: свободная</li>
                      <li>• Дыхательные движения: ритмичные</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-400/30 rounded-lg p-6">
                <h4 className="font-semibold text-green-200 mb-3">🛡️ Заключение по безопасности</h4>
                <p className="text-green-100 text-sm leading-relaxed">
                  Препарат ВЕЗОТИЛ продемонстрировал отличный профиль безопасности у животных всех 
                  возрастных групп. Минимальный период восстановления и стабильные витальные показатели 
                  подтверждают возможность безопасного применения препарата в клинической практике.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка для чтения полного отчета */}
        <div className="max-w-6xl mx-auto my-8">
          <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
        </div>
      </ContentSection>
      
      {/* Модальное окно с полным текстом отчета */}
      <FullTextModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={reportContent?.title || "Полный отчёт исследования"}
        content={reportContent?.fullText || ""}
        type="clinical"
        articleId="pantera-study"
      />
    </PageLayout>
  )
}
