import Link from 'next/link';

import { getDomain } from '@/lib/get-domain';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchAllServices } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

import { SERVICE_WE_PROVIDE, SERVICE_WE_PROVIDE_REGION } from './service-we-provide-config';
import ServiceWeProvideList from './service-we-provide-list';

export default async function ServicesWeProvide({ isRegion = false }: { isRegion?: boolean }) {
  const services = await fetchAllServices();
  const domain = getDomain();
  const namesForFilter = isRegion ? SERVICE_WE_PROVIDE_REGION[domain] : SERVICE_WE_PROVIDE[domain];
  const filterServices = services.filter((item) => namesForFilter.includes(item.title));
  return (
    <Section
      className={cn(
        !isRegion && 'pt-[clamp(86px,6vw,124px)]',
        'flex flex-col items-center gap-[clamp(24px,5vw,46px)]'
      )}
    >
      <Typography className={cn(isRegion ? 'text-foreground2' : 'text-foreground')} variant="h2">
        {isRegion ? (
          <>
            <b className="text-primary">Самые</b> частые обращения к нам
          </>
        ) : (
          <>
            <b className="opacity-80">Наши</b> услуги
          </>
        )}
      </Typography>

      <ServiceWeProvideList filterServices={filterServices} isRegion={isRegion} />
      {filterServices.length > 0 ? (
        <Button asChild variant={isRegion ? 'outline' : 'gray'}>
          <Link href={PAGES_CONFIG.SERVICES}>Посмотреть все</Link>
        </Button>
      ) : (
        <span className="w-[40vw] rounded-full border border-dashed border-white/50 p-4 text-center text-lg text-white/80">
          Услуги не найдены
        </span>
      )}
    </Section>
  );
}
