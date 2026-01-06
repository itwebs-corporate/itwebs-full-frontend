import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/utils';
type MediaProps = {
  className: string;
  image: ImageProps;
};
export function Media({ className, image }: MediaProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image {...image} className={cn('', image.className)} fill />
    </div>
  );
}
