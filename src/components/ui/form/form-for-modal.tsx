'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
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

export default function FormForModals({
  closeModal,
  className,
}: {
  closeModal: () => void;
  className?: string;
}) {
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
      closeModal();
      reset();
    } catch (e) {
      toast.error('Не удалось оставить заявку. Попробуйте ещё раз.');
    }
  };

  return (
    <form
      className={cn(
        'flex flex-col items-center gap-[14px] lg:flex-row lg:items-start lg:gap-4',
        className
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-full min-w-0">
        <Input nameRegister="name" placeholder="Ваше имя" register={register} />
        {errors.name && (
          <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="relative w-full min-w-0">
        <Input nameRegister="emailOrTel" placeholder="Email / Телефон" register={register} />
        {errors.emailOrTel && (
          <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
            {errors.emailOrTel.message}
          </p>
        )}
      </div>

      <SelectTask
        classNameImage="group-data-[state=open]:text-white"
        classNameItem="focus:bg-primary focus:text-white"
        classNameWrapperImage="bg-background text-white group-data-[state=open]:bg-primary transition-all"
        control={control}
        errorMessage={errors.service?.message}
        name="service"
      />

      <CheckboxPolicy
        classTextName="text-foreground3/35"
        control={control}
        errorMessage={errors.policy?.message}
        name="policy"
      />

      <Button
        className="max-h-[48px] outline-white/25"
        disabled={isSubmitting}
        type="submit"
        variant="secondary"
      >
        {isSubmitting ? 'Отправляется...' : 'Отправить'}
      </Button>
    </form>
  );
}
