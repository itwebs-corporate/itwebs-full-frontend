import { Metadata } from 'next';

import AllNeedForYourTaskBlock from '@/components/shared/all-need-for-your-task-block/all-need-for-your-task-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';

import { SERVICES_CARDS } from '@/config/services-mock-config';
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

type CardsKey = keyof typeof SERVICES_CARDS;

export default async function ServicesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const key = sp?.q;
  const cards = SERVICES_CARDS[key as CardsKey] ?? SERVICES_CARDS['services-1c'];
  return (
    <>
      <HeroBlock heading="Услуги ITWEBS" />
      <AllNeedForYourTaskBlock cards={cards} searchParams={key} />
    </>
  );
}
