import Link from 'next/link';

import styles from './header.module.css';

import { Button } from '@/components/ui/button';

import { SCREEN_1C_ID } from '@/constants/header-constants';
import { MAIL, TEL, TELEGRAM } from '@/constants/links-constants';

import MobileMenu1CScreen from './mobie-menu-1c-screen';
import MobileMenuMainScreen from './mobile-menu-main-screen';

export default function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      {/* screen variants: */}
      <input className={styles.menuMobileScreenToggle} id={SCREEN_1C_ID} type="checkbox" />
      <div className={styles.screenMain}>
        <MobileMenuMainScreen />
      </div>
      <div className={styles.screen1c}>
        <MobileMenu1CScreen />
      </div>
      {/* mobile menu footer: */}
      <div className="bg-background h-[163px] w-full flex-1 rounded-t-[12px] pt-[24px] pr-[14px] pb-[30px] pl-[28px] shadow shadow-neutral-400">
        <Button className="mb-[13px] w-full">
          <Link href={TEL}>+ 375 (25) 991-93-79</Link>
        </Button>
        <div className="grid grid-cols-[1fr_1fr] gap-[12px]">
          <Button className="w-auto" variant="outline">
            <Link href={TELEGRAM}> Telegram</Link>
          </Button>

          <Button className="w-auto" variant="outline">
            <Link href={MAIL}>Почта</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
