import Link from 'next/link';

import { Media } from '@/components/ui/media';

import { SCREEN_1C_ID } from '@/constants/header-constants';

import { MOBILE_MENU_1C_SERVICES } from './header-config';

export default async function MobileMenu1CScreen() {
  // TODO: нужно получить только услуги 1c и вывести их
  return (
    <>
      <div className="flex items-center justify-between pt-[14px] pr-[14px] pl-[28px]">
        <span className="font-second-family text-foreground2 text-[20px] font-bold">1с Услуги</span>
        <label
          className="text-primary font-second-family z-50 flex cursor-pointer items-center gap-1.5 text-[16px] font-bold"
          htmlFor={SCREEN_1C_ID}
        >
          <Media
            className="h-[14px] w-[7px]"
            image={{ src: '/links/arrow-left.svg', alt: 'arrow-left' }}
          />
          Назад
        </label>
      </div>
      <ul className="flex flex-col gap-[17px] pt-[22px] pr-[14px] pb-[24px] pl-[28px]">
        {MOBILE_MENU_1C_SERVICES.map((el, i) => (
          <li
            className="font-second-family bg-background text-primary rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors"
            key={i}
          >
            <div className="flex items-center justify-between gap-3">
              <Link className="flex-1" href={el}>
                {el}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
