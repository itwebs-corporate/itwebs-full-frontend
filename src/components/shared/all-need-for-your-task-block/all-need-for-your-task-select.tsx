'use client';
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SERVICES_TABS } from '@/config/services-mock-config';
export default function AllNeedForYourTaskSelect() {
  const router = useRouter();

  return (
    <Select
      onValueChange={(slug) => {
        router.push(`/services?q=${slug}`);
      }}
    >
      <SelectTrigger
        className="text-primary! border-primary font-second-family my-[24px] flex h-[52px]! w-[332px] items-center rounded-full text-[20px] font-bold shadow-none sm:hidden"
        classNameImage="text-white"
        classNameWrapperImage="w-[42px] h-[42px] bg-primary"
      >
        <SelectValue placeholder="1с услуги" />
      </SelectTrigger>
      <SelectContent align="start" position="popper" side="bottom">
        {SERVICES_TABS.map((item) => (
          <SelectItem key={item.slug} value={item.slug}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
