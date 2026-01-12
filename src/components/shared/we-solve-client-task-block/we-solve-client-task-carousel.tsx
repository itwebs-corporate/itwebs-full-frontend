import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { CASES_CONFIG } from './cases-config';
import WeSolveClientTaskCard from './we-solve-client-task-card';

export function WeSolceClientTaskCarousel() {
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
            {CASES_CONFIG.map((item, index) => (
              <CarouselItem className="basis-[88%] sm:basis-full" key={index}>
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
