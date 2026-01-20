import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ContactCard } from './contacts-config';

export default function ContactsCard({ card }: { card: ContactCard }) {
  return (
    <li className="flex h-[404px] w-[clamp(332px,50vw,587px)] flex-col justify-between rounded-[24px] bg-white px-[clamp(14px,3vw,32px)] py-[32px]! sm:h-[382px]">
      <div className="font-family text-foreground3 text-[42px] leading-[100%] font-bold">
        {card.title}
      </div>
      <ul className="flex flex-col gap-[32px]">
        {card.items.map((subCard) => (
          <li className="flex h-[36px] max-h-[36px]! flex-col justify-between" key={subCard.label}>
            <div className="text-foreground2 text-[16px] leading-[140%] font-normal">
              {subCard.label}
            </div>
            {subCard.href ? (
              <Link
                className={cn(
                  subCard.label === 'Телеграм' ? 'text-primary underline' : 'text-foreground2',
                  'font-second-family text-[16px] leading-[140%] font-bold'
                )}
                href={subCard.href}
              >
                {subCard.value}
              </Link>
            ) : (
              <div className="text-foreground text-[16px] leading-[140%] font-bold">
                {subCard.value}
              </div>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}
