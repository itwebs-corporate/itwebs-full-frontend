import { Roboto, Roboto_Condensed } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  preload: false,
  weight: ['400', '700'],
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
  weight: ['700', '800'],
});
