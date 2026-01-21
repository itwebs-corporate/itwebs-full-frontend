'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { Case } from './cases-config';

export default function WeSolveClientTaskCard({ item }: { item: Case }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="text-foreground2 flex w-full flex-col rounded-[clamp(12px,2vw,24px)] sm:flex-row">
      <div className="flex-center shrink-0 rounded-[clamp(12px,2vw,24px)] bg-[#F7F7F7] p-[14px]">
        <Media
          className="h-[clamp(142px,14vw,370px)] w-[clamp(284px,28vw,730px)]"
          image={{ src: item.img, alt: item.title }}
        />
      </div>

      <div className="flex flex-col justify-between gap-[clamp(16px,1.5vw,32px)] rounded-[clamp(12px,2vw,24px)] bg-white px-[14px] py-[24px] sm:p-[32px] sm:pr-[36px]">
        <div className="flex flex-col gap-[10px] sm:gap-[16px]">
          <Typography className="text-foreground2 text-[clamp(24px,2.5vw,48px)]" variant="h3">
            {item.title}
          </Typography>
          <Typography className="opacity-80" variant="p2">
            {item.description}
          </Typography>
        </div>
        <div className="flex flex-col gap-[16px] sm:flex-row sm:gap-[32px]">
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
          className="h-[46px] w-full max-w-[272px] sm:h-[60px] sm:max-w-[283px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Скрыть' : 'Показать полностью'}
        </Button>
      </div>
    </div>
  );
}
