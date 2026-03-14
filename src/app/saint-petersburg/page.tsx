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
    path: PAGES_CONFIG.SAINT_PETERSBURG,
    ru: {
      title:
        'IT-компания в Санкт-Петербурге: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Мы делаем крутые проекты, SEO-продвижение, консалтинг и поддержку. Разработка сайтов, мобильных приложений и ПО в Санкт-Петербурге. Без лишнего пафоса, зато с душой. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Санкт-Петербург',
      'разработка приложений СПб',
      'IT компания Санкт-Петербург',
      'создание ПО СПб',
      'SEO продвижение СПб',
      'IT поддержка СПб',
    ],
  });
}

export default function SaintPetersburgPage() {
  return (
    <>
      <HeroBlock
        description="Мы делаем крутые проекты, SEO-продвижение, консалтинг и поддержку. Без лишнего пафоса, зато с душой."
        fullScreen
        heading="КОМПАНИЯ РАЗРАБОТЧИК ПО В САНКТ-ПЕТЕРБУРГЕ"
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
              Мы — российская IT-компания с характером. Здесь, на берегах Невы, мы создаём цифровые
              решения, которые реально работают: от небольших сайтов до сложного ПО и мобильных
              приложений. И да, мы знаем толк в хорошем коде и ещё лучшем сервисе.
            </p>
            <p className="mb-4 font-medium">Что мы умеем лучше всего:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> Хотите лаконичный лендинг, мощный
                интернет-магазин или представительский корпоративный портал? Сделаем так, что
                конкуренты в Петербурге обзавидуются.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Чтобы ваши клиенты всегда были на
                связи, а бизнес рос даже в пробках на КАДе.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО).</b> CRM, ERP, автоматизация — напишем
                софт, который оптимизирует ваши бизнес-процессы и сэкономит миллионы.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Выведем ваш сайт в топ Яндекса и Google по
                Петербургу и России. Больше трафика — больше клиентов.
              </li>
              <li>
                <b>IT-консалтинг.</b> Поможем разобраться, какие технологии реально нужны вашему
                бизнесу, а на чём можно сэкономить.
              </li>
              <li>
                <b>IT-поддержка организаций.</b> От администрирования серверов до защиты данных —
                ваш бизнес под надёжным присмотром.
              </li>
            </ul>
            <p className="mb-4 font-medium">Почему выбирают нас в Санкт-Петербурге?</p>
            <p>
              Мы не просто пишем код — мы погружаемся в ваш бизнес, понимаем боли и цели. Каждый
              проект уникален, как разводные мосты. Мы не навязываем лишнего, зато предлагаем то,
              что действительно принесёт прибыль. Работаем прозрачно, тестируем до победного и
              всегда на связи.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Санкт-Петербурге:</b> разработка сайтов,
            приложений, ПО, SEO и поддержка
          </>
        }
      />
    </>
  );
}
