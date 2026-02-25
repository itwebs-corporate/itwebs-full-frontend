import Link from 'next/link';

import { ServiceCardUI } from '@/lib/separation-type-for-card';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function AllNeedForYourTaskHoverCard({
  card,
  isFirstCard = false,
}: {
  card: ServiceCardUI;
  isFirstCard?: boolean;
}) {
  return (
    <div
      className={cn(
        'z-10 flex w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[12px] bg-white pt-[20px] pr-[16px] pb-[16px] pl-[14px] sm:rounded-[24px] sm:p-[24px]',
        isFirstCard && 'h-[clamp(293px,28vw,380px)]'
      )}
    >
      <div className="flex flex-col gap-4">
        <Typography className="text-left lowercase" variant="h3">
          {card.title}
        </Typography>
        <Typography
          className={cn(isFirstCard && 'line-clamp-1', 'text-foreground2/80')}
          variant="p2"
        >
          {card.desc}
        </Typography>
      </div>

      <div>
        <div className="flex flex-col gap-[12px] pb-[24px]">
          <Typography className="text-foreground2/80" variant="p2">
            Стоимось от:
          </Typography>
          <Typography className="text-left" variant="h3">
            {card.price} ₽
          </Typography>
        </div>
        <div className="flex items-center gap-0 sm:gap-[8px]">
          <Button asChild className="max-h-[42px] flex-1" variant="outline">
            <Link href={`/services/${card.link}`}> Подробнее</Link>
          </Button>

          <Link
            className="bg-primary flex-center size-[42px] shrink-0 rounded-full"
            href={`/services/${card.link}`}
          >
            <Media
              className="size-[24px]"
              image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
