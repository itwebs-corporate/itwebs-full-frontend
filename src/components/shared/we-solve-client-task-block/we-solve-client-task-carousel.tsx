import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { fetchAllCases } from '@/api/server';

import WeSolveClientTaskCard from './we-solve-client-task-card';

export async function WeSolceClientTaskCarousel() {
  const cases = await fetchAllCases();
  return (
    <div className="w-full">
      <div className="px-4 sm:px-0">
        <Carousel
          className="w-full"
          opts={{
            align: 'start',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent>
            {cases.map((item) => (
              <CarouselItem className="basis-[88%] sm:basis-full" key={item.id}>
                <WeSolveClientTaskCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
