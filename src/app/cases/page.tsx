import { Metadata } from 'next';

import CasesBlock from '@/components/shared/cases-block/cases-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';

import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: 'Кейсы',

  description: 'Наши кейсы',
  openGraph: {
    title: 'Кейсы',
    description: 'Наши кейсы',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};
export default function CasesPage() {
  return (
    <>
      <HeroBlock heading="Наши кейсы" />
      <CasesBlock />
    </>
  );
}
