import { z } from 'zod';

export const zodContactSchema = z.object({
  name: z.string().min(1, 'Введите имя!'),
  emailOrTel: z.string().min(1, 'Введите email или телефон!'),
  taskType: z.string().min(1, 'Выберите тип задачи!'),
  policy: z.boolean().refine((v) => v === true, {
    message: 'Необходимо принять политику обработки персональных данных!',
  }),
});

export const SELECT_ITEMS = [
  'Услуги в области web разработки',
  'Разработка мобильных приложений',
  'Поддержка, оптимизация и серверные услуги',
  'Интеграция и разработка CRM систем',
  'Цифровизация и автоматизация',
];
