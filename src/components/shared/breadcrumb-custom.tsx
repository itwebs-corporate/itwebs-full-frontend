'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { cn } from '@/lib/utils';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const RUSSIAN_NAME: Record<string, string> = {
  services: 'Услуги',
  about: 'О компании',
  cases: 'Кейсы',
  blog: 'Блог',
  'services-1c': '1с услуги',
  contacts: 'Контакты',
};

type Props = {
  className?: string;
  color?: string;
  lastBreadcrumb?: string;
};

export function BreadcrumbWithCustomSeparator({ className, color, lastBreadcrumb }: Props) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return null;

  const baseSegments = lastBreadcrumb ? segments.slice(0, -1) : segments;

  return (
    <Breadcrumb className={cn('pb-[clamp(16px,2vw,32px)]', className)}>
      <BreadcrumbList>
        <BreadcrumbItem className={color}>
          <BreadcrumbLink asChild>
            <Link href="/">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {baseSegments.map((seg, idx) => {
          const href = '/' + baseSegments.slice(0, idx + 1).join('/');
          const label = RUSSIAN_NAME[seg] ?? decodeURIComponent(seg);
          const isLast = idx === baseSegments.length - 1 && !lastBreadcrumb;

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator className={color}>/</BreadcrumbSeparator>
              <BreadcrumbItem className={color}>
                {isLast ? (
                  <BreadcrumbPage className={color}>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}

        {lastBreadcrumb && (
          <>
            <BreadcrumbSeparator className={color}>/</BreadcrumbSeparator>
            <BreadcrumbItem className={color}>
              <BreadcrumbPage className={color}>{lastBreadcrumb}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
