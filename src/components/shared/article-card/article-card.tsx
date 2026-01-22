'use client';
import { useRef } from 'react';

import { BlogCard } from '@/components/shared/blog-block/blog-config';
import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb-custom';
import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import ArticleAside from './article-aside';

type SectionId = 'title' | 'subtitle' | 'stage1' | 'stage2';

export default function ArticleCard({ article }: { article: BlogCard }) {
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    title: null,
    subtitle: null,
    stage1: null,
    stage2: null,
  });

  return (
    <Section className="text-foreground3! sm:mt-[182px]">
      <div className="bg-primary block h-[120px] w-screen sm:hidden" />
      <div className="absolute top-[76px] left-[14px] w-full max-w-[clamp(332px,80vw,890px)] overflow-hidden overflow-x-hidden whitespace-nowrap sm:static">
        <BreadcrumbWithCustomSeparator
          color="text-white sm:text-foreground3 "
          nestedRoute={article?.title}
        />
      </div>

      <div className="relative mx-auto mt-[24px] w-full max-w-[clamp(332px,80vw,890px)] sm:mt-0">
        <ArticleAside article={article} sectionRefs={sectionRefs} />
        {/* Article card: */}
        <div className="mt-[24px] w-full max-w-[clamp(332px,80vw,890px)] rounded-[20px] bg-white">
          <Media
            className="h-[108px] w-full max-w-[clamp(332px,80vw,890px)] sm:h-[290px]"
            image={{
              src: article.imageArticle.src,
              alt: article.imageArticle.alt,
            }}
          />
          <div className="flex flex-col gap-[clamp(24px,2.5vw,36px)] px-[clamp(14px,2.5vw,24px)] pt-[clamp(14px,3vw,36px)] pb-[clamp(24px,2vw,32px)]">
            <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
              <Typography
                className="text-foreground3 scroll-mt-[120px]"
                ref={(el) => {
                  sectionRefs.current.title = el;
                }}
                variant="h3"
              >
                {article.title}
              </Typography>
              <Typography variant="p2">{article.textArticle}</Typography>
            </div>
            <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
              <Typography
                className="scroll-mt-[120px]"
                ref={(el) => {
                  sectionRefs.current.subtitle = el;
                }}
                variant="h4"
              >
                {article.subTitle}
              </Typography>
              <Typography variant="p2">{article.textSubArticle}</Typography>
            </div>
            <Media
              className="h-[clamp(105px,20vw,290px)] w-full max-w-[clamp(304px,90vw,842px)]"
              image={{
                src: article.imageArticleSection.src,
                alt: article.imageArticleSection.alt,
              }}
            />
            <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
              <Typography
                className="scroll-mt-[120px]"
                ref={(el) => {
                  sectionRefs.current.stage1 = el;
                }}
                variant="h4"
              >
                {article.stageWork}
              </Typography>
              <Typography variant="p2">{article.textStageWork}</Typography>
            </div>
            <div className="flex flex-col gap-[clamp(12px,2vw,20px)] sm:flex-row">
              <Media
                className="h-[clamp(214px,30vw,290px)] w-[clamp(304px,45vw,411px)]"
                image={{
                  src: article.imageArticleStageWork.src,
                  alt: article.imageArticleStageWork.alt,
                }}
              />
              <Media
                className="h-[clamp(214px,30vw,290px)] w-[clamp(304px,45vw,411px)]"
                image={{
                  src: article.imageArticleStageWork.src,
                  alt: article.imageArticleStageWork.alt,
                }}
              />
            </div>
            <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
              <Typography
                className="scroll-mt-[120px]"
                ref={(el) => {
                  sectionRefs.current.stage2 = el;
                }}
                variant="h4"
              >
                {article.stageWork}
              </Typography>
              <Typography variant="p2">{article.textStageWorkSecond}</Typography>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
