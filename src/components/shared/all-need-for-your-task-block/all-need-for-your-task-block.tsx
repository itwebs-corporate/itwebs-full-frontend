import { Fragment } from 'react';

import { separationTypeForCard } from '@/lib/separation-type-for-card';
import { cn } from '@/lib/utils';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchFilterGroups, fetchServicesByGroup } from '@/app/api/server';
import { Service } from '@/shared/types/service-dto-types';
import { ServiceGroupDto } from '@/shared/types/service-group-dto-types';

import AllNeedForYourTaskCard from './all-need-for-your-task-card';
import AllNeedForYourTaskMobileCard from './all-need-for-your-task-mobile-card';
import AllNeedForYourTaskSelect from './all-need-for-your-task-select';
import AllNeedForYourTaskTabs from './all-need-for-your-task-tabs';

export default async function AllNeedForYourTaskBlock({
  searchParams,
  cards,
}: {
  searchParams?: string;
  cards: Service[];
}) {
  const activeTab = searchParams;
  const filters = await fetchFilterGroups();

  const filterServices: (Service | ServiceGroupDto)[] = searchParams
    ? await fetchServicesByGroup(searchParams)
    : cards;
  const uiCards = filterServices.map(separationTypeForCard);

  return (
    <Section className="mb-[clamp(86px,8vw,124px)]">
      <Typography variant="h2">
        Всё, что нужно <br className="block sm:hidden" /> для
        <b className="text-primary"> вашей задачи</b>
      </Typography>
      <AllNeedForYourTaskTabs activeTab={activeTab} filters={filters} />
      <AllNeedForYourTaskSelect filters={filters} />
      <div
        className={cn(
          uiCards.length
            ? '3xl:grid-cols-4 grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3'
            : 'flex-center w-full'
        )}
      >
        {uiCards.length > 0 ? (
          uiCards.map((card, index) => {
            return index === 0 ? (
              <AllNeedForYourTaskMobileCard card={card} isFirstCard key={card.id} />
            ) : (
              <Fragment key={card.id}>
                <div className="hidden sm:block">
                  <AllNeedForYourTaskCard card={card} />
                </div>
                <div className="block sm:hidden">
                  <AllNeedForYourTaskMobileCard card={card} />
                </div>
              </Fragment>
            );
          })
        ) : (
          <span className="text-foreground3/80 w-full max-w-[800px] rounded-full border border-dashed border-gray-400 py-5 text-center opacity-50">
            Услуги не найдены
          </span>
        )}
      </div>
    </Section>
  );
}
