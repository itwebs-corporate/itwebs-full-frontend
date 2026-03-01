import Link from 'next/link';

import { Media } from '@/components/ui/media';

export default function NavigationSocialLink({
  link,
  label,
  icon,
  className,
}: {
  link: string;
  label: string;
  icon: string;
  className: string;
}) {
  return (
    <Link
      aria-label={`Откроется в новой вкладке ${label}`}
      className={className}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Media
        ariaHidden
        className="relative h-[clamp(18px,1.6vw,26px)] w-[clamp(18px,1.6vw,26px)]"
        image={{ src: icon, alt: '' }}
      />
    </Link>
  );
}
