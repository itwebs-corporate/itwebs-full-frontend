'use client';
import { Icon } from '@iconify/react';

export default function OurTechIcon({ icon }: { icon: string }) {
  return <Icon className="h-[clamp(52px,8vw,74px)] w-[clamp(52px,8vw,74px)]" icon={icon} />;
}
