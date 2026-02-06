import styles from './animate.module.css';

import { cn } from '@/lib/utils';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import OurTechBlockTrack from './our-tech-block-track';
import ServicesWeProvide from '../services-we-provide/services-we-provide';

export default function OurTechBlock() {
  return (
    <Section className="bg-primary py-container rounded-[clamp(24px,4vw,48px)]">
      <Typography className="text-foreground mb-[clamp(24px,4vw,46px)]" variant="h2">
        <b className="opacity-80">Какие технологии</b> мы используем
      </Typography>

      <div className="flex w-dvw items-center overflow-hidden whitespace-nowrap">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <OurTechBlockTrack />
          <OurTechBlockTrack />
        </div>
      </div>

      <ServicesWeProvide />
    </Section>
  );
}
