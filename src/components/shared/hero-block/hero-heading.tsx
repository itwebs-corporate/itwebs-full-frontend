'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

export default function HeroHeading({ children }: { children: ReactNode }) {
  const pathanme = usePathname();
  const isHomePage = pathanme === '/';
  return (
    <Typography
      className={cn(
        'z-10',
        isHomePage ? 'text-[clamp(36px,10vw,201px)]' : 'text-[clamp(36px,6vw,124px)]'
      )}
      variant="h1"
    >
      {children}
    </Typography>
  );
}
