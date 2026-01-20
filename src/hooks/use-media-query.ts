'use client';

import { useSyncExternalStore } from 'react';

export function useMediaQuery(query: string) {
  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === 'undefined') return () => {};

    const mql = window.matchMedia(query);
    const handler = () => onStoreChange();

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  };

  const getSnapshot = () => typeof window !== 'undefined' && window.matchMedia(query).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
