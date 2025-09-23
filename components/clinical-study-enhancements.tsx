
'use client'

import { useState } from 'react'
import { FullTextModal } from './full-text-modal'
import { ReadFullReportButton } from './read-full-report-button'
import { getClinicalReportContent } from '../lib/article-content'

interface ClinicalStudyEnhancementsProps {
  studyId: string
  children: React.ReactNode
}

export function ClinicalStudyEnhancements({ studyId, children }: ClinicalStudyEnhancementsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const reportContent = getClinicalReportContent(studyId)

  return (
    <>
      {children}
      
      {/* Кнопка для чтения полного отчета */}
      <div className="flex justify-center my-8">
        <ReadFullReportButton onClick={() => setIsModalOpen(true)} />
      </div>
      
      {/* Модальное окно с полным текстом отчета */}
      <FullTextModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={reportContent?.title || "Полный отчёт исследования"}
        content={reportContent?.fullText || ""}
        type="clinical"
        articleId={studyId}
      />
    </>
  )
}
