'use client';
import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';

import BlogCard from './blog-card';
import BlogCardMobile from './blog-card-mobile';
import { BLOG_CONFIG } from './blog-config';
// TODO: подправить Hero assets
// TODO: сделать пагинацию, сделать карточки адаптивными, сделать так чтобы карточки не выходили за пределы контейнера
// TODO: написать Серёге
const LIST_SIZE = 9;

export default function BlogBlock() {
  const [list, setList] = useState(0);
  const totalLists = Math.max(1, Math.ceil(BLOG_CONFIG.length / LIST_SIZE));
  const canPrev = list > 0;
  const canNext = list < totalLists - 1;

  const data = useMemo(() => {
    const start = list * LIST_SIZE;
    const end = start + LIST_SIZE;
    return BLOG_CONFIG.slice(start, end);
  }, [list]);

  const goToList = (nextList: number) => {
    const clamped = Math.min(Math.max(nextList, 0), totalLists - 1);
    setList(clamped);
  };

  return (
    <Section className="gap-[32px]">
      <ul className="grid grid-cols-1 gap-[clamp(14px,2vw,20px)] sm:grid-cols-3 2xl:grid-cols-4">
        {data.map((card, index) => {
          return index === 0 ? (
            <BlogCardMobile card={card} key={card.id} />
          ) : (
            <BlogCard card={card} key={card.id} />
          );
        })}
      </ul>
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          {Array.from({ length: Math.ceil(BLOG_CONFIG.length / LIST_SIZE) }, (_, i) => i).map(
            (item, index) => {
              const isActiveList = list === index;
              return (
                <button
                  className={cn(
                    'flex-center font-second-family h-[clamp(32px,3vw,42px)] w-[clamp(32px,3vw,42px)] rounded-full text-[16px]',
                    isActiveList ? 'bg-primary text-white' : 'text-foreground3 bg-transparent'
                  )}
                  key={item}
                  onClick={() => goToList(index)}
                  type="button"
                >
                  {item + 1}
                </button>
              );
            }
          )}
        </div>
        <div className="flex">
          <button
            className={cn(
              'flex-center h-[42px] w-[42px] rounded-full border border-[#dce2fe] bg-white transition-all',
              canPrev ? 'hover:opacity-80' : 'cursor-not-allowed opacity-40'
            )}
            disabled={!canPrev}
            onClick={() => goToList(list - 1)}
            type="button"
          >
            <Media
              className="flex-center h-[24px] w-[12px]"
              image={{ src: '/arrow/arrow-left-without-stick.svg', alt: 'arrow-left' }}
            />
          </button>
          <button
            className={cn(
              'flex-center h-[42px] w-[42px] rounded-full border border-[#dce2fe] bg-white transition-all',
              canNext ? 'hover:opacity-80' : 'cursor-not-allowed opacity-40'
            )}
            disabled={!canNext}
            onClick={() => goToList(list + 1)}
            type="button"
          >
            <Media
              className="flex-center h-[24px] w-[12px]"
              image={{ src: '/arrow/arrow-right-without-stick.svg', alt: 'arrow-right' }}
            />
          </button>
        </div>
      </div>
    </Section>
  );
}
