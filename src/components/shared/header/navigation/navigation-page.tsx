import Link from 'next/link';

import { fetchHeaderGroups } from '@/api/server';

import NavigationServices from './navigation-services';
import { HEADER_NAV } from '../header-config';

export default async function NavigationByPages() {
  const headerGroups = await fetchHeaderGroups();
  return (
    <ul className="hidden items-center gap-[clamp(8px,2vw,24px)] sm:flex">
      {HEADER_NAV.map((el) => {
        const isServices = el.title === 'Услуги';
        return (
          <li className="whitespace-nowrap" key={el.title}>
            {isServices ? (
              <NavigationServices headerGroups={headerGroups} title={el.title} />
            ) : (
              <Link
                className="hover:text-foreground/70 whitespace-nowrap transition-colors"
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
