import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/global-types';

type CardProps = {
  item: CardTypes;
  cardStyles?: string;
};
export default function Card({ item, cardStyles }: CardProps) {
  return (
    <div
      className={cn(
        'z-10 flex min-h-[clamp(260px,20vw,292px)] w-full max-w-[clamp(320px,90vw,435px)] flex-col rounded-[clamp(12px,2vw,24px)] bg-white p-5',
        cardStyles
      )}
    >
      {item.icon ? (
        <div className="flex-center bg-background mb-5 h-[clamp(42px,6vw,86px)] w-[clamp(42px,6vw,86px)] rounded-full">
          <Media
            className="h-[clamp(26px,3.5vw,48px)] w-[clamp(26px,3.5vw,48px)]"
            image={{ src: item.icon, alt: item.title }}
          />
        </div>
      ) : (
        <div className="bg-primary font-family flex-center h-[64px] w-[64px] rounded-[12px] text-[32px]">
          0{item.id}
        </div>
      )}

      <Typography variant="h3">{item.title}</Typography>

      <Typography className="mt-[clamp(12px,1vw,16px)]" variant="p2">
        {item.description}
      </Typography>
    </div>
  );
}
