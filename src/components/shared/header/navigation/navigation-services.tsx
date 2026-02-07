'use client';

import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { ServiceTabSlug } from '@/config/services-mock-config';

import NavigationServicesItem from './navigation-services-item';

export default function NavigationServices({ title }: { title: string }) {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [activeServiceItem, setActiveServiceItem] = useState<ServiceTabSlug | null>(null);

  const close = () => {
    setIsOpenServices(false);
    setActiveServiceItem(null);
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpenServices(true)} onMouseLeave={close}>
      <Link
        className={cn(
          'rounded-full px-[12px] py-[2px] transition-all',
          isOpenServices ? 'text-primary bg-white' : 'bg-transparent text-white'
        )}
        href="/services"
      >
        {title}
      </Link>

      {isOpenServices && (
        <NavigationServicesItem
          activeServiceItem={activeServiceItem}
          close={close}
          setActiveServiceItem={setActiveServiceItem}
        />
      )}
    </div>
  );
}
