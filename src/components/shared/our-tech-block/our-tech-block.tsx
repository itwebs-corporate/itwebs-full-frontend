import styles from './animate.module.css';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import OurTechTrack from './our-tech-track';

export default function OurTechBlock() {
  return (
    <>
      <Typography className="text-foreground mb-[clamp(24px,4vw,46px)]" variant="h2">
        <b className="opacity-80">Какие технологии</b> мы используем
      </Typography>
      <div className="flex w-dvw items-center overflow-hidden whitespace-nowrap">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <OurTechTrack />
          <OurTechTrack />
        </div>
      </div>
    </>
  );
}
