export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  priceFromRub?: number;
  ctaLabel?: string;
  href: string;
  badge?: string;
  tags?: string[];
};
export const SERVICES_TABS = [
  { slug: 'services-1c', title: '1с услуги' },
  { slug: 'web-sites', title: 'Веб разработка' },
  { slug: 'mobile-dev', title: 'Мобильная разработка' },
  { slug: 'server-support', title: 'Сервера и поддержка' },
  { slug: 'crm', title: 'CRM' },
  { slug: 'digitalization', title: 'Цифровизация и автоматизация' },
];

export type ServiceTabSlug = (typeof SERVICES_TABS)[number]['slug'];
