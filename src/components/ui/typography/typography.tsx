import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { typographyVariants } from './typography-config';
import { TypographyProps } from './typography-types';

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild, children, ...rest }, ref) => {
    const Component = asChild ? Slot : 'span';
    const styleProps = cn(typographyVariants({ variant }), className);
    return (
      <Component className={styleProps} ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);
export default Typography;
