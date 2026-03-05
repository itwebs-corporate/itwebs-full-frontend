'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
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
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(zodContactSchema),
    defaultValues: { name: '', emailOrTel: '', service: '', policy: false },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const { email, phone } = splitEmailOrTel(data.emailOrTel);

      const payload: ClientRequestData = {
        name: data.name,
        email,
        phone,
        section: pathname,
        service: data.service ?? '',
      };

      await postClientRequest(payload);

      toast.success('Вы успешно оставили заявку!');
      reset();
    } catch (e) {
      toast.error('Не удалось оставить заявку. Попробуйте ещё раз или чуть позже.');
    }
  };

  const onInvalid: SubmitErrorHandler<ContactFormValues> = (errs) => {
    const first = Object.values(errs)[0];
    const msg = first?.message ?? 'Проверьте поля формы';
    toast.error(String(msg));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <div
        className={cn(
          'flex w-full max-w-full min-w-0 flex-col items-center gap-[14px] lg:flex-row lg:gap-4',
          className
        )}
      >
        <div className="xs:max-w-full relative w-full max-w-[275px] min-w-0 lg:w-[275px] lg:max-w-[275px] lg:min-w-0! lg:flex-1 lg:basis-0!">
          <Input
            id="Ваше имя"
            nameRegister="name"
            placeholder="Ваше имя"
            register={register}
            variant="primary"
          />
        </div>

        <div className="xs:max-w-full relative w-full max-w-[275px] min-w-0 lg:w-[275px] lg:max-w-[275px] lg:min-w-0! lg:flex-1 lg:basis-0!">
          <Input
            id="Ваше почта или телефон"
            nameRegister="emailOrTel"
            placeholder="Email / Телефон"
            register={register}
            variant="primary"
          />
        </div>
        <div className="xs:max-w-full relative w-full max-w-[275px] min-w-0 lg:w-[275px] lg:max-w-[275px] lg:min-w-0! lg:flex-1 lg:basis-0!">
          <SelectTask control={control} name="service" variant="primary" />
        </div>

        <Button
          className="max-h-[48px] shrink-0"
          disabled={isSubmitting}
          type="submit"
          variant="secondary"
        >
          {isSubmitting ? 'Отправляется...' : 'Отправить'}
        </Button>
      </div>
      <CheckboxPolicy control={control} name="policy" />
    </form>
  );
}
