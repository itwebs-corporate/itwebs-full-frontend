import { Metadata } from 'next';

import { BLOG_CONFIG } from '@/components/shared/blog-block/blog-config';
import YouMaybeInterestingBlock from '@/components/shared/you-maybe-interesting-block/you-maybe-interesting-block';

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo-constants';

import ArticleCard from '../../../components/shared/article-card/article-card';

function getArticleBySlug(slug: string) {
  return BLOG_CONFIG.find((item) => item.href?.replace('/blog/', '') === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).name;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: '404',
      description: 'Статья не найдена.',
      robots: { index: false, follow: false },
    };
  }
  const title = article.title ?? SITE_NAME;
  const description = article.description ?? SITE_DESCRIPTION;
  return {
    title,
    description,
    robots: { index: true, follow: true },
  };
}
type Props = {
  params: Promise<{ name: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const nameArticle = (await params).name;

  const findArticle = BLOG_CONFIG.find((item) => item.href?.replace('/blog/', '') === nameArticle);
  return (
    <>
      {findArticle && <ArticleCard article={findArticle} />}
      <YouMaybeInterestingBlock />
    </>
  );
}
