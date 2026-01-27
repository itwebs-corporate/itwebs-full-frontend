import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { STAT_CARDS } from './we-in-numbers-config';

export default function WeInNumbers() {
  return (
    <Section className="bg-primary gap-[clamp(24px,4vw,48px)] rounded-[24px] py-[clamp(86px,8vw,124px)]">
      <Typography className="text-white" variant="h2">
        <b className="text-white/80">Мы</b> в цифрах
      </Typography>
      <ul className="flex flex-col gap-[clamp(14px,2vw,20px)] sm:flex-row">
        {STAT_CARDS.map((item) => (
          <li
            className="flex flex-col gap-[clamp(12px,1.6vw,14px)] rounded-[24px] bg-white/10 p-[24px]"
            key={item.id}
          >
            <div className="text-secondary font-family text-[72px] leading-[100%] font-extrabold">
              {item.value}
            </div>
            <div className="font-second-family text-[20px]">{item.description}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
