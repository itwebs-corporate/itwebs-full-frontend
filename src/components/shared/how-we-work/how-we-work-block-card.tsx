import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/global-types';

export default function HowWeWorkBlockCard({ item }: { item: CardTypes }) {
  return (
    <div className="z-10 flex min-h-[clamp(260px,20vw,292px)] w-full max-w-[clamp(320px,90vw,435px)] flex-col justify-between rounded-[clamp(12px,2vw,24px)] bg-white p-5">
      <div className="bg-primary font-family flex-center mb-[clamp(36px,5vw,64px)] h-[64px] w-[64px] rounded-[12px] text-[32px]">
        0{item.id}
      </div>

      <div className="flex flex-col">
        <Typography variant="h3">{item.title}</Typography>
        <Typography className="mt-[clamp(12px,1vw,16px)]" variant="p2">
          {item.description}
        </Typography>
      </div>
    </div>
  );
}
