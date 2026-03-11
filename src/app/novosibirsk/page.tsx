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
    path: PAGES_CONFIG.NOVOSIBIRSK,
    ru: {
      title:
        'IT-компания в Новосибирске: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Согреем вашими проектами! 🔥 IT-компания в Новосибирске, где делают сайты, мобильные приложения, ПО, SEO, консалтинг и поддержку. Забудьте про «дорого и долго» — у нас по-сибирски честно, быстро и с душой. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Новосибирск',
      'разработка приложений Новосибирск',
      'IT компания Новосибирск',
      'создание ПО Новосибирск',
      'SEO продвижение Новосибирск',
      'IT поддержка Новосибирск',
    ],
  });
}

export default function NovosibirskPage() {
  return (
    <>
      <HeroBlock
        description="Согреем вашими проектами! 🔥 IT-компания, где делают сайты, мобильные приложения, ПО, SEO, консалтинг и поддержку. Забудьте про «дорого и долго» — у нас по-сибирски честно, быстро и с душой."
        fullScreen
        heading="КОМПАНИЯ РАЗРАБОТЧИК ПО В НОВОСИБИРСКЕ"
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
              Мы — российская IT-компания, которая знает о разработке всё. И даже немного больше.
              Здесь, в центре Сибири, мы создаём цифровые продукты, которые работают на вас: от
              лендингов до сложного ПО, от мобильных приложений до полной автоматизации бизнеса.
            </p>
            <p className="mb-4 font-medium">Что мы предлагаем:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> Нужен имиджевый сайт, интернет-магазин или
                корпоративный портал? Сделаем так, что конкуренты в Новосибирске обзавидуются.
                Адаптивно, современно, с учётом ваших бизнес-целей.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Хотите, чтобы клиенты носили ваш
                бизнес в кармане? Создадим удобное, красивое и быстрое приложение, которое не стыдно
                показать.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО).</b> CRM, ERP, системы учёта,
                автоматизация складов — напишем софт, который оптимизирует ваши процессы и сэкономит
                миллионы.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Выведем ваш сайт в топ Яндекса и Google по
                Новосибирску и России. Больше трафика — больше клиентов.
              </li>
              <li>
                <b>IT-консалтинг.</b> Поможем разобраться, какие технологии реально нужны вашему
                бизнесу, а на чём можно сэкономить. Без навязывания лишнего.
              </li>
              <li>
                <b>IT-поддержка организаций.</b> От администрирования серверов до защиты данных —
                ваш бизнес под надёжным присмотром 24/7.
              </li>
            </ul>
            <p className="mb-4 font-medium">Почему выбирают нас в Новосибирске?</p>
            <p className="mb-4">
              Мы выросли в Академгородке и впитали лучшие традиции сибирской IT-школы:
              фундаментальность, надёжность и инновации. При этом мы не теоретики — у нас за плечами
              десятки успешных проектов для бизнеса разного масштаба. Мы не просто пишем код, а
              вникаем в ваш бизнес, чтобы предложить решение, которое принесёт реальную прибыль.
            </p>
            <p>
              Работаем прозрачно: фиксируем сроки, отчитываемся на каждом этапе, тестируем до
              победного. И да, мы всегда на связи — никаких «менеджер занят, перезвонит завтра».
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Новосибирске:</b> разработка сайтов,
            приложений, ПО, SEO и поддержка
          </>
        }
      />
    </>
  );
}
