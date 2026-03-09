import { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

import ContactsBlock from '@/components/shared/contacts/contacts-block';
import HeroBlock from '@/components/shared/hero/hero-block';

import { PAGES_CONFIG } from '@/config/pages-config';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: PAGES_CONFIG.CONTACTS,
    ru: {
      title: 'Контакты: интеграция CRM, amoCRM, ERP | Разработка и IT поддержка',
      description:
        'Нужна интеграция CRM системы (amoCRM) или внедрение ERP? Мы также разрабатываем интернет-магазины, веб и мобильные приложения (iOS/Android), выполняем SEO продвижение и IT поддержку организаций.',
    },
    by: {
      title: 'Контакты IT компании: услуги 1С и разработка веб/мобильных приложений',
      description:
        'Актуальные контакты IT компании, специализирующейся на 1С (услуги, проверка, конфигуратор, управление, бухгалтерия, ЗУП, ИТС для вашего предприятия) и разработке веб и мобильных приложений. Получите консультацию, закажите внедрение 1С или создание сайта/приложения. Свяжитесь с нами!',
    },
  });
}

export default function ContactsPage() {
  return (
    <>
      <HeroBlock heading="Наши контакты" pathname="/contacts" />
      <ContactsBlock />
    </>
  );
}
