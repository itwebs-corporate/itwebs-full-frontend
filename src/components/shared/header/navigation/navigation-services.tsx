'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { HeaderGroups } from '@/shared/types/header-groups-dto-types';

import NavigationServicesItems from './navigation-services-items';

export default function NavigationServices({
  title,
  headerGroups,
  link,
}: {
  title: string;
  headerGroups: HeaderGroups | [];
  link: string;
}) {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [activeServiceItem, setActiveServiceItem] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = pathname === link;

  const close = () => {
    setIsOpenServices(false);
    setActiveServiceItem(null);
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpenServices(true)} onMouseLeave={close}>
      <Link
        className={cn(
          isActive && 'underline underline-offset-3',
          'uppercase',
          headerGroups.length > 0 &&
            'mx-[-8px] rounded-full px-[8px] py-[2px] transition-all md:mx-[-12px] md:px-[12px]',
          headerGroups.length > 0
            ? isOpenServices
              ? 'text-primary bg-white'
              : 'bg-transparent text-white'
            : 'hover:text-foreground/70 text-[10px] whitespace-nowrap transition-colors md:text-[12px] lg:text-base'
        )}
        href="/services"
      >
        {title}
      </Link>

      {isOpenServices && headerGroups.length > 0 && (
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
