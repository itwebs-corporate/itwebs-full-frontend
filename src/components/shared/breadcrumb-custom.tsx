'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
export function BreadcrumbWithCustomSeparator() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    const label = RUSSIAN_NAME[seg];
    return { href, label, isLast: idx === segments.length - 1 };
  });
  return (
    <Breadcrumb className="pb-[32px]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {crumbs.map((c) => (
          <span className="inline-flex items-center gap-2" key={c.href}>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>

            <BreadcrumbItem>
              {c.isLast ? (
                <BreadcrumbPage>{c.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={c.href}>{c.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
