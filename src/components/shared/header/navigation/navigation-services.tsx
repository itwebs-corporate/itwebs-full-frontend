'use client';

import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { ServiceTabSlug } from '@/config/services-mock-config';
import { HeaderGroups } from '@/shared/types/header-groups-dto-types';

import NavigationServicesItems from './navigation-services-items';

export default function NavigationServices({
  title,
  headerGroups,
}: {
  title: string;
  headerGroups: HeaderGroups;
}) {
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
        <NavigationServicesItems
          activeServiceItem={activeServiceItem}
          close={close}
          headerGroups={headerGroups}
          setActiveServiceItem={setActiveServiceItem}
        />
      )}
    </div>
  );
}
