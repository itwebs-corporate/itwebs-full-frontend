import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { ServiceCard } from '@/config/services-mock-config';

export default function AllNeedForYourTaskMobileCard({ card }: { card: ServiceCard }) {
  return (
    <div className="z-10 flex h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[12px] bg-white pt-[20px] pr-[16px] pb-[16px] pl-[14px] sm:rounded-[24px] sm:p-[24px]">
      <div className="flex flex-col gap-4">
        <Typography className="text-left lowercase" variant="h3">
          {card.title}
        </Typography>
        <Typography className="text-foreground2/80" variant="p2">
          {card.description}
        </Typography>
      </div>

      <div>
        <div className="flex flex-col gap-[12px] pb-[24px]">
          <Typography className="text-foreground2/80" variant="p2">
            Стоимось от:
          </Typography>
          <Typography className="text-left" variant="h3">
            {card.priceFromRub} ₽
          </Typography>
        </div>
        <div className="flex items-center gap-0 sm:gap-[8px]">
          <Button
            asChild
            className="max-h-[42px] w-full max-w-[clamp(260px,20vw,337px)]"
            variant="outline"
          >
            <Link href={card.href}> Подробнее</Link>
          </Button>

          <Link
            className="bg-primary flex-center h-[42px] w-[42px] shrink-0 rounded-full"
            href={card.href}
          >
            <Media
              className="h-[24px] w-[24px]"
              image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
