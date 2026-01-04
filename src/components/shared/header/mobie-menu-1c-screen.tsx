'use state';
import Link from 'next/link';

import { Media } from '@/components/ui/media';

import { MOBILE_MENU_1C_SERVICES } from './header-config';

export default function MobileMenu1CScreen({
  setScreen,
}: {
  setScreen: (arg: 'main' | '1c') => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between pt-[14px] pr-[14px] pl-[28px]">
        <span className="font-second-family text-foreground2 text-[20px] font-bold">1с Услуги</span>
        <button
          className="text-primary font-second-family flex items-center gap-1.5 text-[16px] font-bold"
          onClick={() => setScreen('main')}
          type="button"
        >
          <Media
            className="h-[14px] w-[7px]"
            image={{ src: '/links/arrow-left.svg', alt: 'arrow-left' }}
          />
          Назад
        </button>
      </div>
      <ul className="flex flex-col gap-[17px] pt-[22px] pr-[14px] pb-[24px] pl-[28px]">
        {MOBILE_MENU_1C_SERVICES.map((el) => (
          <li
            className="font-second-family bg-background text-primary rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors"
            key={el}
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
