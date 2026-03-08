import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import AboutTextBlock from '@/components/shared/about-text/about-text-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import ModalConsult from '@/components/shared/modal-consult';
import OurTechBlock from '@/components/shared/our-tech/our-tech-block';
import ServicesWeProvide from '@/components/shared/services-we-provide/services-we-provide';
import WeInNumbers from '@/components/shared/we-in-numbers/we-in-numbers';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task/we-solve-client-task-block';
import WhatHighlightOnBackground from '@/components/shared/what-highlight-on-background/what-highlight-on-background';
import Section from '@/components/ui/section/section';

import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.ABOUT,
    ru: {
      title: 'О компании: разработка интернет-магазинов, CRM, ERP, приложений и IT поддержка',
      description:
        'Мы — компания-разработчик веб и мобильных приложений (iOS/Android). Создаем интернет-магазины, CRM (в т.ч. amoCRM), ERP системы под ключ. Выполняем анализ и оптимизацию веб-приложений, SEO продвижение, IT поддержку организаций. Опыт, надежность, масштабируемые решения.',
    },
    by: {
      title: 'ITWEBS — Эксперты в UI/UX, 1С, Мобильной, Веб-разработке',
      description:
        'Создаем мобильные и веб приложения, проектируем UI/UX Дизайн для бизнеса. Следим за трендами в технологиях, чтобы создавать продукты быстрее. Профессионально интегрируем 1С в бизнес.',
    },
  });
}

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
      <WhatHighlightOnBackground />
    </>
  );
}
