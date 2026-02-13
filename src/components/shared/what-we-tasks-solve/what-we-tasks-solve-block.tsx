import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import ClientWrapper from './client-wrapper';

export default function WhatWeTasksSolveBlock({
  desicions,
}: {
  desicions: { id: number; title: string; description: string }[];
}) {
  return (
    <Section className="bg-primary relative gap-[24px] rounded-[24px] py-[clamp(86px,6vw,124px)] sm:gap-[48px]">
      <Typography className="text-white" variant="h2">
        <b className="opacity-80">Какие</b> задачи мы решаем
      </Typography>
      <Media
        className="1xl:flex absolute top-[56%] left-[48%] hidden h-[clamp(125px,7vw,225px)] w-[clamp(125px,7vw,225px)]"
        image={{ src: '/serives-1c-star.svg', alt: 'star' }}
      />
      <ClientWrapper desicions={desicions} />
    </Section>
  );
}
