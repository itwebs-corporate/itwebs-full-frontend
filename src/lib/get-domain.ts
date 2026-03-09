export type Domain = 'ru' | 'by';

export function getDomain(): Domain {
  const domain = process.env.DOMAIN;

  if (domain !== 'ru' && domain !== 'by') {
    throw new Error('DOMAIN must be "ru" or "by"');
  }

  return domain;
}
