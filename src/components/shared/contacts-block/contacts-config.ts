import { INSTAGRAM, MAIL, OFFICE_MINSK, TEL, TELEGRAM } from '@/constants/links-constants';

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

export const CONTACT_CARDS: ContactCard[] = [
  {
    id: 'tech',
    title: 'Тех. отдел',
    items: [
      {
        label: 'Офис',
        value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1',
      },
      {
        label: 'Почта',
        value: 'sales@itwebs.by',
        href: MAIL,
      },
      {
        label: 'Телефон',
        value: '+375259919379',
        href: TEL,
      },
      {
        label: 'Телеграм',
        value: TELEGRAM,
        href: TELEGRAM,
      },
    ],
  },
  {
    id: 'sales',
    title: 'Отдел продаж',
    items: [
      {
        label: 'Офис',
        value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1',
      },
      {
        label: 'Почта',
        value: 'sales@itwebs.by',
        href: MAIL,
      },
      {
        label: 'Телефон',
        value: '+375259919379',
        href: TEL,
      },
      {
        label: 'Телеграм',
        value: TELEGRAM,
        href: TELEGRAM,
      },
    ],
  },
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      {
        label: 'Офис',
        value: 'Минск — пр-т Газеты Звязда, д. 16, пом. 41-1',
      },
      {
        label: 'Почта',
        value: 'sales@itwebs.by',
        href: MAIL,
      },
      {
        label: 'Телефон',
        value: '+375259919379',
        href: TEL,
      },
      {
        label: 'Телеграм',
        value: TELEGRAM,
        href: TELEGRAM,
      },
    ],
  },
];
export type LinkCard = {
  id: number;
  title: string;
  text: string;
  href: string;
};
export const LINKS_CONFIG: LinkCard[] = [
  {
    id: 1,
    title: 'НАШ ОФИС',
    text: 'Показать',
    href: OFFICE_MINSK,
  },
  { id: 2, title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL },
  { id: 3, title: 'TELEGRAM', text: 'Перейти', href: TELEGRAM },
  { id: 4, title: 'INSTAGRAM', text: 'Перейти', href: INSTAGRAM },
  { id: 5, title: 'ПОЧТА', text: 'Написать нам', href: MAIL },
];
