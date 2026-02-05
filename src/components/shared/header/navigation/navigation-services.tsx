'use client';

import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useClickOutside } from '@/hooks/use-click-outside';

import { ServiceTabSlug } from '@/config/services-mock-config';

import NavigationServicesItem from './navigation-services-item';

export default function NavigationServices({ title }: { title: string }) {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [activeServiceItem, setActiveServiceItem] = useState<ServiceTabSlug | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setIsOpenServices(false);
    setActiveServiceItem(null);
  };

  const { ref: menuRef } = useClickOutside<HTMLDivElement>(() => {
    if (!isOpenServices) return;
    close();
  }, [buttonRef]);

  return (
    <div className="relative">
      <button
        className={cn(
          'rounded-full px-[12px] py-[2px] transition-all',
          isOpenServices ? 'text-primary bg-white' : 'bg-transparent text-white'
        )}
        onClick={() => {
          setIsOpenServices((v) => {
            const next = !v;
            if (!next) setActiveServiceItem(null);
            return next;
          });
        }}
        ref={buttonRef}
        type="button"
      >
        {title}
      </button>

      {isOpenServices && (
        <div ref={menuRef}>
          <NavigationServicesItem
            activeServiceItem={activeServiceItem}
            close={close}
            setActiveServiceItem={setActiveServiceItem}
          />
        </div>
      )}
    </div>
  );
}
