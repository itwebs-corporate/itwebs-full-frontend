import { Domain } from '@/lib/get-domain';

import { HeaderGroups } from '@/shared/types/header-groups-dto-types';

import NavigationPagesItem from './navigation-pages-item';
import NavigationServices from './navigation-services';
import { HEADER_NAV } from '../header-config';

export default function NavigationPages({
  domain,
  headerGroups,
}: {
  domain: Domain;
  headerGroups: HeaderGroups | [];
}) {
  const config =
    domain === 'by' ? HEADER_NAV : HEADER_NAV.filter((item) => item.title !== '1с услуги');
  return (
    <ul className="mr-1 hidden items-center gap-[clamp(4px,1.5vw,24px)] sm:flex lg:ml-[146px]">
      {config.map((el) => {
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
