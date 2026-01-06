import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import WhyChooseBlockCard from './why-choose-block-card';
import { WHY_CHOOSE_CONFIG } from './why-choose-block-config';

export default function WhyChooseBlock() {
  return (
    <Section className="bg-background" fullScreen={false}>
      <Typography variant="h2">
        <b className="text-primary">Почему</b> выбирают нас
      </Typography>

      <div className="mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-2 xl:grid-cols-3">
        {WHY_CHOOSE_CONFIG.map((item) => (
          <WhyChooseBlockCard item={item} key={item.id} />
        ))}
        <div className="flex min-h-[clamp(271px,20vw,508px)] w-full flex-col rounded-[clamp(12px,2vw,24px)] rounded-tl-none bg-white p-[clamp(16px,2vw,20px)] sm:col-span-2 xl:col-span-2">
          <Media
            className="-mt-5 -ml-5 h-[clamp(131px,18vw,370px)] w-[clamp(121px,16vw,344px)] shrink-0"
            image={{ src: '/why-choose/goal.png', alt: 'goal' }}
          />

          <Typography variant="h3">Думаем как клиент</Typography>
          <Typography className="mt-[clamp(12px,1vw,16px)]" variant="p2">
            Смотрим на задачу с вашей стороны и предлагаем удобное решение, а не просто «технически
            правильное».
          </Typography>
        </div>
      </div>
    </Section>
  );
}
