import Link from 'next/link';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { OurServicesCard } from './our-tech-config';
export default function OurTechBlockCard({ item }: { item: OurServicesCard }) {
  return (
    <div className="z-10 hidden h-[clamp(260px,28vw,380px)] w-[clamp(280px,30vw,435px)] flex-col justify-between rounded-[24px] bg-white/15 p-[24px] sm:flex">
      <div className="flex max-h-[55px] flex-nowrap items-center">
        <Typography className="text-white lowercase" variant="h3">
          {item.title}
        </Typography>
        <Link
          className="bg-secondary flex-center h-[42px] w-[42px] shrink-0 rounded-full"
          href={item.link}
        >
          <Media
            className="h-[24px] w-[24px]"
            image={{ src: '/arrow/arrow-up-right-blue.svg', alt: 'arrow' }}
          />
        </Link>
      </div>

      <Typography className="text-foreground/80" variant="p2">
        {item.description}
      </Typography>
    </div>
  );
}
