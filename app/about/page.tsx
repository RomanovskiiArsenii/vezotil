
import { Metadata } from 'next';
import PageLayout from '../../components/page-layouts/page-layout';
import PageHeader from '../../components/page-layouts/page-header';
import ContentSection from '../../components/page-layouts/content-section';
import ManufacturerDetailedInfo from '../../components/manufacturer-detailed-info';

export const metadata: Metadata = {
  title: 'О производителе - ООО ВЕТСТЕМ | ВЕЗОТИЛ',
  description: 'Информация о компании ООО ВЕТСТЕМ - ведущем российском производителе ветеринарных препаратов. История, достижения, сертификаты качества.',
  keywords: 'ООО ВЕТСТЕМ, производитель ветеринарных препаратов, ВЕЗОТИЛ, фармацевтическая компания',
  openGraph: {
    title: 'О производителе - ООО ВЕТСТЕМ',
    description: 'Ведущий российский производитель ветеринарных препаратов высокого качества',
    type: 'website'
  }
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'О производителе', href: '/about' }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="О производителе"
        subtitle="ООО «ВЕТСТЕМ» — ведущий российский разработчик и производитель инновационных высококачественных ветеринарных препаратов"
        backgroundImage="https://sika.scene7.com/is/image/sika/usa-pharamceutical-white-room-stock:16-9?wid=1920&hei=1080&fit=crop%2C1"
        breadcrumbs={breadcrumbs}
      />

      <ContentSection background="gradient">
        <ManufacturerDetailedInfo />
      </ContentSection>
    </PageLayout>
  );
}
