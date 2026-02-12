import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/card-types';

import { OUR_CLIENTS_CONFIG } from './for-who-we-work-config';
import Card from '../../ui/card';

export default function ForWhoWeWorkBlock({ data = OUR_CLIENTS_CONFIG }: { data?: CardTypes[] }) {
  return (
    <Section className="bg-background">
      <Typography variant="h2">
        <b className="text-primary">Для кого</b> мы работаем
      </Typography>

      <div className="3xl:grid-cols-4 mt-[clamp(32px,3vw,46px)] grid grid-cols-1 justify-center gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-2">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
