import type { Metadata } from 'next';
import Link from 'next/link';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import { HOW_WE_WORK_SERVICE_CONFIG } from '@/components/shared/how-we-work-service/how-we-work-service-config';
import ModalConsult from '@/components/shared/modal-consult';
import QuestionsBlock from '@/components/shared/questions/questions-block';
import ServiceStages from '@/components/shared/service-stages/service-stages';
import WhatWeTasksSolveBlock from '@/components/shared/what-we-tasks-solve/what-we-tasks-solve-block';
import { Button } from '@/components/ui/button';

import { fetchHeaderGroups, fetchServicesByLink } from '@/app/api/server';
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
  const [service, headerGroups] = await Promise.all([
    fetchServicesByLink(serviceLink),
    fetchHeaderGroups(),
  ]);
  const serviceCategory = headerGroups?.find((group) =>
    group.services.some((groupService) => groupService.link === serviceLink)
  );
  const faqs = service.faqs ?? [];
  const ways = service.ways ?? [];
  const desicions = service.decisions ?? [];
  const stages = service.stages ?? HOW_WE_WORK_SERVICE_CONFIG;
  return (
    <>
      <HeroBlock
        categoryBreadcrumb={
          serviceCategory
            ? {
                label: serviceCategory.groupName,
                href: `/services?q=${serviceCategory.groupLink}`,
              }
            : undefined
        }
        description={service.h2}
        fullScreen
        heading={service.h1}
        lastBreadcrumb={service.name}
        pathname={`/services/${serviceLink}`}
      >
        <ModalConsult triggerTitle="Обсудить проект" />
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.ABOUT}>О компании</Link>
        </Button>
      </HeroBlock>

      <ForWhoWeWorkBlock
        data={ways}
        heading={
          <>
            <b className="text-primary">Кому</b> больше подойдет данная услуга
          </>
        }
      />
      <WhatWeTasksSolveBlock desicions={desicions} />
      <ServiceStages stages={stages} />
      <QuestionsBlock faqs={faqs} />
    </>
  );
}
