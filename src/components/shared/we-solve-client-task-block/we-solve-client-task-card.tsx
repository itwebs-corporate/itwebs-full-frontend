'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { Case } from './cases-config';

export default function WeSolveClientTaskCard({ item }: { item: Case }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="xxs:flex-row text-foreground2 flex w-full flex-col rounded-[clamp(12px,2vw,24px)]">
      <div className="flex-center shrink-0 rounded-[clamp(12px,2vw,24px)] bg-[#F7F7F7] p-[14px]">
        <Media
          className="h-[clamp(142px,19vw,370px)] w-[clamp(284px,38vw,730px)]"
          image={{ src: item.img, alt: item.title }}
        />
      </div>

      <div className="xxs:p-[32px] xxs:pr-[36px] flex flex-col justify-between gap-[clamp(16px,1.5vw,32px)] rounded-[clamp(12px,2vw,24px)] bg-white px-[14px] py-[24px]">
        <div className="xxs:gap-[16px] flex flex-col gap-[10px]">
          <Typography className="text-foreground2 text-[clamp(24px,2.5vw,48px)]" variant="h3">
            {item.title}
          </Typography>
          <Typography className="opacity-80" variant="p2">
            {item.description}
          </Typography>
        </div>
        <div className="xxs:gap-[32px] xxs:flex-row flex flex-col gap-[16px]">
          <div className="flex flex-col">
            <Typography
              className="text-foreground2 mb-[clamp(8px,0.6vw,12px)] text-[clamp(16px,1.25vw,24px)]"
              variant="h3"
            >
              Задача
            </Typography>
            <Typography
              className={cn(isOpen ? 'line-clamp-none' : 'line-clamp-2', 'opacity-80')}
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
              className={cn(isOpen ? 'line-clamp-none' : 'line-clamp-2', 'opacity-80')}
              variant="p2"
            >
              {item.solve}
            </Typography>
          </div>
        </div>

        <Button
          className="xxs:h-[60px] xxs:max-w-[283px] h-[46px] w-full max-w-[272px]"
          onClick={toggleOpen}
        >
          {isOpen ? 'Скрыть' : 'Показать полностью'}
        </Button>
      </div>
    </div>
  );
}
