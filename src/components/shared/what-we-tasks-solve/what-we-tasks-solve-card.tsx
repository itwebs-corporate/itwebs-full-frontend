import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import { TasksSolveCard } from './what-we-tasks-solve-config';

export default function WhatWeTasksSolveCard({ item }: { item: TasksSolveCard }) {
  return (
    <li className="flex h-[142px] w-full items-center gap-[clamp(16px,2vw,24px)] rounded-[24px] bg-white/10 pr-[clamp(24px,2vw,76px)] pl-[clamp(16px,2vw,32px)] xl:justify-between xl:gap-0">
      <div
        className={cn(
          'font-second-family flex-center max-h-[clamp(38px,4vh,52px)] rounded-full px-[clamp(16px,3vw,32px)] py-[clamp(12px,2vw,16px)] text-[clamp(14px,2vw,20px)] font-bold whitespace-nowrap',
          item.id === 1
            ? 'text-primary bg-secondary border-none'
            : 'border border-white bg-transparent text-white'
        )}
      >
        Решение 0{item.id}
      </div>
      <Typography className="max-w-[clamp(215px,40vw,385px)] text-white" variant="h3">
        {item.title}
      </Typography>
      <Typography className="max-w-[clamp(260px,55vw,511px)] text-white" variant="p2">
        {item.description}
      </Typography>
    </li>
  );
}
