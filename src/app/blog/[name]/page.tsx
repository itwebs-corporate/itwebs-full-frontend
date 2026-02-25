import type { Metadata } from 'next';

import YouMaybeInterestingBlock from '@/components/shared/you-maybe-interesting/you-maybe-interesting-block';

import { fetchPostByLink } from '@/app/api/server';
import { SITE_IMAGES } from '@/constants/seo-constants';

import ArticleCard from '../../../components/shared/article-card/article-card';

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  try {
    const post = await fetchPostByLink(name);

    const title = post?.metaTitle;
    const description = post?.metaDescription;

    return {
      title,
      description,
      alternates: {
        canonical: `/blog/${name}`,
      },
      openGraph: {
        title,
        description,
        images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
        type: 'article',
        url: `/blog/${name}`,
      },
    };
  } catch {
    return {
      title: 'Статья',
      description: '',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  const namePost = (await params).name;
  const post = await fetchPostByLink(namePost);

  return (
    <>
      <ArticleCard article={post} />
      <YouMaybeInterestingBlock similar={post.similar} />
    </>
  );
}
