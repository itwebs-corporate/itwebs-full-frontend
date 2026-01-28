import { Metadata } from 'next';

import BlogBlock from '@/components/shared/blog-block/blog-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';

import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Полезные материалы',
  openGraph: {
    title: 'Блог',
    description: 'Полезные материалы',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return (
    <>
      <HeroBlock heading="Полезные материалы" />
      <BlogBlock />
    </>
  );
}
