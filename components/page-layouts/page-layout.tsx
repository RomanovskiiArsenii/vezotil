
'use client';

import Header from '../header';
import Footer from '../footer';
import ScrollProgress from '../scroll-progress';
import MinimalPreloader from '../minimal-preloader';

interface PageLayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
}

export default function PageLayout({ children, showPreloader = false }: PageLayoutProps) {
  return (
    <>
      {showPreloader && <MinimalPreloader />}
      <main className="min-h-screen medical-bg overflow-x-hidden">
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
