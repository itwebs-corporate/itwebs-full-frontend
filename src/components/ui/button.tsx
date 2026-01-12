import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex py-[16px] rounded-full h-[46px] sm:h-[60px] w-[283px] sm:py-[20px] leading-[100%] font-second-family items-center justify-center gap-2 whitespace-nowrap text-[clamp(14px,1.4vw,20px)] font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-foreground hover:bg-primary/80 text-foreground/90',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-gray-200/70 hover:text-primary/90 backdrop-blur-[12px]',
        secondary:
          'bg-secondary text-primary hover:bg-secondary/60 hover:text-primary/80 outline-[3px] -outline-offset-4 outline-[#466cce]',
        gray: 'bg-secondary/25 text-secondary border border-secondary backdrop-blur-[12px] hover:bg-secondary/35 hover:text-secondary/70',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        ghost: 'hover:bg-accent hover:text-foreground3 dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        none: '',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },

    defaultVariants: {
      size: 'none',
      variant: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, className }))}
      data-slot="button"
      data-variant={variant}
      type="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
