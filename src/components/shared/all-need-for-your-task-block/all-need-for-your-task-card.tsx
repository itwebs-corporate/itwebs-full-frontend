import Link from 'next/link';

import { ServiceCardUI } from '@/lib/separation-type-for-card';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function AllNeedForYourTaskCard({ card }: { card: ServiceCardUI }) {
  return (
    <div className="z-10 flex min-h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[24px] bg-white p-[24px]">
      <div className="flex max-h-[55px] flex-nowrap items-center justify-between gap-[10px]">
        <Typography className="lowercase" variant="h3">
          {card.title}
        </Typography>
        <Link
          className="bg-secondary flex-center h-[42px] w-[42px] shrink-0 rounded-full"
          href={`/services/${card.link}`}
        >
          <Media
            className="h-[24px] w-[24px]"
            image={{ src: '/arrow/arrow-up-right-black.svg', alt: 'arrow' }}
          />
        </Link>
      </div>

      <Typography className="leading-[140%] opacity-80" variant="p2">
        {card.desc}
      </Typography>
    </div>
  );
}
