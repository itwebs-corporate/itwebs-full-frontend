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
    title: 'Берём ответственность за результат',
    description:
      'Не перекладываем задачи на клиента. Сами уточняем детали, предлагаем решения и доводим проект до нужного результата.',
  },
  {
    id: 2,
    icon: '/emoji/times.png',
    title: 'Соблюдаем сроки и договорённости',
    description:
      'Ценим ваше время: работаем по согласованному плану, без затяжек и внезапных «доработок».',
  },

  {
    id: 3,
    icon: '/emoji/message.png',
    title: 'Всегда на связи и поддерживаем',
    description:
      'Отвечаем на вопросы, объясняем, помогаем после запуска. Вы не остаётесь один на один с техническими моментами.',
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
