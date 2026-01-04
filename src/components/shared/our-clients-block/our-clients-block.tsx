import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { OUR_CLIENTS_CONFIG } from './our-clients-config';
import Card from '../../ui/card';

export default function OurClientsBlock() {
  return (
    <Section className="bg-background" fullScreen={false}>
      <Typography variant="h2">
        <b className="text-primary">Для кого</b> мы работаем
      </Typography>

      <div className="xxs:grid-cols-[1fr_1fr_1fr_1fr] mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)]">
        {OUR_CLIENTS_CONFIG.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
