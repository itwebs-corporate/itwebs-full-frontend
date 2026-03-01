import { Media } from '@/components/ui/media';

import { PAGES_CONFIG } from '@/config/pages-config';
import { SCREEN_1C_ID } from '@/constants/header-constants';

import MobileMenuScreenLink from './mobile-menu-screen-link';
import { HEADER_NAV } from '../header-config';

export default function MobileMenuMainScreen() {
  return (
    <div className="flex flex-col gap-[17px] px-[14px] pt-[22px] pb-[24px]">
      {HEADER_NAV.map((el) => {
        const isServices = el.link === PAGES_CONFIG.SERVICES;
        const title = el.title.replace('1с', '1C');
        return (
          <div
            className="font-second-family bg-background text-primary hover:bg-background/10 rounded-[12px] px-[14px] py-[12px] text-left font-bold shadow shadow-neutral-400 transition-colors"
            key={el.title}
          >
            <div className="flex items-center justify-between gap-3">
              <MobileMenuScreenLink isServices={isServices} name={title} path={el.link} />
              {isServices && (
                <label
                  className="z-50 flex flex-1 cursor-pointer justify-end"
                  htmlFor={SCREEN_1C_ID}
                >
                  <Media
                    className="size-[13px]"
                    image={{
                      src: '/links/arrow-right.svg',
                      alt: 'Открыть экран групп услуги',
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
