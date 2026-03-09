import { PAGES_CONFIG } from '@/config/pages-config';
import { INSTAGRAM, MAX, TELEGRAM } from '@/constants/links-constants';

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
  {
    link: TELEGRAM,
    label: 'Telegram',
    icon: '/links/telegramm.svg',
    mobileIcon: '/links/telegram-mobile-menu.svg',
  },
  {
    link: INSTAGRAM,
    label: 'instagram',
    icon: '/links/instagram.svg',
    mobileIcon: '/links/instagram-mobile-menu.svg',
  },
];
export const RU_HEADER_LINKS = [
  {
    link: TELEGRAM,
    label: 'Telegram',
    icon: '/links/telegramm.svg',
    mobileIcon: '/links/telegram-mobile-menu.svg',
  },
  {
    link: MAX,
    label: 'Max',
    icon: '/links/max.svg',
    mobileIcon: '/links/max-mobile-menu.svg',
  },
];
