import { z } from 'zod';

const phoneLike = (v: string) => {
  const digits = v.replace(/[^\d+]/g, '');
  return /^\+?\d{10,15}$/.test(digits);
};

export const zodContactSchema = z.object({
  name: z.string().min(1, 'Введите имя!'),
  emailOrTel: z
    .string()
    .min(1, 'Введите email или телефон!')
    .refine((v) => {
      const s = v.trim();
      if (s.includes('@')) return z.string().email().safeParse(s).success;
      return phoneLike(s);
    }, 'Введите корректный email или телефон!'),
  service: z.string().min(1, 'Выберите тип задачи!'),
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
  'Услуги в области 1с',
];
