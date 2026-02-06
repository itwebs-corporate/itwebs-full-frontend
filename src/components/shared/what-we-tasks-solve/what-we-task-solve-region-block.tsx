import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { SERVICES_SECTIONS } from '@/config/services-sections';

import WhatWeTaskSolveRegionCard from './what-we-task-solve-region-card';

export default function WhatWeTaskSolveRegionBlock() {
  return (
    <Section className="bg-primary gap-[clamp(24px,3.2vw,48px)] rounded-[24px] py-[clamp(86px,6vw,124px)]">
      <Typography className="text-white" variant="h2">
        <b className="text-white/80">Какие задачи</b> мы решаем
      </Typography>
      <ul className="flex flex-wrap justify-center gap-[clamp(14px,2vw,20px)]">
        {SERVICES_SECTIONS.map((item) => (
          <WhatWeTaskSolveRegionCard item={item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
}
