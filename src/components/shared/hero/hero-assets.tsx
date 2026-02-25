'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { HERO_ASSETS_CONFIG } from './hero-assets-config';

export default function HeroAssets({ disabled }: { disabled?: boolean }) {
  const pathname = usePathname();

  if (disabled) return null;
  const assets = HERO_ASSETS_CONFIG[pathname] ?? HERO_ASSETS_CONFIG['/default'];
  if (!assets?.length) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      {assets.map((item) => (
        <div className={cn(item.className)} key={item.alt}>
          <Image alt={item.alt} fill src={item.src} />
        </div>
      ))}
    </div>
  );
}
