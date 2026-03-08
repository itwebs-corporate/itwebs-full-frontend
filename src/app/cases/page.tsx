import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import CasesBlock from '@/components/shared/cases/cases-block';
import HeroBlock from '@/components/shared/hero/hero-block';

import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.CASES,
    ru: {
      title: 'Портфолио и кейсы: автоматизация, разработка, интеграция | Примеры работ',
      description:
        'Примеры успешных проектов: внедрение CRM (amoCRM) и ERP, создание интернет-магазинов, веб и мобильных приложений. Анализ и оптимизация веб-приложений, SEO продвижение, IT поддержка. Посмотрите, как мы автоматизируем и разрабатываем под ключ — реальные кейсы с результатами!',
    },
    by: {
      title: 'Стоимость разработки сайтов, приложений и 1С | Примеры с ценами',
      description:
        'Изучите примеры работ с реальными ценами: разработка интернет-магазина, создание мобильных приложений, внедрение 1С. Заказать мобильное приложение или сайт можно, опираясь на наши кейсы и бюджет!',
    },
  });
}

export default function CasesPage() {
  return (
    <>
      <HeroBlock heading="Наши кейсы" pathname="/cases" />
      <CasesBlock />
    </>
  );
}
