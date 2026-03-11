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
    path: PAGES_CONFIG.MINSK,
    by: {
      title: 'IT-компания в Минске: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Минск, ты ж IT-столица! Мы местная команда с опытом работы в Европе и США. Разрабатываем сайты, приложения, ПО, SEO и поддержку. Хотите крутой проект без понтов? Готовы оценить. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Минск',
      'разработка приложений Минск',
      'IT компания Минск',
      'создание ПО Минск',
      'SEO продвижение Минск',
      'IT поддержка Минск',
      'заказать разработку Минск',
    ],
  });
}

export default function MinskPage() {
  return (
    <>
      <HeroBlock
        description="Минск, ты ж IT-столица! 🤘 Мы местная команда с опытом работы в Европе и США. Разрабатываем сайты, мобильные приложения, ПО, делаем SEO и поддерживаем. Хотите крутой проект без понтов? Готовы оценить"
        fullScreen
        heading="Компания разработчик ПО в Минске"
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
              Мы — международная IT-компания. Родом из Беларуси, мы работаем с клиентами из РФ,
              Европы и США, а значит, знаем, как создавать продукты, которые конкурентоспособны на
              любом рынке. При этом мы отлично понимаем локальную специфику и готовы предложить
              бизнесу в Минске решения, которые реально работают.
            </p>
            <p className="mb-4 font-bold">Наши услуги для вас:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> От имиджевых лендингов до сложных
                интернет-магазинов и корпоративных порталов. Делаем сайты, которые приносят
                клиентов, а не просто висят в сети.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Создаём удобные, быстрые и красивые
                приложения — от идеи до публикации в App Store и Google Play. Опыт работы с
                западными заказчиками гарантирует высокое качество и чистый код.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО)</b> CRM, ERP, системы автоматизации,
                интеграции с базами данных — пишем софт, который оптимизирует бизнес-процессы и
                сокращает издержки.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Выводим сайты в топ Яндекса и Google по
                Минску, Беларуси и миру. Работаем с мультиязычными проектами и учитываем особенности
                разных регионов.
              </li>
              <li>
                <b>IT-консалтинг.</b> Поможем разобраться, какие технологии нужны именно вашему
                бизнесу, спроектируем архитектуру и подскажем, как избежать типовых ошибок.
              </li>
              <li>
                <b>IT-поддержка организаций.</b> Возьмём на себя администрирование серверов,
                обновление ПО, защиту данных и техническое сопровождение. Работаем 24/7.
              </li>
            </ul>
            <p className="mb-4 font-bold">Почему выбирают нас в Минске?</p>
            <p>
              Мы выросли из сильной технической школы и прошли десятки успешных проектов на
              международном уровне. Это значит, что мы привыкли к высоким стандартам качества,
              соблюдению сроков и прозрачной работе. При этом мы свои в доску — понимаем местный
              бизнес, говорим на одном языке и не грузим заумными терминами.
            </p>
            <p className="mb-2">
              Наш подход — глубокое погружение в ваш проект. Мы не предлагаем шаблонов, а ищем
              решения, которые сработают максимально эффективно именно для вас. Работаем честно:
              фиксируем задачи, показываем результаты, не бросаем после сдачи.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Минске:</b> разработка сайтов, приложений, ПО,
            SEO и поддержка
          </>
        }
      />
    </>
  );
}
