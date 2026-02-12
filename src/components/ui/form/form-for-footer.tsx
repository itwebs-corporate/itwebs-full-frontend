'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { ClientRequestData, postClientRequest } from '@/lib/post-client-request';
import { splitEmailOrTel } from '@/lib/split-email-or-tel';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/fields/input';

import { zodContactSchema } from './form-config';
import CheckboxPolicy from '../fields/checkbox-policy';
import SelectTask from '../fields/select-task';

type ContactFormValues = z.infer<typeof zodContactSchema>;

export default function FormForFooter({ className }: { className?: string }) {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(zodContactSchema),
    defaultValues: {
      name: '',
      emailOrTel: '',
      service: '',
      policy: false,
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const { email, phone } = splitEmailOrTel(data.emailOrTel);

      const payload: ClientRequestData = {
        name: data.name,
        email,
        phone,
        section: pathname,
        service: data.service,
      };

      await postClientRequest(payload);
      toast.success('Вы успешно оставили заявку!');
      reset();
    } catch (e) {
      toast.error('Не удалось оставить заявку. Попробуйте ещё раз.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn('flex flex-col items-center gap-[14px] lg:flex-row lg:gap-4', className)}>
        <div className="relative w-full min-w-[275px]">
          <Input nameRegister="name" placeholder="Ваше имя" register={register} variant="primary" />
          {errors.name && (
            <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative w-full min-w-[275px]">
          <Input
            nameRegister="emailOrTel"
            placeholder="Email / Телефон"
            register={register}
            variant="primary"
          />
          {errors.emailOrTel && (
            <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
              {errors.emailOrTel.message}
            </p>
          )}
        </div>
        <SelectTask
          control={control}
          errorMessage={errors.service?.message}
          name="service"
          variant="primary"
        />
        <Button className="max-h-[48px]" disabled={isSubmitting} type="submit" variant="secondary">
          {isSubmitting ? 'Отправляется...' : 'Отправить'}
        </Button>
      </div>
      <CheckboxPolicy control={control} errorMessage={errors.policy?.message} name="policy" />
    </form>
  );
}
