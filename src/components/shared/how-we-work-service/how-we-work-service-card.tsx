import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

import { HowWeWorkServiceCardType } from './how-we-work-service-config';

export default function HowWeWorkServiceCard({
  item,
  className,
}: {
  item: HowWeWorkServiceCardType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'z-10 flex min-h-[clamp(260px,20vw,292px)] w-full max-w-[clamp(320px,90vw,435px)] flex-col overflow-hidden rounded-[clamp(12px,2vw,24px)] bg-white p-5',
        className
      )}
    >
      <div
        className={cn(
          'bg-primary font-family flex-center mb-[clamp(36px,5vw,64px)] shrink-0 rounded-[12px] text-[32px]',
          '!size-16 !min-h-16 !min-w-16'
        )}
      >
        0{item.id}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <Typography variant="h3">{item.name}</Typography>

        <Typography
          className={cn('mt-[clamp(12px,1vw,16px)] min-h-0 flex-1 pr-2 break-words')}
          variant="p2"
        >
          {item.description}
        </Typography>
      </div>
    </div>
  );
}
