import AllNeedForYourTaskBlock from '@/components/shared/all-need-for-your-task-block/all-need-for-your-task-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';

import { SERVICES_CARDS } from '@/config/services-mock-config';
type Props = {
  searchParams?: Promise<{ q?: string }>;
};

type CardsKey = keyof typeof SERVICES_CARDS;

function getCardsKey(q?: string): CardsKey {
  if (q && q in SERVICES_CARDS) return q as CardsKey;
  return 'services-1c';
}

export default async function ServicesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const key = getCardsKey(sp?.q);
  const cards = SERVICES_CARDS[key];
  return (
    <>
      <HeroBlock fullScreen={false} heading="Услуги ITWEBS" />
      <AllNeedForYourTaskBlock cards={cards} searchParams={key} />
    </>
  );
}
