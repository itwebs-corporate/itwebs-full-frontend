import Link from 'next/link';

import { cn } from '@/lib/utils';

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
              src: isRegion ? '/arrow/arrow-up-right-black.svg' : '/arrow/arrow-up-right-blue.svg',
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
  );
}
