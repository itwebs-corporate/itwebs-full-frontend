import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { Service } from '@/shared/types/service-dto-types';

export default function ServicesWeProvideCard({
  item,
  isRegion = false,
}: {
  item: Service;
  isRegion?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          'z-10 hidden h-[clamp(260px,28vw,380px)] w-full max-w-[435px] min-w-[280px] shrink-0 flex-col justify-between rounded-[24px] px-[clamp(14px,2.2vw,24px)] py-[clamp(20px,2.6vw,24px)] sm:flex',
          isRegion ? 'bg-white' : 'bg-white/15'
        )}
      >
        <div className="flex flex-nowrap items-center justify-between">
          <Typography
            className={cn(isRegion ? 'text-foreground3!' : 'text-white', 'lowercase')}
            variant="h3"
          >
            {item.title}
          </Typography>
          <Link
            aria-label={`Переход на услугу: ${item.title}`}
            className="bg-secondary flex-center size-[42px] shrink-0 rounded-full"
            href={`/services/${item.link}`}
          >
            <Media
              ariaHidden
              className="size-[24px]"
              image={{
                src: isRegion
                  ? '/arrow/arrow-up-right-black.svg'
                  : '/arrow/arrow-up-right-blue.svg',
                alt: '',
              }}
            />
          </Link>
        </div>

        <Typography
          className={cn(isRegion ? 'text-foreground2/80' : 'text-foreground/80')}
          variant="p2"
        >
          {item.description}
        </Typography>
      </div>

      <div
        className={cn(
          'z-10 flex min-h-[293px] max-w-[332px] flex-col justify-between rounded-[12px] pt-[20px] pr-[18px] pb-[16px] pl-[14px] sm:hidden',
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
          <Typography
            className={cn(isRegion ? 'text-foreground2/80' : 'text-foreground/80')}
            variant="p2"
          >
            {item.description}
          </Typography>
        </div>
        <div className="flex flex-col gap-[14px]">
          <Typography
            className={cn(isRegion ? 'text-foreground2/80' : 'text-foreground/80')}
            variant="p2"
          >
            Стоимость от:
          </Typography>
          <Typography
            className={cn(
              isRegion ? 'text-foreground3' : 'text-foreground',
              'mb-2 text-left text-[26px]'
            )}
            variant="h2"
          >
            {item.price} ₽
          </Typography>
        </div>
        <div className="flex items-center">
          <Button
            asChild
            className={cn(
              !isRegion && 'border-secondary text-secondary border bg-[#3a5cf7]',
              'max-w-[260px]'
            )}
            variant={isRegion ? 'outline' : 'default'}
          >
            <Link href={`/services/${item.link}`}>Подробнее</Link>
          </Button>

          <Link
            className={cn(
              isRegion ? 'bg-primary' : 'bg-secondary',
              'flex-center h-[42px] w-[42px] shrink-0 rounded-full'
            )}
            href={`/services/${item.link}`}
          >
            <Media
              className="h-[24px] w-[24px]"
              image={{
                src: isRegion ? '/arrow/arrow-right-white.svg' : '/arrow/arrow-right.svg',
                alt: '',
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
