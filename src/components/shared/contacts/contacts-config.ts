import {
  INSTAGRAM,
  MAIL,
  MAIL_RU,
  MAX,
  TEL_RU,
  TELEGRAM,
  TELEGRAM_RU,
  VIBER,
  WHATSAPP,
} from '@/constants/links-constants';

export type ContactCardItem = {
  label: string;
  value: string;
  href?: string;
};

export type ContactCard = {
  title: string;
  items: ContactCardItem[];
};

export type LinkCard = {
  title: string;
  text: string;
  href: string;
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: 'Технический отдел',
    items: [
      { label: 'Почта', value: 'tech@itwebs.by', href: MAIL },
      {
        label: 'Телеграм',
        value: TELEGRAM,
        href: `${TELEGRAM}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
      },
    ],
  },
  {
    title: 'Отдел продаж',
    items: [
      { label: 'Почта', value: 'sales@itwebs.by', href: MAIL },
      {
        label: 'Телеграм',
        value: TELEGRAM,
        href: `${TELEGRAM}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
      },
    ],
  },
  {
    title: 'Реквизиты',
    items: [
      { label: 'Юр. наим.', value: 'ООО «ПрофИнфоТех-С»' },
      { label: 'Юр. адрес', value: '220117, г.Минск, пр-т. Газеты Звязда д. 16, пом. 42-1' },
      { label: 'УНП', value: '193922069' },
    ],
  },
];

export const LINKS_CONFIG: LinkCard[] = [
  { title: 'VIBER', text: 'Написать', href: VIBER },
  { title: 'INSTAGRAM', text: 'Перейти', href: INSTAGRAM },
  {
    title: 'TELEGRAM',
    text: 'Написать',
    href: `${TELEGRAM}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
  },
  {
    title: 'WHATSAPP',
    text: 'Написать',
    href: `${WHATSAPP}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
  },
  { title: 'ПОЧТА', text: 'Написать нам', href: MAIL },
];

export const CONTACT_RU_CARDS: ContactCard[] = [
  {
    title: 'Технический отдел',
    items: [
      { label: 'Почта', value: 'tech@itwebs.ru', href: 'mailto:tech@itwebs.ru' },
      {
        label: 'Телеграм',
        value: 'Менеджер',
        href: `${TELEGRAM_RU}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
      },
      { label: 'Max', value: 'Менеджер', href: MAX },
    ],
  },
  {
    title: 'Отдел продаж',
    items: [
      { label: 'Почта', value: 'sales@itwebs.ru', href: MAIL_RU },
      {
        label: 'Телеграм',
        value: 'Менеджер',
        href: `${TELEGRAM_RU}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
      },
      { label: 'Max', value: 'Менеджер', href: MAX },
    ],
  },
  {
    title: 'Реквизиты',
    items: [
      { label: 'Юр. наим.', value: 'ООО «ПрофИнфоТех-С»' },
      { label: 'Юр. адрес', value: '119017, г. Москва, ул. Пятницкая, д. 37, пом. 1/1' },
      { label: 'ИНН/КПП', value: '9705250373 / 770501001' },
      { label: 'ОГРН', value: '1257700507800' },
    ],
  },
];

export const LINKS_RU_CONFIG: LinkCard[] = [
  { title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL_RU },
  { title: 'MAX', text: 'Перейти', href: MAX },
  {
    title: 'TELEGRAM',
    text: 'Перейти',
    href: `${TELEGRAM_RU}?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация.`,
  },
  {
    title: 'WHATSAPP',
    text: 'Перейти',
    href: 'https://wa.me/79151785639?text=Здравствуйте!%20Мне%20необходима%20ваша%20консультация',
  },
  { title: 'ПОЧТА', text: 'Написать нам', href: MAIL_RU },
];
