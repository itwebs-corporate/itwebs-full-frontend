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
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isServicesLink = pathname.startsWith('/services');

  return (
    <Typography
      asChild
      className={cn(
        'relative isolate block w-fit! max-w-[clamp(320px,70vw,980px)] hyphens-auto',
        isHomePage ? 'text-[clamp(36px,9vw,201px)]' : 'text-[clamp(36px,6vw,124px)]',
        isServicesLink && 'text-[clamp(24px,6vw,124px)]'
      )}
      lang="ru"
      variant="h1"
    >
      <h1>
        <HeroAssets disabled={disabled} />
        {children}
      </h1>
    </Typography>
  );
}
