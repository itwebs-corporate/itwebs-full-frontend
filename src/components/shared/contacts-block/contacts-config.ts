import { INSTAGRAM, MAIL, TEL, TELEGRAM } from '@/constants/links-constants';

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
        value: 'Троицк, Городская ул., 1 этаж 2, офис 16',
      },
      {
        label: 'Почта',
        value: 'go@sewera.ru',
        href: 'mailto:go@sewera.ru',
      },
      {
        label: 'Телефон',
        value: '+7 495 740-05-58',
        href: 'tel:+74957400558',
      },
      {
        label: 'Телеграм',
        value: '@name',
        href: 'https://t.me/name',
      },
    ],
  },
  {
    id: 'sales',
    title: 'Отдел продаж',
    items: [
      {
        label: 'Офис',
        value: 'Троицк, Городская ул., 1 этаж 2, офис 16',
      },
      {
        label: 'Почта',
        value: 'go@sewera.ru',
        href: 'mailto:go@sewera.ru',
      },
      {
        label: 'Телефон',
        value: '+7 495 740-05-58',
        href: 'tel:+74957400558',
      },
      {
        label: 'Телеграм',
        value: '@name',
        href: 'https://t.me/name',
      },
    ],
  },
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      {
        label: 'Офис',
        value: 'Троицк, Городская ул., 1 этаж 2, офис 16',
      },
      {
        label: 'Почта',
        value: 'go@sewera.ru',
        href: 'mailto:go@sewera.ru',
      },
      {
        label: 'Телефон',
        value: '+7 495 740-05-58',
        href: 'tel:+74957400558',
      },
      {
        label: 'Телеграм',
        value: '@name',
        href: 'https://t.me/name',
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
  { id: 1, title: 'НАШ ОФИС', text: 'Показать', href: '/' },
  { id: 2, title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL },
  { id: 3, title: 'TELEGRAM', text: 'Перейти', href: TELEGRAM },
  { id: 4, title: 'INSTAGRAM', text: 'Перейти', href: INSTAGRAM },
  { id: 5, title: 'ПОЧТА', text: 'Написать нам', href: MAIL },
];
