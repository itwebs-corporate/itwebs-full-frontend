'use client';

import { useRef } from 'react';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { BlogPostDto } from '@/shared/types/post-dto-types';

import YouMaybeInterestingCard from './you-maybe-interesting-card';

export default function YouMaybeInterestingBlock({ post }: { post: BlogPostDto }) {
  const ref = useRef<HTMLUListElement | null>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  return (
    <Section className="gap-[24px] pb-[clamp(86px,10vw,148px)] sm:gap-[36px]">
      <Typography className="flex w-full max-w-[1194px] px-4" variant="h2">
        <b className="text-primary">Вам</b> может быть интересно
      </Typography>
      <ul
        className="no-scrollbar flex w-full max-w-[1194px] cursor-grab snap-x snap-mandatory scroll-px-4 justify-start gap-[4px] overflow-x-scroll overflow-y-hidden px-4 select-none active:cursor-grabbing sm:cursor-auto sm:scroll-px-0 sm:gap-[20px] sm:overflow-hidden sm:px-0 sm:active:cursor-auto"
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        onPointerCancel={() => {
          const el = ref.current;
          if (!el) return;

          drag.current.down = false;
          el.style.scrollSnapType = '';
          el.style.scrollBehavior = '';
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== 'mouse') return;
          const el = ref.current;
          if (!el) return;

          e.preventDefault();
          el.setPointerCapture(e.pointerId);

          el.style.scrollSnapType = 'none';
          el.style.scrollBehavior = 'auto';

          drag.current.down = true;
          drag.current.moved = false;
          drag.current.x = e.clientX;
          drag.current.left = el.scrollLeft;
        }}
        onPointerMove={(e) => {
          if (!drag.current.down) return;
          const el = ref.current;
          if (!el) return;

          const dx = e.clientX - drag.current.x;
          if (Math.abs(dx) > 3) drag.current.moved = true;

          el.scrollLeft = drag.current.left - dx;
        }}
        ref={ref}
      >
        {post.similar.map((item) => (
          <YouMaybeInterestingCard
            card={item}
            className="h-[clamp(282px,40vw,394px)] w-full max-w-[clamp(332px,60vw,587px)]"
            key={item.title}
          />
        ))}
      </ul>
    </Section>
  );
}
