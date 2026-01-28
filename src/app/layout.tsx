import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/app/globals.css';

import Footer from '@/components/shared/footer/footer';
import Header from '@/components/shared/header/header';

import { SITE_DESCRIPTION, SITE_ICON, SITE_IMAGES, SITE_NAME } from '@/constants/seo-constants';
import Provider from '@/providers/provider';
import { inter, roboto, robotoCondensed } from '@/shared/fonts';

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} | %s`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_IMAGES, width: 1200, height: 630, alt: 'ITWEBS' }],
  },
  icons: {
    icon: SITE_ICON,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${roboto.variable} ${robotoCondensed.variable} antialiased`}
      lang="en"
    >
      <body>
        <Header />
        <Provider>
          <main className="flex flex-1 flex-col gap-[clamp(86px,6vw,124px)]">{children}</main>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
