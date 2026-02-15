'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { HeaderGroups } from '@/shared/types/header-groups-dto-types';

export default function NavigationServicesItems({
  activeServiceItem,
  setActiveServiceItem,
  close,
  headerGroups,
}: {
  activeServiceItem: string | null;
  setActiveServiceItem: (v: string | null) => void;
  close: () => void;
  headerGroups: HeaderGroups | [];
}) {
  const isWide = Boolean(activeServiceItem);

  return (
    <div
      className={cn(
        'border-primary absolute z-50 rounded-[12px] border-2 bg-white transition-[width,padding] duration-200 ease-out',
        isWide
          ? 'left-1/10 w-[calc(100vw-15vw)] -translate-x-[38%] p-[clamp(10px,5vw,32px)]'
          : 'left-0 p-[16px]'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {!isWide && (
        <ul className="flex flex-col gap-[12px]">
          {headerGroups.map((tab) => (
            <li
              className="text-foreground2 font-second-family flex w-full items-center justify-between gap-[32px] rounded-[10px] px-[10px] py-[8px] text-left text-[16px] font-normal hover:bg-neutral-100"
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
        <div className="flex min-w-0 gap-[clamp(10px,3vw,24px)]">
          <ul className="pr-[clamp(0px,2vw,16px)]">
            {headerGroups.map((tab) => {
              const active = tab.groupLink === activeServiceItem;

              return (
                <li
                  className={cn(
                    'mb-[6px] flex items-center justify-between gap-[clamp(5px,4vw,32px)] rounded-[12px] p-[clamp(5px,2vw,14px)] text-[clamp(10px,2.5vw,16px)]',
                    active ? 'bg-primary text-white' : 'text-foreground2 bg-background'
                  )}
                  key={tab.groupLink}
                  onClick={() => setActiveServiceItem(tab.groupLink)}
                >
                  {tab.groupName}
                  <Media
                    className="size-[13px]"
                    image={{
                      src: active ? '/arrow/right-white.svg' : '/arrow/arrow-up-blue.svg',
                      alt: active ? 'arrow-right-white' : 'arrow-up-blue',
                    }}
                  />
                </li>
              );
            })}
          </ul>

          <div className="min-w-0 flex-1 overflow-x-auto pb-2">
            <ul className="grid w-max grid-cols-4 gap-[20px] [&>li]:w-[220px]">
              {headerGroups
                .find((item) => item.groupLink === activeServiceItem)
                ?.services.map((card) => (
                  <li className="min-w-0" key={card.name}>
                    <Link
                      className="block w-full min-w-0 overflow-hidden wrap-break-word! whitespace-normal! text-[#606060] transition-colors hover:text-[#606060]/70"
                      href={`/services/${card.link}`}
                      onClick={close}
                    >
                      {card.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
