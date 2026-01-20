import Link from 'next/link';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import ContactsCard from './contacts-card';
import { CONTACT_CARDS, LINKS_CONFIG } from './contacts-config';

// TODO: добавить адаптивности для LinkCard
export default function ContactsBlock() {
  return (
    <Section className="gap-[clamp(32px,3vw,48px)]">
      <Typography variant="h2">
        <b className="text-primary">Наши</b> контактные данные
      </Typography>
      <ul className="font-second-family 3xl:grid-cols-3 grid grid-cols-1 gap-[clamp(14px,2vw,20px)] xl:grid-cols-2">
        {CONTACT_CARDS.map((card) => (
          <ContactsCard card={card} key={card.id} />
        ))}
      </ul>
      <ul className="flex flex-col gap-x-[16px] gap-y-[32px] sm:flex-row sm:gap-[20px]">
        {LINKS_CONFIG.map((item) => (
          <li
            className="flex h-[122px] w-[344px] flex-col gap-[20px] rounded-[24px] bg-white p-[24px]"
            key={item.id}
          >
            <span className="font-family text-foreground3 text-[48px] leading-[100%] font-bold">
              {item.title}
            </span>
            <Link
              className="text-primary font-second-family text-[20px] leading-[100%] font-bold"
              href={item.href}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
