import Image from 'next/image';
import Link from 'next/link';

import styles from '../header.module.css';

import { getDomain } from '@/lib/get-domain';
import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

import { MOBILE_MENU_TOGGLE_ID } from '@/constants/header-constants';

import NavigationPages from './navigation-pages';
import NavigationSocialLink from './navigation-social-link';
import NavigationTel from './navigation-tel';
import { HEADER_LINKS, RU_HEADER_LINKS } from '../header-config';

export default async function Navigation() {
  const domain = getDomain();
  const config = domain === 'by' ? HEADER_LINKS : RU_HEADER_LINKS;
  return (
    <header
      className={cn(
        'p-container font-second-family bg-primary/80 fixed top-0 z-50 flex w-full items-center justify-between font-bold',
        'h-[clamp(68px,5vw,108px)] text-[clamp(12px,1.5vw,16px)]'
      )}
    >
      <Link className="bg-background rounded-full" href="/">
        <Media
          className="relative mx-[14px] my-[5px] h-[clamp(29px,2.6vw,45px)] w-[clamp(68px,6.2vw,106px)] sm:px-5.5 sm:py-2"
          image={{ src: '/logo/logo.svg', alt: 'logo' }}
        />
      </Link>
      {/*  */}
      <NavigationPages />
      {/*  */}
      <div className="flex-center gap-[clamp(8px,1.2vw,20px)]">
        {/* links: */}
        <NavigationTel />
        {config.map((el) => (
          <NavigationSocialLink
            className={cn(
              'flex-center size-[clamp(35px,3.2vw,57px)] shrink-0 rounded-full border bg-white/10',
              styles.headerLink
            )}
            icon={el.icon}
            key={`${el.link}-desktop`}
            label={el.label}
            link={el.link}
          />
        ))}
        {/* links by open mobile menu: */}
        {config.map((el) => (
          <NavigationSocialLink
            className={cn(
              'flex-center bg-primary/10 size-[clamp(35px,3.2vw,57px)] shrink-0 rounded-full border',
              styles.headerLinkMobileMenu
            )}
            icon={el.mobileIcon}
            key={`${el.link}-mobile`}
            label={el.label}
            link={el.link}
          />
        ))}

        {/* burger: */}
        <label
          className={cn(
            'flex h-9.5 w-9.5 shrink-0 cursor-pointer items-center justify-center rounded-full sm:hidden',
            styles.burgerMenuToggle
          )}
          htmlFor={MOBILE_MENU_TOGGLE_ID}
        >
          <span className="sr-only">Мобильное меню</span>
          <div aria-hidden="true" className="relative h-3.5 w-3.5">
            <Image alt="" className={styles.openMenuIcon} fill src="/links/burger.svg" />
            <Image
              alt=""
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
