import Image from 'next/image';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import HowWeWorkBlockCard from './how-we-work-block-card';
import { WORK_STEPS_CONFIG } from './how-we-work-config';

export default function HowWeWorkBlock() {
  return (
    <Section className="bg-primary py-container relative z-10 rounded-[48px]">
      <Image alt="bg" className="z-0 opacity-10" fill src="/how-we-work-background.svg" />
      <div className="absolute top-0 z-10 h-full w-full bg-linear-to-b from-[#183FF6]/0 to-[#183FF6]" />
      <Typography className="z-20 text-white" variant="h2">
        <b className="opacity-80">Как</b> мы работаем
      </Typography>
      <div className="mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-[1fr_1fr_1fr_1fr]">
        {WORK_STEPS_CONFIG.map((item) => (
          <HowWeWorkBlockCard item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
