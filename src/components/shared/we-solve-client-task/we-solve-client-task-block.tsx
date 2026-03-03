import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchAllCases } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

import { WeSolceClientTaskCarousel } from './we-solve-client-task-carousel';

export default async function WeSolveClientTaskBlock() {
  const cases = await fetchAllCases();
  const result = cases.length > 0 ? cases : [];
  return (
    <Section className="bg-background gap-[clamp(32px,2.2vw,48px)]">
      <Typography variant="h2">
        <b className="text-primary">Мы решаем</b> задачи <br className="inline sm:hidden" />
        клиентов
      </Typography>

      <WeSolceClientTaskCarousel result={result} />

      {result.length > 0 && (
        <Button asChild variant="outline">
          <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
        </Button>
      )}
    </Section>
  );
}
