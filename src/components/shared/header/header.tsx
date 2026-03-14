import styles from './header.module.css';

import { getDomain } from '@/lib/get-domain';

import { fetchHeaderGroups } from '@/app/api/server';
import { MOBILE_MENU_TOGGLE_ID } from '@/constants/header-constants';

import { HEADER_LINKS, RU_HEADER_LINKS } from './header-config';
import MobileMenu from './mobile-menu/mobile-menu';
import Navigation from './navigation/navigation';

export default async function HeaderBlock() {
  const domain = getDomain();
  const config = domain === 'by' ? HEADER_LINKS : RU_HEADER_LINKS;
  const headerGroups = (await fetchHeaderGroups()) ?? [];

  return (
    <div className="relative flex flex-col">
      <input
        aria-label="Мобильное меню"
        className={styles.menuToggle}
        id={MOBILE_MENU_TOGGLE_ID}
        type="checkbox"
      />
      <Navigation config={config} domain={domain} headerGroups={headerGroups} />
      <MobileMenu />
    </div>
  );
}
