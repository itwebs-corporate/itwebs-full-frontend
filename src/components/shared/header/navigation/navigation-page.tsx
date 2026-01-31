import Link from 'next/link';

import NavigationServices from './navigation-services';
import { HEADER_NAV } from '../header-config';

export default function NavigationPage() {
  return (
    <ul className="hidden items-center gap-6 sm:flex">
      {HEADER_NAV.map((el) => {
        const isServices = el.title === 'Услуги';
        return (
          <li key={el.title}>
            {isServices ? (
              <NavigationServices title={el.title} />
            ) : (
              <Link className="hover:text-foreground/70 transition-colors" href={el.link}>
                {el.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
