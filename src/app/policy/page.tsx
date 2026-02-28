import { Metadata } from 'next';

import PolicyBlock from '@/components/shared/policy/policy-block';

import { SITE_IMAGES } from '@/constants/seo-constants';
export const metadata: Metadata = {
  title: 'Политика',

  description: 'Политика',
  openGraph: {
    title: 'Политика',
    description: 'Политика',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};
export default function PolicyPage() {
  return <PolicyBlock />;
}
