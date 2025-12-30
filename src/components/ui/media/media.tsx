import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

type MediaAspect = 'square' | 'video' | 'auto';

type MediaProps = {
  aspect?: MediaAspect;
  className?: string;
  image: Omit<ImageProps, 'fill'>;
};

export function Media({ aspect = 'auto', className, image }: MediaProps) {
  return (
    <div
      className={cn(
        'bg-muted relative overflow-hidden rounded-xl',
        {
          'aspect-square': aspect === 'square',
          'aspect-video': aspect === 'video',
        },
        className
      )}
    >
      <Image {...image} className={cn('object-cover', image.className)} fill />
    </div>
  );
}
