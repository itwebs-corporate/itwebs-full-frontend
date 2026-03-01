import Link from 'next/link';

import { fetchHeaderGroups } from '@/app/api/server';

import NavigationServices from './navigation-services';
import { HEADER_NAV } from '../header-config';

export default async function NavigationPages() {
  const headerGroups = (await fetchHeaderGroups()) ?? [];
  return (
    <ul className="mx-1 ml-[0px] hidden items-center gap-[clamp(4px,1.5vw,24px)] sm:flex lg:ml-[146px]">
      {HEADER_NAV.map((el) => {
        const isServices = el.title === 'Услуги';
        return (
          <li className="text-[10px] whitespace-nowrap md:text-[12px] lg:text-base" key={el.title}>
            {isServices ? (
              <NavigationServices headerGroups={headerGroups} title={el.title} />
            ) : (
              <Link
                className="hover:text-foreground/70 whitespace-nowrap uppercase transition-colors"
                href={el.link}
              >
                {el.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
