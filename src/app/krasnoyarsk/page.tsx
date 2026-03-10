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
    path: 'https://itwebs.ru/krasnoyarsk',
    ru: {
      title:
        'IT-компания в Красноярске: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Красноярск, привет! 👋 Мы — IT-компания с опытом работы в РФ, Европе и США. Разрабатываем сайты, мобильные приложения, ПО, делаем SEO и поддержку. Хотите проект международного уровня без переплат? ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Красноярск',
      'разработка приложений Красноярск',
      'IT компания Красноярск',
      'создание ПО Красноярск',
      'SEO продвижение Красноярск',
      'IT поддержка Красноярск',
    ],
  });
}

export default function KrasnoyarskPage() {
  return (
    <>
      <HeroBlock
        description="Красноярск, привет! 👋 Мы — IT-компания с опытом работы в РФ, Европе и США. Разрабатываем сайты, мобильные приложения, ПО, делаем SEO и поддержку. Хотите проект международного уровня без переплат?"
        fullScreen
        heading="КОМПАНИЯ РАЗРАБОТЧИК ПО В КРАСНОЯРСКЕ"
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
              Мы — IT-компания, которая умеет делать крутые цифровые продукты. Нам доверяют бизнесы
              из Красноярска, Москвы, Европы и США. Почему? Потому что мы не просто пишем код, а
              создаём решения, которые реально приносят прибыль и работают годами. Наша команда
              объединяет экспертизу международного уровня и глубокое понимание локального рынка.
            </p>
            <p className="mb-4 font-bold">Что мы предлагаем бизнесу в Красноярске:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                Разработка сайтов под ключ. Нужен сайт, который будет продавать? Делаем лендинги,
                корпоративные сайты, интернет-магазины и сложные веб-порталы. Красиво, современно, с
                адаптацией под мобильные устройства и заботой о пользователях.
              </li>
              <li>
                Мобильные приложения для iOS и Android. Хотите быть в кармане у клиента? Создаём
                удобные, быстрые и надёжные приложения — от идеи до публикации в магазинах. Опыт
                разработки для западных рынков гарантирует высокое качество и чистый код.
              </li>
              <li>
                Разработка программного обеспечения (ПО). CRM-системы, ERP, сервисы автоматизации,
                интеграции с базами данных — пишем софт, который оптимизирует бизнес-процессы и
                сокращает издержки.
              </li>
              <li>
                SEO-продвижение и оптимизация. Выводим сайты в топ Яндекса и Google по Красноярску,
                России и миру. Работаем с мультиязычными проектами, учитываем особенности разных
                регионов и поисковых систем.
              </li>
              <li>
                IT-консалтинг. Поможем разобраться, какие технологии нужны именно вашему бизнесу,
                спроектируем архитектуру и подскажем, как избежать типовых ошибок.
              </li>
              <li>
                IT-поддержка организаций. Возьмём на себя администрирование серверов, обновление ПО,
                защиту данных и техническое сопровождение. Работаем 24/7, чтобы вы спали спокойно.
              </li>
            </ul>
            <p className="mb-4 font-bold">Почему бизнес выбирает нас?</p>
            <p>
              Мы выросли из сильной технической школы и прошли огонь, воду и медные трубы на
              международных проектах. Это значит, что мы умеем работать по высоким стандартам
              качества, соблюдать сроки и договариваться с заказчиками из разных культур. При этом
              мы отлично понимаем специфику российского бизнеса и не страдаем «звёздной болезнью».
            </p>
            <p className="mt-2">
              Наш подход — погружение в ваш бизнес. Мы не предлагаем шаблонных решений, а ищем
              варианты, которые сработают максимально эффективно именно для вас. Работаем прозрачно:
              фиксируем задачи, показываем промежуточные результаты, не прячем голову в песок, если
              что-то идёт не так.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Красноярске:</b> разработка сайтов,
            приложений, ПО, SEO и поддержка
          </>
        }
      />
    </>
  );
}
