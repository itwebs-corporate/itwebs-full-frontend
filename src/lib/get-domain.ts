import { headers } from 'next/headers';

export async function getDomain() {
  const host = (await headers()).get('host') ?? '';
  return host.includes('itwebs.by') ? 'by' : 'ru';
}
