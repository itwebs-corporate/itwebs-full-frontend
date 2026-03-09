import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { buildPageMetadata } from '@/lib/seo';

import ForWhoWeWorkBlock from '@/components/shared/for-who-we-work/for-who-we-work-block';
import { IMAGES } from '@/components/shared/hero/hero-assets-main-page-config';
import HeroBlock from '@/components/shared/hero/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
import ModalConsult from '@/components/shared/modal-consult';
import OurTechBlock from '@/components/shared/our-tech/our-tech-block';
import SeoTextBlock from '@/components/shared/seo-text/seo-text-block';
import ServicesWeProvide from '@/components/shared/services-we-provide/services-we-provide';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task/we-solve-client-task-block';
import WhyChooseBlock from '@/components/shared/why-choose/why-choose-block';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';

import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.HOME,
    ru: {
      title:
        'Разработка и продвижение: интернет-магазины, CRM, ERP, приложения, поддержка | ITWEBS',
      description:
        'Разрабатываем и продвигаем интернет-магазины, CRM (в т.ч. amoCRM), ERP, веб и мобильные приложения (iOS/Android). Анализ и оптимизация веб-приложений, SEO, IT поддержка организаций. Создаем масштабируемые решения под ключ. Рассчитаем стоимость!',
    },
    by: {
      title: 'Комплексная разработка цифровых продуктов - от идеи до релиза',
      description:
        'ITWEBS - проектирование, разработка и запуск приложений для бизнеса. Компания 1С программист | Релиз и поддержка | SEO',
    },
  });
}

export default function HomePage() {
  return (
    <>
      <HeroBlock
        description={
          <>
            Помогаем вашему бизнесу расти и развиваться быстрее
            <br />
            превращая ваши задумки в решения
          </>
        }
        fullScreen
        heading={
          <>
            ВАШ БИЗНЕС
            <br /> Н
            <span className="relative inline-block">
              <span className="pointer-events-none absolute top-[0.3em] left-[-0.34em] hidden h-[1.2em] w-[1.8em] sm:block">
                <Image
                  alt="zig-zag image"
                  className="object-contain"
                  fill
                  src="/hero/arrow-zig-zag.svg"
                />
              </span>
              <span className="relative z-10">А</span>
            </span>
            ШИ ТЕХНОЛОГ
            <span className="relative inline-block">
              {IMAGES.map((item) => (
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute hidden sm:block ${item.className}`}
                  key={item.src}
                >
                  <Image alt={item.alt} className="object-contain" fill src={item.src} />
                </span>
              ))}

              <span className="relative z-10">И</span>
            </span>
            И
          </>
        }
        pathname="/"
      >
        <ModalConsult triggerTitle="Обсудить проект" />
        <Button asChild variant="gray">
          <Link href={PAGES_CONFIG.CASES}>Наши кейсы</Link>
        </Button>
      </HeroBlock>
      <ForWhoWeWorkBlock isShowMedia />
      <Section className="bg-primary py-container rounded-[clamp(24px,4vw,48px)]">
        <OurTechBlock />
        <ServicesWeProvide />
      </Section>
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      <WhyChooseBlock />
      <SeoTextBlock />
    </>
  );
}
