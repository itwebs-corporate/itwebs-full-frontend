import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work-block/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWork1cBlock from '@/components/shared/how-we-work-service/how-we-work-service-block';
import ModalConsult from '@/components/shared/modal-consult';
import QuestionsBlock from '@/components/shared/questions-block/questions-block';
import WhatWeTasksSolveBlock from '@/components/shared/what-we-tasks-solve/what-we-tasks-solve-block';
import { Button } from '@/components/ui/button';

import { fetchServicesByLink } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

type Props = {
  params: Promise<{ serviceLink: string }>;
};
export default async function ServiceLinkPage({ params }: Props) {
  const serviceLink = (await params).serviceLink;
  const service = await fetchServicesByLink(serviceLink);
  const faqs = service.faqs;
  const ways = service.ways;
  return (
    <>
      <HeroBlock description={service.h2} heading={service.h1} lastBreadcrumb={service.name}>
        <ModalConsult />
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.ABOUT}>О компании</Link>
        </Button>
      </HeroBlock>
      <ForWhoWeWorkBlock />
      <WhatWeTasksSolveBlock />
      {ways && <HowWeWork1cBlock ways={ways} />}
      {faqs && <QuestionsBlock faqs={faqs} />}
    </>
  );
}
