'use client';
import { useMemo } from 'react';

import { cn } from '@/lib/utils';

import BlogPaginationArrow from './blog-pagination-arrow';

export default function BlogPagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: (arg: number) => void;
  totalPage: number;
}) {
  const canPrev = page > 0;
  const canNext = page < totalPage - 1;
  const goToPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(nextPage, 0), totalPage - 1);
    setPage(clamped);
  };

  const pagesToRender = useMemo(() => {
    if (totalPage <= 7) {
      return Array.from({ length: totalPage }, (_, i) => i);
    }
    const first = 0;
    const second = 1;
    const last = totalPage - 1;
    const beforeLast = totalPage - 2;
    if (page <= 2) {
      return [0, 1, 2, 3, 'dots', beforeLast, last] as const;
    }
    if (page >= totalPage - 3) {
      return [first, second, 'dots', totalPage - 4, totalPage - 3, beforeLast, last] as const;
    }
    return [first, second, 'dots', page, 'dots', beforeLast, last] as const;
  }, [page, totalPage]);
  return (
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
          const isActivePage = page === item;
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
  );
}
