import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import PolicyBlock from '@/components/shared/policy/policy-block';

import { PAGES_CONFIG } from '@/config/pages-config';
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...(await buildPageMetadata({
      path: PAGES_CONFIG.POLICY,
      ru: {
        title: 'Политика пользования сайтом',
        description: 'Политика',
      },
    })),
    robots: { index: true, follow: true },
  };
}

export default function PolicyPage() {
  return <PolicyBlock />;
}
