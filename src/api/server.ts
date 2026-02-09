import { notFound } from 'next/navigation';
import 'server-only';

import { HeaderGroups } from '@/shared/types/header-groups-dto-types';
import { BlogPostDto, Post } from '@/shared/types/post-dto-types';
import {
  Case,
  FilterGroup,
  Service,
  ServiceDto,
  ServicesGroup,
} from '@/shared/types/service-dto-types';

function getBack() {
  const back = process.env.BACKEND_URL;
  if (!back) throw new Error('BACKEND ERROR');
  return back.replace(/\/$/, '');
}

async function fetchJson<T>(url: string, opts?: { notFoundOk?: boolean }) {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 },
  });

  if (res.status === 404 && opts?.notFoundOk) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);

  return (await res.json()) as T;
}

export async function fetchServicesByLink(serviceLink: string) {
  const back = getBack();
  return fetchJson<ServiceDto>(
    `${back}/client/services/detail/${encodeURIComponent(serviceLink)}`,
    {
      notFoundOk: true,
    }
  );
}

export async function fetchFilterGroups() {
  const back = getBack();
  return fetchJson<FilterGroup[]>(`${back}/client/get-filter-groups`);
}

export async function fetchHeaderGroups() {
  const back = getBack();
  return fetchJson<HeaderGroups>(`${back}/client/get-header-groups`);
}

export async function fetchAllServices() {
  const back = getBack();
  return fetchJson<Service[]>(`${back}/client/services/all`);
}

export async function fetchServicesByGroup(group: string) {
  const back = getBack();
  return fetchJson<ServicesGroup[]>(`${back}/client/services/group/${encodeURIComponent(group)}`, {
    notFoundOk: true,
  });
}

export async function fetchAllCases() {
  const back = getBack();
  const res = await fetch(`${back}/client/cases`, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 },
  });

  if (res.status === 404) return [] as Case[];
  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${back}/client/cases`);

  return (await res.json()) as Case[];
}

export async function fetchAllPosts() {
  const back = getBack();
  return fetchJson<Post[]>(`${back}/client/posts`);
}

export async function fetchPostByLink(postLink: string) {
  const back = getBack();
  return fetchJson<BlogPostDto>(`${back}/client/posts/${encodeURIComponent(postLink)}`, {
    notFoundOk: true,
  });
}
