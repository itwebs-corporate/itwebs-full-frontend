import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import WhatWeTaskSolveRegionCard from './what-we-task-solve-region-card';

export default async function WhatWeTaskSolveRegionBlock() {
  const filterGroups = [
    { title: 'Услуги в области 1С', link: '/services?q=1с' },
    { title: 'Сервера и поддержка', link: '/services?q=support' },
    { title: 'Веб разработка', link: '/services?q=web' },
    { title: 'Интеграция и настройка CRM', link: '/services?q=crm' },
    { title: 'Разработка мобильных приложений', link: '/services?q=mobile' },
    { title: 'Цифровизация и автоматизация', link: '/services?q=automatization' },
  ];
  return (
    <Section className="bg-primary gap-[clamp(24px,3.2vw,48px)] rounded-[24px] py-[clamp(86px,6vw,124px)]">
      <Typography className="text-white" variant="h2">
        <b className="text-white/80">Области нашей</b> профессиональной экспертизы
      </Typography>
      <ul className="flex flex-wrap justify-center gap-[clamp(14px,2vw,20px)]">
        {filterGroups.map((item) => (
          <WhatWeTaskSolveRegionCard item={item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
}
