import * as React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { cn } from '@/lib/utils';

type InputProps<T extends FieldValues> = React.ComponentProps<'input'> & {
  register: UseFormRegister<T>;
  nameRegister: Path<T>;
};
function Input<T extends FieldValues>({
  className,
  type,
  register,
  nameRegister,
  ...props
}: InputProps<T>) {
  return (
    <input
      {...register(nameRegister)}
      className={cn(
        'file:text-foreground placeholder:text-foreground selection:bg-primary selection:text-primary-foreground max-h-[48px] w-full min-w-0 rounded-full bg-[#1734bd] py-4 pl-5 text-base text-[16px] font-bold shadow-xs backdrop-blur-[12px] transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}

export { Input };
