export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'clear-from-start',
    title: 'Понятно с первого шага',
    description: 'Объясняем без сложных терминов — вы всегда понимаете, что и зачем делаем.',
    image: '/emoji/message.png',
  },
  {
    id: 'one-contact',
    title: 'Один контакт — без хаоса',
    description: 'Личный менеджер ведёт проект от идеи до результата.',
    image: '/emoji/women.png',
  },
  {
    id: 'transparent-process',
    title: 'Прозрачный процесс',
    description: 'Фиксируем этапы, задачи и ожидания ещё до начала работ.',
    image: '/emoji/search.png',
  },
  {
    id: 'result-driven',
    title: 'Работаем на результат',
    description: 'Важно, чтобы сайт решал вашу задачу, а не просто был «красивым».',
    image: '/emoji/goal.png',
  },
  {
    id: 'care-support',
    title: 'Забота и поддержка',
    description: 'Мы на связи и сопровождаем вас на каждом этапе.',
    image: '/emoji/heart.png',
  },
  {
    id: 'turnkey-responsibility',
    title: 'Ответственность под ключ',
    description: 'Берём на себя все технические вопросы — без погружения в IT.',
    image: '/emoji/settings.png',
  },
];
