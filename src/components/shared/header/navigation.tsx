import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { MOBILE_MENU_TOGGLE_ID } from '@/constants/header-constants';

import { HEADER_LINKS, HEADER_MOBILE_LINKS, HEADER_NAV } from './header-config';

export default function Navigation() {
  return (
    <header
      className={cn(
        'p-container font-second-family bg-primary/80 fixed top-0 z-50 flex w-full items-center justify-between pb-[10px] font-bold',
        'pt-[clamp(13px,2.2vw,36px)] text-[clamp(14px,1.2vw,16px)]'
      )}
    >
      <Link className="bg-background rounded-full" href="/">
        <Media
          className="relative mx-[14px] my-[5px] h-[clamp(29px,2.6vw,45px)] w-[clamp(68px,6.2vw,106px)] sm:px-5.5 sm:py-2"
          image={{ src: '/logo/logo.svg', alt: 'logo' }}
        />
      </Link>
      <ul className="hidden items-center gap-6 sm:flex">
        {HEADER_NAV.map((el) => (
          <li key={el.title}>
            <Link className="hover:text-foreground/70 transition-colors" href={el.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-center gap-[clamp(8px,1.2vw,20px)]">
        {/* links: */}
        {HEADER_LINKS.map((el) => (
          <Link
            className={cn(
              'flex-center h-[clamp(38px,3.2vw,60px)] w-[clamp(38px,3.2vw,60px)] rounded-full border bg-white/10',
              styles.headerLink
            )}
            href={el.link}
            key={el.link}
          >
            <Media
              className="relative h-[clamp(18px,1.6vw,26px)] w-[clamp(18px,1.6vw,26px)]"
              image={{ src: el.icon, alt: el.link }}
            />
          </Link>
        ))}
        {/* links by open mobile menu: */}
        {HEADER_MOBILE_LINKS.map((el) => (
          <Link
            className={cn(
              'flex-center bg-primary/10 h-[clamp(38px,3.2vw,60px)] w-[clamp(38px,3.2vw,60px)] rounded-full border',
              styles.headerLinkMobileMenu
            )}
            href={el.link}
            key={el.link}
          >
            <Media
              className="relative h-[clamp(18px,1.6vw,26px)] w-[clamp(18px,1.6vw,26px)]"
              image={{ src: el.icon, alt: 'links' }}
            />
          </Link>
        ))}
        {/* burger: */}
        <label
          className={cn(
            'flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full sm:hidden',
            styles.burgerMenuToggle
          )}
          htmlFor={MOBILE_MENU_TOGGLE_ID}
        >
          <div className="relative h-3.5 w-3.5">
            <Image alt="links" className={styles.openMenuIcon} fill src="/links/burger.svg" />
            <Image
              alt="links"
              className={styles.closeMenuIcon}
              color="blue"
              fill
              src="/links/close-menu.svg"
            />
          </div>
        </label>
      </div>
    </header>
  );
}
