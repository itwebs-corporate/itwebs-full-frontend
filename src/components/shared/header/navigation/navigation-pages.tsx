import { fetchHeaderGroups } from '@/app/api/server';

import NavigationPagesItem from './navigation-pages-item';
import NavigationServices from './navigation-services';
import { HEADER_NAV } from '../header-config';

export default async function NavigationPages() {
  const headerGroups = (await fetchHeaderGroups()) ?? [];
  return (
    <ul className="mr-1 hidden items-center gap-[clamp(4px,1.5vw,24px)] sm:flex lg:ml-[146px]">
      {HEADER_NAV.map((el) => {
        const isServices = el.title === 'Услуги';
        return (
          <li className="text-[10px] whitespace-nowrap md:text-[12px] lg:text-base" key={el.title}>
            {isServices ? (
              <NavigationServices headerGroups={headerGroups} link={el.link} title={el.title} />
            ) : (
              <NavigationPagesItem el={el} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
