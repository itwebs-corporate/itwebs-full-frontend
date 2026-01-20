'use client';
import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

import Section from '@/components/ui/section/section';

import BlogCard from './blog-card';
import BlogCardMobile from './blog-card-mobile';
import { BLOG_CONFIG } from './blog-config';
import BlogPaginationArrow from './blog-pagination-arrow';

export default function BlogBlock() {
  const [page, setPage] = useState(0);

  const is3XL = useMediaQuery('(min-width: 1920px)');
  const isMobile = useMediaQuery('(min-width: 768px)');

  const PAGE_SIZE = useMemo(() => {
    if (is3XL) return 12;
    if (isMobile) return 6;
    return 9;
  }, [is3XL, isMobile]);

  const totalPage = Math.max(1, Math.ceil(BLOG_CONFIG.length / PAGE_SIZE));
  const canPrev = page > 0;
  const canNext = page < totalPage - 1;
  const data = useMemo(() => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return BLOG_CONFIG.slice(start, end);
  }, [page, PAGE_SIZE]);

  const goToPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(nextPage, 0), totalPage - 1);
    setPage(clamped);
  };
  const pagesToRender = useMemo(() => {
    if (totalPage <= 7) {
      return Array.from({ length: totalPage }, (_, i) => i); // все страницы
    }
    const first = 0;
    const second = 1;
    const last = totalPage - 1;
    const beforeLast = totalPage - 2;
    // если мы рядом с началом — показываем первые 4, троеточие, последние 2
    if (page <= 2) {
      return [0, 1, 2, 3, 'dots', beforeLast, last] as const;
    }
    // если мы рядом с концом — показываем первые 2, троеточие, последние 4
    if (page >= totalPage - 3) {
      return [first, second, 'dots', totalPage - 4, totalPage - 3, beforeLast, last] as const;
    }
    // середина — первые 2, троеточие, текущая, троеточие, последние 2
    return [first, second, 'dots', page, 'dots', beforeLast, last] as const;
  }, [page, totalPage]);

  return (
    <Section className="gap-[32px] pb-[clamp(86px,6vw,124px)]">
      <ul className="3xl:grid-cols-4 grid grid-cols-1 gap-[clamp(14px,2vw,20px)] sm:grid-cols-2 2xl:grid-cols-3">
        {data.map((card, index) => {
          return index === 0 ? (
            <BlogCardMobile card={card} key={card.id} />
          ) : (
            <BlogCard card={card} key={card.id} />
          );
        })}
      </ul>
      <div className="3xl:max-w-[1800px] flex w-full max-w-[332px] items-center justify-between sm:max-w-[1000px] 2xl:max-w-[1350px]">
        <div className="flex">
          {pagesToRender.map((item, index) => {
            if (item === 'dots') {
              return (
                <span
                  className="flex-center font-second-family text-foreground3 h-[clamp(32px,3vw,42px)] w-[clamp(32px,3vw,42px)] rounded-full text-[16px]"
                  key={`dots-${index}`}
                >
                  …
                </span>
              );
            }
            const isActivePage = page === index;
            return (
              <button
                className={cn(
                  'flex-center font-second-family h-[clamp(32px,3vw,42px)] w-[clamp(32px,3vw,42px)] rounded-full text-[16px]',
                  isActivePage ? 'bg-primary text-white' : 'text-foreground3 bg-transparent'
                )}
                key={`page-${item}`}
                onClick={() => goToPage(item)}
                type="button"
              >
                {item + 1}
              </button>
            );
          })}
        </div>
        <div className="flex">
          <BlogPaginationArrow disabled={!canPrev} goToPage={goToPage} isLeft={true} page={page} />
          <BlogPaginationArrow disabled={!canNext} goToPage={goToPage} isLeft={false} page={page} />
        </div>
      </div>
    </Section>
  );
}
