'use client';

import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  className?: string;
};

export default function IconifyIcon({ icon, className }: Props) {
  return <Icon className={className} icon={icon} />;
}
