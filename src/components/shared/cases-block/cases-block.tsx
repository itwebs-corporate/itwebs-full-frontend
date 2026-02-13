import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchAllCases } from '@/app/api/server';

import { CASES_MOCK } from './case-mock-config';
import WeSolveClientTaskCard from '../we-solve-client-task-block/we-solve-client-task-card';

export default async function CasesBlock() {
  const cases = await fetchAllCases();
  const result = cases.length < 0 ? cases : CASES_MOCK;
  return (
    <Section className="mb-[clamp(86px,9vw,146px)] gap-[clamp(32px,5vw,64px)]">
      <Typography variant="h2">
        <b className="text-primary">Как мы</b> решаем <br className="block sm:hidden" /> задачи
        клиентов
      </Typography>
      <ul className="flex max-w-[1800px] flex-col gap-[clamp(14px,6vw,48px)]">
        {result.map((card) => (
          <WeSolveClientTaskCard item={card} key={card.id} />
        ))}
      </ul>
    </Section>
  );
}
