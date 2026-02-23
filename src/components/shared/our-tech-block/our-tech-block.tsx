import Typography from '@/components/ui/typography/typography';

import OurTechTrack from './our-tech-track';

export default function OurTechBlock() {
  return (
    <>
      <Typography className="text-foreground mb-[clamp(24px,4vw,46px)]" variant="h2">
        <b className="opacity-80">Какие технологии</b> мы используем
      </Typography>
      <div className="flex w-full items-center overflow-hidden whitespace-nowrap">
        <div className="marquee-track-25 flex w-max">
          <OurTechTrack />
          <OurTechTrack />
        </div>
      </div>
    </>
  );
}
