import type { Metadata } from 'next';

import { SITE_URL, SITE_URL_BY } from '@/constants/seo-constants';

import { getDomain } from './get-domain';

type SeoText = {
  title: string;
  description: string;
};

type BuildPageMetadataArgs = {
  path: string;
  ru?: SeoText;
  by?: SeoText;
  type?: 'website';
  images?: NonNullable<Metadata['openGraph']>['images'];
  'key-words'?: Metadata['keywords'];
};

export async function getBaseUrl() {
  const domain = getDomain();
  return domain === 'by' ? SITE_URL_BY : SITE_URL;
}

export async function buildPageMetadata({
  path,
  ru,
  by,
  type = 'website',
  images,
  'key-words': keywords,
}: BuildPageMetadataArgs): Promise<Metadata> {
  const domain = getDomain();
  const baseUrl = await getBaseUrl();

  const seo = domain === 'by' && by ? by : ru;

  const normalizedPath = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  const url = normalizedPath === '/' ? `${baseUrl}/` : `${baseUrl}${normalizedPath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: seo?.title,
    description: seo?.description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      type,
      url,
      images,
    },
  };
}
