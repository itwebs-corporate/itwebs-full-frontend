import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import '@/app/globals.css';

import { getBaseUrl } from '@/lib/seo';

import Footer from '@/components/shared/footer/footer';
import Header from '@/components/shared/header/header';
import YandexMetrika from '@/components/shared/yandex-metrika/yandex-metrika';
import YandexMetrikaHit from '@/components/shared/yandex-metrika/yandex-metrika-hit';

import { SITE_ICON, SITE_IMAGES, SITE_NAME } from '@/constants/seo-constants';
import Provider from '@/providers/provider';
import { roboto, robotoCondensed } from '@/shared/fonts';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    openGraph: {
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
      images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
    },
    icons: {
      icon: SITE_ICON,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={` ${roboto.variable} ${robotoCondensed.variable} antialiased`} lang="ru">
      <body>
        <YandexMetrika />
        <Suspense fallback={null}>
          <YandexMetrikaHit />
        </Suspense>
        <Header />
        <Provider>
          <main className="flex flex-1 flex-col gap-[clamp(86px,6vw,124px)]">{children}</main>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
