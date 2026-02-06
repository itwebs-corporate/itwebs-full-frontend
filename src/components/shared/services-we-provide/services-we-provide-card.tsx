import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { OurServicesCard } from './services-we-provide-config';
export default function ServicesWeProvideCard({
  item,
  isRegion = false,
}: {
  item: OurServicesCard;
  isRegion?: boolean;
}) {
  console.log(isRegion);
  return (
    <div
      className={cn(
        'z-10 hidden h-[clamp(260px,28vw,380px)] w-[clamp(280px,30vw,435px)] flex-col justify-between rounded-[24px] p-[24px] sm:flex',
        isRegion ? 'bg-white' : 'bg-white/15'
      )}
    >
      <div className="flex max-h-[55px] flex-nowrap items-center">
        <Typography
          className={cn(isRegion ? 'text-foreground3!' : 'text-white', 'lowercase')}
          variant="h3"
        >
          {item.title}
        </Typography>
        <Link
          className={cn('bg-secondary', 'flex-center h-[42px] w-[42px] shrink-0 rounded-full')}
          href={item.link}
        >
          <Media
            className="h-[24px] w-[24px]"
            image={{
              src: isRegion ? '/arrow/arrow-up-right-black.svg' : '/arrow/arrow-up-right-blue.svg',
              alt: 'arrow',
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
