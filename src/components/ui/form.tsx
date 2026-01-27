'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/fields/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const zodContactSchema = z.object({
  name: z.string().min(1, 'Введите имя!'),
  emailOrTel: z.string().min(1, 'Введите email или телефон!'),
  taskType: z.string().min(1, 'Выберите тип задачи!'),
  policy: z.boolean().refine((v) => v === true, {
    message: 'Необходимо принять политику обработки персональных данных!',
  }),
});

type ContactFormValues = z.infer<typeof zodContactSchema>;

export default function Form({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(zodContactSchema),
    defaultValues: {
      name: '',
      emailOrTel: '',
      taskType: '',
      policy: false,
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    toast.success('Ваша заявка успешно принята!');
    reset();
  };

  return (
    <form
      className="bg-primary xxs:p-8 xxs:mt-[32px] mt-[24px] rounded-[24px] px-[14px] pt-8 pb-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn('flex flex-col items-center gap-[14px] lg:flex-row lg:gap-4', className)}>
        <div className="relative w-full min-w-[275px]">
          <Input nameRegister="name" placeholder="Ваше имя" register={register} />
          {errors.name && (
            <p className="text-destructive absolute -bottom-[18px] left-[15px] text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative w-full min-w-[275px]">
          <Input nameRegister="emailOrTel" placeholder="Email / Телефон" register={register} />
          {errors.emailOrTel && (
            <p className="text-destructive absolute -bottom-[18px] left-[15px] text-sm">
              {errors.emailOrTel.message}
            </p>
          )}
        </div>
        <div className="relative w-full min-w-[275px]">
          <Controller
            control={control}
            name="taskType"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="min-h-[48px] w-full min-w-[275px] rounded-full border-none bg-[#1734bd] py-4 pl-5 text-base text-[16px] font-bold">
                  <SelectValue
                    className="text-base text-[16px] text-white"
                    placeholder="Тип задачи"
                  />
                </SelectTrigger>
                <SelectContent align="start" position="popper" side="bottom">
                  <SelectItem value="Настроить 1С">Настроить 1С</SelectItem>
                  <SelectItem value="Сайт под ключ">Сайт под ключ</SelectItem>
                  <SelectItem value="SEO оптимизация">SEO оптимизация</SelectItem>
                  <SelectItem value="Редизайн сайта">Редизайн сайта</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.taskType && (
            <p className="text-destructive absolute -bottom-[18px] left-[15px] text-sm">
              {errors.taskType.message}
            </p>
          )}
        </div>

        <Button className="max-h-[48px]" disabled={isSubmitting} type="submit" variant="secondary">
          {isSubmitting ? 'Отправляется...' : 'Отправить'}
        </Button>
      </div>
      <div className="relative mt-[18px] flex justify-center gap-2">
        <Controller
          control={control}
          name="policy"
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              id="checkboxPolicy"
              onCheckedChange={(v) => field.onChange(v === true)}
            />
          )}
        />
        <label className="font-second-family text-[16px] leading-[100%]" htmlFor="checkboxPolicy">
          Я соглашаюсь с политикой обработки персональных данных
        </label>
        {errors.policy && (
          <p className="text-destructive absolute top-3 text-sm">{errors.policy.message}</p>
        )}
      </div>
    </form>
  );
}
