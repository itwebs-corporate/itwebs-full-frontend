import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchAllCases } from '@/app/api/server';

import CaseCard from '../we-solve-client-task/case-card';

export default async function CasesBlock() {
  const cases = await fetchAllCases();
  const result = cases.length > 0 ? cases : [];
  return (
    <Section className="mb-[clamp(86px,9vw,146px)] gap-[clamp(32px,5vw,64px)]">
      <Typography variant="h2">
        <b className="text-primary">Как мы</b> решаем <br className="block sm:hidden" /> задачи
        клиентов
      </Typography>
      <ul className="flex max-w-[1800px] flex-col gap-[clamp(14px,6vw,48px)]">
        {result.length > 0 ? (
          result.map((card) => <CaseCard item={card} key={card.id} />)
        ) : (
          <li className="text-foreground3/50 w-[40vw] rounded-full border border-dashed border-gray-400 p-4 text-center text-lg">
            Мы добавим наши кейсы чуть позже
          </li>
        )}
      </ul>
    </Section>
  );
}
