'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
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
  'services-1c': '1C услуги',
  contacts: 'Контакты',
};

type Props = {
  className?: string;
  color?: string;
  lastBreadcrumb?: string;
  isNotFound?: boolean;
};

export function BreadcrumbWithCustomSeparator({
  className,
  color,
  lastBreadcrumb,
  isNotFound,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasServicesQuery = pathname === '/services' && searchParams.has('q');
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return null;

  const baseSegments = isNotFound
    ? segments.slice(0, -1)
    : lastBreadcrumb
      ? segments.slice(0, -1)
      : segments;

  return (
    <Breadcrumb className={cn('pb-[clamp(16px,2vw,32px)]', className)}>
      <BreadcrumbList className="max-w-[clamp(200px,60vw,780px)] min-w-0 flex-nowrap overflow-hidden">
        <BreadcrumbItem className={cn('shrink-0', color)}>
          <BreadcrumbLink asChild>
            <Link className="shrink-0" href="/">
              Главная
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {baseSegments.map((seg, idx) => {
          const href = '/' + baseSegments.slice(0, idx + 1).join('/');
          const label = RUSSIAN_NAME[seg] ?? decodeURIComponent(seg);
          const isLast = idx === baseSegments.length - 1 && !lastBreadcrumb;
          const shouldLinkServicesRoot = isLast && seg === 'services' && hasServicesQuery;

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator className={cn('shrink-0', color)}>/</BreadcrumbSeparator>

              <BreadcrumbItem className={cn(isLast ? 'min-w-0 flex-1' : 'shrink-0', color)}>
                {isLast && !shouldLinkServicesRoot ? (
                  <BreadcrumbPage className={cn('min-w-0 truncate', color)}>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      className="shrink-0 cursor-pointer"
                      href={shouldLinkServicesRoot ? '/services' : href}
                    >
                      {label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}

        {lastBreadcrumb && !isNotFound && (
          <>
            <BreadcrumbSeparator className={cn('shrink-0', color)}>/</BreadcrumbSeparator>
            <BreadcrumbItem className={cn('min-w-0 flex-1', color)}>
              <BreadcrumbPage className={cn('min-w-0 truncate', color)}>
                {lastBreadcrumb}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {isNotFound && (
          <>
            <BreadcrumbSeparator className={cn('shrink-0', color)}>/</BreadcrumbSeparator>
            <BreadcrumbItem className={cn('min-w-0 flex-1', color)}>
              <BreadcrumbPage className={cn('min-w-0 truncate', color)}>
                Страница не найдена
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
