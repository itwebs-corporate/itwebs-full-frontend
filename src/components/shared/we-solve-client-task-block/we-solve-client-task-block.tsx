import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import { WeSolceClientTaskCarousel } from './we-solve-client-task-carousel';

export default function WeSolveClientTaskBlock() {
  return (
    <Section className="bg-background gap-[clamp(32px,2.2vw,48px)]" fullScreen={false}>
      <Typography variant="h2">
        <b className="text-primary">Мы решаем</b> задачи <br className="xxs:hidden inline" />
        клиентов
      </Typography>

      <WeSolceClientTaskCarousel />

      <Button asChild variant="outline">
        <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
      </Button>
    </Section>
  );
}
