'use client';
import Link from 'next/link';
import { Activity, Fragment, useState } from 'react';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { SCREEN_1C_ID } from '@/constants/header-constants';

import { HEADER_NAV, MOBILE_MENU_SERVICES } from './header-config';

export default function MobileMenuMainScreen() {
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
              <div className="flex items-center justify-between gap-3">
                <Link className="flex-1" href={el.link}>
                  {el.title}
                </Link>

                {isServices && (
                  <button
                    className="shrink-0"
                    onClick={() => setIsOpenServices((v) => !v)}
                    type="button"
                  >
                    <Media
                      className="h-[13px] w-[13px]"
                      image={{
                        src: isOpenServices ? '/links/arrow-down.svg' : '/links/arrow-right.svg',
                        alt: 'arrow',
                      }}
                    />
                  </button>
                )}
                {is1CServices && (
                  <label className="z-50 shrink-0 cursor-pointer" htmlFor={SCREEN_1C_ID}>
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
              <ul className="flex flex-col gap-4 pl-2">
                {MOBILE_MENU_SERVICES.map((service) => (
                  <li
                    className="text-foreground2 font-second-family cursor-pointer text-base leading-[100%] font-normal hover:underline"
                    key={service}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </Activity>
          </Fragment>
        );
      })}
    </ul>
  );
}
