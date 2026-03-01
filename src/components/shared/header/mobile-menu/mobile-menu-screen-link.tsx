'use client';
import Link from 'next/link';

import { closeMobileMenu } from '@/lib/close-mobile-menu';
import { cn } from '@/lib/utils';

export default function MobileMenuScreenLink({
  name,
  path,
  isServices = false,
}: {
  name: string;
  path: string;
  isServices?: boolean;
}) {
  return (
    <Link
      className={cn('block', isServices ? 'min-w-0' : 'w-full')}
      href={path}
      onClick={closeMobileMenu}
    >
      {isServices ? <div className="block">{name}</div> : name}
    </Link>
  );
}
