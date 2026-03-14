export const COOKIE_CONSENT_NAME = 'cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const COOKIE_CONSENT_EVENT = 'cookie-consent-change';

export type ConsentStatus = 'accepted' | 'rejected' | null;

export function readCookieConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;

  const cookieValue = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${COOKIE_CONSENT_NAME}=`))
    ?.split('=')[1];

  if (cookieValue === 'accepted' || cookieValue === 'rejected') {
    return cookieValue;
  }

  return null;
}

export function persistCookieConsent(status: Exclude<ConsentStatus, null>) {
  document.cookie = `${COOKIE_CONSENT_NAME}=${status}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handleChange = () => onStoreChange();

  window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
  };
}
