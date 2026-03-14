import { cookies } from 'next/headers';

import CookieConsentBlock from './cookie-consent-block';
import { type ConsentStatus } from './cookie-conset';

export default async function CookieConsent() {
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get('cookie_consent')?.value;
  const initialConsent: ConsentStatus =
    consentCookie === 'accepted' || consentCookie === 'rejected' ? consentCookie : null;

  return <CookieConsentBlock initialConsent={initialConsent} />;
}
