'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { type ServiceTabSlug } from '@/config/services-mock-config';
import { HeaderGroups } from '@/shared/types/header-groups-dto-types';

export default function NavigationServicesItems({
  activeServiceItem,
  setActiveServiceItem,
  close,
  headerGroups,
}: {
  activeServiceItem: ServiceTabSlug | null;
  setActiveServiceItem: (v: ServiceTabSlug | null) => void;
  close: () => void;
  headerGroups: HeaderGroups;
}) {
  const isWide = Boolean(activeServiceItem);
  return (
    <div
      className={cn(
        'border-primary absolute z-50 rounded-[12px] border-2 bg-white',
        'transition-[width,padding] duration-200 ease-out',
        isWide
          ? // TODO: докрутить стили ->
            'left-1/2 w-max max-w-[calc(100vw-30vw)] -translate-x-1/2 p-[32px]'
          : 'left-0 p-[16px]'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {!isWide && (
        <ul className="flex flex-col gap-[12px]">
          {headerGroups.map((tab) => (
            <li
              className={cn(
                'text-foreground2 font-second-family flex w-full items-center justify-between gap-[32px] rounded-[10px] px-[10px] py-[8px] text-left text-[16px] font-normal',
                'hover:bg-neutral-100'
              )}
              key={tab.groupName}
              onClick={() => setActiveServiceItem(tab.groupLink)}
            >
              <span>{tab.groupName}</span>
              <Media
                className="h-[12px] w-[9px]"
                image={{ src: '/arrow/right-black.svg', alt: 'arrow' }}
              />
            </li>
          ))}
        </ul>
      )}

      {isWide && activeServiceItem && (
        <div className="flex min-w-0 gap-[24px]">
          <ul className="pr-[16px]">
            {headerGroups.map((tab) => {
              const active = tab.groupLink === activeServiceItem;

              return (
                <li
                  className={cn(
                    'mb-[6px] flex items-center justify-between gap-[32px] rounded-[12px] p-[14px] text-base',
                    active ? 'bg-primary text-white' : 'text-foreground2 bg-background'
                  )}
                  key={tab.groupLink}
                  onClick={() => setActiveServiceItem(tab.groupLink)}
                >
                  {tab.groupName}

                  <Media
                    className="h-[13px] w-[13px]"
                    image={{
                      src: active ? '/arrow/right-white.svg' : '/arrow/arrow-up-blue.svg',
                      alt: active ? 'arrow-right-white' : 'arrow-up-blue',
                    }}
                  />
                </li>
              );
            })}
          </ul>
          {/*TODO: уходит за пределы правого бока   */}
          <ul className="flex flex-wrap gap-[2px]">
            {headerGroups
              .find((item) => item.groupLink === activeServiceItem)
              ?.services.map((card) => (
                <li className="min-w-0" key={card.name}>
                  <Link
                    className={cn(
                      'block',
                      'text-[#606060] transition-colors hover:text-[#606060]/70'
                    )}
                    href={card.link}
                    onClick={close}
                  >
                    {card.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
