import { cn } from '@/lib/utils';

import { pageBlockVariants } from './page-block-config';
import { PageBlockProps } from './page-block-types';

export default function PageBlock({
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
}: PageBlockProps) {
  const styleProps = cn(
    pageBlockVariants({ fullScreen, direction, justify, align, padding, display }),
    className
  );
  const Component = tag ? tag : 'div';
  return (
    <Component className={styleProps} {...rest}>
      {children}
    </Component>
  );
}
