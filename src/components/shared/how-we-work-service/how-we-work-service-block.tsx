'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { ServiceStages } from '@/shared/types/service-dto-types';

import HowWeWorkServiceCard from './how-we-work-service-card';

export default function HowWeWork1cBlock({ stages }: { stages: ServiceStages[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const handlerScroll = (direction: 'prev' | 'next') => {
    const viewport = ref.current;
    const list = listRef.current;
    if (!viewport || !list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length === 0) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    const edgeOffset = 2;
    const isAtStart = viewport.scrollLeft <= edgeOffset;
    const isAtEnd = viewport.scrollLeft >= maxScrollLeft - edgeOffset;

    const currentScrollLeft = viewport.scrollLeft;
    const currentIndex = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(cards[closestIndex].offsetLeft - currentScrollLeft);
      const nextDistance = Math.abs(card.offsetLeft - currentScrollLeft);
      return nextDistance < currentDistance ? index : closestIndex;
    }, 0);

    let targetIndex = currentIndex;
    if (direction === 'next') {
      targetIndex = isAtEnd ? 0 : Math.min(currentIndex + 1, cards.length - 1);
    } else {
      targetIndex = isAtStart ? cards.length - 1 : Math.max(currentIndex - 1, 0);
    }

    viewport.scrollTo({
      left: cards[targetIndex].offsetLeft,
      behavior: 'smooth',
    });
  };
  return (
    <Section className="gap-[48px]">
      <Typography variant="h2">
        <b className="text-primary">Как</b> мы работаем в этом напровлении
      </Typography>
      {stages.length > 0 ? (
        <div className="relative w-full">
          {/* buttons: */}
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
          {/* carousel: */}
          <div
            className="no-scrollbar flex w-full max-w-full min-w-0 justify-center overflow-x-auto overflow-y-hidden sm:justify-start sm:pb-2"
            ref={ref}
          >
            <ul
              className="flex w-max flex-col flex-nowrap gap-[clamp(8px,1.5vw,20px)] sm:flex-row"
              ref={listRef}
            >
              {stages.map((item, index) => (
                <HowWeWorkServiceCard
                  className={cn(
                    'min-h-[240px] w-[332px] shrink-0 sm:h-[359px] sm:w-[435px]',
                    (index + 1) % 2 === 0 ? 'bg-background border-4 border-white' : ''
                  )}
                  index={index}
                  item={item}
                  key={`${item.title} - ${index}`}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <span className="w-[40vw] rounded-full border border-dashed border-white/50 p-4 text-center text-lg text-white/80">
          Пока что здесь пусто
        </span>
      )}
    </Section>
  );
}
