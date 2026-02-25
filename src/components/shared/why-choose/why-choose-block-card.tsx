import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/card-types';

export default function WhyChooseBlockCard({
  item,
  isRegion = false,
}: {
  item: CardTypes;
  isRegion?: boolean;
}) {
  return (
    <li
      className={cn(
        'z-10 flex min-h-[clamp(220px,18vw,287px)] w-full flex-col rounded-[clamp(12px,2vw,24px)] p-[clamp(16px,2vw,20px)]',
        isRegion ? 'bg-white/15' : 'bg-white'
      )}
    >
      <div
        className={cn(
          'flex-center mb-[clamp(12px,1.5vw,20px)] h-[86px] w-[86px] rounded-full',
          isRegion ? 'bg-background/25' : 'bg-background'
        )}
      >
        <Media className="h-[48px] w-[48px]" image={{ src: item.icon!, alt: item.title }} />
      </div>

      <Typography className={cn(isRegion && 'text-white')} variant="h3">
        {item.title}
      </Typography>

      <Typography
        className={cn('mt-[clamp(10px,1vw,14px)]', isRegion && 'text-white/80')}
        variant="p2"
      >
        {item.description}
      </Typography>
    </li>
  );
}
