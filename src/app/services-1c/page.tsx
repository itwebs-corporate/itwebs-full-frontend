import { Metadata } from 'next';
import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work-block/our-clients-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWork1cBlock from '@/components/shared/how-we-work-1c/how-we-work-1c-block';
import ModalConsult from '@/components/shared/modal-consult';
import QuestionsBlock from '@/components/shared/questions-block/questions-block';
import WhatWeTasksSolveBlock from '@/components/shared/what-we-tasks-solve/what-we-tasks-solve-block';
import { Button } from '@/components/ui/button';

import { PAGES_CONFIG } from '@/config/pages-config';
import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: '1c услуги',
  description:
    'Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps.',
  openGraph: {
    title: `1с услуги`,
    description:
      'Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps.',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};

export default function Services1CPage() {
  return (
    <>
      <HeroBlock
        description="Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps."
        fullScreen
        heading={
          <>
            Программирование
            <br />
            системы 1С Бухгалтерия
          </>
        }
      >
        <ModalConsult />
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.ABOUT}>О компании</Link>
        </Button>
      </HeroBlock>
      <ForWhoWeWorkBlock />
      <WhatWeTasksSolveBlock />
      <HowWeWork1cBlock />
      <QuestionsBlock />
    </>
  );
}
