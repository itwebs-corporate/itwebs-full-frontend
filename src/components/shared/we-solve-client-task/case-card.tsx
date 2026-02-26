'use client';
import { useEffect, useRef, useState } from 'react';

import { hasMoreTwoLines } from '@/lib/has-more-two-lines';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { Case } from '@/shared/types/service-dto-types';

export default function CaseCard({ item }: { item: Case }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [canToggle, setCanToggle] = useState<boolean>(false);

  const taskRef = useRef<HTMLParagraphElement | null>(null);
  const decisionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el1 = taskRef.current;
    const el2 = decisionRef.current;

    if (!el1 || !el2) return;

    let rafId: number | null = null;

    const recalcOverflow = () => {
      const overflow = hasMoreTwoLines(el1) || hasMoreTwoLines(el2);

      setCanToggle(overflow);
      setIsOpen((prev) => (overflow ? prev : false));
    };

    const observer = new ResizeObserver(() => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }

      rafId = window.requestAnimationFrame(() => {
        recalcOverflow();
        rafId = null;
      });
    });

    observer.observe(el1);
    observer.observe(el2);
    recalcOverflow();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, [item.task, item.decision]);

  return (
    <li className="text-foreground2 flex w-full flex-col rounded-[clamp(12px,2vw,24px)] sm:flex-row">
      <div className="flex-center shrink-0 rounded-[clamp(12px,2vw,24px)] bg-[#F7F7F7] p-[14px]">
        <Media
          className="h-[clamp(142px,14vw,370px)] w-[clamp(284px,28vw,730px)]"
          image={{
            src: item.image ?? '/default/cases-default.png',
            alt: item.name ?? 'case image',
          }}
        />
      </div>

      <div className="flex flex-col justify-between gap-[clamp(16px,1.5vw,32px)] rounded-[clamp(12px,2vw,24px)] bg-white px-[14px] py-[24px] sm:p-[32px] sm:pr-[36px]">
        <div className="flex flex-col gap-[10px] sm:gap-[16px]">
          <Typography className="text-foreground2 text-[clamp(24px,2.5vw,48px)]" variant="h3">
            {item.name}
          </Typography>
          <Typography className="wrap:anywhere" variant="p2">
            {item.description}
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[32px]">
          <div className="flex flex-col">
            <Typography
              className="text-foreground2 mb-[clamp(8px,0.6vw,12px)] text-[clamp(16px,1.25vw,24px)]"
              variant="h3"
            >
              Задача
            </Typography>
            <Typography
              className={cn(
                'overflow-hidden transition-all',
                isOpen ? 'max-h-[1000px]' : 'line-clamp-2 max-h-[3em]',
                'wrap:anywhere opacity-80'
              )}
              ref={taskRef}
              variant="p2"
            >
              {item.task}
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography
              className="text-foreground2 mb-[clamp(8px,0.6vw,12px)] text-[clamp(16px,1.25vw,24px)]"
              variant="h3"
            >
              Решение
            </Typography>
            <Typography
              className={cn(
                'overflow-hidden transition-all',
                isOpen ? 'max-h-[500px]' : 'line-clamp-2 max-h-[44px]',
                'wrap:anywhere opacity-80'
              )}
              ref={decisionRef}
              variant="p2"
            >
              {item.decision}
            </Typography>
          </div>
        </div>

        {canToggle && (
          <div className="text-center">
            <Button
              className="h-[46px] w-full max-w-[272px] sm:h-[60px] sm:max-w-[283px]"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? 'Скрыть' : 'Показать полностью'}
            </Button>
          </div>
        )}
      </div>
    </li>
  );
}
