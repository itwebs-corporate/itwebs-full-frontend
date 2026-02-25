import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import { TasksSolveCard } from './what-we-tasks-solve-config';

export default function WhatWeTasksSolveCard({
  item,
  index,
  isActive,
  onHover,
}: {
  item: TasksSolveCard;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <div
      className="flex min-h-[278px] w-[85vw] max-w-[420px] shrink-0 cursor-pointer snap-center flex-col items-start rounded-[12px] bg-white/10 p-[20px] transition-all sm:grid sm:min-h-[142px] sm:w-full sm:max-w-none sm:grid-cols-3 sm:items-center sm:gap-[clamp(16px,2vw,24px)] sm:rounded-[24px] sm:py-3 sm:pr-[clamp(24px,2vw,76px)] sm:pl-[clamp(16px,2vw,32px)] xl:gap-0"
      onMouseEnter={onHover}
    >
      <div
        className={cn(
          'font-second-family flex-center mb-[32px] max-h-[38px] rounded-full border border-white bg-transparent px-[24px] py-[12px] text-[14px] font-bold whitespace-nowrap text-white sm:mb-0 sm:max-h-[clamp(38px,4vh,52px)] sm:w-[177px] sm:px-[clamp(16px,3vw,32px)] sm:py-[clamp(12px,2vw,16px)] sm:text-[clamp(14px,2vw,20px)]',
          isActive ? 'sm:text-primary sm:bg-secondary sm:border-none' : ''
        )}
      >
        Решение {index < 10 && '0'}
        {index}
      </div>
      <Typography
        className="mb-[14px] text-white sm:mb-0 sm:max-w-[clamp(215px,40vw,385px)] sm:text-left!"
        variant="h3"
      >
        {item.title}
      </Typography>
      <Typography className="text-white sm:max-w-[clamp(260px,55vw,511px)]" variant="p2">
        {item.description}
      </Typography>
    </div>
  );
}
