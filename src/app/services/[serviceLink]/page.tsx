import type { Metadata } from 'next';
import Link from 'next/link';

import { buildPageMetadata } from '@/lib/seo';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import ModalConsult from '@/components/shared/modal-consult';
import QuestionsBlock from '@/components/shared/questions/questions-block';
import SeoTextBlock from '@/components/shared/seo-text/seo-text-block';
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
    const title = service.metaTitle ?? '';
    const description = service.metaDescription ?? '';
    return buildPageMetadata({
      path: `${PAGES_CONFIG.SERVICES}/${serviceLink}`,
      ru: { title, description },
      type: 'website',
      images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
    });
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
  const stages = service.stages ?? [];
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
      <SeoTextBlock
        description={
          <>
            Наша главная ценность — не просто выполнить проект, а стать для клиента долгосрочным и
            надежным партнером в цифровой трансформации. Мы часто начинаем с решения одной задачи,
            будь то <b>заказать разработку сайта</b> или
            <b> заказать разработку мобильного приложения</b>. Клиенты ценят наш глубокий подход,
            профессионализм и стремление вникнуть в суть их бизнеса, что естественным образом ведет
            к расширению сотрудничества. Универсальность нашей экспертизы позволяет закрывать все
            IT-потребности компании в одном месте. После успешного запуска сайта или приложения
            клиенты обращаются к нам для его развития: заказывают комплексное
            <b> SEO продвижение</b> и глубинную <b> SEO оптимизацию</b> для роста трафика и
            конверсий. Наша <b>разработка интернет-магазина</b> логично дополняется последующей
            <b> заказной интеграцией CRM системы</b> для автоматизации продаж и повышения
            лояльности. Таким образом, мы эволюционируем от исполнителя конкретного технического
            задания в единого подрядчика, который обеспечивает полный цикл{' '}
            <b>IT поддержки бизнеса</b>. Это стратегическая <b>помощь бизнесу</b>, где мы берем на
            себя всю цифровую инфраструктуру: от технической надежности и безопасности до
            маркетинговой эффективности. Доверие, построенное на результатах, — вот почему наши
            клиенты возвращаются снова, зная, что в ITWEBS они найдут решение любой технологической
            задачи.
          </>
        }
        title={
          <>
            <b className="text-primary">Ваш</b> единый IT партнер
          </>
        }
      />
    </>
  );
}
