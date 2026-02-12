import { cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'file:text-foreground font-second-family selection:bg-primary selection:text-primary-foreground max-h-[48px] w-full min-w-0 rounded-full py-4 pl-5 text-[16px] shadow-xs backdrop-blur-[12px] transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'bg-white placeholder:text-foreground3/15 text-foreground3 font-normal',
        primary: 'bg-[#1734bd] placeholder:text-foreground text-white font-bold',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

type InputProps<T extends FieldValues> = ComponentProps<'input'> & {
  register: UseFormRegister<T>;
  nameRegister: Path<T>;
  variant?: 'default' | 'primary';
};

function Input<T extends FieldValues>({
  className,
  type,
  register,
  nameRegister,
  variant,
  ...props
}: InputProps<T>) {
  return (
    <input
      {...register(nameRegister)}
      className={cn(inputVariants({ variant, className }))}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}

export { Input };
