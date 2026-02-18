'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'font-inherit m-0 appearance-none border-solid bg-none p-0 leading-none text-inherit shadow-none',
        'box-border inline-grid place-content-center select-none',

        'peer border-input size-4 shrink-0 rounded-[4px] border bg-white shadow-xs transition-shadow outline-none',
        'dark:bg-input/30',

        'data-[state=checked]:border-primary data-[state=checked]:text-primary data-[state=checked]:bg-white',
        'dark:data-[state=checked]:bg-primary',

        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        'disabled:cursor-not-allowed disabled:opacity-50',

        className
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current"
        data-slot="checkbox-indicator"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
