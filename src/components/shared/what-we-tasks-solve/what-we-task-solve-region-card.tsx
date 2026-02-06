import Link from 'next/link';

import { Media } from '@/components/ui/media';

import { ServiceSection } from '@/config/services-sections';

export default function WhatWeTaskSolveRegionCard({ item }: { item: ServiceSection }) {
  return (
    <div className="font-family flex w-[clamp(332px,52vw,586px)] flex-nowrap items-center justify-between rounded-[clamp(12px,2.6vw,24px)] bg-white/10 py-[clamp(18px,3.2vw,29px)] pr-[clamp(10px,3.5vw,24px)] pl-[clamp(15px,3.8vw,24px)] text-[clamp(16px,3.6vw,32px)] font-bold text-white">
      {item.title}
      <Link
        className="bg-secondary flex-center h-[clamp(32px,5vw,42px)] w-[clamp(32px,5vw,42px)] shrink-0 rounded-full"
        href={item.link}
      >
        <Media
          className="h-[clamp(18px,3vw,24px)] w-[clamp(18px,3vw,24px)]"
          image={{
            src: '/arrow/arrow-up-right-blue.svg',
            alt: 'arrow',
          }}
        />
      </Link>
    </div>
  );
}
