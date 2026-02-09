import Link from 'next/link';

import { cn } from '@/lib/utils';

import { fetchFilterGroups } from '@/api/server';

export default async function AllNeedForYourTaskTabs({
  activeTab,
}: {
  activeTab: string | undefined;
}) {
  const filters = await fetchFilterGroups();
  return (
    <ul className="my-[clamp(24px,4vw,48px)] hidden h-auto w-full flex-wrap justify-center gap-[clamp(12px,2vw,16px)] gap-y-10 sm:flex">
      {filters.map((item) => (
        <li key={item.id}>
          <Link
            className={cn(
              'font-second-family border-primary cursor-pointer rounded-full border px-[clamp(20px,4vw,32px)] py-[clamp(12px,2.5vw,16px)] text-[clamp(16px,2.5vw,20px)] font-bold text-nowrap transition-all',
              activeTab === item.link
                ? 'bg-primary text-white hover:text-white/80'
                : 'text-primary hover:text-primary/60'
            )}
            href={`/services?q=${item.link}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
