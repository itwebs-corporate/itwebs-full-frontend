import { TextParsed } from '@/components/shared/article-card/text-parsed';
import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb/breadcrumb-custom';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { BlogPostDto } from '@/shared/types/post-dto-types';

import ArticleAside from './article-aside';

export default function ArticleCard({ article }: { article: BlogPostDto }) {
  return (
    <Section className="text-foreground3! sm:mt-[clamp(60px,10vw,182px)]">
      <div className="bg-primary block h-[120px] w-screen sm:hidden" />
      <div className="absolute top-[76px] left-[14px] w-full max-w-[clamp(332px,80vw,890px)] sm:static">
        <BreadcrumbWithCustomSeparator
          color="text-white sm:text-foreground3"
          lastBreadcrumb={article?.metaTitle}
        />
      </div>

      <div className="relative mx-auto mt-[24px] w-full sm:mt-0">
        <div className="mx-auto flex w-full max-w-[1198px] flex-col-reverse items-center gap-[24px] sm:grid sm:grid-cols-[minmax(0,890px)_284px] sm:items-start">
          {/* Article card: */}
          <div className="w-full max-w-[clamp(332px,80vw,890px)] rounded-[20px] bg-white">
            <div className="flex flex-col gap-[clamp(24px,2.5vw,36px)] px-[clamp(14px,2.5vw,24px)] pt-[clamp(14px,3vw,36px)] pb-[clamp(24px,2vw,32px)]">
              <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
                <Typography
                  className="text-foreground3 cursor-default scroll-mt-[120px]"
                  id="title"
                  variant="h3"
                >
                  {article.h1}
                </Typography>
                <Typography id="subtitle" variant="p2">
                  {article.h2}
                </Typography>
              </div>
              <TextParsed safeHtml={article.content} />
            </div>
          </div>
          <ArticleAside html={article.content} />
        </div>
      </div>
    </Section>
  );
}
