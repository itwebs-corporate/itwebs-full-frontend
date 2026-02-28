import Typography from '@/components/ui/typography/typography';

import OurTechTrack from './our-tech-track';

export default function OurTechBlock() {
  return (
    <>
      <Typography className="text-foreground mb-[clamp(24px,4vw,46px)]" variant="h2">
        <b className="opacity-80">Какие технологии</b> мы используем
      </Typography>
      <div className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen self-stretch">
        <div className="flex w-full items-center overflow-hidden whitespace-nowrap">
          <div className="marquee-track-25 flex w-max">
            <OurTechTrack />
            <OurTechTrack />
          </div>
        </div>
      </div>
    </>
  );
}
