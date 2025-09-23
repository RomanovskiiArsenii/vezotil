
import HeroSection from '../components/hero-section';
import StrapiHeroSection from '../components/strapi-hero-section';
import AboutSection from '../components/about-section';
import AdvantagesSection from '../components/advantages-section';
import IndicationsSection from '../components/indications-section';
import InstructionsSection from '../components/instructions-section';
import SafetySection from '../components/safety-section';
import ManufacturerSection from '../components/manufacturer-section';
import StrapiManufacturerSection from '../components/strapi-manufacturer-section';
import ContactSection from '../components/contact-section';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollProgress from '../components/scroll-progress';
import MinimalPreloader from '../components/minimal-preloader';
import { PartnerLogos } from '../components/partner-logos';
import Link from 'next/link';

export default function HomePage() {
  // Use static components only (Strapi CMS disabled)
  const useStrapiCMS = false;
  
  return (
    <>
      <MinimalPreloader />
      <main className="min-h-screen medical-bg overflow-x-hidden">
        <ScrollProgress />
        <Header />
        
        {useStrapiCMS ? <StrapiHeroSection /> : <HeroSection />}
        <AboutSection />
        <AdvantagesSection />
        <IndicationsSection />
        <InstructionsSection />
        <SafetySection />
        {useStrapiCMS ? <StrapiManufacturerSection /> : <ManufacturerSection />}
        <ContactSection />
        
        <Footer />
        
        {/* Hidden prefetch links for faster navigation */}
        <div className="hidden">
          <Link href="/about" prefetch={true}>About</Link>
          <Link href="/blog" prefetch={true}>Blog</Link>
          <Link href="/faq" prefetch={true}>FAQ</Link>
          <Link href="/video" prefetch={true}>Video</Link>
          <Link href="/webinars" prefetch={true}>Webinars</Link>
          <Link href="/clinicals" prefetch={true}>Clinicals</Link>
          <Link href="/publications" prefetch={true}>Publications</Link>
          <Link href="/news" prefetch={true}>News</Link>
        </div>
        
        {/* Partner logos in bottom-right corner */}
        <PartnerLogos />
      </main>
    </>
  );
}
