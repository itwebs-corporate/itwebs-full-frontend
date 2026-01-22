'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { HOW_WE_WORK_1C_CARDS } from './how-we-work-1c-config';
import HowWeWorkBlockCard from '../how-we-work/how-we-work-block-card';

export default function HowWeWork1cBlock() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handlerScroll = (direction: 'prev' | 'next') => {
    const el = ref.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.9);
    const shift = direction === 'next' ? step : -step;
    el.scrollBy({ left: shift, behavior: 'smooth' });
  };

  return (
    <Section className="gap-[48px]">
      <Typography variant="h2">
        <b className="text-primary">Как</b> мы работаем в этом напровлении
      </Typography>
      <div className="relative w-full">
        <div
          className="border-primary absolute top-1/2 left-[-32px] z-20 hidden h-[64px] w-[64px] items-center justify-center rounded-full border bg-white sm:flex"
          onClick={() => handlerScroll('prev')}
        >
          <Image alt="arrow" height={20} src="/arrow/arrow-left.svg" width={24} />
        </div>
        <div
          className="border-primary absolute top-1/2 right-[-32px] z-20 hidden h-[64px] w-[64px] items-center justify-center rounded-full border bg-white sm:flex"
          onClick={() => handlerScroll('next')}
        >
          <Image alt="arrow" height={20} src="/arrow/arrow-right.svg" width={24} />
        </div>
        <div
          className="no-scrollbar flex w-full max-w-full min-w-0 justify-center overflow-x-auto overflow-y-hidden sm:justify-start sm:pb-2"
          ref={ref}
        >
          <ul className="flex w-max flex-col flex-nowrap gap-[clamp(8px,1.5vw,20px)] sm:flex-row">
            {HOW_WE_WORK_1C_CARDS.map((item, index) => (
              <HowWeWorkBlockCard
                className={cn(
                  'h-[240px] w-[332px] shrink-0 sm:h-[359px] sm:w-[435px]',
                  (index + 1) % 2 === 0 ? 'bg-background border-4 border-white' : ''
                )}
                classNameNumber="sm:w-[64px] sm:h-[64px] w-[48px] h-[48px] mb-[24px] sm:mb-[64px]"
                item={item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
