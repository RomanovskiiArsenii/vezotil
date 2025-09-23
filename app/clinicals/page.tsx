
'use client';

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageLayout from '../../components/page-layouts/page-layout'
import PageHeader from '../../components/page-layouts/page-header'
import ContentSection from '../../components/page-layouts/content-section'
import BackToSection from '../../components/back-to-section'
import { FlaskConical, Building, Users, ArrowRight, Calendar, FileText, Award } from 'lucide-react'

// Metadata will be handled by layout.tsx

const clinicalStudies = [
  {
    id: 'biocontrol-comparative-study',
    title: 'Сравнительная оценка препаратов Везотил и Золетил',
    clinic: 'Ветеринарный онкологический научный центр «Биоконтроль»',
    authors: 'Е.А. Корнюшенков, Д.В. Вдовина, П.А. Анисимова, Е.В. Викторова',
    date: '2023-10-12',
    animals: '28 животных (16 кошек, 12 собак)',
    duration: '1.09.2023 - 12.10.2023',
    href: '/clinicals/biocontrol-comparative-study',
    logo: 'https://cdn.abacus.ai/images/da209a4e-4213-42d4-a649-599291d03bcb.png',
    summary: 'Пилотное сравнительное клиническое исследование анестезиологической активности препаратов Везотил® и Золетил® 100',
    keyFindings: [
      'Терапевтическая эквивалентность препаратов',
      'Более выраженная седация при использовании Везотила',
      'Меньшая саливация при индукции и пробуждении'
    ]
  },
  {
    id: 'dobryj-doctor-network-study',
    title: 'Результаты клинических исследований сети ветеринарных клиник «Добрый Доктор»',
    clinic: 'Сеть ветеринарных клиник «Добрый Доктор»',
    authors: 'Коллектив ветеринарных врачей',
    date: '2023-09-15',
    animals: 'Более 50 животных',
    duration: '3 месяца',
    href: '/clinicals/dobryj-doctor-study',
    logo: 'https://cdn.abacus.ai/images/8362fded-26e1-4a39-a372-d3bdd56798cc.png',
    summary: 'Многоцентровое исследование эффективности и безопасности препарата ВЕЗОТИЛ в условиях сетевых клиник',
    keyFindings: [
      'Стабильные результаты во всех филиалах сети',
      'Высокая удовлетворенность ветеринарных врачей',
      'Отсутствие серьезных нежелательных реакций'
    ]
  },
  {
    id: 'four-paws-moscow-study',
    title: 'Результаты клинических исследований на базе ветеринарной клиники "Четыре лапы"',
    clinic: 'Ветеринарная клиника "Четыре лапы"',
    authors: 'Команда анестезиологов клиники',
    date: '2023-08-20',
    animals: '42 животных',
    duration: '2 месяца',
    href: '/clinicals/four-paws-study',
    logo: 'https://cdn.abacus.ai/images/ef75fab5-44ea-4abe-8b2f-5f163b310ae2.png',
    summary: 'Исследование применения ВЕЗОТИЛ в условиях специализированной ветеринарной клиники Москвы',
    keyFindings: [
      'Excellent анестезиологическое качество',
      'Быстрое восстановление пациентов',
      'Удобство применения для врачей'
    ]
  },
  {
    id: 'vetprofalyans-study',
    title: 'Результаты клинических исследований на базе ветеринарных клиник «ВетПрофАльянс»',
    clinic: 'Ветеринарные клиники «ВетПрофАльянс»',
    authors: 'Специалисты ВетПрофАльянс',
    date: '2023-07-30',
    animals: '65 животных',
    duration: '4 месяца',
    href: '/clinicals/vetprofalyans-study',
    logo: 'https://cdn.abacus.ai/images/8a088fba-f973-4ab0-8f1c-1db3b35f3db8.png',
    summary: 'Масштабное исследование в двух филиалах клиник ВетПрофАльянс в Москве и Чехове',
    keyFindings: [
      'Воспроизводимость результатов в разных локациях',
      'Эффективность при различных видах операций',
      'Положительная оценка экономической эффективности'
    ]
  },
  {
    id: 'pantera-moscow-study',
    title: 'Результаты клинических исследований на базе ветеринарной клиники "Пантера"',
    clinic: 'Ветеринарная клиника "Пантера"',
    authors: 'Ветеринарные анестезиологи клиники',
    date: '2023-06-15',
    animals: '33 животных',
    duration: '2.5 месяца',
    href: '/clinicals/pantera-study',
    logo: 'https://cdn.abacus.ai/images/d38a9a12-4d72-436a-a3ad-3353338878eb.png',
    summary: 'Специализированное исследование применения ВЕЗОТИЛ в Московской области',
    keyFindings: [
      'Отличная переносимость у животных разных возрастов',
      'Стабильные показатели витальных функций',
      'Минимальный период восстановления'
    ]
  },
  {
    id: 'best-clinical-study',
    title: 'Результаты клинических исследований на базе сети ветеринарных клиник "Бэст"',
    clinic: 'Сеть ветеринарных клиник "Бэст"',
    authors: 'Коллектив ветеринарных врачей сети Бэст',
    date: '2024-01-25',
    animals: '42 животных',
    duration: '3 месяца',
    href: '/clinicals/best-study',
    logo: '/best_new_logo_fin.png',
    summary: 'Комплексное исследование препарата ВЕЗОТИЛ в условиях сетевых ветеринарных клиник Бэст',
    keyFindings: [
      'Стабильные результаты во всех филиалах сети',
      'Высокая эффективность при различных вмешательствах',
      'Отличная переносимость и безопасность'
    ]
  },
  {
    id: 'vetlife-clinical-study',
    title: 'Результаты клинических исследований на базе ветеринарной клиники "ВетЛайф"',
    clinic: 'Ветеринарная клиника "ВетЛайф"',
    authors: 'Специалисты по анестезиологии ВетЛайф',
    date: '2024-02-10',
    animals: '45 животных',
    duration: '3.5 месяца',
    href: '/clinicals/vetlife-study',
    logo: '/vetlife_logo_transparent.png',
    summary: 'Комплексное исследование применения ВЕЗОТИЛ в многопрофильной ветеринарной практике',
    keyFindings: [
      'Высокая эффективность при различных хирургических вмешательствах',
      'Стабильные гемодинамические показатели',
      'Удобство применения и дозирования'
    ]
  },
  {
    id: 'moszoo-clinical-study',
    title: 'Результаты клинических исследований на базе Московского зоопарка',
    clinic: 'Московский зоопарк',
    authors: 'Ветеринарная служба Московского зоопарка',
    date: '2024-03-05',
    animals: '52 животных различных видов',
    duration: '4 месяца',
    href: '/clinicals/moszoo-study',
    logo: '/moszoo_new_logo_fin.png',
    summary: 'Специализированное исследование применения ВЕЗОТИЛ у зоопарковых и экзотических видов животных',
    keyFindings: [
      'Отличная эффективность у разнообразных видов животных',
      'Безопасность применения у редких и экзотических видов',
      'Предсказуемость действия вне зависимости от вида'
    ]
  }
];

export default function ClinicalPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Клинические исследования"
        subtitle="Научно доказанная эффективность и безопасность ВЕЗОТИЛ"
      />
      
      <ContentSection>
        <div className="max-w-6xl mx-auto space-y-12">
          <BackToSection href="/blog" label="Вернуться к образовательным ресурсам" />
          
          {/* Introduction */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-cyan-400" />
              Результаты клинических исследований
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Препарат ВЕЗОТИЛ прошел обширные клинические исследования в ведущих ветеринарных клиниках России, которые подтвердили высокую эффективность и безопасность препарата для анестезии кошек и собак различных пород и возрастов.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">368+</div>
                <div className="text-gray-300 text-sm">животных в исследованиях</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">8</div>
                <div className="text-gray-300 text-sm">ведущих клиник</div>
              </div>
              
              <div className="medical-card p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-gray-300 text-sm">успешных анестезий</div>
              </div>
            </div>
          </div>

          {/* Clinical Studies Cards */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cyan-100 text-center mb-8">
              Участвующие клиники и результаты исследований
            </h2>
            
            <div className="grid gap-8">
              {clinicalStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="hud-element p-8 rounded-xl scan-line hover:medical-glow transition-all duration-500 hover:scale-[1.02] m-2">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      {/* Clinic Logo */}
                      <div className="lg:col-span-3">
                        <div className={`relative w-32 h-32 mx-auto rounded-xl border overflow-hidden transition-colors ${
                          study.id === 'best-clinical-study' 
                            ? 'bg-slate-600/30 border-cyan-500/40 group-hover:border-cyan-400/60'
                          : study.id === 'vetlife-clinical-study'
                            ? 'bg-slate-800/50 border-slate-500/30 group-hover:border-slate-400/50'
                          : study.id === 'moszoo-clinical-study'
                            ? 'bg-slate-600/30 border-cyan-500/40 group-hover:border-cyan-400/60'
                          : 'bg-slate-800/50 border-cyan-500/30 group-hover:border-cyan-400/50'
                        }`}>
                          <div className={`absolute inset-0 ${
                            study.id === 'best-clinical-study'
                              ? 'bg-gradient-to-br from-slate-500/15 to-cyan-500/15'
                            : study.id === 'vetlife-clinical-study'
                              ? 'bg-gradient-to-br from-slate-500/10 to-gray-500/10'
                            : study.id === 'moszoo-clinical-study'
                              ? 'bg-gradient-to-br from-slate-500/15 to-cyan-500/15'
                            : 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                          }`} />
                          <Image
                            src={study.logo}
                            alt={`Логотип ${study.clinic}`}
                            fill
                            className={`${
                              study.id === 'best-clinical-study' || study.id === 'moszoo-clinical-study'
                                ? 'object-cover filter brightness-105 contrast-110'
                              : study.id === 'vetlife-clinical-study'
                                ? 'object-contain p-3 filter brightness-105 contrast-110'
                                : 'object-contain p-4'
                            }`}
                            sizes="(max-width: 768px) 128px, 128px"
                          />
                        </div>
                      </div>
                      
                      {/* Study Info */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-cyan-100 group-hover:text-cyan-50 transition-colors">
                            {study.title}
                          </h3>
                          <div className="flex items-center gap-2 text-cyan-300">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{study.clinic}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {study.summary}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">Авторы: {study.authors}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">Период: {study.duration}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <FlaskConical className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">Объекты: {study.animals}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">Дата публикации: {new Date(study.date).toLocaleDateString('ru-RU')}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-200">Ключевые выводы:</h4>
                          <ul className="space-y-1">
                            {study.keyFindings.map((finding, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                {finding}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="lg:col-span-2 flex justify-center">
                        <Link href={study.href}>
                          <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/50 hover:border-cyan-300/70 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                            <div className="flex items-center gap-2 text-cyan-100 group-hover/btn:text-white font-medium">
                              <span>Подробнее о результатах</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Statistics */}
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-100 mb-6 text-center">
              Общие результаты исследований
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  Эффективность
                </h3>
                <div className="space-y-2 text-gray-200">
                  <p>• Быстрое наступление анестезии (2-5 минут)</p>
                  <p>• Стабильная глубина наркоза в течение 30-90 минут</p>
                  <p>• Контролируемая продолжительность действия</p>
                  <p>• Плавное и быстрое восстановление (90-120 минут)</p>
                  <p>• Терапевтическая эквивалентность с референтными препаратами</p>
                </div>
              </div>
              
              <div className="medical-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Безопасность
                </h3>
                <div className="space-y-2 text-gray-200">
                  <p>• Широкий терапевтический диапазон</p>
                  <p>• Отсутствие накопления в организме</p>
                  <p>• Менее 0,03% нежелательных реакций</p>
                  <p>• Совместимость с большинством препаратов</p>
                  <p>• Хорошая переносимость у животных разных возрастов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  )
}
