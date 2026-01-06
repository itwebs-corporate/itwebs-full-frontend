import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';

import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { HEADER_LINKS, HEADER_MOBILE_LINKS, HEADER_NAV } from './header-config';

export default function Navigation() {
  return (
    <header
      className={cn(
        'p-container font-second-family bg-primary/80 fixed top-0 z-50 flex w-full items-center justify-between pt-[13px] pb-[10px] font-bold',
        'xxs:pt-[36px] text-[clamp(14px,1.2vw,16px)]'
      )}
    >
      <Link className="bg-background rounded-full" href="/">
        <Media
          className="xxs:h-[45px] xxs:w-[106px] xxs:px-5.5 xxs:py-2 relative mx-[14px] my-[5px] h-[29px] w-[68px]"
          image={{ src: '/logo/logo.svg', alt: 'logo' }}
        />
      </Link>
      <ul className="xxs:flex hidden items-center gap-6">
        {HEADER_NAV.map((el) => (
          <li key={el.title}>
            <Link className="hover:text-foreground/70 transition-colors" href={el.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-center xxs:gap-5 gap-2">
        {/* links: */}
        {HEADER_LINKS.map((el) => (
          <Link
            className={cn(
              'flex-center xxs:h-15 xxs:w-15 h-9.5 w-9.5 rounded-full border bg-white/10',
              styles.headerLink
            )}
            href={el.link}
            key={el.link}
          >
            <Media
              className="xxs:h-6.5 xxs:w-6.5 relative h-4.5 w-4.5"
              image={{ src: el.icon, alt: el.link }}
            />
          </Link>
        ))}
        {/* links by open mobile menu: */}
        {HEADER_MOBILE_LINKS.map((el) => (
          <Link
            className={cn(
              'flex-center xxs:h-15 xxs:w-15 bg-primary/10 h-9.5 w-9.5 rounded-full border',
              styles.headerLinkMobileMenu
            )}
            href={el.link}
            key={el.link}
          >
            <Media
              className="xxs:h-6.5 xxs:w-6.5 relative h-4.5 w-4.5"
              image={{ src: el.icon, alt: 'links' }}
            />
          </Link>
        ))}
        {/* burger: */}
        <label
          className={cn(
            'xxs:hidden flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full',
            styles.burgerMenuToggle
          )}
          htmlFor="mobileMenuToggle"
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
