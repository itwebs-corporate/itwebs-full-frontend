import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

type MediaImage = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
};

type MediaProps = {
  className: string;
  image: MediaImage;
  ariaHidden?: boolean;
};
export function Media({ className, image, ariaHidden = false }: MediaProps) {
  return (
    <div aria-hidden={ariaHidden} className={cn('relative overflow-hidden', className)}>
      <Image {...image} className={cn(image.className)} fill />
    </div>
  );
}
