import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { OurServicesMobileCard } from './our-tech-config';

export default function OurTechMobileCard({ item }: { item: OurServicesMobileCard }) {
  return (
    <div className="z-10 flex h-[293px] w-[332px] flex-col justify-between rounded-[12px] bg-white/15 pt-[20px] pr-[18px] pb-[16px] pl-[14px] sm:hidden">
      <div className="flex flex-col gap-4">
        <Typography
          className="text-left text-[clamp(24px,3.5vw,72px)] text-white lowercase"
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
          className="border-secondary text-secondary max-w-[260px] border bg-[#3a5cf7]"
        >
          <Link href={item.link}> Подробнее</Link>
        </Button>

        <Link
          className="bg-secondary flex-center h-[42px] w-[42px] shrink-0 rounded-full"
          href={item.link}
        >
          <Media
            className="h-[24px] w-[24px]"
            image={{ src: '/arrow/arrow-right.svg', alt: 'arrow' }}
          />
        </Link>
      </div>
    </div>
  );
}
