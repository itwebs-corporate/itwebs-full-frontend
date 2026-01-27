export type StatCard = {
  id: string;
  value: string;
  description: string;
};

export const STAT_CARDS: StatCard[] = [
  {
    id: 'projects',
    value: '150+',
    description: 'проектов для бизнеса и личных брендов',
  },
  {
    id: 'return-rate',
    value: '89%',
    description: 'клиентов возвращаются и рекомендуют',
  },
  {
    id: 'manager',
    value: '1',
    description: 'менеджер на всем пути проекта',
  },
  {
    id: 'experience',
    value: '2+',
    description: 'лет работаем в IT с любыми задачами',
  },
];
