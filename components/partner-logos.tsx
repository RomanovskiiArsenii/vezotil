
'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function PartnerLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

  const partners = [
    {
      id: 'vetstem',
      name: 'ВЕТСТЕМ',
      url: 'https://vetstem.ru/',
      logoPath: '/vetstem_logo.png',
      description: 'Разработчик препарата'
    },
    {
      id: 'sk',
      name: 'Сколково',
      url: 'https://sk.ru/',
      logoPath: '/skolkovo_logo.png',
      description: 'Инновационный центр'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {partners.map((partner, index) => (
        <motion.div
          key={partner.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative"
          onMouseEnter={() => setHoveredLogo(partner.id)}
          onMouseLeave={() => setHoveredLogo(null)}
        >
          <motion.a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="glass-card p-2 rounded-lg border border-cyan-500/30 backdrop-blur-lg bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-300 group">
              <div className="w-14 h-14 relative">
                <Image
                  src={partner.logoPath}
                  alt={`${partner.name} логотип`}
                  fill
                  className="object-contain rounded filter invert brightness-0 contrast-200 group-hover:filter-none transition-all duration-300"
                  sizes="56px"
                />
              </div>
            </div>
          </motion.a>

          {/* Tooltip */}
          {hoveredLogo === partner.id && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="glass-card px-3 py-2 rounded-lg text-sm">
                <p className="text-cyan-100 font-semibold">{partner.name}</p>
                <p className="text-gray-300 text-xs">{partner.description}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
