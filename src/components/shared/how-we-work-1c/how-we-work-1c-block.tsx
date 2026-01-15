import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { HOW_WE_WORK_1C_CARDS } from './how-we-work-1c-config';
import HowWeWorkBlockCard from '../how-we-work/how-we-work-block-card';

export default function HowWeWork1cBlock() {
  return (
    <Section className="gap-[48px]" fullScreen={false}>
      <Typography variant="h2">
        <b className="text-primary">Как</b> мы работаем
      </Typography>
      <ul className="flex flex-col gap-[clamp(8px,1.5vw,20px)] sm:flex-row">
        {HOW_WE_WORK_1C_CARDS.map((item, index) => (
          <HowWeWorkBlockCard
            className={(index + 1) % 2 === 0 ? 'bg-background border-4 border-white' : ''}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </Section>
  );
}
