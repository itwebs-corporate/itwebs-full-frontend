import { PAGES_CONFIG } from '@/config/pages-config';
import { TELEGRAM } from '@/constants/links-constants';

export const HEADER_NAV = [
  { title: 'Главная', link: PAGES_CONFIG.HOME },
  { title: '1с услуги', link: PAGES_CONFIG.SERVICES_1C },
  { title: 'Услуги', link: PAGES_CONFIG.SERVICES },
  { title: 'О компании', link: PAGES_CONFIG.ABOUT },
  { title: 'Кейсы', link: PAGES_CONFIG.CASES },
  { title: 'Блог', link: PAGES_CONFIG.BLOG },
  { title: 'Контакты', link: PAGES_CONFIG.CONTACTS },
];
// ссылки на MAX пока нет
export const HEADER_LINKS = [
  {
    link: TELEGRAM,
    label: 'Telegram',
    icon: '/links/telegramm.svg',
    mobileIcon: '/links/telegram-mobile-menu.svg',
  },
  {
    link: '/',
    label: 'Max',
    icon: '/links/max.svg',
    mobileIcon: '/links/max-mobile-menu.svg',
  },
];
