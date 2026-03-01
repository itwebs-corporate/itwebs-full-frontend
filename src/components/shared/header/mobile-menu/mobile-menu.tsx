import Link from 'next/link';

import styles from '../header.module.css';

import { Button } from '@/components/ui/button';

import { SCREEN_1C_ID } from '@/constants/header-constants';
import { MAIL, TEL, TELEGRAM } from '@/constants/links-constants';

import MobileMenuServicesScreen from './mobie-menu-services-screen';
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
        <MobileMenuServicesScreen />
      </div>
      {/* mobile menu footer: */}
      <div className="bg-background h-[163px] w-full shrink-0 rounded-t-[12px] px-[14px] pt-[24px] pb-[30px] shadow shadow-neutral-400">
        <Button asChild className="mb-[13px] w-full">
          <Link href={TEL}>+ 375 (25) 991-93-79</Link>
        </Button>
        <div className="grid grid-cols-[1fr_1fr] gap-[12px]">
          <Button asChild className="w-auto" variant="outline">
            <Link href={TELEGRAM}> Telegram</Link>
          </Button>

          <Button asChild className="w-auto" variant="outline">
            <Link href={MAIL}>Почта</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
