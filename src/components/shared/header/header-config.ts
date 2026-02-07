import { PAGES_CONFIG } from '@/config/pages-config';
import { INSTAGRAM, TELEGRAM } from '@/constants/links-constants';

export const HEADER_NAV = [
  { title: 'Главная', link: PAGES_CONFIG.HOME },
  { title: '1с услуги', link: PAGES_CONFIG.SERVICES_1C },
  { title: 'Услуги', link: PAGES_CONFIG.SERVICES },
  { title: 'О компании', link: PAGES_CONFIG.ABOUT },
  { title: 'Кейсы', link: PAGES_CONFIG.CASES },
  { title: 'Блог', link: PAGES_CONFIG.BLOG },
  { title: 'Контакты', link: PAGES_CONFIG.CONTACTS },
];

export const HEADER_LINKS = [
  { link: TELEGRAM, icon: '/links/telegramm.svg' },
  { link: INSTAGRAM, icon: '/links/instagram.svg' },
];
export const HEADER_MOBILE_LINKS = [
  { link: TELEGRAM, icon: '/links/telegram-mobile-menu.svg' },
  { link: INSTAGRAM, icon: '/links/instagram-mobile-menu.svg' },
];

export const MOBILE_MENU_1C_SERVICES = [
  'Программирование системы 1С Бухгалтерия',
  'Программирование системы 1С Бухгалтерия',
  'Программирование системы 1С Бухгалтерия',
  'Программирование системы 1С Бухгалтерия',
  'Программирование системы 1С Бухгалтерия',
  'Программирование системы 1С Бухгалтерия',
];
