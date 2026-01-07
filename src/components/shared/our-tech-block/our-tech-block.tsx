import Link from 'next/link';

import styles from './animate.module.css';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import OurTechBlockCard from './our-tech-block-card';
import OurTechBlockTrack from './our-tech-block-track';
import { OUR_SERVICES_DEFAULT, OUR_SERVICES_MOBILE_DEFAULT } from './our-tech-config';
import OurTechMobileCard from './our-tech-mobile-card';

export default function OurTechBlock() {
  return (
    <Section className="bg-primary py-container rounded-[clamp(24px,4vw,48px)]" fullScreen={false}>
      <Typography className="text-foreground mb-[clamp(24px,4vw,46px)]" variant="h2">
        <b className="opacity-80">Какие технологии</b> мы используем
      </Typography>

      <div className="flex w-dvw items-center overflow-hidden whitespace-nowrap">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <OurTechBlockTrack />
          <OurTechBlockTrack />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[clamp(24px,5vw,46px)] pt-[clamp(86px,6vw,124px)]">
        <Typography className="text-foreground" variant="h2">
          <b className="opacity-80">Услуги</b> которые мы оказываем
        </Typography>

        <div className="xxs:grid-cols-2 mt-[clamp(24px,3vw,48px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] xl:grid-cols-4">
          {OUR_SERVICES_DEFAULT.map((item) => (
            <OurTechBlockCard item={item} key={item.title} />
          ))}
          {OUR_SERVICES_MOBILE_DEFAULT.map((item) => (
            <OurTechMobileCard item={item} key={item.title} />
          ))}
        </div>

        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.SERVICES}>Все услуги</Link>
        </Button>
      </div>
    </Section>
  );
}
