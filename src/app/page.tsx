import Link from 'next/link';

import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
import OurClientsBlock from '@/components/shared/our-clients-block/our-clients-block';
import { OUR_CLIENTS_CONFIG } from '@/components/shared/our-clients-block/our-clients-config';
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
        heading="Студия веб-разработки ITWEBS."
      >
        <Button asChild variant="secondary">
          <Link href={PAGES_CONFIG.SERVICES_1C}>Консультация 1С</Link>
        </Button>
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
        </Button>
      </HeroBlock>
      <OurClientsBlock data={OUR_CLIENTS_CONFIG} />
      <OurTechBlock />
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      <WhyChooseBlock />
      <SeoTextBlock />
    </>
  );
}
