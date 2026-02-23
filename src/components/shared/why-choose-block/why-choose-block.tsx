import { Media } from '@/components/ui/media';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import WhyChooseBlockCard from './why-choose-block-card';
import { WHY_CHOOSE_CONFIG } from './why-choose-block-config';

export default function WhyChooseBlock() {
  return (
    <Section className="bg-background relative">
      <div className="absolute top-1/2 left-1/3 z-20 hidden -translate-x-1/4 translate-y-[40%] xl:block">
        <Media
          className="pointer-events-none h-[65px] w-[65px]"
          image={{ src: '/why-choose/green-star.svg', alt: 'green-star' }}
        />
      </div>
      <Typography variant="h2">
        <b className="text-primary">Почему</b> выбирают нас
      </Typography>
      <ul className="mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] sm:grid-cols-2 xl:grid-cols-3">
        {WHY_CHOOSE_CONFIG.map((item) => (
          <WhyChooseBlockCard item={item} key={item.id} />
        ))}
        <li className="flex min-h-[clamp(271px,20vw,508px)] w-full flex-col rounded-[clamp(12px,2vw,24px)] rounded-tl-none bg-white p-[clamp(16px,2vw,20px)] sm:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1">
          <Media
            className="-mt-5 -ml-5 h-[clamp(131px,18vw,370px)] w-[clamp(121px,16vw,344px)] shrink-0"
            image={{ src: '/emoji/main-goal.png', alt: 'goal' }}
          />

          <Typography variant="h3">Думаем как клиент</Typography>
          <Typography className="mt-[clamp(12px,1vw,16px)]" variant="p2">
            Смотрим на задачу с вашей стороны и предлагаем удобное решение, а не просто «технически
            правильное».
          </Typography>
        </li>
      </ul>
    </Section>
  );
}
