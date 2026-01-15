'use client';
import { useMediaQuery } from './use-media-query';
import WhatWeTasksSolveCard from './what-we-tasks-solve-card';
import { WHAT_WE_TASKS_SOLVE_CARDS } from './what-we-tasks-solve-config';
import WhatWeTasksSolveMobileCard from './what-we-tasks-solve-mobile-card';

export default function ClientWrapper() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <ul className="no-scrollbar flex w-full snap-x snap-mandatory scroll-px-4 gap-[8px] overflow-x-scroll overflow-y-hidden px-4 sm:max-w-[1800px] sm:scroll-px-0 sm:flex-col sm:gap-[24px] sm:overflow-hidden sm:px-0">
      {WHAT_WE_TASKS_SOLVE_CARDS.map((item) => {
        return isMobile ? (
          <WhatWeTasksSolveMobileCard item={item} key={item.id} />
        ) : (
          <WhatWeTasksSolveCard item={item} key={item.id} />
        );
      })}
    </ul>
  );
}
