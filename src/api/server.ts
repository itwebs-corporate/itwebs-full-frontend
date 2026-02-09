import { notFound } from 'next/navigation';
import 'server-only';

import { HeaderGroups } from '@/shared/types/header-groups-dto-types';
import { Service, ServiceDto } from '@/shared/types/service-dto-types';

const back = process.env.BACKEND_URL;

export async function fetchServicesByLink(serviceLink: string) {
  if (!back) throw new Error('BACKEND ERROR');

  const url = `${back}/client/services/detail/${encodeURIComponent(serviceLink)}`;

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 },
  });

  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
  return (await res.json()) as ServiceDto;
}

export async function fetchHeaderGroups() {
  const url = `${back}/client/get-header-groups`;
  if (!back) throw new Error('BACKEND ERROR');

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 600000 },
  });
  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
  return (await res.json()) as HeaderGroups;
}

export async function fetchAllServices() {
  const url = `${back}/client/services/all`;
  if (!back) throw new Error('BACKEND ERROR');

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 6000 },
  });
  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
  return (await res.json()) as Service[];
}
