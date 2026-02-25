import Link from 'next/link';

import { ServiceCardUI } from '@/lib/separation-type-for-card';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function AllNeedForYourTaskCard({
  card,
  isFirstCard = false,
}: {
  card: ServiceCardUI;
  isFirstCard?: boolean;
}) {
  const mobileCard = (
    <div
      className={cn(
        'z-10 flex w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[12px] bg-white pt-[20px] pr-[16px] pb-[16px] pl-[14px] sm:rounded-[24px] sm:p-[24px]',
        isFirstCard && 'h-[clamp(293px,28vw,380px)]'
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden">
        <Typography className="text-left [overflow-wrap:anywhere] lowercase" variant="h3">
          {card.title}
        </Typography>
        <Typography
          className="text-foreground2/80 [display:-webkit-box] min-h-0 overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
          variant="p2"
        >
          {card.desc}
        </Typography>
      </div>

      <div className="shrink-0">
        <div className="flex flex-col gap-[2px] pb-[24px]">
          <Typography className="text-foreground2/80" variant="p2">
            Стоимость от:
          </Typography>
          <Typography className="text-left" variant="h3">
            {card.price} ₽
          </Typography>
        </div>
        <div className="flex items-center gap-0 sm:gap-[8px]">
          <Button asChild className="max-h-[42px] flex-1" variant="outline">
            <Link href={`/services/${card.link}`}>Подробнее</Link>
          </Button>

          <Link
            className="bg-primary flex-center size-[42px] shrink-0 rounded-full"
            href={`/services/${card.link}`}
          >
            <Media
              className="size-[24px]"
              image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );

  if (isFirstCard) {
    return mobileCard;
  }

  return (
    <>
      <div className="group relative z-10 hidden h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between overflow-hidden rounded-[24px] bg-white p-[24px] sm:flex">
        <Link
          className="bg-secondary flex-center group-hover:bg-primary absolute top-[24px] right-[24px] z-20 h-[42px] w-[42px] !shrink-0 rounded-full transition-[top,transform,background] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-[calc(100%-24px-42px)]"
          href={`/services/${card.link}`}
        >
          <Media
            className="absolute h-[24px] w-[24px] transition-opacity duration-300 group-hover:opacity-0"
            image={{ src: '/arrow/arrow-up-right-black.svg', alt: 'arrow' }}
          />
          <Media
            className="absolute h-[24px] w-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
          />
        </Link>

        <div className="flex max-h-[55px] flex-nowrap items-center justify-between gap-[10px] overflow-hidden pr-[54px]">
          <Typography className="[overflow-wrap:anywhere] lowercase" variant="h3">
            {card.title}
          </Typography>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-end">
          <Typography
            className="leading-[140%] opacity-80 transition-[margin,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mb-2 group-hover:[display:-webkit-box] group-hover:overflow-hidden group-hover:text-ellipsis group-hover:[-webkit-box-orient:vertical] group-hover:[-webkit-line-clamp:5]"
            variant="p2"
          >
            {card.desc}
          </Typography>

          <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:transition-none">
            <div className="min-h-0 overflow-hidden pr-[52px]">
              <div className="flex min-h-0 flex-col">
                <div className="flex flex-col gap-2">
                  <Typography className="text-foreground2/80" variant="p2">
                    Стоимость от:
                  </Typography>
                  <Typography className="text-left text-[26px]" variant="h3">
                    {card.price} ₽
                  </Typography>
                </div>

                <div className="mt-2.5 shrink-0">
                  <Button asChild className="max-h-[42px] w-full" variant="outline">
                    <Link href={`/services/${card.link}`}>Подробнее</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden">{mobileCard}</div>
    </>
  );
}
