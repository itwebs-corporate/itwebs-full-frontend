import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { OurServicesMobileCard } from './services-we-provide-config';

export default function ServicesWeProvideMobileCard({
  item,
  isRegion = false,
}: {
  item: OurServicesMobileCard;
  isRegion?: boolean;
}) {
  return (
    <div
      className={cn(
        'z-10 flex h-[293px] w-[332px] flex-col justify-between rounded-[12px] pt-[20px] pr-[18px] pb-[16px] pl-[14px] sm:hidden',
        isRegion ? 'bg-white' : 'bg-white/15'
      )}
    >
      <div className="flex flex-col gap-4">
        <Typography
          className={cn(
            isRegion ? 'text-foreground3' : 'text-white',
            'text-left text-[clamp(24px,3.5vw,72px)] lowercase'
          )}
          variant="h2"
        >
          {item.title}
        </Typography>
        <Typography className="text-foreground/80" variant="p2">
          {item.description}
        </Typography>
      </div>
      <div className="flex flex-col gap-[14px]">
        <Typography className="text-foreground/80" variant="p2">
          Стоимось от:
        </Typography>
        <Typography className="text-foreground text-left text-[26px]" variant="h2">
          {item.price} ₽
        </Typography>
      </div>
      <div className="flex items-center">
        <Button
          asChild
          className={cn(
            isRegion ? '' : 'border-secondary text-secondaryborder bg-[#3a5cf7]',
            'max-w-[260px]'
          )}
          variant={isRegion ? 'outline' : 'default'}
        >
          <Link href={item.link}> Подробнее</Link>
        </Button>

        <Link
          className={cn(
            isRegion ? 'bg-primary' : 'bg-secondary',
            'flex-center h-[42px] w-[42px] shrink-0 rounded-full'
          )}
          href={item.link}
        >
          <Media
            className="h-[24px] w-[24px]"
            image={{
              src: isRegion ? '/arrow/arrow-right-white.svg' : '/arrow/arrow-right.svg',
              alt: 'arrow',
            }}
          />
        </Link>
      </div>
    </div>
  );
}
