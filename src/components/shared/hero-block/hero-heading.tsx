'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import HeroAssets from './hero-assets';

export default function HeroHeading({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
}) {
  const pathanme = usePathname();
  const isHomePage = pathanme === '/';
  const is1SSerivesePage = pathanme === '/services-1c';
  return (
    <Typography
      className={cn(
        'relative isolate',
        isHomePage ? 'text-[clamp(36px,9vw,201px)]' : 'text-[clamp(36px,6vw,124px)]',
        is1SSerivesePage && 'text-[clamp(24px,6vw,124px)]'
      )}
      variant="h1"
    >
      <HeroAssets disabled={disabled} />
      {children}
    </Typography>
  );
}
