'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/fields/input';

import { SELECT_ITEMS, zodContactSchema } from './form-config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn('flex flex-col items-center gap-[14px] lg:flex-row lg:gap-4', className)}>
        <div className="relative w-full min-w-[275px]">
          <Input nameRegister="name" placeholder="Ваше имя" register={register} />
          {errors.name && (
            <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative w-full min-w-[275px]">
          <Input nameRegister="emailOrTel" placeholder="Email / Телефон" register={register} />
          {errors.emailOrTel && (
            <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
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
                  {SELECT_ITEMS?.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.taskType && (
            <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
              {errors.taskType.message}
            </p>
          )}
        </div>

        <Button className="max-h-[48px]" disabled={isSubmitting} type="submit" variant="secondary">
          {isSubmitting ? 'Отправляется...' : 'Отправить'}
        </Button>
      </div>
    </form>
  );
}
