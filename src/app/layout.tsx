import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/app/globals.css';

import Provider from '@/providers/provider';

export const metadata: Metadata = {
  title: 'Hello',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
