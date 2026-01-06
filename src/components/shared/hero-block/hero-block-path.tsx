'use client';

import { usePathname } from 'next/navigation';

export default function HeroBlockPath() {
  const pathname = usePathname();
  return pathname === '/' ? (
    ''
  ) : (
    <span className="font-second-family xxs:text-base text-sm font-normal">
      Главная / {pathname}
    </span>
  );
}
