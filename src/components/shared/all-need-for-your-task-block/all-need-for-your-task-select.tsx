'use client';
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FilterGroup } from '@/shared/types/service-dto-types';

export default function AllNeedForYourTaskSelect({ filters }: { filters: FilterGroup[] }) {
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
        {filters.map((item) => (
          <SelectItem key={item.id} value={item.link}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
