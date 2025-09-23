
import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import FAQDetailedSection from '../../components/faq-detailed-section';

export const metadata: Metadata = {
  title: 'Часто задаваемые вопросы - ВЕЗОТИЛ | FAQ',
  description: 'Ответы на популярные вопросы о ветеринарном препарате ВЕЗОТИЛ: применение, дозировка, противопоказания, хранение и безопасность.',
  keywords: 'ВЕЗОТИЛ FAQ, вопросы ответы, ветеринарная анестезия, применение, дозировка, противопоказания',
  openGraph: {
    title: 'FAQ по препарату ВЕЗОТИЛ',
    description: 'Полные ответы на популярные вопросы о ветеринарном анестетике ВЕЗОТИЛ',
    type: 'website'
  }
};

export default function FAQPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'FAQ', href: '/faq' }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Часто задаваемые вопросы"
        subtitle="Получите исчерпывающие ответы на популярные вопросы о препарате ВЕЗОТИЛ от наших ветеринарных экспертов"
        backgroundImage="https://cdn.abacus.ai/images/f51a646f-50d9-41dd-a851-0bc44000d41b.png"
        breadcrumbs={breadcrumbs}
      />

      <ContentSection background="gradient">
        <FAQDetailedSection />
      </ContentSection>
    </PageLayout>
  );
}
