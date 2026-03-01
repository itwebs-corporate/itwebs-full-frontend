import Link from 'next/link';

import { formattedPrice } from '@/lib/number-format';
import { ServiceCardUI } from '@/lib/separation-type-for-card';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function ServiceCard({ card }: { card: ServiceCardUI }) {
  const formatedPrice = formattedPrice(card.price);
  const price = card.price < 10000 ? `${formatedPrice} ₽/ч` : `${formatedPrice} ₽`;
  const title = card.title.toLowerCase().replace('1с', '1C');
  const mobileCard = (
    <div className="z-10 flex w-[clamp(332px,30vw,435px)] flex-col justify-between rounded-[12px] bg-white pt-[20px] pr-[16px] pb-[16px] pl-[14px] sm:rounded-[24px] sm:p-[24px]">
      <div className="flex min-h-0 flex-1 flex-col gap-4">
        <Typography
          className="cursor-default text-left break-normal [overflow-wrap:normal] [word-break:normal]"
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          className="text-foreground2/80 [display:-webkit-box] overflow-hidden break-normal [overflow-wrap:normal] [word-break:normal] text-ellipsis [-webkit-box-orient:vertical]"
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
            {price}
          </Typography>
        </div>
        <div className="flex items-center gap-0 sm:gap-[8px]">
          <Button asChild className="max-h-[42px] flex-1" variant="outline">
            <Link href={`/services/${card.link}`}>Подробнее</Link>
          </Button>

          <Link
            aria-label={`Переход на страницу услуги: ${card.title}`}
            className="bg-primary flex-center size-[42px] shrink-0 rounded-full"
            href={`/services/${card.link}`}
          >
            <Media
              ariaHidden
              className="size-[24px]"
              image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="group relative z-10 hidden h-[clamp(293px,28vw,380px)] w-[clamp(332px,30vw,435px)] flex-col justify-between overflow-hidden rounded-[24px] bg-white p-[24px] sm:flex">
        <Link
          aria-label={`Переход на страницу услуги: ${card.title}`}
          className="bg-secondary flex-center group-hover:bg-primary absolute top-[24px] right-[24px] z-20 h-[42px] w-[42px] !shrink-0 rounded-full transition-[top,transform,background] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-[calc(100%-24px-42px)]"
          href={`/services/${card.link}`}
        >
          <Media
            ariaHidden
            className="absolute h-[24px] w-[24px] transition-opacity duration-300 group-hover:opacity-0"
            image={{ src: '/arrow/arrow-up-right-black.svg', alt: 'arrow' }}
          />
          <Media
            ariaHidden
            className="absolute h-[24px] w-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            image={{ src: '/arrow/arrow-right-white.svg', alt: 'arrow' }}
          />
        </Link>

        <div className="flex flex-nowrap items-start justify-between gap-[10px] pr-[54px]">
          <Typography
            className="line-clamp-3 cursor-default py-1 break-normal [overflow-wrap:normal] [word-break:normal]"
            variant="h3"
          >
            {title}
          </Typography>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1" />

          <Typography
            className="[display:-webkit-box] min-h-0 overflow-hidden pr-[52px] leading-[140%] [overflow-wrap:anywhere] opacity-80 transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-box-orient:vertical] group-hover:mb-2 group-hover:sm:[-webkit-line-clamp:6] group-hover:md:[-webkit-line-clamp:3] group-hover:xl:[-webkit-line-clamp:4] group-hover:2xl:[-webkit-line-clamp:6]"
            variant="p2"
          >
            {card.desc}
          </Typography>

          <div className="grid shrink-0 grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:transition-none">
            <div className="min-h-0 overflow-hidden pr-[52px]">
              <div className="flex min-h-0 flex-col">
                <div className="flex flex-col gap-2">
                  <Typography className="text-foreground2/80" variant="p2">
                    Стоимость от:
                  </Typography>
                  <Typography className="text-left text-[26px]" variant="h3">
                    {price}
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
