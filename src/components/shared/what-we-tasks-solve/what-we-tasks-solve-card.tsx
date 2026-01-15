import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import { TasksSolveCard } from './what-we-tasks-solve-config';

export default function WhatWeTasksSolveCard({ item }: { item: TasksSolveCard }) {
  return (
    <li className="flex h-[142px] w-full items-center justify-between rounded-[24px] bg-white/10 pr-[76px] pl-[32px]">
      <div
        className={cn(
          'font-second-family flex-center max-h-[52px] rounded-full px-[32px] py-[16px] text-[20px] font-bold',
          item.id === 1
            ? 'text-primary bg-secondary border-none'
            : 'border border-white bg-transparent text-white'
        )}
      >
        Решение 0{item.id}
      </div>
      <Typography className="max-w-[385px] text-white" variant="h3">
        {item.title}
      </Typography>
      <Typography className="max-w-[511px] text-white" variant="p2">
        {item.description}
      </Typography>
    </li>
  );
}
