
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '../components/ui/toaster';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ВЕЗОТИЛ - Ветеринарная анестезия | ООО ВЕТСТЕМ',
  description: 'ВЕЗОТИЛ - инновационный ветеринарный препарат для анестезии животных. Тилетамин + Золазепам 50+50 мг/мл. Безопасность и эффективность для профессиональной ветеринарной практики.',
  keywords: 'везотил, ветеринарная анестезия, тилетамин, золазепам, ветстем, анестетик для животных, ветеринарный препарат',
  authors: [{ name: 'ООО ВЕТСТЕМ' }],
  openGraph: {
    title: 'ВЕЗОТИЛ - Инновационная ветеринарная анестезия',
    description: 'Безопасный и эффективный препарат для анестезии животных. Тилетамин + Золазепам от ООО ВЕТСТЕМ.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#0a0a0a'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth smooth-scroll-samsung" style={{overflowX: 'hidden'}}>
      <body className={`${inter.className} overflow-x-hidden no-horizontal-scroll samsung-text-fix`} style={{overflowX: 'hidden', overscrollBehaviorX: 'none'}}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
