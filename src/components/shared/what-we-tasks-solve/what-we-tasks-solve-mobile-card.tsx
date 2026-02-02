import Typography from '@/components/ui/typography/typography';

import { TasksSolveCard } from './what-we-tasks-solve-config';

export default function WhatWeTasksSolveMobileCard({ item }: { item: TasksSolveCard }) {
  return (
    <div className="flex min-h-[278px] w-[85vw] max-w-[420px] shrink-0 snap-center flex-col items-start rounded-[12px] bg-white/10 p-[20px]">
      <div className="font-second-family flex-center mb-[32px] max-h-[38px] rounded-full border border-white bg-transparent px-[24px] py-[12px] text-[14px] font-bold text-white">
        Решение 0{item.id}
      </div>
      <Typography className="mb-[14px] text-white" variant="h3">
        {item.title}
      </Typography>
      <Typography className="text-white" variant="p2">
        {item.description}
      </Typography>
    </div>
  );
}
