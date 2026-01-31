'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { MOBILE_MENU_SERVICES } from '../header-config';

export default function NavigationServicesItem() {
  const [activeServiceItem, setActiveServiceItem] = useState<null | string>(null);

  return (
    <ul
      className={cn(
        activeServiceItem ? 'p-[32px]' : 'p-[16px]',
        'border-primary absolute mt-[12px] ml-[-10px] flex flex-col gap-[16px] rounded-[12px] border-2 bg-white'
      )}
    >
      {MOBILE_MENU_SERVICES.map((item) => (
        <li
          className={cn(
            'text-foreground2 font-second-family hover:text-foreground2/70 flex items-center justify-between gap-[16px] text-[16px] font-normal',
            activeServiceItem && 'bg-background'
          )}
          key={item}
        >
          <div
            onClick={() => {
              setActiveServiceItem(item);
            }}
          >
            {item}
          </div>
          <Media
            className="h-[12px] w-[9px]"
            image={{
              src: activeServiceItem ? '/arrow/right-white.svg' : '/arrow/right-black.svg',
              alt: 'arrow-black',
            }}
          />
        </li>
      ))}
    </ul>
  );
}
