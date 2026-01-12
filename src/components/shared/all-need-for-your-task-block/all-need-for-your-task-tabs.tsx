import Link from 'next/link';

import { cn } from '@/lib/utils';
export const SERVICES_TABS = [
  { slug: 'services-1c', title: '1с услуги' },
  { slug: 'web-sites', title: 'Веб разработка' },
  { slug: 'mobile-dev', title: 'Мобильная разработка' },
  { slug: 'server-support', title: 'Сервера и поддержка' },
  { slug: 'crm', title: 'CRM' },
  { slug: 'digitalization', title: 'Цифровизация и автоматизация' },
];

export type ServiceTabSlug = (typeof SERVICES_TABS)[number]['slug'];

export default function AllNeedForYourTaskTabs({
  activeTab,
}: {
  activeTab: ServiceTabSlug | undefined;
}) {
  return (
    <ul className="my-[24px] hidden w-full justify-center gap-[16px] sm:my-[48px] sm:flex">
      {SERVICES_TABS.map((item) => (
        <li key={item.slug}>
          <Link
            className={cn(
              'font-second-family border-primary cursor-pointer rounded-full border px-[32px] py-[16px] text-[20px] font-bold transition-all',
              activeTab === item.slug
                ? 'bg-primary text-white hover:text-white/80'
                : 'text-primary hover:text-primary/60'
            )}
            href={`/services?q=${item.slug}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
