import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Case } from '@/shared/types/service-dto-types';

import CaseCard from './case-card';

export function WeSolceClientTaskCarousel({ result }: { result: Case[] | [] }) {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-0">
        {result.length > 0 ? (
          <Carousel
            className="w-full"
            opts={{
              align: 'start',
              containScroll: 'trimSnaps',
            }}
          >
            <CarouselContent className="items-stretch">
              {result.map((item) => (
                <CarouselItem
                  className="sm:max-full flex max-w-[88%] min-w-0 grow-0 basis-[88%] sm:basis-full"
                  key={item.id}
                >
                  <ul className="w-full">
                    <CaseCard item={item} />
                  </ul>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="text-foreground3/50 mx-auto w-[40vw] rounded-full border border-dashed border-gray-400 p-4 text-center text-lg">
            Мы добавим наши кейсы чуть позже
          </div>
        )}
      </div>
    </div>
  );
}
