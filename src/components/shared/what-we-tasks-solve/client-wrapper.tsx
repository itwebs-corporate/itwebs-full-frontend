'use client';

import { useRef } from 'react';

import WhatWeTasksSolveCard from './what-we-tasks-solve-card';
import { WHAT_WE_TASKS_SOLVE_CARDS } from './what-we-tasks-solve-config';
import WhatWeTasksSolveMobileCard from './what-we-tasks-solve-mobile-card';
import { useMediaQuery } from '../../../hooks/use-media-query';

export default function ClientWrapper() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLUListElement | null>(null);

  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  return (
    <ul
      className="no-scrollbar flex w-full cursor-grab snap-x snap-mandatory scroll-px-4 gap-[8px] overflow-x-scroll overflow-y-hidden px-4 select-none active:cursor-grabbing sm:max-w-[1800px] sm:cursor-auto sm:scroll-px-0 sm:flex-col sm:gap-[24px] sm:overflow-hidden sm:px-0 sm:active:cursor-auto"
      onClickCapture={(e) => {
        if (drag.current.moved) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onPointerCancel={() => {
        const el = ref.current;
        if (!el) return;

        drag.current.down = false;
        el.style.scrollSnapType = '';
        el.style.scrollBehavior = '';
      }}
      onPointerDown={(e) => {
        if (e.pointerType !== 'mouse') return;
        const el = ref.current;
        if (!el) return;

        e.preventDefault();
        el.setPointerCapture(e.pointerId);

        el.style.scrollSnapType = 'none';
        el.style.scrollBehavior = 'auto';

        drag.current.down = true;
        drag.current.moved = false;
        drag.current.x = e.clientX;
        drag.current.left = el.scrollLeft;
      }}
      onPointerMove={(e) => {
        if (!drag.current.down) return;
        const el = ref.current;
        if (!el) return;

        const dx = e.clientX - drag.current.x;
        if (Math.abs(dx) > 3) drag.current.moved = true;

        el.scrollLeft = drag.current.left - dx;
      }}
      ref={ref}
    >
      {WHAT_WE_TASKS_SOLVE_CARDS.map((item) =>
        isMobile ? (
          <WhatWeTasksSolveMobileCard item={item} key={item.id} />
        ) : (
          <WhatWeTasksSolveCard item={item} key={item.id} />
        )
      )}
    </ul>
  );
}
