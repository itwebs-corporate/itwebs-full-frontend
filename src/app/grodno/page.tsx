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
    path: PAGES_CONFIG.GRODNO,
    by: {
      title: 'IT-компания в Гродно: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'Гродно, ты крут! Мы — IT-компания с опытом работы в Европе и США. Разрабатываем сайты, приложения, ПО, SEO и поддержку. Хотите проект, который выделит вас? Заходите обсудить. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Брест',
      'разработка приложений Брест',
      'IT компания Брест',
      'создание ПО Брест',
      'SEO продвижение Брест',
      'IT поддержка Брест',
      'заказать разработку Брест',
    ],
  });
}

export default function GrodnoPage() {
  return (
    <>
      <HeroBlock
        description="Гродно, ты крут! 🤘 Мы — IT-компания с опытом работы в Европе и США. Разрабатываем сайты, мобильные приложения, ПО, делаем SEO и поддержку. Хотите проект, который выделит вас среди конкурентов? Заходите обсудить"
        fullScreen
        heading="Компания разработчик ПО в Гродно"
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
              Мы — IT-компания с белорусскими корнями и международным размахом. Нам доверяют бизнесы
              из Гродно, Москвы, Варшавы и Нью-Йорка. Почему? Потому что мы не просто пишем код, а
              создаём решения, которые реально приносят прибыль и работают годами. Наша команда
              объединяет экспертизу международного уровня и глубокое понимание локального рынка.
            </p>
            <p className="mb-4 font-bold">Что мы предлагаем бизнесу в Гродно:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> Создаём приложения, которыми удобно пользоваться.
                Опыт разработки для европейских и американских заказчиков гарантирует высокое
                качество.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Хотите быть в кармане у клиента?
                Создаём удобные, быстрые и надёжные приложения — от идеи до публикации в магазинах.
                Опыт разработки для западных рынков гарантирует высокое качество.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО)</b> CRM, ERP, системы автоматизации —
                пишем софт, который реально оптимизирует бизнес-процессы и экономит ресурсы.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Знаем, как вывести сайт в топ Яндекса и Google
                не только в Беларуси, но и в Европе и США. Мультиязычная и мультирегиональная
                оптимизация — наш конёк.
              </li>
              <li>
                <b>IT-консалтинг.</b> Поможем выбрать правильные технологии и архитектуру, опираясь
                на лучшие мировые практики.
              </li>
              <li>
                <b>IT-поддержка организаций.</b> Обеспечим стабильную работу вашей
                IT-инфраструктуры, чтобы вы могли спать спокойно.
              </li>
            </ul>
            <p className="mb-4 font-bold">Почему выбирают нас в Гродно?</p>
            <p>
              Мы не просто разработчики — мы партнёры, которые погружаются в ваш бизнес и предлагают
              решения, проверенные на международных рынках. Белорусская школа программирования
              славится надёжностью, а опыт работы с США и ЕС приучил нас к высочайшим стандартам
              качества. При этом мы понимаем специфику белорусского рынка и умеем говорить с местным
              бизнесом на одном языке.
            </p>
            <p className="mb-2">
              Работаем прозрачно, без скрытых платежей и сюрпризов. Чёткие сроки, регулярная
              отчётность, гибкость и желание сделать ваш проект лучшим.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Гродно:</b> разработка сайтов, приложений, ПО,
            SEO и поддержка
          </>
        }
      />
    </>
  );
}
