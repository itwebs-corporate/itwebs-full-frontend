import { Icon } from '@iconify/react';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { ServiceWay } from '@/shared/types/service-dto-types';

type CardProps = {
  item: ServiceWay;
  cardStyles?: string;
  isShowMedia?: boolean;
};
export default function ForWeWorkCard({ item, cardStyles, isShowMedia = false }: CardProps) {
  return (
    <div
      className={cn(
        'z-10 flex h-[clamp(260px,20vw,292px)] w-full max-w-[clamp(320px,90vw,435px)] flex-col rounded-[clamp(12px,2vw,24px)] bg-white p-5',
        cardStyles
      )}
    >
      <div className="flex-center bg-background mb-5 h-[clamp(42px,6vw,86px)] w-[clamp(42px,6vw,86px)] shrink-0 rounded-full">
        {isShowMedia ? (
          <Media
            className="size-[clamp(26px,3.5vw,48px)]"
            image={{ src: item.iconName, alt: item.name }}
          />
        ) : (
          <Icon className="size-[clamp(26px,3.5vw,48px)]" icon={item.iconName} />
        )}
      </div>

      <Typography variant="h3">{item.name}</Typography>

      <div className="mt-[clamp(12px,1vw,16px)] min-h-0 flex-1 overflow-y-auto">
        <Typography variant="p2">{item.description}</Typography>
      </div>
    </div>
  );
}
