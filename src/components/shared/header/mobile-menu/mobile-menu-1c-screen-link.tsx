'use client';
import Link from 'next/link';

import { closeMobileMenu } from '@/lib/close-mobile-menu';

export default function MobileMenu1CScreenLink({ el }: { el: { name: string; link: string } }) {
  return (
    <Link className="block w-full" href={`/services/${el.link}`} onClick={closeMobileMenu}>
      {el.name}
    </Link>
  );
}
