import { TEL, TEL_DISPLAY } from '@/constants/links-constants';

export default function NavigationTel() {
  return (
    <a
      aria-label={`Позвонить по номеру : ${TEL_DISPLAY}`}
      className="hidden text-[10px] whitespace-nowrap text-white sm:block md:text-[12px] lg:text-base"
      href={TEL}
    >
      {TEL_DISPLAY}
    </a>
  );
}
