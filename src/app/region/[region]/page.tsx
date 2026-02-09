import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work-block/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
// import QuestionsBlock from '@/components/shared/questions-block/questions-block';
import ServicesWeProvide from '@/components/shared/services-we-provide/services-we-provide';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task-block/we-solve-client-task-block';
import WhatWeTaskSolveRegionBlock from '@/components/shared/what-we-tasks-solve/what-we-task-solve-region-block';
import WhyChooseUsRegionBlock from '@/components/shared/why-choose-block/why-choose-us-region-block';
import { Button } from '@/components/ui/button';

import { PAGES_CONFIG } from '@/config/pages-config';

type Props = {
  params: Promise<{ region: string }>;
};
// TODO: какие здесь будут faqs?
export default async function RegionPage({ params }: Props) {
  const region = (await params).region ?? 'Минске';

  return (
    <>
      <HeroBlock
        description={`Помогаем вашему бизнесу расти и развиваться быстреев в ${region}: сайты, CRM-системы, веб-приложения, SEO, telegram-apps.`}
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
      <WhatWeTaskSolveRegionBlock />
      <ServicesWeProvide isRegion />
      <WhyChooseUsRegionBlock />
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      {/* <QuestionsBlock
        className="bg-background"
        headStyleFirst="text-foreground2"
        headStyleSecond="text-primary"
      /> */}
    </>
  );
}
