import Link from 'next/link';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { BlogCard as TBlogCard } from './blog-config';

export default function BlogCardMobile({ card }: { card: TBlogCard }) {
  return (
    <div className="z-10 flex h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[24px] bg-white p-[14px] sm:p-[24px]">
      {card.image && (
        <Media
          className="h-[clamp(129px,20vw,165px)] w-[clamp(304px,55vw,387px)]"
          image={{ src: card.image.src, alt: card.image.alt }}
        />
      )}
      <div className="flex max-h-[55px] flex-nowrap items-center justify-between gap-[10px]">
        <Typography className="lowercase" variant="h3">
          {card.title}
        </Typography>
        <Link
          className="flex-center bg-primary h-[clamp(32px,3vw,42px)] w-[clamp(32px,3vw,42px)] shrink-0 rounded-full"
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
