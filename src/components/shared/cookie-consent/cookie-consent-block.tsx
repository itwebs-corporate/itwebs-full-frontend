'use client';

import Link from 'next/link';
import { Suspense, useSyncExternalStore } from 'react';

import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import {
  type ConsentStatus,
  persistCookieConsent,
  readCookieConsent,
  subscribe,
} from './cookie-conset';
import YandexMetrika from '../yandex-metrika/yandex-metrika';
import YandexMetrikaHit from '../yandex-metrika/yandex-metrika-hit';

export default function CookieConsentBlock({ initialConsent }: { initialConsent: ConsentStatus }) {
  const consent = useSyncExternalStore(subscribe, readCookieConsent, () => initialConsent);

  const handleAccept = () => {
    persistCookieConsent('accepted');
  };

  const handleReject = () => {
    persistCookieConsent('rejected');
  };

  return (
    <>
      {consent === 'accepted' ? (
        <>
          <YandexMetrika />
          <Suspense fallback={null}>
            <YandexMetrikaHit />
          </Suspense>
        </>
      ) : null}

      {consent === null ? (
        <div className="bg-foreground3 fixed right-4 bottom-4 left-4 z-[120] mx-auto max-w-[760px] rounded-[24px] border border-white/20 p-4 text-white shadow-lg sm:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <Typography className="text-white uppercase" variant="h3">
                Используем cookies для аналитики &#127850;
              </Typography>
              <p className="font-second-family text-sm leading-[140%] text-white/80 sm:text-[16px]">
                С вашего согласия мы будем собирать cookies, чтобы делать сервис удобнее. <br />
                Подробнее в{' '}
                <Link
                  className="underline underline-offset-4 transition-opacity hover:opacity-80"
                  href={PAGES_CONFIG.POLICY}
                >
                  политике конфиденциальности
                </Link>
                .
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
              <Button className="text-[16px]" onClick={handleAccept} variant="secondary">
                Принять
              </Button>
              <Button
                className="border-3 bg-white text-[16px]"
                onClick={handleReject}
                variant="outline"
              >
                Не собирать
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
