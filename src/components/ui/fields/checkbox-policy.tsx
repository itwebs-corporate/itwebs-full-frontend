import { Control, Controller, FieldErrors } from 'react-hook-form';

import { Checkbox } from '../checkbox';

type FormValues = {
  policy: boolean;
};
export default function CheckboxPolicy({
  control,
  errors,
}: {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  return (
    <div className="mt-[18px] flex justify-center gap-2">
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
      <label
        className="font-second-family relative text-[16px] leading-[100%]"
        htmlFor="checkboxPolicy"
      >
        Я соглашаюсь с политикой обработки персональных данных
        {errors.policy && (
          <p className="text-destructive mb-[-2px] text-[12px] sm:text-sm">
            {errors.policy.message}
          </p>
        )}
      </label>
    </div>
  );
}
