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
    path: 'https://itwebs.ru/ekaterinburg',
    ru: {
      title:
        'IT-компания в Екатеринбурге: разработка сайтов, приложений, ПО, SEO и поддержка | ITWEBS',
      description:
        'В Екатеринбурге не только заводы — здесь делают крутые сайты и приложения! Мы — IT-компания с международным опытом, разрабатываем ПО, мобильные приложения, продвигаем и поддерживаем бизнес. ITWEBS.',
    },
    'key-words': [
      'разработка сайтов Екатеринбург',
      'разработка приложений Екатеринбург',
      'IT компания Екатеринбург',
      'создание ПО Екатеринбург',
      'SEO продвижение Екатеринбург',
      'IT поддержка Екатеринбург',
    ],
  });
}

export default function EkaterinburgPage() {
  return (
    <>
      <HeroBlock
        description="В Екатеринбурге не только заводы — здесь делают крутые сайты и приложения! Мы — IT-компания, которая разрабатывает ПО, мобильные приложения, продвигает и поддерживает бизнес."
        fullScreen
        heading="КОМПАНИЯ РАЗРАБОТЧИК ПО В ЕКАТЕРИНБУРГЕ"
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
              Мы — IT-компания с белорусскими корнями и международным размахом. Родом из Беларуси,
              мы уже много лет успешно работаем на рынках России, Европы и США. Теперь готовы
              предложить свои услуги бизнесу в Екатеринбурге. Почему нам можно доверять? Потому что
              мы сочетаем сильную техническую школу (спасибо БГУИР и Академгородку) с пониманием
              глобальных трендов и требований.
            </p>
            <p className="mb-4 font-medium">Что мы предлагаем бизнесу в Екатеринбурге:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <b>Разработка сайтов под ключ.</b> От визиток до сложных интернет-магазинов и
                порталов. Сайты, которые приносят клиентов, а не просто пылятся в сети.
              </li>
              <li>
                <b>Мобильные приложения для iOS и Android.</b> Создаём приложения, которыми удобно
                пользоваться. Опыт разработки для европейских и американских заказчиков гарантирует
                высокое качество и чистый код.
              </li>
              <li>
                <b>Разработка программного обеспечения (ПО).</b> CRM, ERP, системы автоматизации —
                пишем софт, который реально оптимизирует бизнес-процессы и экономит ресурсы.
              </li>
              <li>
                <b>SEO-продвижение и оптимизация.</b> Знаем, как вывести сайт в топ Яндекса и Google
                не только в РФ, но и в Европе и США. Мультиязычная и мультирегиональная оптимизация
                — наш конёк.
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
            <p className="mb-4 font-medium">Почему выбирают нас?</p>
            <p className="mb-4">
              Мы не просто разработчики — мы партнёры, которые погружаются в ваш бизнес и предлагают
              решения, проверенные на международных рынках. Белорусская школа программирования
              славится надёжностью, а опыт работы с США и ЕС приучил нас к высочайшим стандартам
              качества. При этом мы понимаем специфику российского рынка и умеем говорить с местным
              бизнесом на одном языке.
            </p>
            <p>
              Работаем прозрачно, без скрытых платежей и сюрпризов. Чёткие сроки, регулярная
              отчётность, гибкость и желание сделать ваш проект лучшим.
            </p>
          </>
        }
        title={
          <>
            <b className="text-primary">IT-компания в Екатеринбурге:</b> разработка сайтов,
            приложений, ПО, SEO и поддержка
          </>
        }
      />
    </>
  );
}
