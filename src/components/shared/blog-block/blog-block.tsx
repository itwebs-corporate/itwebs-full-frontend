'use client';

import { useMemo, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

import Section from '@/components/ui/section/section';

import BlogCard from './blog-card';
import BlogCardMobile from './blog-card-mobile';
import { BLOG_CONFIG } from './blog-config';
import BlogPagination from './blog-pagination';

// TODO: изменять размеры карточек в карусели blogPage
export default function BlogBlock() {
  const [page, setPage] = useState(0);

  const is3XL = useMediaQuery('(min-width: 1920px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const PAGE_SIZE = useMemo(() => {
    if (is3XL) return 12;
    if (isMobile) return 6;
    return 9;
  }, [is3XL, isMobile]);

  const totalPage = Math.max(1, Math.ceil(BLOG_CONFIG.length / PAGE_SIZE));

  const data = useMemo(() => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return BLOG_CONFIG.slice(start, end);
  }, [page, PAGE_SIZE]);

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
      <BlogPagination page={page} setPage={setPage} totalPage={totalPage} />
    </Section>
  );
}
