'use client';
import Link from 'next/link';
import { Activity, Fragment, useState } from 'react';

import { closeMobileMenu } from '@/lib/close-mobile-menu';
import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { PAGES_CONFIG } from '@/config/pages-config';
import { SCREEN_1C_ID } from '@/constants/header-constants';
import { FilterGroup } from '@/shared/types/service-dto-types';

import { HEADER_NAV } from '../header-config';

export default function MobileMenuMainScreen({ filterGroup }: { filterGroup: FilterGroup[] }) {
  const [isOpenServices, setIsOpenServices] = useState(false);
  return (
    <div className="flex flex-col gap-[17px] px-[14px] pt-[22px] pb-[24px]">
      {HEADER_NAV.map((el) => {
        const isServices = el.link === PAGES_CONFIG.SERVICES;
        const is1CServices = el.link === PAGES_CONFIG.SERVICES_1C;
        return (
          <Fragment key={el.title}>
            <li
              className={cn(
                'font-second-family rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors',
                isServices && isOpenServices
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'bg-background text-primary hover:bg-background/10'
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Link className="block min-w-0" href={el.link} onClick={closeMobileMenu}>
                  {/* текст ссылки */}
                  <div className="block">{el.title}</div>
                </Link>

                {isServices && (
                  <button
                    aria-label={
                      isOpenServices ? 'Свернуть список услуг' : 'Развернуть список услуг'
                    }
                    className="z-10 flex flex-1 justify-end"
                    onClick={() => setIsOpenServices((v) => !v)}
                    type="button"
                  >
                    <Media
                      ariaHidden
                      className="h-[13px] w-[13px]"
                      image={{
                        src: isOpenServices ? '/links/arrow-down.svg' : '/links/arrow-right.svg',
                        alt: '',
                      }}
                    />
                  </button>
                )}
                {is1CServices && (
                  <label
                    className="z-50 flex flex-1 cursor-pointer justify-end"
                    htmlFor={SCREEN_1C_ID}
                  >
                    <Media
                      className="h-[13px] w-[13px]"
                      image={{
                        src: '/links/arrow-right.svg',
                        alt: 'arrow',
                      }}
                    />
                  </label>
                )}
              </div>
            </li>
            <Activity mode={isServices && isOpenServices ? 'visible' : 'hidden'}>
              <ul className="flex w-full flex-col gap-2 pr-[8px] pl-[20px]">
                {filterGroup.length > 0 ? (
                  filterGroup.map((service) => (
                    <li className="w-full" key={service.id}>
                      <Link
                        className="font-second-family bg-background hover:bg-background/10 text-primary hover:text-primary/70 block w-full min-w-0 cursor-pointer truncate rounded-[12px] px-[14px] py-[8px] text-base leading-[100%] font-normal shadow shadow-neutral-400 transition-colors"
                        href={`/services?q=${service.link}`}
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-foreground3/50 rounded-full border border-dashed border-gray-400 p-2 text-center text-base">
                    Услуги не найдены
                  </li>
                )}
              </ul>
            </Activity>
          </Fragment>
        );
      })}
    </div>
  );
}
