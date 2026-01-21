import Link from 'next/link';

import { LinkCard } from './contacts-config';

export default function ContactsLinkCard({ item }: { item: LinkCard }) {
  return (
    <li
      className="flex h-[75px] w-[clamp(158px,32vw,344px)] flex-col gap-[clamp(14px,2.5vw,20px)] rounded-[clamp(12px,2.2vw,24px)] bg-white py-[clamp(14px,2.2vw,24px)] pl-[clamp(12px,2vw,20px)] sm:h-[122px]"
      key={item.id}
    >
      <div className="font-family text-foreground3 text-[clamp(24px,5vw,48px)] leading-none font-bold">
        {item.title}
      </div>
      <Link
        className="text-primary font-second-family mt-auto text-[clamp(16px,2.2vw,20px)] leading-none font-bold hover:underline"
        href={item.href}
      >
        {item.text}
      </Link>
    </li>
  );
}
