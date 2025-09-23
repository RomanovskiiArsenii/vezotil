'use client'

import { useState } from 'react'
import PageLayout from '../../../components/page-layouts/page-layout'
import PageHeader from '../../../components/page-layouts/page-header'
import ContentSection from '../../../components/page-layouts/content-section'
import BackToSection from '../../../components/back-to-section'
import { FullTextModal } from '../../../components/full-text-modal'
import { ReadFullReportButton } from '../../../components/read-full-report-button'
import { getClinicalReportContent } from '../../../lib/article-content'
import { Building, Users, Calendar, FlaskConical, Clock, TrendingUp, Award } from 'lucide-react'


export default function FourPawsStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Образовательные ресурсы', href: '/blog' },
    { label: 'Клинические исследования', href: '/clinicals' },
    { label: 'Исследование Четыре лапы', href: '/clinicals/four-paws-study' }
  ];

  const reportContent = getClinicalReportContent('four-paws-study');

  return (
    <PageLayout>
      <PageHeader
        title="Исследование в клинике «Четыре лапы»"
        subtitle="Специализированное исследование ВЕЗОТИЛ • Москва"
        breadcrumbs={breadcrumbs}
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/clinicals" label="Вернуться к клиническим исследованиям" />
          
          {/* Clinic Overview */}
          <div className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl border border-orange-400/30 flex items-center justify-center">
                <Building className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-100">
                  Ветеринарная клиника «Четыре лапы»
                </h2>
                <p className="text-orange-300">Специализированная клиника • г. Москва</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-orange-400">42</div>
                <div className="text-gray-300 text-sm">животных в исследовании</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">2</div>
                <div className="text-gray-300 text-sm">месяца исследований</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-gray-300 text-sm">успешность процедур</div>
              </div>
            </div>
          </div>

          {/* Study Results */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-cyan-400" />
              Результаты исследования
            </h2>
            
            <div className="space-y-8">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Анестезиологическое качество</h3>
                <p className="text-gray-300 leading-relaxed">
                  Клиника «Четыре лапы» провела детальную оценку анестезиологического качества препарата ВЕЗОТИЛ 
                  на 42 животных различных пород и возрастов. Исследование показало отличные результаты 
                  по всем ключевым параметрам анестезии.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-200">Временные характеристики:</h4>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>Наступление седации:</span>
                        <span className="text-cyan-300 font-medium">2-4 минуты</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Хирургическая анестезия:</span>
                        <span className="text-cyan-300 font-medium">5-8 минут</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Продолжительность:</span>
                        <span className="text-cyan-300 font-medium">35-85 минут</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Полное восстановление:</span>
                        <span className="text-cyan-300 font-medium">90-130 минут</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-200">Качественные показатели:</h4>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>Глубина анестезии:</span>
                        <span className="text-green-300 font-medium">Адекватная</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Мышечная релаксация:</span>
                        <span className="text-green-300 font-medium">Отличная</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Качество пробуждения:</span>
                        <span className="text-green-300 font-medium">Спокойное</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Общая оценка:</span>
                        <span className="text-green-300 font-medium">Отлично</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100">Преимущества для практики</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-cyan-200">Быстрое восстановление</h4>
                    <p className="text-gray-300 text-sm">
                      Пациенты восстанавливались значительно быстрее, что позволяло сократить время 
                      нахождения в стационаре.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="font-semibold text-cyan-200">Удобство применения</h4>
                    <p className="text-gray-300 text-sm">
                      Врачи отметили удобство работы с препаратом и предсказуемость его действия.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-cyan-200">Экономическая эффективность</h4>
                    <p className="text-gray-300 text-sm">
                      Оптимальное соотношение цена-качество по сравнению с аналогами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка для чтения полного отчета */}
          <ReadFullReportButton onClick={() => setIsModalOpen(true)} />

          {/* Clinic Details */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6">О клинике «Четыре лапы»</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ветеринарная клиника «Четыре лапы» является одной из ведущих специализированных 
                  клиник Москвы, известной высоким качеством оказываемых услуг и использованием 
                  современного оборудования.
                </p>
                
                <div className="medical-card p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-100">Ключевые направления</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Хирургия и анестезиология</li>
                    <li>• Терапия внутренних болезней</li>
                    <li>• Лабораторная диагностика</li>
                    <li>• Экстренная ветеринарная помощь</li>
                    <li>• Профилактическая медицина</li>
                  </ul>
                </div>
              </div>

              <div className="medical-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-100">Достижения клиники</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Сертификат качества услуг</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Участник профессиональных ассоциаций</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Регулярное повышение квалификации персонала</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Современное медицинское оборудование</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Модальное окно с полным текстом отчета */}
      <FullTextModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={reportContent?.title || "Полный отчёт исследования"}
        content={reportContent?.fullText || ""}
        type="clinical"
        articleId="four-paws-study"
      />
    </PageLayout>
  )
}
