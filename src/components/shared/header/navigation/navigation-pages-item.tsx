'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export default function NavigationPagesItem({ el }: { el: { title: string; link: string } }) {
  const pathname = usePathname();
  const isActive = pathname === el.link;
  return (
    <Link
      className={cn(
        'hover:text-foreground/70 whitespace-nowrap uppercase transition-colors',
        isActive && 'underline underline-offset-3'
      )}
      href={el.link}
    >
      {el.title}
    </Link>
  );
}
