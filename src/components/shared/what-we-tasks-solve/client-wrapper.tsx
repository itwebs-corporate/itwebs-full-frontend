'use client';

import { useRef } from 'react';

import WhatWeTasksSolveCard from './what-we-tasks-solve-card';
import WhatWeTasksSolveMobileCard from './what-we-tasks-solve-mobile-card';
import { useMediaQuery } from '../../../hooks/use-media-query';

export default function ClientWrapper({
  desicions,
}: {
  desicions: { id: number; title: string; description: string }[];
}) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLUListElement | null>(null);

  const drag = useRef({
    down: false,
    moved: false,
    startX: 0,
    startLeft: 0,
    pointerId: -1,
  });

  const snapToClosest = () => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('li[data-snap-item="true"]'));
    if (!items.length) return;

    const current = el.scrollLeft;

    let bestLeft = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const it of items) {
      const left = it.offsetLeft;
      const d = Math.abs(left - current);
      if (d < bestDist) {
        bestDist = d;
        bestLeft = left;
      }
    }

    el.scrollTo({ left: bestLeft, behavior: 'smooth' });
  };

  return (
    <ul
      className="no-scrollbar flex w-full cursor-grab touch-pan-x snap-x snap-mandatory scroll-px-4 gap-[8px] overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-4 select-none active:cursor-grabbing sm:max-w-[1800px] sm:cursor-auto sm:snap-none sm:flex-col sm:gap-[24px] sm:overflow-hidden sm:px-0 sm:active:cursor-auto"
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

        drag.current.down = true;
        drag.current.moved = false;
        drag.current.startX = e.clientX;
        drag.current.startLeft = el.scrollLeft;
        drag.current.pointerId = e.pointerId;
        el.style.scrollBehavior = 'auto';
        el.style.scrollSnapType = 'none';

        el.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!drag.current.down) return;
        const el = ref.current;
        if (!el) return;

        const dx = e.clientX - drag.current.startX;

        if (!drag.current.moved) {
          if (Math.abs(dx) < 4) return;
          drag.current.moved = true;
        }

        e.preventDefault();
        el.scrollLeft = drag.current.startLeft - dx;
      }}
      onPointerUp={(e) => {
        if (e.pointerType !== 'mouse') return;
        const el = ref.current;
        if (!el) return;

        drag.current.down = false;

        const pid = drag.current.pointerId;
        if (pid !== -1 && el.hasPointerCapture(pid)) {
          el.releasePointerCapture(pid);
        }
        drag.current.pointerId = -1;

        el.style.scrollSnapType = '';
        el.style.scrollBehavior = 'smooth';

        if (drag.current.moved) snapToClosest();

        window.setTimeout(() => {
          const node = ref.current;
          if (!node) return;
          node.style.scrollBehavior = '';
        }, 250);
      }}
      ref={ref}
    >
      {desicions.map((item, i) => {
        const index = i + 1;
        return (
          <li className="shrink-0 snap-start" data-snap-item="true" key={`${item.id}-${index}`}>
            {isMobile ? (
              <WhatWeTasksSolveMobileCard index={index} item={item} />
            ) : (
              <WhatWeTasksSolveCard index={index} item={item} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
