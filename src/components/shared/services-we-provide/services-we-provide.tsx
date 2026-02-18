import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { fetchAllServices } from '@/app/api/server';
import { PAGES_CONFIG } from '@/config/pages-config';

import ServicesWeProvideCard from './services-we-provide-card';
import ServicesWeProvideMobileCard from './services-we-provide-mobile-card';

export default async function ServicesWeProvide({ isRegion = false }: { isRegion?: boolean }) {
  const services = await fetchAllServices();
  const namesForFilter = [
    'Разработка интернет-магазина',
    'Разработка мобильного приложения (ios + android)',
    'Разработка многостраничных сайтов',
    'Интеграция, настройка и подключение Битрикс24',
  ];
  const filterServices = services.filter((item) => namesForFilter.includes(item.title));
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

      <div className="3xl:grid-cols-4 mt-[clamp(24px,3vw,48px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)]! sm:grid-cols-2">
        {filterServices.map((item) => (
          <ServicesWeProvideCard isRegion={isRegion} item={item} key={item.title} />
        ))}
        {filterServices.map((item) => (
          <ServicesWeProvideMobileCard isRegion={isRegion} item={item} key={item.title} />
        ))}
      </div>
      {filterServices.length > 0 ? (
        <Button asChild variant={isRegion ? 'outline' : 'gray'}>
          <Link href={PAGES_CONFIG.SERVICES}>Все услуги</Link>
        </Button>
      ) : (
        <span className="w-[40vw] rounded-full border border-dashed border-white/50 p-4 text-center text-lg text-white/80">
          Услуги не найдены
        </span>
      )}
    </Section>
  );
}
