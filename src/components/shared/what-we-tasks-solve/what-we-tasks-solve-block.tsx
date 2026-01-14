import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { WHAT_WE_TASKS_SOLVE_CARDS } from './what-we-tasks-solve-config';

export default function WhatWeTasksSolveBlock() {
  return (
    <Section
      className="bg-primary relative gap-[24px] rounded-[24px] py-[clamp(86px,6vw,124px)] sm:gap-[48px]"
      fullScreen={false}
    >
      <Typography className="text-white" variant="h2">
        <b className="opacity-80">Какие</b> задачи мы решаем
      </Typography>
      <Media
        className="absolute top-[55%] left-[48%] hidden h-[225px] w-[225px] sm:flex"
        image={{ src: '/serives-1c-star.svg', alt: 'star' }}
      />
      <ul className="flex w-full max-w-[1800px] flex-col gap-[24px]">
        {WHAT_WE_TASKS_SOLVE_CARDS.map((item) => (
          <li
            className="flex h-[142px] w-full items-center justify-between rounded-[24px] bg-white/10 pr-[76px] pl-[32px]"
            key={item.id}
          >
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
        ))}
      </ul>
    </Section>
  );
}
