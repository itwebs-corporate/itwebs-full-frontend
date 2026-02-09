'use client';
import { useRef } from 'react';

import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb-custom';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { BlogPostDto } from '@/shared/types/post-dto-types';

import ArticleAside from './article-aside';

type SectionId = 'title' | 'subtitle' | 'stage1' | 'stage2';

export default function ArticleCard({ article }: { article: BlogPostDto }) {
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    title: null,
    subtitle: null,
    stage1: null,
    stage2: null,
  });

  return (
    <Section className="text-foreground3! sm:mt-[182px]">
      <div className="bg-primary block h-[120px] w-screen sm:hidden" />
      <div className="absolute top-[76px] left-[14px] w-full max-w-[clamp(332px,80vw,890px)] sm:static">
        <BreadcrumbWithCustomSeparator
          color="text-white sm:text-foreground3"
          nestedRoute={article?.name}
        />
      </div>

      <div className="relative mx-auto mt-[24px] w-full sm:mt-0">
        <div className="mx-auto flex w-full max-w-[1198px] flex-col-reverse gap-[24px] sm:grid sm:grid-cols-[minmax(0,890px)_284px] sm:items-start">
          {/* Article card: */}
          <div className="w-full max-w-[clamp(332px,80vw,890px)] rounded-[20px] bg-white">
            {/* <Media
              className="h-[108px] w-full max-w-[clamp(332px,80vw,890px)] sm:h-[290px]"
              image={{
                src: article.imageArticle.src,
                alt: article.imageArticle.alt,
              }}
            /> */}
            <div className="flex flex-col gap-[clamp(24px,2.5vw,36px)] px-[clamp(14px,2.5vw,24px)] pt-[clamp(14px,3vw,36px)] pb-[clamp(24px,2vw,32px)]">
              <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
                <Typography
                  className="text-foreground3 scroll-mt-[120px]"
                  ref={(el) => {
                    sectionRefs.current.title = el;
                  }}
                  variant="h3"
                >
                  {article.name}
                </Typography>
                <Typography variant="p2">{article.description}</Typography>
              </div>
              <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
                <Typography
                  className="scroll-mt-[120px]"
                  ref={(el) => {
                    sectionRefs.current.subtitle = el;
                  }}
                  variant="h4"
                >
                  {article.name}
                </Typography>
                <Typography variant="p2">{article.content}</Typography>
              </div>
              <div className="relative">
                {/* <Media
                  className="h-[clamp(105px,20vw,290px)] w-full max-w-[clamp(304px,90vw,842px)]"
                  image={{
                    src: article.services.link,
                    alt: article.imageArticleSection.alt,
                  }}
                /> */}
                {/* <div className="flex-center font-second-family absolute bottom-[14px] left-[14px] max-h-[35px] rounded-full bg-white px-[12px] py-[8px] text-[12px] sm:px-[24px] sm:py-[12px] sm:text-[16px]">
                  {article.image?.alt}
                </div> */}
              </div>
              <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
                <Typography
                  className="scroll-mt-[120px]"
                  ref={(el) => {
                    sectionRefs.current.stage1 = el;
                  }}
                  variant="h4"
                >
                  {article.name}
                </Typography>
                <Typography variant="p2">{article.name}</Typography>
              </div>
              <div className="flex flex-wrap gap-[clamp(12px,2vw,20px)]">
                <div className="relative">
                  {/* <Media
                    className="h-[clamp(214px,30vw,290px)] w-[clamp(304px,45vw,411px)]"
                    image={{
                      src: article.imageArticleStageWork.src,
                      alt: article.imageArticleStageWork.alt,
                    }}
                  /> */}
                  {/* <div className="flex-center font-second-family absolute bottom-[14px] left-[14px] max-h-[clamp(28px,3.2vw,35px)] rounded-full bg-white px-[clamp(12px,2vw,24px)] py-[clamp(8px,1.2vw,12px)] text-[clamp(12px,1.3vw,16px)] leading-[100%] whitespace-nowrap">
                    {article.image?.alt}
                  </div> */}
                </div>

                <div className="relative">
                  {/* <Media
                    className="h-[clamp(214px,30vw,290px)] w-[clamp(304px,45vw,411px)]"
                    image={{
                      src: article.imageArticleStageWork.src,
                      alt: article.imageArticleStageWork.alt,
                    }}
                  /> */}
                  {/* <div className="flex-center font-second-family absolute bottom-[14px] left-[14px] max-h-[clamp(28px,3.2vw,35px)] rounded-full bg-white px-[clamp(12px,2vw,24px)] py-[clamp(8px,1.2vw,12px)] text-[clamp(12px,1.3vw,16px)] leading-[100%] whitespace-nowrap">
                    {article.image?.alt}
                  </div> */}
                </div>
              </div>
              {/* <div className="flex flex-col gap-[clamp(8px,1.5vw,16px)]">
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
              </div> */}
            </div>
          </div>
          <ArticleAside article={article} sectionRefs={sectionRefs} />
        </div>
      </div>
    </Section>
  );
}
