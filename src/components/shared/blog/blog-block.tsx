'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

import Section from '@/components/ui/section/section';

import { Post } from '@/shared/types/post-dto-types';

import BlogCard from './blog-card';
import BlogPagination from './blog-pagination';

export default function BlogBlock({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(0);

  const is3XL = useMediaQuery('(min-width: 1920px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const PAGE_SIZE = useMemo(() => {
    if (is3XL) return 12;
    if (isMobile) return 6;
    return 9;
  }, [is3XL, isMobile]);

  const totalPage = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));

  const data = useMemo(() => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return posts.slice(start, end);
  }, [page, posts, PAGE_SIZE]);

  return (
    <Section className="gap-[32px] pb-[clamp(86px,6vw,124px)]">
      <ul
        className={cn(
          data.length > 0
            ? '3xl:grid-cols-4 grid grid-cols-1 gap-[clamp(14px,2vw,20px)] sm:grid-cols-2 2xl:grid-cols-3'
            : ''
        )}
      >
        {data.length > 0 ? (
          data.map((card) => <BlogCard card={card} key={card.name} />)
        ) : (
          <li className="text-foreground3/50 w-[40vw] rounded-full border border-dashed border-gray-400 p-4 text-center text-lg">
            Посты не найдены
          </li>
        )}
      </ul>
      {data.length > 0 && <BlogPagination page={page} setPage={setPage} totalPage={totalPage} />}
    </Section>
  );
}
