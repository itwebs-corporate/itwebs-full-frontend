import styles from './header.module.css';

import MobileMenu from './mobile-menu';
import Navigation from './navigation';

export default function HeaderBlock() {
  return (
    <div className="relative flex flex-col">
      <input className={styles.menuToggle} id="mobileMenuToggle" type="checkbox" />
      <Navigation />
      <MobileMenu />
    </div>
  );
}
