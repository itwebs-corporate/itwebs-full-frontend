import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import HeroAssets from './hero-assets';

export default function HeroHeading({
  children,
  disabled,
  isHomePage,
  isServicesLink,
  assetsPreset,
}: {
  children: ReactNode;
  disabled?: boolean;
  isHomePage: boolean;
  isServicesLink: boolean;
  assetsPreset?: string;
}) {
  return (
    <Typography
      asChild
      className={cn(
        'relative isolate block w-fit! max-w-[clamp(320px,70vw,1500px)] hyphens-auto',
        isHomePage ? 'text-[clamp(36px,9vw,201px)]' : 'text-[clamp(36px,6vw,124px)]',
        isServicesLink && 'text-[clamp(24px,6vw,124px)]'
      )}
      lang="ru"
      variant="h1"
    >
      <h1>
        <HeroAssets disabled={disabled} preset={assetsPreset} />
        {children}
      </h1>
    </Typography>
  );
}
