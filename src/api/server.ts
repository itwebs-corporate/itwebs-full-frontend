import { notFound } from 'next/navigation';
import 'server-only';

import type { HeaderGroups } from '@/shared/types/header-groups-dto-types';
import type { BlogPostDto, Post } from '@/shared/types/post-dto-types';
import type { Case, FilterGroup, Service, ServiceDto } from '@/shared/types/service-dto-types';

const BACKEND_URL = process.env.BACKEND_URL;
if (!BACKEND_URL) throw new Error('BACKEND ERROR: BACKEND_URL is not set');

const jsonInit = {
  headers: { Accept: 'application/json' },
  next: { revalidate: 60 },
};
export async function fetchAllServices() {
  const url = `${BACKEND_URL}/client/services/all`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);
  return (await res.json()) as Service[];
}

export async function fetchServicesByLink(serviceLink: string) {
  const url = `${BACKEND_URL}/client/services/detail/${encodeURIComponent(serviceLink)}`;
  const res = await fetch(url, jsonInit);

  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);

  return (await res.json()) as ServiceDto;
}

export async function fetchFilterGroups() {
  const url = `${BACKEND_URL}/client/get-filter-groups`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);
  return (await res.json()) as FilterGroup[];
}

export async function fetchHeaderGroups() {
  const url = `${BACKEND_URL}/client/get-header-groups`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);
  return (await res.json()) as HeaderGroups;
}

export async function fetchServicesByGroup(group: string) {
  const url = `${BACKEND_URL}/client/services/group/${encodeURIComponent(group)}`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);

  return (await res.json()) as Service[];
}

export async function fetchAllCases() {
  const url = `${BACKEND_URL}/client/cases`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);

  return (await res.json()) as Case[];
}

export async function fetchAllPosts() {
  const url = `${BACKEND_URL}/client/posts`;
  const res = await fetch(url, jsonInit);

  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);
  return (await res.json()) as Post[];
}

export async function fetchPostByLink(postLink: string) {
  const url = `${BACKEND_URL}/client/posts/${encodeURIComponent(postLink)}`;
  const res = await fetch(url, jsonInit);

  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error(`Backend error: ${res.status} for ${url}`);

  return (await res.json()) as BlogPostDto;
}
