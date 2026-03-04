import Link from 'next/link';

import { formattedPrice } from '@/lib/number-format';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { Service } from '@/shared/types/service-dto-types';

export default function ServicesWeProvideCard({
  item,
  isRegion = false,
}: {
  item: Service;
  isRegion?: boolean;
}) {
  const title = item.title.toLowerCase().replace('1с', '1C');
  const formatedPrice = formattedPrice(item.price);
  const price = item.price < 10000 ? `${formatedPrice} ₽/ч` : `${formatedPrice} ₽`;
  return (
    <>
      <div
        className={cn(
          'group relative z-10 hidden h-[clamp(260px,28vw,380px)] w-full max-w-[435px] min-w-[280px] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] px-[clamp(14px,2.2vw,24px)] py-[clamp(20px,2.6vw,24px)] sm:flex',
          isRegion ? 'bg-white' : 'bg-white/15'
        )}
      >
        <Link
          aria-label={`Переход на услугу: ${item.title}`}
          className={cn(
            isRegion ? 'bg-primary' : 'bg-secondary',
            'flex-center absolute top-[24px] right-[24px] z-20 h-[42px] w-[42px] shrink-0! rounded-full transition-[top,transform,background] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-[calc(100%-24px-42px)] group-hover:rotate-45'
          )}
          href={`/services/${item.link}`}
        >
          <Media
            ariaHidden
            className="size-[24px]"
            image={{
              src: '/arrow/arrow-up-right-blue.svg',
              alt: '',
            }}
          />
        </Link>

        {/* card header: */}
        <div className="flex w-full items-start pr-[52px] group-hover:pr-0">
          <Typography
            className="w-full min-w-0 flex-1 cursor-default py-1 wrap-break-word [hyphens:auto] text-white"
            lang="ru"
            variant="h3"
          >
            <Link href={`/services/${item.link}`}> {title}</Link>
          </Typography>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-end pt-2">
          <Typography
            className={cn(
              isRegion
                ? 'text-foreground2/80 group-hover:text-foreground2'
                : 'text-foreground/80 group-hover:text-foreground',

              '[display:-webkit-box] min-h-0 overflow-hidden leading-[140%] [overflow-wrap:anywhere] [hyphens:auto] opacity-80 transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-box-orient:vertical] group-hover:mb-2 group-hover:line-clamp-3 group-hover:md:[-webkit-line-clamp:3] group-hover:xl:[-webkit-line-clamp:4] group-hover:2xl:[-webkit-line-clamp:6]'
            )}
            variant="p2"
          >
            {item.description}
          </Typography>

          <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:transition-none">
            <div className="min-h-0 overflow-hidden pr-[52px]">
              <div className="flex min-h-0 flex-col">
                <div className="flex items-center gap-2">
                  <Typography
                    className={cn(isRegion ? 'text-foreground2/80' : 'text-foreground/80')}
                    variant="p2"
                  >
                    Стоимость от:
                  </Typography>
                  <Typography
                    className={cn(
                      isRegion ? 'text-foreground3' : 'text-foreground',
                      'text-left text-[26px]'
                    )}
                    variant="h2"
                  >
                    {price}
                  </Typography>
                </div>

                <div className="mt-2.5 shrink-0">
                  <Button
                    asChild
                    className={cn(
                      !isRegion &&
                        'border-secondary text-secondary max-h-[42px] w-full border bg-[#3a5cf7]'
                    )}
                    variant={isRegion ? 'outline' : 'default'}
                  >
                    <Link href={`/services/${item.link}`}>Подробнее</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile attribute:  */}
      <div
        className={cn(
          'z-10 flex min-h-[293px] max-w-[332px] flex-col justify-between rounded-[12px] pt-[20px] pr-[18px] pb-[16px] pl-[14px] sm:hidden',
          isRegion ? 'bg-white' : 'bg-white/15'
        )}
      >
        {/* description (mobile): */}
        <div className="flex flex-col gap-4">
          <Typography
            asChild
            className={cn(
              isRegion ? 'text-foreground3' : 'text-white',
              'cursor-default text-left text-[clamp(24px,3.5vw,72px)] [overflow-wrap:anywhere] lowercase'
            )}
            variant="h2"
          >
            <Link href={`/services/${item.link}`}> {title}</Link>
          </Typography>
          <Typography
            className={cn(
              isRegion ? 'text-foreground2/80' : 'text-foreground/80',
              '[display:-webkit-box] overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [-webkit-line-clamp:5]'
            )}
            variant="p2"
          >
            {item.description}
          </Typography>
        </div>
        {/* price: */}
        <div className="flex flex-col gap-[14px]">
          <Typography
            className={cn(isRegion ? 'text-foreground2/80' : 'text-foreground/80')}
            variant="p2"
          >
            Стоимость от:
          </Typography>
          <Typography
            className={cn(
              isRegion ? 'text-foreground3' : 'text-foreground',
              'mb-2 text-left text-[26px]'
            )}
            variant="h2"
          >
            {item.price} ₽
          </Typography>
        </div>
        {/* card footer (mobile) */}
        <div className="flex items-center">
          <Button
            asChild
            className={cn(
              !isRegion && 'border-secondary text-secondary border bg-[#3a5cf7]',
              'max-w-[260px]'
            )}
            variant={isRegion ? 'outline' : 'default'}
          >
            <Link href={`/services/${item.link}`}>Подробнее</Link>
          </Button>

          <Link
            aria-label={`Переход на страницу услуги: ${item.title}`}
            className={cn(
              isRegion ? 'bg-primary' : 'bg-secondary',
              'flex-center h-[42px] w-[42px] shrink-0 rounded-full'
            )}
            href={`/services/${item.link}`}
          >
            <Media
              ariaHidden
              className="h-[24px] w-[24px]"
              image={{
                src: isRegion ? '/arrow/arrow-right-white.svg' : '/arrow/arrow-right.svg',
                alt: '',
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
