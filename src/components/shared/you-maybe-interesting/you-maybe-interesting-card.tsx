import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';
import { BlogPostSimilarDto } from '@/shared/types/post-dto-types';

export default function YouMaybeInterestingCard({
  card,
  className,
}: {
  card: BlogPostSimilarDto;
  className?: string;
}) {
  return (
    <li
      className={cn(
        'group relative z-10 flex min-h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)]! shrink-0 flex-col justify-between gap-3 overflow-hidden rounded-[24px] bg-white p-[clamp(14px,3vw,24px)]',
        className
      )}
    >
      {card.image && (
        <div
          className={cn(
            'h-[clamp(129px,20vw,165px)] w-full max-w-full overflow-hidden',
            'sm:max-h-0 sm:transition-[max-height] sm:duration-500 sm:ease-out sm:group-hover:max-h-[clamp(129px,20vw,165px)]'
          )}
        >
          <Media
            className="h-[clamp(129px,20vw,165px)] w-full max-w-full"
            image={{
              src: '/default/card-rect.png',
              alt: card.title,
              className:
                'sm:-translate-y-full transition-transform duration-500 ease-out sm:group-hover:translate-y-0',
            }}
          />
        </div>
      )}
      <div className="flex flex-nowrap items-center justify-between gap-[10px]">
        <Typography className="line-clamp-2 lowercase sm:line-clamp-3 xl:line-clamp-3" variant="h3">
          {card.title}
        </Typography>
        <Link
          aria-label={`Переход на статью: ${card.title}`}
          className={cn(
            'flex-center size-[clamp(36px,3vw,42px)] shrink-0 rounded-full transition-colors duration-300',
            'bg-primary sm:bg-secondary sm:group-hover:bg-primary'
          )}
          href={`${PAGES_CONFIG.BLOG}/${card.link}`}
        >
          <>
            <Media
              ariaHidden
              className="hidden h-[15px] w-[20px] sm:block sm:group-hover:hidden"
              image={{ src: '/arrow/arrow-up-right-black.svg', alt: '' }}
            />
            <Media
              ariaHidden
              className="hidden h-[15px] w-[20px] sm:group-hover:block"
              image={{ src: '/arrow/arrow-right-white-mobile.svg', alt: '' }}
            />
            <Media
              ariaHidden
              className="block h-[15px] w-[20px] sm:hidden"
              image={{ src: '/arrow/arrow-right-white-mobile.svg', alt: '' }}
            />
          </>
        </Link>
      </div>

      <Typography className="line-clamp-2 leading-[140%] opacity-80 sm:mt-1" variant="p2">
        {card.description}
      </Typography>

      {card.image && (
        <div className="hidden w-full max-w-full overflow-hidden sm:block sm:max-h-[clamp(129px,20vw,165px)] sm:transition-[max-height] sm:duration-500 sm:ease-out sm:group-hover:max-h-0">
          <Media
            className="h-[clamp(129px,20vw,165px)] w-full max-w-full shrink-0"
            image={{
              src: '/default/card-rect.png',
              alt: card.title,
              className:
                'transition-transform duration-500 ease-out sm:group-hover:translate-y-full',
            }}
          />
        </div>
      )}
    </li>
  );
}
