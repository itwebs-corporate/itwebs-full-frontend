import { BLOG_CONFIG } from '@/components/shared/blog-block/blog-config';
import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb-custom';
import Section from '@/components/ui/section/section';

import ArticleCard from './article-card';
type Props = {
  params: Promise<{ name: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const nameArticle = (await params).name;

  const findArticle = BLOG_CONFIG.find((item) => item.href?.replace('/blog/', '') === nameArticle);
  return (
    <Section className="bg-primary" fullScreen={false}>
      <BreadcrumbWithCustomSeparator
        className="text-foreground3!"
        nestedRoute={findArticle?.title}
      />
      {findArticle && <ArticleCard article={findArticle} />}
    </Section>
  );
}
