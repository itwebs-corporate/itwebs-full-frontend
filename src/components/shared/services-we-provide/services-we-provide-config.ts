export type OurServicesCard = { link: string; title: string; description: string };
export type OurServicesMobileCard = {
  link: string;
  title: string;
  description: string;
  price: string;
};
// TODO: нужен ли тогда вообще description? (сделать как на region page?)
export const OUR_SERVICES_DEFAULT: OurServicesCard[] = [
  {
    title: 'Разработка мобильного приложения',
    link: '/services?q=mobile-dev',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
  },
  {
    title: 'Разработка корпоративного сайта',
    link: '/services?q=web-sites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
  },
  {
    title: 'Разработка интернет-магазина',
    link: '/services?q=web-sites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
  },
  {
    title: 'Интеграция 1С',
    link: '/services?q=services-1c',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
  },
];
// TODO: что будет показываться для мобилки?
export const OUR_SERVICES_MOBILE_DEFAULT: OurServicesMobileCard[] = [
  {
    link: 'Программирование системы 1С Бухгалтерия',
    title: 'Программирование системы 1С Бухгалтерия',
    description:
      'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.',
    price: '200 000',
  },
  {
    link: 'Консультации в области 1С Документооборот',
    title: 'Консультации в области 1С Документооборот',
    description:
      'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.',
    price: '200 000',
  },

  {
    link: 'Исправление ошибок в системе 1С Предприятие',
    title: 'Исправление ошибок в системе 1С Предприятие',
    description:
      'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.',
    price: '200 000',
  },
  {
    link: 'Консультации в области 1С ЗУП',
    title: 'Консультации в области 1С ЗУП',
    description:
      'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.',
    price: '200 000',
  },
];
