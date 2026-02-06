import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import ServicesWeProvideCard from './services-we-provide-card';
import { OUR_SERVICES_DEFAULT, OUR_SERVICES_MOBILE_DEFAULT } from './services-we-provide-config';
import ServicesWeProvideMobileCard from './services-we-provide-mobile-card';

export default function ServicesWeProvide({ isRegion = false }: { isRegion?: boolean }) {
  return (
    <Section
      className={cn(
        !isRegion && 'pt-[clamp(86px,6vw,124px)]',
        'flex flex-col items-center gap-[clamp(24px,5vw,46px)]'
      )}
    >
      <Typography className={cn(isRegion ? 'text-foreground2' : 'text-foreground')} variant="h2">
        <b className={cn(isRegion ? 'text-primary' : 'opacity-80')}>Услуги</b> которые мы оказываем
      </Typography>

      <div className="3xl:grid-cols-4 mt-[clamp(24px,3vw,48px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-2">
        {OUR_SERVICES_DEFAULT.map((item) => (
          <ServicesWeProvideCard isRegion item={item} key={item.title} />
        ))}
        {OUR_SERVICES_MOBILE_DEFAULT.map((item) => (
          <ServicesWeProvideMobileCard isRegion item={item} key={item.title} />
        ))}
      </div>
      <Button asChild variant={isRegion ? 'outline' : 'gray'}>
        <Link href={PAGES_CONFIG.SERVICES}>Все услуги</Link>
      </Button>
    </Section>
  );
}
