'use client';

import { useEffect, useRef, useState } from 'react';

import WhatWeTasksSolveCard from './what-we-tasks-solve-card';

export default function ClientWrapper({
  desicions,
}: {
  desicions: { id: number; title: string; description: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const ref = useRef<HTMLUListElement | null>(null);

  const drag = useRef({
    down: false,
    moved: false,
    startX: 0,
    startLeft: 0,
    pointerId: -1,
  });

  const rafId = useRef<number | null>(null);
  const pendingLeft = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <ul
      className="no-scrollbar flex w-full cursor-grab touch-pan-x snap-x snap-mandatory scroll-px-4 items-stretch gap-[8px] overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-4 select-none active:cursor-grabbing sm:max-w-[1800px] sm:cursor-auto sm:snap-none sm:flex-col sm:gap-[24px] sm:overflow-hidden sm:px-0 sm:active:cursor-auto"
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

        if (rafId.current !== null) {
          window.cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
        pendingLeft.current = null;
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

        pendingLeft.current = drag.current.startLeft - dx;

        if (rafId.current !== null) return;

        rafId.current = window.requestAnimationFrame(() => {
          const node = ref.current;
          if (!node) {
            rafId.current = null;
            return;
          }

          if (pendingLeft.current !== null) {
            node.scrollLeft = pendingLeft.current;
          }
          rafId.current = null;
        });
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

        if (rafId.current !== null) {
          window.cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
        pendingLeft.current = null;

        el.style.scrollSnapType = '';
        el.style.scrollBehavior = 'smooth';

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
            <WhatWeTasksSolveCard
              index={index}
              isActive={activeIndex === index}
              item={item}
              onHover={() => setActiveIndex(index)}
            />
          </li>
        );
      })}
    </ul>
  );
}
