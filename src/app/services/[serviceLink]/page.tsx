import type { Metadata } from 'next';
import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import HowWeWork1cBlock from '@/components/shared/how-we-work-service/how-we-work-service-block';
import { HOW_WE_WORK_SERVICE_CONFIG } from '@/components/shared/how-we-work-service/how-we-work-service-config';
import ModalConsult from '@/components/shared/modal-consult';
import QuestionsBlock from '@/components/shared/questions/questions-block';
import WhatWeTasksSolveBlock from '@/components/shared/what-we-tasks-solve/what-we-tasks-solve-block';
import { Button } from '@/components/ui/button';

import { fetchServicesByLink } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';
import { SITE_IMAGES } from '@/constants/seo-constants';

type Props = {
  params: Promise<{ serviceLink: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceLink } = await params;

  try {
    const service = await fetchServicesByLink(serviceLink);
    const title = service.metaTitle;
    const description = service.metaDescription;
    return {
      title,
      description,
      alternates: {
        canonical: `/${serviceLink}`,
      },
      openGraph: {
        title,
        description,
        images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
        type: 'website',
        url: `/${serviceLink}`,
      },
    };
  } catch {
    return {
      title: 'Услуга',
      description: '',
    };
  }
}

export default async function ServiceLinkPage({ params }: Props) {
  const serviceLink = (await params).serviceLink;
  const service = await fetchServicesByLink(serviceLink);

  const faqs = service.faqs ?? [];
  const ways = service.ways ?? [];
  const desicions = service.decisions ?? [];
  const howWeWorkCards = HOW_WE_WORK_SERVICE_CONFIG ?? [];
  return (
    <>
      <HeroBlock
        description={service.h2}
        fullScreen
        heading={service.h1}
        lastBreadcrumb={service.name}
      >
        <ModalConsult />
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.ABOUT}>О компании</Link>
        </Button>
      </HeroBlock>

      <ForWhoWeWorkBlock data={ways} />
      <WhatWeTasksSolveBlock desicions={desicions} />
      <HowWeWork1cBlock data={howWeWorkCards} />
      <QuestionsBlock faqs={faqs} />
    </>
  );
}
