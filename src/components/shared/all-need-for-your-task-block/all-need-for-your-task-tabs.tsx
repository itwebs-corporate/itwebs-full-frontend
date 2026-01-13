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
    <ul className="my-[clamp(24px,4vw,48px)] hidden h-auto w-full flex-wrap justify-center gap-[clamp(12px,2vw,16px)] gap-y-10 sm:flex">
      {SERVICES_TABS.map((item) => (
        <li key={item.slug}>
          <Link
            className={cn(
              'font-second-family border-primary cursor-pointer rounded-full border px-[clamp(20px,4vw,32px)] py-[clamp(12px,2.5vw,16px)] text-[clamp(16px,2.5vw,20px)] font-bold text-nowrap transition-all',
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
