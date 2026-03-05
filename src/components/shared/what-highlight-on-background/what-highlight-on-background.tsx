import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { FEATURE_CARDS } from './what-highlight-on-background-config';

export default function WhatHighlightOnBackground() {
  return (
    <Section className="gap-[clamp(32px,2vw,48px)] pb-[clamp(86px,6vw,124px)]">
      <Typography variant="h2">
        <b className="text-primary">Что выделяет нас</b> на фоне других компаний
      </Typography>
      <ul className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3">
        {FEATURE_CARDS.map((card) => (
          <li
            className="flex min-h-[244px] w-full max-w-[332px] flex-col rounded-[12px] bg-white px-[14px] py-[20px] sm:min-h-[236px] sm:max-w-[587px] sm:rounded-[24px] sm:p-[20px]"
            key={card.id}
          >
            <div className="flex-center bg-background mb-5 h-[86px] w-[86px] rounded-full">
              <Media className="h-[48px] w-[48px]" image={{ src: card.image, alt: card.id }} />
            </div>

            <Typography className="pb-[12px] sm:pb-[14px]" variant="h3">
              {card.title}
            </Typography>
            <Typography className="text-[16px]" variant="p2">
              {card.description}
            </Typography>
          </li>
        ))}
      </ul>
    </Section>
  );
}
