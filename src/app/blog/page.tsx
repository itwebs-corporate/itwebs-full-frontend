import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import BlogBlock from '@/components/shared/blog/blog-block';
import HeroBlock from '@/components/shared/hero/hero-block';

import { fetchAllPosts } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.BLOG,
    ru: {
      title: 'Блог IT-компании: решения для роста бизнеса | Автоматизация, разработка, поддержка',
      description:
        'Полезные статьи о том, как автоматизация с CRM (amoCRM) и ERP, разработка интернет-магазинов, веб и мобильных приложений увеличивают прибыль и оптимизируют процессы. Анализ и оптимизация веб-приложений, SEO продвижение, IT поддержка организаций. Узнайте, как наши решения делают бизнес эффективнее!',
    },
    by: {
      title: 'Блог IT-компании: статьи о 1С, разработке сайтов и приложений',
      description:
        'Полезные статьи и новости из мира 1С (бухгалтерия, ЗУП, ИТС, управление) и разработки сайтов/приложений. Советы по автоматизации бизнеса, созданию интернет-магазинов и мобильных приложений. Читайте наш блог!',
    },
  });
}

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  return (
    <>
      <HeroBlock heading="Полезные материалы" pathname="/blog" />
      <BlogBlock posts={posts} />
    </>
  );
}
