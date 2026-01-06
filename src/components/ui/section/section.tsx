import { cn } from '@/lib/utils';

import { SectionVariants } from './section-config';
import { SectionProps } from './section-types';

export default function Section({
  tag,
  children,
  className,
  fullScreen,
  direction,
  justify,
  align,
  padding,
  display,
  ...rest
}: SectionProps) {
  const styleProps = cn(
    SectionVariants({ fullScreen, direction, justify, align, padding, display }),
    className
  );
  const Component = tag ? tag : 'div';
  return (
    <Component className={styleProps} {...rest}>
      {children}
    </Component>
  );
}
