import { BLOG_CONFIG } from '@/components/shared/blog-block/blog-config';
import YouMaybeInterestingBlock from '@/components/shared/you-maybe-interesting-block/you-maybe-interesting-block';

import ArticleCard from '../../../components/shared/article-card';

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
