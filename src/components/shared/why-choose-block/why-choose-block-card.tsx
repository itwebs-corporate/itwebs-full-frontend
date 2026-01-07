import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/global-types';

export default function WhyChooseBlockCard({ item }: { item: CardTypes }) {
  return (
    <div className="z-10 flex min-h-[clamp(220px,18vw,287px)] w-full flex-col rounded-[clamp(12px,2vw,24px)] bg-white p-[clamp(16px,2vw,20px)]">
      <div className="flex-center bg-background mb-[clamp(12px,1.5vw,20px)] h-[clamp(42px,6vw,86px)] w-[clamp(42px,6vw,86px)] rounded-full">
        <Media
          className="h-[clamp(26px,3.5vw,48px)] w-[clamp(26px,3.5vw,48px)]"
          image={{ src: item.icon!, alt: item.title }}
        />
      </div>

      <Typography variant="h3">{item.title}</Typography>

      <Typography className="mt-[clamp(10px,1vw,14px)]" variant="p2">
        {item.description}
      </Typography>
    </div>
  );
}
