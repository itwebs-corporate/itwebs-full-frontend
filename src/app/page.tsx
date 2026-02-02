import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work-block/our-clients-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
import OurTechBlock from '@/components/shared/our-tech-block/our-tech-block';
import SeoTextBlock from '@/components/shared/seo-text-block/seo-text-block';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task-block/we-solve-client-task-block';
import WhyChooseBlock from '@/components/shared/why-choose-block/why-choose-block';
import { Button } from '@/components/ui/button';

import { PAGES_CONFIG } from '@/config/pages-config';

export default function HomePage() {
  return (
    <>
      <HeroBlock
        description="Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps"
        fullScreen
        heading={
          <>
            Компания веб-
            <br />р<span className="relative z-10">a</span>зработки ITWEBS.
          </>
        }
      >
        <Button asChild variant="secondary">
          <Link href={PAGES_CONFIG.SERVICES_1C}>Консультация 1С</Link>
        </Button>
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
        </Button>
      </HeroBlock>
      <ForWhoWeWorkBlock />
      <OurTechBlock />
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      <WhyChooseBlock />
      <SeoTextBlock />
    </>
  );
}
