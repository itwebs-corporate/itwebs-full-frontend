import { Metadata } from 'next';

import HeroBlock from '@/components/shared/hero/hero-block';
import ServiceBlock from '@/components/shared/service-block/service-block';

import { fetchAllServices } from '@/app/api/server';
import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Услуги ITWEBS',
  openGraph: {
    title: `Услуги`,
    description: 'Услуги ITWEBS',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};

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
