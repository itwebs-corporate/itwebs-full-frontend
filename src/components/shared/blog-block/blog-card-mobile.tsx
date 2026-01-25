import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { BlogCard as TBlogCard } from './blog-config';

export default function BlogCardMobile({
  card,
  className,
}: {
  card: TBlogCard;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'z-10 flex min-h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between gap-3 rounded-[24px] bg-white p-[clamp(14px,3vw,24px)]',
        className
      )}
    >
      {card.image && (
        <Media
          className="h-[clamp(129px,20vw,165px)] w-full max-w-full"
          image={{ src: card.image.src, alt: card.image.alt }}
        />
      )}
      <div className="flex max-h-[55px] flex-nowrap items-center justify-between gap-[10px]">
        <Typography className="lowercase" variant="h3">
          {card.title}
        </Typography>
        <Link
          className="flex-center bg-primary h-[clamp(36px,3vw,42px)] w-[clamp(36px,3vw,42px)] shrink-0 rounded-full"
          href={card.href || '/'}
        >
          <Media
            className="h-[15px] w-[20px]"
            image={{ src: '/arrow/arrow-right-white-mobile.svg', alt: 'arrow' }}
          />
        </Link>
      </div>

      <Typography className="leading-[140%] opacity-80" variant="p2">
        {card.description}
      </Typography>
    </div>
  );
}
