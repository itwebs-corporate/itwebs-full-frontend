import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';
import { Post } from '@/shared/types/post-dto-types';

export default function BlogCard({ card, className }: { card: Post; className?: string }) {
  return (
    <div
      className={cn(
        'z-10 flex min-h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between gap-3 rounded-[24px] bg-white p-[clamp(14px,3vw,24px)]',
        className
      )}
    >
      {card.image && (
        <Media
          className="block h-[clamp(129px,20vw,165px)] w-full max-w-full sm:hidden"
          image={{ src: '/default/card-rect.png', alt: card.name }}
        />
      )}
      <div className="flex max-h-[55px] flex-nowrap items-center justify-between gap-[10px]">
        <Typography className="line-clamp-3 lowercase" variant="h3">
          {card.name}
        </Typography>
        <Link
          aria-label={`Открыть статью ${card.name}`}
          className="sm:bg-secondary flex-center bg-primary h-[clamp(36px,3vw,42px)] w-[clamp(36px,3vw,42px)] shrink-0 rounded-full"
          href={`${PAGES_CONFIG.BLOG}/${card.link}`}
        >
          <Media
            ariaHidden
            className="hidden h-[15px] w-[20px] sm:block"
            image={{ src: '/arrow/arrow-up-right-black.svg', alt: '' }}
          />
          <Media
            ariaHidden
            className="block h-[15px] w-[20px] sm:hidden"
            image={{ src: '/arrow/arrow-right-white-mobile.svg', alt: '' }}
          />
        </Link>
      </div>

      <Typography className="line-clamp-3 leading-[140%] opacity-80 sm:mt-1" variant="p2">
        {card.description}
      </Typography>

      {card.image && (
        <Media
          className="hidden h-[clamp(129px,20vw,165px)] w-full max-w-full sm:block"
          image={{ src: '/default/card-rect.png', alt: card.name }}
        />
      )}
    </div>
  );
}
