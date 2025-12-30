'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
      <Toaster
        className="shadow shadow-neutral-400"
        closeButton
        duration={4000}
        expand={false}
        position="top-right"
        richColors
      />
    </>
  );
}
