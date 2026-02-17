import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { fetchAllCases } from '@/app/api/server';

import WeSolveClientTaskCard from './we-solve-client-task-card';
import { CASES_MOCK } from '../cases-block/case-mock-config';

export async function WeSolceClientTaskCarousel() {
  const cases = await fetchAllCases();
  const result = cases.length > 0 ? cases : CASES_MOCK;
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
            {result.map((item) => (
              <CarouselItem
                className="sm:max-full max-w-[88%] min-w-0 grow-0 basis-[88%] sm:basis-full"
                key={item.id}
              >
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
