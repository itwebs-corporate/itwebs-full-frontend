import { Metadata } from 'next';

import AboutTextBlock from '@/components/shared/about-text/about-text-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import ModalConsult from '@/components/shared/modal-consult';
import OurTechBlock from '@/components/shared/our-tech/our-tech-block';
import ProcessWithoutStress from '@/components/shared/process-without-stress/process-without-stress';
import ServicesWeProvide from '@/components/shared/services-we-provide/services-we-provide';
import WeInNumbers from '@/components/shared/we-in-numbers/we-in-numbers';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task/we-solve-client-task-block';
import Section from '@/components/ui/section/section';

import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: 'О компании',

  description: 'Немного о ITWEBS',
  openGraph: {
    title: 'О компании',
    description: 'Немного о ITWEBS',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};
export default function AboutPage() {
  return (
    <>
      <HeroBlock heading="Немного о ITWEBS" pathname="/about">
        <ModalConsult triggerTitle="Обсудить задачу" />
      </HeroBlock>
      <AboutTextBlock />
      <WeInNumbers />
      <WeSolveClientTaskBlock />
      <Section className="bg-primary py-container rounded-[clamp(24px,4vw,48px)]">
        <OurTechBlock />
        <ServicesWeProvide />
      </Section>
      <ProcessWithoutStress />
    </>
  );
}
