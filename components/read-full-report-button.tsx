
'use client'

import { FileText, ExternalLink } from 'lucide-react'

interface ReadFullReportButtonProps {
  onClick: () => void
  text?: string
}

export function ReadFullReportButton({ onClick, text = "Читать отчёт полностью" }: ReadFullReportButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/50 hover:border-cyan-300/70 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
      >
        <div className="flex items-center gap-3 text-cyan-100 group-hover:text-white font-medium">
          <FileText className="w-5 h-5" />
          <span>{text}</span>
          <ExternalLink className="w-4 h-4" />
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
      </button>
    </div>
  )
}
