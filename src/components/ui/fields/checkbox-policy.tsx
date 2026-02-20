import Link from 'next/link';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { PAGES_CONFIG } from '@/config/pages-config';

import { Checkbox } from '../checkbox';

type CheckboxPolicyProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  classTextName?: string;
};

export default function CheckboxPolicy<T extends FieldValues>({
  name,
  control,
  classTextName,
}: CheckboxPolicyProps<T>) {
  return (
    <div className="mt-[18px] flex justify-center gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            id="checkboxPolicy"
            onCheckedChange={(v) => field.onChange(v === true)}
          />
        )}
      />
      <label
        className={cn('font-second-family relative text-[16px] leading-[100%]', classTextName)}
        htmlFor="checkboxPolicy"
      >
        Я соглашаюсь с{' '}
        <Link className="underline underline-offset-2" href={PAGES_CONFIG.POLICY}>
          политикой обработки персональных данных
        </Link>
      </label>
    </div>
  );
}
