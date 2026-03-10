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
    path: ' https://itwebs.by/homel',
    by: {
      title: 'IT-компания в Гомеле: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Гомель, привет! Мы — IT-компания с опытом работы в Европе и США. Разрабатываем сайты, приложения, ПО, SEO и поддержку. Хотите международный уровень по доступным ценам? Давайте обсудим. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Гомель',
      'разработка приложений Гомель',
      'IT компания Гомель',
      'создание ПО Гомель',
      'SEO продвижение Гомель',
      'IT поддержка Гомель',
      'заказать разработку Гомель',
    ],
  });
}

export default function HomelPage() {
  return (
    <>
      <HeroBlock
        description="Гомель, привет! 👋 Мы — IT-компания с опытом работы в Европе и США. Разрабатываем сайты, мобильные приложения, ПО, делаем SEO и поддержку. Хотите международный уровень по доступным ценам? Давайте обсудим"
        fullScreen
        heading="Компания разработчик ПО в Гомеле"
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
              Мы — IT-компания, которая родилась в Беларуси и завоевала доверие клиентов по всему
              миру. Нам доверяют бизнесы из Гомеля, Москвы, Берлина и Сан-Франциско. Почему? Потому
              что мы умеем делать качественные продукты, которые решают реальные задачи и приносят
              прибыль.
            </p>
            <p className="mb-4 font-bold">Что мы предлагаем бизнесу в Гомеле:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> Нужен сайт, который будет работать на вас? Делаем
                лендинги, корпоративные сайты, интернет-магазины и сложные веб-порталы. Красиво,
                современно, с адаптацией под мобильные устройства.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Хотите быть в кармане у клиента?
                Создаём удобные, быстрые и надёжные приложения — от идеи до публикации в магазинах.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО)</b> CRM, ERP, системы автоматизации,
                интеграции с базами данных — пишем софт, который оптимизирует бизнес-процессы и
                сокращает издержки.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> - Выводим сайты в топ Яндекса и Google по
                Гомелю, Беларуси и миру. Работаем с мультиязычными проектами, учитываем особенности
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
            <p className="mb-4 font-bold">Почему выбирают нас в Гомеле?</p>
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
            <b className="text-primary">IT-компания в Гомеле:</b> разработка сайтов, приложений, ПО,
            SEO и поддержка
          </>
        }
      />
    </>
  );
}
