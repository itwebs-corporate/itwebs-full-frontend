import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/seo';

import { fetchAllPosts, fetchAllServices } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getBaseUrl();
  const [posts, services] = await Promise.all([fetchAllPosts(), fetchAllServices()]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}${PAGES_CONFIG.HOME}`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}${PAGES_CONFIG.ABOUT}`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}${PAGES_CONFIG.SERVICES}`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}${PAGES_CONFIG.CASES}`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}${PAGES_CONFIG.BLOG}`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}${PAGES_CONFIG.CONTACTS}`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}${PAGES_CONFIG.POLICY}`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => Boolean(service.link))
    .map((service) => ({
      url: `${base}${PAGES_CONFIG.SERVICES}/${service.link}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const postPages: MetadataRoute.Sitemap = posts
    .filter((post) => Boolean(post.link))
    .map((post) => ({
      url: `${base}${PAGES_CONFIG.BLOG}/${post.link}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...servicePages, ...postPages];
}
