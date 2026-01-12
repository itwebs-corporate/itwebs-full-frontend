'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SERVICES_TABS, ServiceTabSlug } from '@/config/services-mock-config';
export default function AllNeedForYourTaskSelect({
  activeTab,
}: {
  activeTab: ServiceTabSlug | undefined;
}) {
  const router = useRouter();
  return (
    <Select
      onValueChange={(slug) => {
        router.push(`/services?q=${slug}`);
      }}
    >
      <SelectTrigger className="text-primary! border-primary font-second-family flex w-[180px] items-center rounded-full text-[20px] font-bold shadow-none sm:hidden">
        <SelectValue placeholder={activeTab} />
      </SelectTrigger>
      <SelectContent align="start" position="popper" side="bottom">
        {SERVICES_TABS.map((item) => (
          <SelectItem key={item.slug} value={item.title}>
            <Link href={item.slug}>{item.title}</Link>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
