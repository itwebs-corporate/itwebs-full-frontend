import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/global-types';

import { OUR_CLIENTS_CONFIG } from './our-clients-config';
import Card from '../../ui/card';

// TODO: поменять название блока - так как не понятно
export default function OurClientsBlock({ data = OUR_CLIENTS_CONFIG }: { data?: CardTypes[] }) {
  return (
    <Section className="bg-background">
      <Typography variant="h2">
        <b className="text-primary">Для кого</b> мы работаем
      </Typography>

      <div className="mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-[1fr_1fr_1fr_1fr]">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
