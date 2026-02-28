import { Icon } from '@iconify/react';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import { CardTypes } from '@/shared/types/card-types';

export default function HowWeWorkBlockCard({
  item,
  className,
  classNameNumber,
}: {
  item: CardTypes;
  className?: string;
  classNameNumber?: string;
}) {
  return (
    <div
      className={cn(
        'z-10 flex w-full max-w-[clamp(320px,90vw,435px)] flex-col rounded-[clamp(12px,2vw,24px)] bg-white p-5',
        className
      )}
    >
      <div
        className={cn(
          'bg-primary font-family flex-center mb-[clamp(36px,5vw,64px)] size-[64px] rounded-[12px] text-[32px]',
          classNameNumber
        )}
      >
        {item.icon ? <Icon className="size-[32px]" icon={item.icon} /> : `0${item.id}`}
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
