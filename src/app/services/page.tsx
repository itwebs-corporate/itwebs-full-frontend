import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import HeroBlock from '@/components/shared/hero/hero-block';
import ServiceBlock from '@/components/shared/service-block/service-block';

import { fetchAllServices } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.SERVICES,
    ru: {
      title: 'Все услуги IT-компании: автоматизация, разработка, интеграция и IT поддержка',
      description:
        'Полный перечень услуг: автоматизация бизнеса (внедрение CRM, включая amoCRM, и ERP систем), разработка интернет-магазинов под ключ, создание веб и мобильных приложений (iOS/Android). Анализ и оптимизация веб-приложений, SEO продвижение, IT поддержка организаций. Все услуги в одном месте — комплексно и профессионально!',
    },
    by: {
      title: 'Разработка программного обеспечения на заказ | ITWEBS',
      description:
        'Разрабатываем программное обеспечение для мобильных, веб и десктопных платформ с акцентом на масштабируемость системы. Интегрируем и настраиваем 1С и CRM системы.',
    },
  });
}

type Props = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function ServicesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const key = sp?.q;
  const allServices = await fetchAllServices();
  return (
    <>
      <HeroBlock heading="Услуги ITWEBS" pathname="/services" />
      <ServiceBlock cards={allServices} searchParams={key} />
    </>
  );
}
