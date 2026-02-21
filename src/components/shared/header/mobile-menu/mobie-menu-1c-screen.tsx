import { Media } from '@/components/ui/media';

import { fetchHeaderGroups } from '@/app/api/server';
import { SCREEN_1C_ID } from '@/constants/header-constants';

import MobileMenu1CScreenLink from './mobile-menu-1c-screen-link';

export default async function MobileMenu1CScreen() {
  const res = (await fetchHeaderGroups()) ?? [];
  const group1C = res.find((item) => item.groupLink === '1c');
  const services1C = group1C?.services;
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
        {services1C ? (
          services1C.map((el) => (
            <li
              className="font-second-family bg-background text-primary rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors"
              key={el.name}
            >
              <MobileMenu1CScreenLink el={el} />
            </li>
          ))
        ) : (
          <li className="text-foreground3/50 rounded-full border border-dashed border-gray-400 p-2 text-center text-base">
            1с услуги не найдены
          </li>
        )}
      </ul>
    </>
  );
}
