'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { SERVICES_CARDS, SERVICES_TABS, type ServiceTabSlug } from '@/config/services-mock-config';

export default function NavigationServicesItem({
  activeServiceItem,
  setActiveServiceItem,
  close,
}: {
  activeServiceItem: ServiceTabSlug | null;
  setActiveServiceItem: (v: ServiceTabSlug | null) => void;
  close: () => void;
}) {
  const isWide = Boolean(activeServiceItem);

  return (
    <div
      className={cn(
        'border-primary absolute top-[calc(100%+12px)] left-0 z-50 rounded-[12px] border-2 bg-white',
        'transition-[width,padding] duration-200 ease-out',
        isWide ? 'p-[32px]' : 'w-[320px] p-[16px]'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {!isWide && (
        <ul className="flex flex-col gap-[12px]">
          {SERVICES_TABS.map((tab) => (
            <li key={tab.slug}>
              <button
                className={cn(
                  'text-foreground2 font-second-family flex w-full items-center justify-between rounded-[10px] px-[10px] py-[8px] text-left text-[16px] font-normal',
                  'hover:bg-neutral-100'
                )}
                onClick={() => setActiveServiceItem(tab.slug)}
                type="button"
              >
                <span>{tab.title}</span>
                <Media
                  className="h-[12px] w-[9px]"
                  image={{ src: '/arrow/right-black.svg', alt: 'arrow' }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {isWide && activeServiceItem && (
        <div className="flex gap-[24px]">
          <ul className="pr-[16px]">
            {SERVICES_TABS.map((tab) => {
              const active = tab.slug === activeServiceItem;

              return (
                <li
                  className={cn(
                    'mb-[6px] flex items-center justify-between gap-[32px] rounded-[12px] p-[14px] text-base',
                    active ? 'bg-primary text-white' : 'text-foreground2 bg-background'
                  )}
                  key={tab.slug}
                  onClick={() => setActiveServiceItem(tab.slug)}
                >
                  {tab.title}

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

          <ul className="flex flex-wrap gap-[2px]">
            {SERVICES_CARDS[activeServiceItem].map((card) => (
              <li className="min-w-0" key={card.id}>
                <Link
                  className={cn(
                    'block',
                    'text-[#606060] transition-colors hover:text-[#606060]/70'
                  )}
                  href={card.href}
                  onClick={close}
                >
                  {card.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
