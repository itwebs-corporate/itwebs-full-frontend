'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA;

export default function YandexMetrikaHit() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!METRIKA_ID || process.env.NODE_ENV !== 'production') return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    if (lastTrackedUrl.current === url) return;
    lastTrackedUrl.current = url;

    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(METRIKA_ID, 'hit', url);
    }
  }, [pathname, searchParams]);

  return null;
}
