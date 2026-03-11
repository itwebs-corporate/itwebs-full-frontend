'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA;

export default function YandexMetrikaHit() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!METRIKA_ID) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    if (typeof window !== 'undefined' && 'ym' in window) {
      // @ts-ignore
      window.ym(METRIKA_ID, 'hit', url);
    }
  }, [pathname, searchParams]);

  return null;
}
