import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import WhyChooseBlockCard from './why-choose-block-card';

type Card = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const WHY_CHOOSE_CONFIG: Card[] = [
  {
    id: 1,
    icon: '/emoji/hands.png',
    title: 'Полная ответственность за результат',
    description:
      'Мы заранее согласовываем и утверждаем юридически результат, который вы получаете после обращения за оказываемыми нами услугами. Несем ответственность и предоставляем именно то решение, которое вы хотели получить.',
  },
  {
    id: 2,
    icon: '/emoji/times.png',
    title: 'Соблюдаем сроки и договоренности',
    description:
      'Наша компания достаточно гибкая под нужды наших клиентов и способны оказывать услуги на тех условиях, которые мы с вами утвердили во время переговоров в договоре. Наша цель сделать так, чтобы вы получили запланированный продукт на ваших условиях в утвержденные сроки и даты.',
  },
  {
    id: 3,
    icon: '/emoji/message.png',
    title: 'Поддержка и консультации на всех этапах',
    description:
      'Команда поддержки ITWEBS готова прийти к вам на помощь в любое время суток в случае непредвиденных и срочных обстоятельств. Мы ответственны за наш результат и никогда не откажем в помощи по продукту, который мы реализовали для вас.',
  },
];

export default function WhyChooseUsRegionBlock() {
  return (
    <Section className="bg-primary gap-[24px] rounded-[24px] py-[86px] sm:gap-[48px] sm:py-[124px]">
      <Typography className="text-white" variant="h2">
        <b className="opacity-80">Почему</b> выбирают нас
      </Typography>
      <ul className="flex flex-col gap-[14px] sm:flex-row sm:gap-[20px]">
        {WHY_CHOOSE_CONFIG.map((item) => (
          <WhyChooseBlockCard isRegion item={item} key={item.id} />
        ))}
      </ul>
    </Section>
  );
}
