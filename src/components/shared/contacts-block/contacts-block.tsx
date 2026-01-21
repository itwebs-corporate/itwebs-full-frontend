import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import ContactsCard from './contacts-card';
import { CONTACT_CARDS, LINKS_CONFIG } from './contacts-config';
import ContactsLinkCard from './contacts-link-card';

export default function ContactsBlock() {
  return (
    <Section className="mb-[clamp(86px,8vw,124px)] gap-[clamp(32px,3vw,48px)]">
      <Typography variant="h2">
        <b className="text-primary">Наши</b> контактные данные
      </Typography>
      <div className="flex flex-col gap-[32px] sm:gap-[20px]">
        <ul className="font-second-family order-2 flex flex-wrap justify-center gap-[clamp(14px,2vw,20px)] sm:order-1">
          {CONTACT_CARDS.map((card) => (
            <ContactsCard card={card} key={card.id} />
          ))}
        </ul>
        <ul className="order-1 flex flex-wrap justify-center gap-x-[16px] gap-y-[32px] sm:order-2 sm:gap-[20px]">
          {LINKS_CONFIG.map((item) => (
            <ContactsLinkCard item={item} key={item.id} />
          ))}
          <li aria-hidden className="w-[clamp(158px,32vw,344px)] sm:hidden" />
        </ul>
      </div>
    </Section>
  );
}
