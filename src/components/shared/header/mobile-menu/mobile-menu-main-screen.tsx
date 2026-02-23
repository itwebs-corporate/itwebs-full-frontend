'use client';
import Link from 'next/link';
import { Activity, Fragment, useState } from 'react';

import { closeMobileMenu } from '@/lib/close-mobile-menu';
import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { SCREEN_1C_ID } from '@/constants/header-constants';
import { FilterGroup } from '@/shared/types/service-dto-types';

import { HEADER_NAV } from '../header-config';

export default function MobileMenuMainScreen({ filterGroup }: { filterGroup: FilterGroup[] }) {
  const [isOpenServices, setIsOpenServices] = useState(false);
  return (
    <ul className="flex flex-col gap-[17px] pt-[22px] pr-[14px] pb-[24px] pl-[28px]">
      {HEADER_NAV.map((el) => {
        const isServices = el.title.includes('Услуги');
        const is1CServices = el.title.includes('1с услуги');
        return (
          <Fragment key={el.title}>
            <li
              className={cn(
                'font-second-family rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors',
                isServices && isOpenServices
                  ? 'bg-primary text-white'
                  : 'bg-background text-primary'
              )}
            >
              <Link
                className="flex cursor-pointer items-center justify-between gap-3"
                href={el.link}
                onClick={closeMobileMenu}
              >
                <div className="block">{el.title}</div>

                {isServices && (
                  <button
                    aria-label={
                      isOpenServices ? 'Свернуть список услуг' : 'Развернуть список услуг'
                    }
                    className="z-10 shrink-0"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsOpenServices((v) => !v);
                    }}
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
                    className="z-50 shrink-0 cursor-pointer"
                    htmlFor={SCREEN_1C_ID}
                    onClick={(e) => e.stopPropagation()}
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
              </Link>
            </li>
            <Activity mode={isServices && isOpenServices ? 'visible' : 'hidden'}>
              <ul className="flex flex-col gap-4 pl-2">
                {filterGroup.length > 0 ? (
                  filterGroup.map((service) => (
                    <li key={service.id}>
                      <Link
                        className="text-foreground2 font-second-family cursor-pointer text-base leading-[100%] font-normal hover:underline"
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
    </ul>
  );
}
