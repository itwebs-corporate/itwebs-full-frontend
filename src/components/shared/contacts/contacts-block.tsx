import { headers } from 'next/headers';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import ContactsCard from './contacts-card';
import { CONTACT_CARDS, CONTACT_RU_CARDS, LINKS_CONFIG, LINKS_RU_CONFIG } from './contacts-config';
import ContactsLinkCard from './contacts-link-card';

function isRuAcceptLanguage(al: string) {
  const s = al.toLowerCase();
  return s.startsWith('ru') || s.includes('ru-') || s.includes(' ru');
}

export default async function ContactsBlock() {
  const h = await headers();
  const acceptLanguage = h.get('accept-language') ?? '';
  const ru = isRuAcceptLanguage(acceptLanguage);

  const cards = ru ? CONTACT_RU_CARDS : CONTACT_CARDS;
  const links = ru ? LINKS_RU_CONFIG : LINKS_CONFIG;

  return (
    <Section className="mb-[clamp(86px,8vw,124px)] gap-[clamp(32px,3vw,48px)]">
      <Typography variant="h2">
        <b className="text-primary">Наши</b> контактные данные
      </Typography>

      <div className="flex flex-col gap-[32px] sm:gap-[20px]">
        <ul className="font-second-family order-2 flex flex-wrap justify-center gap-[clamp(14px,2vw,20px)] sm:order-1">
          {cards.map((card) => (
            <ContactsCard card={card} key={card.id} />
          ))}
        </ul>

        <ul className="order-1 flex flex-wrap justify-center gap-x-[16px] gap-y-[32px] sm:order-2 sm:gap-[20px]">
          {links.map((item) => (
            <ContactsLinkCard item={item} key={item.id} />
          ))}
          <li aria-hidden className="w-[clamp(158px,32vw,344px)] sm:hidden" />
        </ul>
      </div>
    </Section>
  );
}
