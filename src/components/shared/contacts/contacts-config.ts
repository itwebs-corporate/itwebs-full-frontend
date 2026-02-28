import {
  INSTAGRAM,
  MAIL,
  OFFICE_MINSK,
  OFFICE_MOSCOW,
  TEL,
  TELEGRAM,
} from '@/constants/links-constants';

export type ContactCardItem = {
  label: string;
  value: string;
  href?: string;
};

export type ContactCard = {
  id: string;
  title: string;
  items: ContactCardItem[];
};

export type LinkCard = {
  id: number;
  title: string;
  text: string;
  href: string;
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    id: 'tech',
    title: 'Тех. отдел',
    items: [
      { label: 'Офис', value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1' },
      { label: 'Почта', value: 'sales@itwebs.by', href: MAIL },
      { label: 'Телефон', value: '+375259919379', href: TEL },
      { label: 'Телеграм', value: TELEGRAM, href: TELEGRAM },
    ],
  },
  {
    id: 'sales',
    title: 'Отдел продаж',
    items: [
      { label: 'Офис', value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1' },
      { label: 'Почта', value: 'sales@itwebs.by', href: MAIL },
      { label: 'Телефон', value: '+375259919379', href: TEL },
      { label: 'Телеграм', value: TELEGRAM, href: TELEGRAM },
    ],
  },
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      { label: 'Офис', value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1' },
      { label: 'Почта', value: 'sales@itwebs.by', href: MAIL },
      { label: 'Телефон', value: '+375259919379', href: TEL },
      { label: 'Телеграм', value: TELEGRAM, href: TELEGRAM },
    ],
  },
];

export const LINKS_CONFIG: LinkCard[] = [
  { id: 1, title: 'НАШ ОФИС', text: 'Показать', href: OFFICE_MINSK },
  { id: 2, title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL },
  { id: 3, title: 'TELEGRAM', text: 'Перейти', href: TELEGRAM },
  { id: 4, title: 'INSTAGRAM', text: 'Перейти', href: INSTAGRAM },
  { id: 5, title: 'ПОЧТА', text: 'Написать нам', href: MAIL },
];

// ---- RU ----
export const OFFICE_RU_ADDRESS = 'Москва — ул. Пятницкая д. 37, пом. 1/1';
export const TEL_RU = 'tel:+79151785639';
export const PHONE_RU = '+7 (915) 178-56-39';
export const MAIL_RU = 'mailto:sales@itwebs.ru';
export const EMAIL_RU = 'sales@itwebs.ru';
export const TELEGRAM_RU = 'https://t.me/itwebsru';
export const WHATSAPP_RU = 'https://wa.me/+79151785639';

export const CONTACT_RU_CARDS: ContactCard[] = [
  {
    id: 'tech',
    title: 'Тех. отдел',
    items: [
      { label: 'Офис', value: OFFICE_RU_ADDRESS },
      { label: 'Почта', value: EMAIL_RU, href: MAIL_RU },
      { label: 'Телефон', value: PHONE_RU, href: TEL_RU },
      { label: 'Телеграм', value: TELEGRAM_RU, href: TELEGRAM_RU },
      { label: 'WhatsApp', value: WHATSAPP_RU, href: WHATSAPP_RU },
    ],
  },
  {
    id: 'sales',
    title: 'Отдел продаж',
    items: [
      { label: 'Офис', value: OFFICE_RU_ADDRESS },
      { label: 'Почта', value: EMAIL_RU, href: MAIL_RU },
      { label: 'Телефон', value: PHONE_RU, href: TEL_RU },
      { label: 'Телеграм', value: TELEGRAM_RU, href: TELEGRAM_RU },
      { label: 'WhatsApp', value: WHATSAPP_RU, href: WHATSAPP_RU },
    ],
  },
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      { label: 'Офис', value: OFFICE_RU_ADDRESS },
      { label: 'Почта', value: EMAIL_RU, href: MAIL_RU },
      { label: 'Телефон', value: PHONE_RU, href: TEL_RU },
      { label: 'Телеграм', value: TELEGRAM_RU, href: TELEGRAM_RU },
      { label: 'WhatsApp', value: WHATSAPP_RU, href: WHATSAPP_RU },
    ],
  },
];

export const LINKS_RU_CONFIG: LinkCard[] = [
  { id: 1, title: 'НАШ ОФИС', text: 'Показать', href: OFFICE_MOSCOW },
  { id: 2, title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL_RU },
  { id: 3, title: 'TELEGRAM', text: 'Перейти', href: TELEGRAM_RU },
  { id: 4, title: 'WHATSAPP', text: 'Перейти', href: WHATSAPP_RU },
  { id: 5, title: 'ПОЧТА', text: 'Написать нам', href: MAIL_RU },
];
