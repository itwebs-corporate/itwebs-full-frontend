import { Domain } from '@/lib/get-domain';

import { TEL, TEL_DISPLAY, TEL_DISPLAY_RU, TEL_RU } from '@/constants/links-constants';

export default function NavigationTel({ domain }: { domain: Domain }) {
  const tel = domain === 'by' ? TEL : TEL_RU;
  const telDisplay = domain === 'by' ? TEL_DISPLAY : TEL_DISPLAY_RU;

  return (
    <a
      aria-label={`Позвонить по номеру : ${telDisplay}`}
      className="hidden text-[10px] whitespace-nowrap text-white sm:block md:text-[12px] lg:text-base"
      href={tel}
    >
      {telDisplay}
    </a>
  );
}
