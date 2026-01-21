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
      <ul className="font-second-family 3xl:grid-cols-3 grid grid-cols-1 gap-[clamp(14px,2vw,20px)] xl:grid-cols-2">
        {CONTACT_CARDS.map((card) => (
          <ContactsCard card={card} key={card.id} />
        ))}
      </ul>
      <ul className="flex flex-wrap gap-x-[16px] gap-y-[32px] sm:gap-[20px]">
        {LINKS_CONFIG.map((item) => (
          <ContactsLinkCard item={item} key={item.id} />
        ))}
      </ul>
    </Section>
  );
}
