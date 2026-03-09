import { LinkCard } from './contacts-config';

export default function ContactsLinkCard({ item }: { item: LinkCard }) {
  return (
    <li className="flex min-h-[75px] w-[clamp(158px,32vw,344px)] flex-col gap-[clamp(14px,2.5vw,20px)] rounded-[clamp(12px,2.2vw,24px)] bg-white py-[clamp(14px,2.2vw,24px)] pl-[clamp(12px,2vw,20px)]">
      <div className="font-family text-foreground3 text-[clamp(24px,5vw,48px)] leading-none font-bold">
        {item.title}
      </div>
      <a
        className="text-primary font-second-family mt-auto text-[clamp(16px,2.2vw,20px)] leading-none font-bold hover:underline"
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {item.text}
      </a>
    </li>
  );
}
