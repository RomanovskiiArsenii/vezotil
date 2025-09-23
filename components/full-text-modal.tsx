
'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, ArrowLeft, Download, ExternalLink, AlertCircle } from 'lucide-react'

interface FullTextModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  type: 'clinical' | 'publication'
  articleId?: string
}

export function FullTextModal({ isOpen, onClose, title, content, type, articleId }: FullTextModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  const [currentPdfUrl, setCurrentPdfUrl] = useState<string>('')

  // PDF URLs for different studies - memoized for performance
  const pdfUrls = useMemo(() => ({
    'pilot-comparative-study': '/comparative-study.pdf',
    'effectiveness-study': '/effectiveness-study.pdf',
    'chronic-pain-study': '/chronic-pain-study.pdf',
    'zoo-animals-study': '/zoo-animals-study.pdf',
    'comparative-study': '/comparative-study.pdf',
    'biocontrol-comparative-study': '/biocontrol-comparative-study.pdf',
    'dobryj-doctor-study': '/dobryj-doctor-study.pdf',
    'four-paws-study': '/four-paws-study.pdf',
    'vetprofalyans-study': '/vetprofalyans-study.pdf',
    'pantera-study': '/pantera-study.pdf',
    'best-clinical-study': '/best-clinical-study.pdf',
    'dtst-clinical-study': '/dtst-clinical-study.pdf',
    'vetlife-clinical-study': '/vetlife-clinical-study.pdf',
    'moszoo-clinical-study': '/moszoo-clinical-study.pdf'
  }), [])

  // Determine if this article has a PDF
  const hasPdf = articleId ? articleId in pdfUrls : false
  const currentPdfFile = hasPdf && articleId ? pdfUrls[articleId as keyof typeof pdfUrls] : undefined

  useEffect(() => {
    if (hasPdf && isOpen && currentPdfFile) {
      setCurrentPdfUrl(currentPdfFile)
      setPdfError(false)
    }
  }, [isOpen, hasPdf, currentPdfFile])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handlePdfError = () => {
    setPdfError(true)
  }

  const tryReloadPdf = () => {
    setPdfError(false)
    setIsLoading(true)
    // Force reload by adding timestamp
    if (currentPdfFile) {
      setCurrentPdfUrl(`${currentPdfFile}?v=${Date.now()}`)
    }
    setTimeout(() => setIsLoading(false), 1000)
  }

  const openInNewTab = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank')
    }
  }

  // Parse markdown content to HTML-like structure
  const renderContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('### ')) {
          return (
            <h3 key={index} className="text-lg font-bold text-cyan-100 mt-8 mb-4 first:mt-0">
              {line.replace('### ', '')}
            </h3>
          )
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={index} className="text-xl font-bold text-cyan-100 mt-10 mb-6 first:mt-0">
              {line.replace('## ', '')}
            </h2>
          )
        }
        if (line.startsWith('# ')) {
          return (
            <h1 key={index} className="text-2xl font-bold text-cyan-100 mt-12 mb-8 first:mt-0">
              {line.replace('# ', '')}
            </h1>
          )
        }

        // Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed">{line.replace(/^[*-] /, '')}</span>
            </div>
          )
        }

        // Bold text
        if (line.includes('**')) {
          const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-200">$1</strong>')
          return (
            <p key={index} className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processedLine }} />
          )
        }

        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />
        }

        // Regular paragraphs
        return (
          <p key={index} className="text-gray-300 leading-relaxed mb-4">
            {line}
          </p>
        )
      })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Medical HUD Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `
                linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* HUD Elements */}
          <div className="absolute top-4 left-4 flex items-center gap-4 text-cyan-400 z-10">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-mono">MEDICAL DOCUMENT VIEWER v3.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono">ACCESSING</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex items-center gap-4 text-cyan-400 z-10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono">{type === 'clinical' ? 'CLINICAL REPORT' : 'SCIENTIFIC PUBLICATION'}</span>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900/95 backdrop-blur-xl rounded-xl border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/30 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg border border-cyan-400/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-cyan-100 line-clamp-2 max-w-2xl">
                      {title}
                    </h2>
                    <p className="text-cyan-300 text-sm">
                      {type === 'clinical' ? 'Отчёт о клиническом исследовании' : 'Научная публикация'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-slate-800/80 hover:bg-red-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:text-red-400 transition-colors border border-cyan-500/30"
                    title="Закрыть"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[calc(90vh-120px)] overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                {hasPdf ? (
                  // PDF Viewer for pilot comparative study
                  <div className="space-y-6">
                    {!pdfError ? (
                      <div className="space-y-4">
                        {/* PDF Controls */}
                        <div className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-cyan-500/30">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-300 font-medium">PDF Документ</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openInNewTab(currentPdfUrl)}
                              className="px-3 py-1 bg-blue-600/80 hover:bg-blue-500/80 text-white rounded text-sm flex items-center gap-2 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Открыть в новой вкладке
                            </button>
                            <a
                              href={currentPdfUrl}
                              download={`vezotil-${articleId}.pdf`}
                              className="px-3 py-1 bg-green-600/80 hover:bg-green-500/80 text-white rounded text-sm flex items-center gap-2 transition-colors"
                            >
                              <Download className="w-4 h-4" />
                              Скачать
                            </a>
                          </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden border border-cyan-500/30">
                          <object
                            data={currentPdfUrl}
                            type="application/pdf"
                            className="w-full h-full"
                            title="Полная статья PDF"
                          >
                            <iframe
                              src={`https://docs.google.com/viewer?url=${encodeURIComponent(currentPdfUrl)}&embedded=true`}
                              className="w-full h-full"
                              title="PDF Viewer"
                              onError={handlePdfError}
                            >
                              <div className="flex items-center justify-center h-full bg-slate-800 text-white">
                                <div className="text-center space-y-4 p-8">
                                  <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto" />
                                  <h3 className="text-lg font-semibold">PDF не может быть отображен</h3>
                                  <p className="text-gray-300">Используйте кнопки выше для открытия в новой вкладке</p>
                                  <button
                                    onClick={() => openInNewTab(currentPdfUrl)}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2 mx-auto transition-colors"
                                  >
                                    <ExternalLink className="w-5 h-5" />
                                    Открыть PDF
                                  </button>
                                </div>
                              </div>
                            </iframe>
                          </object>
                          {isLoading && (
                            <div className="absolute inset-0 bg-slate-900/95 flex items-center justify-center">
                              <div className="text-center space-y-4">
                                <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                                <p className="text-cyan-300">Загрузка PDF...</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Error fallback - try to reload or open in new tab
                      <div className="space-y-6">
                        <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-6 text-center space-y-4">
                          <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
                          <h3 className="text-lg font-semibold text-red-300">Не удалось загрузить PDF</h3>
                          <p className="text-gray-300">Попробуйте обновить или открыть в новой вкладке</p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid gap-3">
                            <button
                              onClick={tryReloadPdf}
                              className="w-full p-4 bg-green-600/20 hover:bg-green-500/30 border border-green-400/30 hover:border-green-400/50 rounded-lg text-center transition-all"
                            >
                              <div className="flex items-center justify-center gap-2">
                                <FileText className="w-5 h-5 text-green-400" />
                                <span className="text-green-300 font-medium">Попробовать загрузить снова</span>
                              </div>
                            </button>

                            <button
                              onClick={() => openInNewTab(currentPdfFile || '')}
                              className="w-full p-4 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/50 rounded-lg text-center transition-all"
                            >
                              <div className="flex items-center justify-center gap-2">
                                <ExternalLink className="w-5 h-5 text-blue-400" />
                                <span className="text-blue-300 font-medium">Открыть в новой вкладке</span>
                              </div>
                            </button>

                            <a
                              href={currentPdfFile || ''}
                              download={`vezotil-${articleId}.pdf`}
                              className="w-full p-4 bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-400/30 hover:border-cyan-400/50 rounded-lg text-center transition-all inline-flex items-center justify-center gap-2"
                            >
                              <Download className="w-5 h-5 text-cyan-400" />
                              <span className="text-cyan-300 font-medium">Скачать PDF файл</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular content for other articles
                  content ? (
                    <div className="prose prose-invert max-w-none">
                      {renderContent(content)}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                          <FileText className="w-8 h-8 text-cyan-400" />
                        </div>
                        <p className="text-gray-400">Загрузка полного текста...</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* HUD Corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
