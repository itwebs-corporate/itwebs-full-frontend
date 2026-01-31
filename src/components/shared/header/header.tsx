import styles from './header.module.css';

import { MOBILE_MENU_TOGGLE_ID } from '@/constants/header-constants';

import MobileMenu from './mobile-menu';
import Navigation from './navigation/navigation';

export default function HeaderBlock() {
  return (
    <div className="relative flex flex-col">
      <input className={styles.menuToggle} id={MOBILE_MENU_TOGGLE_ID} type="checkbox" />
      <Navigation />
      <MobileMenu />
    </div>
  );
}
