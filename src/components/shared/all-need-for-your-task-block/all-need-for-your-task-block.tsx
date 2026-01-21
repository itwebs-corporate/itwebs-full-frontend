import { Fragment } from 'react';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { ServiceCard } from '@/config/services-mock-config';

import AllNeedForYourTaskCard from './all-need-for-your-task-card';
import AllNeedForYourTaskMobileCard from './all-need-for-your-task-mobile-card';
import AllNeedForYourTaskSelect from './all-need-for-your-task-select';
import AllNeedForYourTaskTabs from './all-need-for-your-task-tabs';

export default function AllNeedForYourTaskBlock({
  searchParams,
  cards,
}: {
  searchParams?: string;
  cards: ServiceCard[];
}) {
  const activeTab = searchParams;
  return (
    <Section className="mb-[clamp(86px,8vw,124px)]">
      <Typography variant="h2">
        Всё, что нужно <br className="block sm:hidden" /> для
        <b className="text-primary"> вашей задачи</b>
      </Typography>
      <AllNeedForYourTaskTabs activeTab={activeTab} />
      <AllNeedForYourTaskSelect />
      <div className="3xl:grid-cols-4 grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
        {cards.map((card, index) => {
          return index === 0 ? (
            <AllNeedForYourTaskMobileCard card={card} key={card.id} />
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
        })}
      </div>
    </Section>
  );
}
