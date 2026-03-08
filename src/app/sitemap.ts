import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getBaseUrl();

  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cases`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contacts`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/policy`, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
