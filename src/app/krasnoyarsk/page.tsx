import { Metadata } from 'next';
import Link from 'next/link';

import { buildPageMetadata } from '@/lib/seo';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work/for-who-we-work-block';
import HeroBlock from '@/components/shared/hero/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
import SeoTextBlock from '@/components/shared/seo-text/seo-text-block';
import ServicesWeProvide from '@/components/shared/services-we-provide/services-we-provide';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task/we-solve-client-task-block';
import WhatWeTaskSolveRegionBlock from '@/components/shared/what-we-tasks-solve/what-we-task-solve-region-block';
import WhyChooseUsRegionBlock from '@/components/shared/why-choose/why-choose-us-region-block';
import { Button } from '@/components/ui/button';

import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: 'https://itwebs.ru/moscow',
    ru: {
      title: 'IT-компания в Москве: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Разработка сайтов, мобильных приложений и ПО в Москве. IT-компания, где не просто обещают, а делают. SEO, оптимизация, консалтинг, поддержка. Приходите — обсудим, как сделать ваш бизнес круче. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Москва',
      'разработка приложений Москва',
      'IT компания Москва',
      'создание ПО Москва',
      'SEO продвижение Москва',
      'IT поддержка Москва',
      'заказать разработку Москва',
    ],
  });
}

export default function MoscowPage() {
  return (
    <>
      <HeroBlock
        description="Разработка сайтов, мобильных приложений и ПО в Москве. IT-компания, где не просто обещают, а делают. SEO, оптимизация, консалтинг, поддержка. Приходите — обсудим, как сделать ваш бизнес круче."
        fullScreen
        heading="Компания разработчик ПО в Москве и области"
      >
        <Button asChild variant="secondary">
          <Link href={PAGES_CONFIG.SERVICES_1C}>Консультация 1С</Link>
        </Button>
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
        </Button>
      </HeroBlock>
      <ForWhoWeWorkBlock isShowMedia />
      <WhatWeTaskSolveRegionBlock />
      <ServicesWeProvide isRegion />
      <WhyChooseUsRegionBlock />
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      <SeoTextBlock
        description={
          <>
            <p className="mb-4">
              Мы — российская IT-компания, специализирующаяся на полном цикле разработки
              программного обеспечения, веб-сайтов и мобильных приложений. Наша экспертиза помогает
              бизнесу столицы и регионов внедрять современные технологии для роста и автоматизации
              процессов.
            </p>
            <p className="mb-4 font-medium">Что мы предлагаем:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                Разработка сайтов под ключ: от лендингов до крупных интернет-магазинов и
                корпоративных порталов.
              </li>
              <li>
                Создание мобильных приложений для iOS и Android, а также кроссплатформенных решений.
              </li>
              <li>
                Разработка программного обеспечения (ПО), включая CRM, ERP и другие системы,
                адаптированные под ваши бизнес-задачи.
              </li>
              <li>
                Профессиональный IT-консалтинг: поможем выбрать оптимальную архитектуру проекта,
                технологии и подрядчиков.
              </li>
              <li>
                SEO-продвижение и оптимизация сайтов для лидерства в поисковой выдаче и увеличения
                целевого трафика.
              </li>
              <li>
                Комплексная IT-поддержка организаций: администрирование серверов, обновление ПО,
                защита данных и оперативное решение проблем.
              </li>
            </ul>
            <p className="mb-4 font-medium">Почему бизнес выбирает нас?</p>
            <p>
              Мы не просто разрабатываем продукты — мы создаем решения, которые приносят прибыль.
              Учитываем специфику московского рынка, конкурентную среду и потребности вашей целевой
              аудитории. Каждый этап работы сопровождается прозрачной отчётностью, а готовый проект
              проходит тщательное тестирование и оптимизацию.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Москве:</b> разработка сайтов, приложений, ПО,
            SEO и поддержка
          </>
        }
      />
    </>
  );
}
