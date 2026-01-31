'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import NavigationServicesItem from './navigation-services-item';

export default function NavigationServices({ title }: { title: string }) {
  const [isOpenServices, setIsOpenServices] = useState<boolean>(false);
  return (
    <button
      className={cn(
        'rounded-full px-[12px] py-[2px] transition-all',
        isOpenServices ? 'text-primary bg-white' : 'bg-transparent text-white'
      )}
      onClick={() => setIsOpenServices(!isOpenServices)}
      type="button"
    >
      {title}
      {isOpenServices && <NavigationServicesItem />}
    </button>
  );
}
