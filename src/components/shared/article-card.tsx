'use client';
import { RefObject, useRef } from 'react';

import { BlogCard } from '@/components/shared/blog-block/blog-config';
import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb-custom';
import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';
// TODO: найти лучший способ работы с ref
export default function ArticleCard({ article }: { article: BlogCard }) {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const stageWorkRef = useRef(null);
  const stageWork2Ref = useRef(null);
  const arrRef = [
    { ref: titleRef, title: article.title },
    { ref: subTitleRef, title: 'Подзаголовок' },
    { ref: stageWorkRef, title: 'Этапы работы' },
    { ref: stageWork2Ref, title: 'Этапы работы 2' },
  ];

  const scrollToElement = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Section className="text-foreground3! sm:mt-[182px]">
      <div className="bg-primary block h-[120px] w-screen sm:hidden">1</div>
      <div className="absolute top-[76px] left-[14px] overflow-hidden overflow-x-hidden whitespace-nowrap sm:static">
        <BreadcrumbWithCustomSeparator
          color="text-white sm:text-foreground3 "
          nestedRoute={article?.title}
        />
      </div>
      <div className="mt-[24px] flex flex-col items-start gap-[24px] sm:mt-0 sm:flex-row sm:gap-[20px]">
        <div className="order-2 w-[332px] rounded-[20px] bg-white sm:order-1 sm:w-[890px]">
          {article.image && (
            <Media
              className="h-[108px] w-[332px] sm:h-[290px] sm:w-[890px]"
              image={{
                src: '/default/card-article.png',
                alt: article.image?.alt,
              }}
            />
          )}
          <div className="flex flex-col gap-[24px] px-[14px] sm:gap-[36px] sm:px-[24px] sm:pt-[36px] sm:pb-[32px]">
            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
              <Typography className="text-foreground3" ref={titleRef} variant="h3">
                {article.title}
              </Typography>
              <Typography variant="p2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, nemo.
              </Typography>
            </div>
            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
              <Typography ref={subTitleRef} variant="h4">
                SubTitle
              </Typography>
              <Typography variant="p2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, nemo.
              </Typography>
            </div>
            {article.image && (
              <Media
                className="h-[105px] w-[304px] sm:h-[290px] sm:w-[842px]"
                image={{
                  src: '/default/card-article.png',
                  alt: article.image?.alt,
                }}
              />
            )}
            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
              <Typography ref={stageWorkRef} variant="h4">
                Заголовок этапа работы
              </Typography>
              <Typography variant="p2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, nemo.
              </Typography>
            </div>
            <div className="flex flex-col gap-[12px] sm:flex-row sm:gap-[20px]">
              <Media
                className="h-[214px] w-[304px] sm:h-[290px] sm:w-[411px]"
                image={{
                  src: '/default/card-article.png',
                  alt: 'def',
                }}
              />
              <Media
                className="sm:h-[290px] sm:w-[411px]"
                image={{
                  src: '/default/card-article.png',
                  alt: 'def',
                }}
              />
            </div>
            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
              <Typography ref={stageWork2Ref} variant="h4">
                Заголовок этапа работы
              </Typography>
              <Typography variant="p2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, nemo.
              </Typography>
            </div>
          </div>
        </div>
        <div className="order-1 flex flex-col gap-[16px] rounded-[20px] bg-white px-[18px] pt-[20px] pb-[20px] sm:order-2 sm:px-[24px] sm:pb-[24px]">
          <Typography variant="h4">Разделы</Typography>
          <ul className="flex w-[332px] flex-col gap-[18px] sm:w-[284px] sm:gap-[16px]">
            {arrRef.map((el, index) => (
              <li
                className="text-foreground2/50 hover:text-foreground2/80 flex cursor-pointer text-[14px] transition-all"
                key={el.title}
                onClick={() => scrollToElement(el.ref)}
              >
                {index + 1}. {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
