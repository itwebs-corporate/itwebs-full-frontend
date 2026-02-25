import { Metadata } from 'next';

import ContactsBlock from '@/components/shared/contacts/contacts-block';
import HeroBlock from '@/components/shared/hero/hero-block';

import { SITE_IMAGES } from '@/constants/seo-constants';

export const metadata: Metadata = {
  title: 'Контакты',

  description: 'Наши контакты',
  openGraph: {
    title: 'Контакты',
    description: 'Наши контакты',
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  robots: { index: true, follow: true },
};
export default function ContactsPage() {
  return (
    <>
      <HeroBlock heading="Наши контакты" />
      <ContactsBlock />
    </>
  );
}
