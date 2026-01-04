'use client';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
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
