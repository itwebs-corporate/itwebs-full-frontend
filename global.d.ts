declare module '*.css';

/* eslint-disable @typescript-eslint/consistent-type-definitions */
export {};

declare global {
  interface Window {
    ym?: (id: string | number, action: string, ...args: unknown[]) => void;
  }
}
/* eslint-enable @typescript-eslint/consistent-type-definitions */
