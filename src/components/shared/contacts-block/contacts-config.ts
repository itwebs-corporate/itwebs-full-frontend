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
  {
    id: 1,
    title: 'НАШ ОФИС',
    text: 'Показать',
    href: 'https://www.google.com/maps/place/%D0%91%D1%83%D0%B4%D0%B2%D0%B0,+%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D0%B8%D1%8F/@42.2881215,18.8311565,15z/data=!3m1!4b1!4m6!3m5!1s0x134dd495f3e43371:0x3b467f06bc9c3048!8m2!3d42.2911489!4d18.840295!16zL20vMDJwZ3c5?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D',
  },
  { id: 2, title: 'ТЕЛЕФОН', text: 'Позвонить', href: TEL },
  { id: 3, title: 'TELEGRAM', text: 'Перейти', href: TELEGRAM },
  { id: 4, title: 'INSTAGRAM', text: 'Перейти', href: INSTAGRAM },
  { id: 5, title: 'ПОЧТА', text: 'Написать нам', href: MAIL },
];
