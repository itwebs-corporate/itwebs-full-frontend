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
    path: ' https://itwebs.by/vitebsk',
    by: {
      title: 'IT-компания в Витебске: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Витебск, ты искусство! Мы — IT-компания с опытом работы в Европе и США. Делаем сайты, приложения, ПО, SEO и поддержку. Хотите, чтобы ваш бизнес звучал по-новому? Заходите обсудить. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Витебск',
      'разработка приложений Витебск',
      'IT компания Витебск',
      'создание ПО Витебск',
      'SEO продвижение Витебск',
      'IT поддержка Витебск',
      'заказать разработку Витебск',
    ],
  });
}

export default function VitebskPage() {
  return (
    <>
      <HeroBlock
        description="Витебск, ты искусство! 🎨 Мы — IT-компания с опытом в Европе и США. Делаем сайты, мобильные приложения, ПО, SEO и поддержку. Хотите, чтобы ваш бизнес звучал по-новому? Заходите обсудить"
        fullScreen
        heading="Компания разработчик ПО в Витебске"
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
              Мы — IT-компания с белорусскими корнями и международным опытом. За нашими плечами
              проекты для клиентов из РФ, Европы и США. Теперь мы готовы предложить свои услуги
              бизнесу в Витебске. Почему нам можно доверять? Потому что мы сочетаем сильную
              техническую экспертизу с пониманием локальных особенностей.
            </p>
            <p className="mb-4 font-bold">Что мы предлагаем бизнесу в Витебске:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> Нужен сайт, который будет продавать? Делаем
                лендинги, корпоративные сайты, интернет-магазины и сложные веб-порталы. Красиво,
                современно, с адаптацией под мобильные устройства.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Хотите быть в кармане у клиента?
                Создаём удобные, быстрые и надёжные приложения — от идеи до публикации в магазинах.
                Опыт разработки для западных рынков гарантирует высокое качество.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО)</b> CRM, ERP, системы автоматизации,
                интеграции с базами данных — пишем софт, который оптимизирует бизнес-процессы и
                сокращает издержки.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Выводим сайты в топ Яндекса и Google по
                Витебску, Беларуси и миру. Работаем с мультиязычными проектами, учитываем
                особенности разных регионов.
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
            <p className="mb-4 font-bold">Почему выбирают нас в Витебске?</p>
            <p>
              Мы прошли международную школу и научились работать на высочайшем уровне. При этом мы
              свои — понимаем местные реалии, не навязываем лишнего и всегда на связи. Наш подход —
              индивидуальный. Мы не предлагаем шаблонов, а ищем решения, которые сработают именно
              для вашего бизнеса.
            </p>
            <p className="mb-2">
              Работаем честно: фиксируем задачи, показываем промежуточные результаты, не бросаем
              после сдачи.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Витебске:</b> разработка сайтов, приложений,
            ПО, SEO и поддержка
          </>
        }
      />
    </>
  );
}
