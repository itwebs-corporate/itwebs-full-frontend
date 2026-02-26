import { Metadata } from 'next';

import BlogBlock from '@/components/shared/blog/blog-block';
import HeroBlock from '@/components/shared/hero/hero-block';

import { fetchAllPosts } from '@/app/api/server';
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

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  return (
    <>
      <HeroBlock heading="Полезные материалы" pathname="/blog" />
      <BlogBlock posts={posts} />
    </>
  );
}
